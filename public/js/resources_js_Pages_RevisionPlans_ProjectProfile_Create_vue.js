"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_RevisionPlans_ProjectProfile_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.js");
/* harmony import */ var _Shared_PlacesShared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/PlacesShared */ "./resources/js/Shared/PlacesShared.vue");
/* harmony import */ var _Shared_QuillEditorShared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/QuillEditorShared */ "./resources/js/Shared/QuillEditorShared.vue");
/* harmony import */ var _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/ModalDynamicTitle */ "./resources/js/Shared/ModalDynamicTitle.vue");
/* harmony import */ var _Shared_ModalDynamicTitleSmall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/ModalDynamicTitleSmall */ "./resources/js/Shared/ModalDynamicTitleSmall.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Shared_SmallModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Shared/SmallModal */ "./resources/js/Shared/SmallModal.vue");
var _props;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
  props: (_props = {
    source: String,
    auth: Object,
    editData: Object,
    // paps: Object,
    duplicate: Object,
    idpaps: Number,
    paps_all: Object,
    paps_specific: Object
  }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_props, "source", String), "hgdgs", Object), "popsp_agencies", Object), "office", Object), "all_comments", Object), "s_mooe_gad", Number), "s_mooe_non", Number), "s_cap_gad", Number), "s_cap_non", Number), "s_ps_gad", Number), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_props, "s_ps_non", Number), "s_fe_gad", Number), "s_fe_non", Number), "budget_requirements", Object), "account_code", Object), "implementation", Object), "monitoring_and_avaluation", Object), "implementing_team", Object), "signatoriesprops", Object), "risk_manangement", Object), _defineProperty(_defineProperty(_props, "source", String), "ccet_codes", Object)),
  components: {
    Places: function Places() {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(_Shared_PlacesShared__WEBPACK_IMPORTED_MODULE_1__["default"]);
        }, 2000);
      });
    },
    QuillEditorC: _Shared_QuillEditorShared__WEBPACK_IMPORTED_MODULE_2__["default"],
    BudgetModal: _Shared_ModalDynamicTitleSmall__WEBPACK_IMPORTED_MODULE_4__["default"],
    CommentModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_3__["default"],
    StrategyModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_3__["default"],
    ActivityModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_3__["default"],
    ActivityModalEdit: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_3__["default"],
    TeamModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_3__["default"],
    RiskManagementModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_3__["default"],
    MonitoringModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_3__["default"],
    SignatoryModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_3__["default"],
    ExpectedOutputModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_3__["default"],
    ExpectedOutcomeModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_3__["default"],
    SmallModalComments: _Shared_SmallModal__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    var _ref;
    return _ref = {
      paps: [],
      submitted: false,
      maxWords: 200,
      act_words: 0,
      open_tab: "Navigation",
      //FORM for Revision Plans
      form: (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
        idpaps: "",
        project_title: "",
        project_location: "",
        list_of_lgu_covered: "",
        date_start: "",
        date_end: "",
        beneficiary_male: 0,
        beneficiary_female: 0,
        baseline_male: 0,
        baseline_female: 0,
        baseline_total: 0,
        data_source: "",
        rationale: "",
        objective: "",
        beneficiaries: "",
        checklist_id: "",
        implementing_team: "",
        partnership: "",
        monitoring: "",
        risk_management: "",
        is_strategy_based: "",
        aip_code: "",
        agency_name: "",
        source: "",
        id: null,
        selPaps: "",
        year_period: ""
      }),
      total_intended: 0,
      pageTitle: "",
      //COMMENTS*******************
      showComments: false,
      unsaved: false,
      show_comment_modal: false,
      comment: '',
      comment_section: '',
      comment_subtitle: '',
      comment_data: '',
      comment_column: '',
      comment_table: '',
      comment_reference_object: [],
      comments: [],
      reply_concat: "",
      is_replying: false,
      reply_index: -1
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, "unsaved", false), "BudgetModalVisible", false), "budget_new", {
      id: null,
      revision_plan_id: null,
      particulars: "",
      account_code: "",
      amount: null,
      proposed_budget: null,
      category: "",
      category_gad: "",
      source: "",
      selected_chart_of_account: ""
    }), "StrategyModalVisible", false), "strategies", []), "strategy_id", 0), "ActivityModalVisible", false), "ActivityModalVisibleEdit", false), "activities", []), "activity_description_current", ''), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, "activity_active", []), "TeamModalVisible", false), "team_members", []), "all_employees", []), "action_type_team", ''), "RiskManagementModalVisible", false), "risk_managements", []), "MonitoringModalVisible", false), "monitoring_and_evaluations", []), "SignatoryModalVisible", false), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, "signatories", []), "ExpectedOutputModalVisible", false), "expected_outputs_current", []), "expected_outputs_new", []), "activity_id", 0), "activity_project_id", 0), "ExpectedOutcomeModalVisible", false), "expected_outcomes_current", []), "expected_outcomes_new", []), "briefRationale", false), _defineProperty(_defineProperty(_ref, "briefObjective", false), "briefBeneficiaries", false);
  },
  computed: {
    wordsRemaining: function wordsRemaining() {
      var wordCount = this.form.rationale.trim().split(/\s+/).length;
      var returner = this.maxWords - wordCount;
      if (this.form.rationale === "") {
        returner = 200;
      }
      return returner;
    },
    wordCount: function wordCount() {
      var rtn = this.form.rationale.trim().split(/\s+/).length;
      if (this.form.rationale === "") {
        rtn = 0;
      }
      return rtn;
    },
    chart_of_accounts: function chart_of_accounts() {
      var accts = this.account_code;
      return accts.map(function (dat) {
        return {
          // value: dat.individual_final_output_id,
          // "[id: "+ dat.individual_final_output_id+ ", type: " + dat.pcr_type + "]",
          value: dat.recid,
          // "[id: "+ dat.individual_final_output_id+ ", type: " + dat.pcr_type + "]",
          label: dat.FACTCODE + " - " + dat.FTITLE
        };
      });
    },
    groupedBudget: function groupedBudget() {
      var result = {
        maintenanceOperating: {
          GAD: [],
          "NON-GAD": []
        },
        personnelServices: {
          GAD: [],
          "NON-GAD": []
        },
        financialExpenses: {
          GAD: [],
          "NON-GAD": []
        },
        capitalOutlay: {
          GAD: [],
          "NON-GAD": []
        }
      };
      var map = {
        'Maintenance, Operating, and Other Expenses': 'maintenanceOperating',
        'Personnel Services': 'personnelServices',
        'Financial Expenses': 'financialExpenses',
        'Capital Outlay': 'capitalOutlay'
      };
      this.budget_requirements.forEach(function (item) {
        var catKey = map[item.category];
        if (!catKey) return;
        var gadKey = item.category_gad.toUpperCase() === 'GAD' ? 'GAD' : 'NON-GAD';
        result[catKey][gadKey].push(item);
      });
      return result;
    },
    budgetSum: function budgetSum() {
      var _this = this;
      return function (category, gadType) {
        var _this$groupedBudget$c;
        var group = (_this$groupedBudget$c = _this.groupedBudget[category]) === null || _this$groupedBudget$c === void 0 ? void 0 : _this$groupedBudget$c[gadType];
        if (!group) return 0;
        return group.reduce(function (total, item) {
          var amount = parseFloat(item.amount || 0);
          return total + (isNaN(amount) ? 0 : amount);
        }, 0);
      };
    },
    overallBudget: function overallBudget() {
      var total = 0;
      for (var category in this.groupedBudget) {
        var gadGroups = this.groupedBudget[category];
        for (var gadType in gadGroups) {
          var rows = gadGroups[gadType];
          rows.forEach(function (item) {
            var amount = parseFloat(item.amount || 0);
            if (!isNaN(amount)) {
              total += amount;
            }
          });
        }
      }
      return total;
    },
    gadBudgetTotal: function gadBudgetTotal() {
      var total = 0;
      for (var category in this.groupedBudget) {
        var gadGroups = this.groupedBudget[category];
        for (var gadType in gadGroups) {
          var rows = gadGroups[gadType];
          rows.forEach(function (item) {
            var amount = parseFloat(item.amount || 0);

            // Only include rows with category_gad === "GAD"
            if (!isNaN(amount) && item.category_gad === "GAD") {
              total += amount;
            }
          });
        }
      }
      return total;
    },
    totalImplementationPS: function totalImplementationPS() {
      return this.computeCategory("ps");
    },
    totalImplementationMOOE: function totalImplementationMOOE() {
      return this.computeCategory("mooe");
    },
    totalImplementationCO: function totalImplementationCO() {
      return this.computeCategory("co");
    },
    totalImplementationFE: function totalImplementationFE() {
      return this.computeCategory("fe");
    },
    totalImplementationAll: function totalImplementationAll() {
      return this.computeCategory("total");
    },
    employees_computed: function employees_computed() {
      // ALWAYS ensure it's an array
      var emps = Array.isArray(this.all_employees) ? this.all_employees : [];
      return emps.map(function (emp) {
        return {
          value: emp.empl_id,
          label: "".concat(emp.empl_id, " - ").concat(emp.employee_name),
          _raw: emp
        };
      });
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
    },
    countUnresolvedComments: function countUnresolvedComments() {
      // alert('unresolved')
      return this.all_comments.filter(function (c) {
        return c.comment_status !== "1";
      }).length;
    }
  },
  mounted: function mounted() {
    this.$nextTick(function () {
      setTimeout(function () {
        // applyAllQuillHighlights();
        // this.focusComment();
      }, 50);
    });

    // Restore scroll position after page reload
    var scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition !== null) {
      setTimeout(function () {
        window.scrollTo(0, parseInt(scrollPosition));
        sessionStorage.removeItem('scrollPosition');
      }, 100);
    }
    window.addEventListener('beforeunload', this.handleBeforeUnload);
    this.form.idpaps = this.idpaps;
    if (this.source !== undefined) {
      this.form.source = this.source;
    }
    //this.form.idinteroutcome=this.idinteroutcome
    if (this.editData !== undefined) {
      this.paps = this.editData;
      this.pageTitle = "Edit";
      this.form.idpaps = this.editData.idpaps;
      this.form.project_title = this.editData.project_title;
      this.form.project_location = this.editData.project_location;
      this.form.list_of_lgu_covered = this.editData.list_of_lgu_covered;
      this.form.date_start = this.editData.date_start;
      this.form.date_end = this.editData.date_end;
      this.form.beneficiary_male = this.editData.beneficiary_male;
      this.form.beneficiary_female = this.editData.beneficiary_female;
      this.total_intended = parseFloat(this.form.beneficiary_male) + parseFloat(this.form.beneficiary_female);
      this.form.baseline_male = this.editData.baseline_male;
      this.form.baseline_female = this.editData.baseline_female;
      this.form.baseline_total = this.editData.baseline_total;
      this.form.data_source = this.editData.data_source;
      this.form.rationale = this.editData.rationale;
      this.form.objective = this.editData.objective;
      this.form.checklist_id = this.editData.checklist_id;
      this.form.beneficiaries = this.editData.beneficiaries;
      this.form.implementing_team = this.editData.implementing_team;
      this.form.partnership = this.editData.partnership;
      this.form.monitoring = this.editData.monitoring;
      this.form.risk_management = this.editData.risk_management;
      this.form.is_strategy_based = this.editData.is_strategy_based;
      this.form.id = this.editData.id;
      this.form.aip_code = this.editData.aip_code;
      this.form.year_period = this.editData.year_period;
      if (this.form.checklist_id == '0') {
        this.form.checklist_id = null;
      }
    } else {
      this.pageTitle = "Create";
      this.form.is_strategy_based = 0;
      //this.form.idpaps=this.idpaps
      //this.form.aip_code=this.paps[0].aip_code
      if (this.paps[0] !== undefined) {
        this.form.aip_code = this.paps[0].aip_code;
        this.form.agency_name = this.paps[0].agency_name;
      }
      if (this.duplicate !== undefined) {
        this.form.idpaps = this.duplicate[0].idpaps;
        this.form.project_title = this.duplicate[0].project_title;
        this.form.project_location = this.duplicate[0].project_location;
        this.form.list_of_lgu_covered = this.duplicate[0].list_of_lgu_covered;
        this.form.date_start = this.duplicate[0].date_start;
        this.form.date_end = this.duplicate[0].date_end;
        this.form.beneficiary_male = this.duplicate[0].beneficiary_male;
        this.form.beneficiary_female = this.duplicate[0].beneficiary_female;
        this.form.baseline_male = this.duplicate[0].baseline_male;
        this.form.baseline_female = this.duplicate[0].baseline_female;
        this.form.baseline_total = this.duplicate[0].baseline_total;
        this.form.data_source = this.duplicate[0].data_source;
        this.form.rationale = this.duplicate[0].rationale;
        this.form.objective = this.duplicate[0].objective;
        this.form.checklist_id = this.duplicate[0].checklist_id;
        this.form.beneficiaries = this.duplicate[0].beneficiaries;
        this.form.implementing_team = this.duplicate[0].implementing_team;
        this.form.partnership = this.duplicate[0].partnership;
        this.form.monitoring = this.duplicate[0].monitoring;
        this.form.risk_management = this.duplicate[0].risk_management;
        this.is_strategy_based = this.duplicate[0].is_strategy_based;
      } else {
        // this.form.project_title = this.paps[0].paps_desc
        //alert('undefined si idpaps!');
      }
    }
    this.applyAllHighlights();

    //TEXTAREA -Set Sizes ***********************************************************************************************************
    // const applyAutosize = (el) => {
    //     el.style.overflow = 'hidden';
    //     el.style.resize = 'none';

    //     const resize = () => {
    //         el.style.height = 'auto';
    //         el.style.height = el.scrollHeight + 'px';
    //     };

    //     el.addEventListener('input', resize);
    //     resize(); // initial
    // };

    // Apply to all textareas inside this page
    // this.$nextTick(() => {
    //     this.$el.querySelectorAll('textarea').forEach(applyAutosize);
    // });
  },
  beforeUnmount: function beforeUnmount() {
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
  },
  watch: {
    all_comments: {
      handler: function handler() {
        var _this2 = this;
        this.$nextTick(function () {
          _this2.applyAllHighlights();
        });
      },
      deep: true
    }
    // all_comments: {
    //     handler() {
    //         this.$nextTick(() => {
    //             setTimeout(() => {
    //                 this.applyAllQuillHighlights()
    //             }, 50)
    //         })
    //     },
    //     deep: true
    // }
  },
  methods: {
    applyAllQuillHighlights: function applyAllQuillHighlights() {
      var _this3 = this;
      ['rationale', 'objective', 'beneficiaries'].forEach(function (column) {
        _this3.applyQuillHighlights(column);
      });
    },
    applyQuillHighlights: function applyQuillHighlights(column) {
      var _this4 = this;
      var quillRef = this.$refs["".concat(column, "Quill")];
      if (!quillRef || !this.form[column]) return;
      var quill = quillRef.getQuill();
      if (!quill) return;
      var containerEl = quill.root;
      var instance = new Mark(containerEl);

      // 🔴 Remove old highlights first
      instance.unmark({
        done: function done() {
          _this4.highlightWithComments(_this4.form[column], _this4.all_comments, column, containerEl);
        }
      });
    },
    focusComment: function focusComment(comment) {
      var _map$comment$column_n;
      var map = {
        rationale: this.$refs.rationaleQuill,
        objective: this.$refs.objectiveQuill,
        beneficiaries: this.$refs.beneficiariesQuill
      };
      var ref = (_map$comment$column_n = map[comment.column_name]) !== null && _map$comment$column_n !== void 0 ? _map$comment$column_n : this.$refs.rationaleQuill;
      if (!ref) return;
      var quill = ref.getQuill();
      this.highlightQuillComment({
        quill: quill,
        comment: comment
      });
    },
    onCommentClick: function onCommentClick(comment) {
      this.highlightQuillComment({
        quillRef: this.$refs.objectiveQuill,
        comment: comment,
        columnName: comment.column_name
      });
    },
    //this.form.target_qty=parseFloat(this.form.target_qty1)+parseFloat(this.form.target_qty2)+parseFloat(this.form.target_qty3)+parseFloat(this.form.target_qty4);
    //alert(this.form.target_qty);
    // if (this.act_words > this.maxWords) {
    //     alert("Rationale exceeds 200 words limit")
    // } else {
    //
    openTab: function openTab(tab_name) {
      this.open_tab = tab_name;
    },
    submit: function submit() {
      if (this.editData !== undefined) {
        //alert('patch');
        this.form.patch("/revision/update", this.form);
      } else {
        this.form.id = null;
        //alert('store');
        this.form.post("/revision/store", this.form);
      }
      // }
    },
    limitWords: function limitWords() {
      var words = this.form.rationale.trim().split(/\s+/);
      this.act_words = words.length;
      if (words.length > this.maxWords) {
        //alert("Rationale has already 200 words!")
        //this.form.rationale = words.slice(0, this.maxWords).join(' ');
      }
    },
    setTotal: function setTotal() {
      var male = parseFloat(this.form.baseline_male);
      var female = parseFloat(this.form.baseline_female);
      var tot = male + female;
      this.form.baseline_total = tot;
    },
    setIntendedTotal: function setIntendedTotal() {
      var male = parseFloat(this.form.beneficiary_male);
      var female = parseFloat(this.form.beneficiary_female);
      var tot = male + female;
      this.total_intended = tot;
    },
    updateProjectTitle: function updateProjectTitle() {
      var _this5 = this;
      var selectedPap = this.paps_all.find(function (pap) {
        return String(pap.id) === String(_this5.form.idpaps);
      });
      // alert("fsdfsdf")
      console.log(this.form.idpaps);
      this.form.project_title = selectedPap ? selectedPap.paps_desc : '';
      this.form.aip_code = selectedPap ? selectedPap.aip_code : '';
      this.form.agency_name = selectedPap ? selectedPap.agency_name : '';
      this.selPaps = selectedPap;
    },
    toggleShowCommentPanel: function toggleShowCommentPanel() {
      this.showComments = !this.showComments;
    },
    showCommentBox: function showCommentBox(index) {
      // Toggle the show_comment_box property for the comment at the given index
      if (this.is_replying == false || this.reply_index == index) {
        this.comments[index].show_comment_box = !this.comments[index].show_comment_box;
        this.reply_index = index; // Set the reply index to the current comment
        this.reply_concat = ""; // Clear the reply input when showing the comment box
        this.is_replying = !this.is_replying; // Set replying state to true
      }
    },
    updateComment: function updateComment(id, comment, index) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var myurl;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              // const payload = {
              //         id: id,
              //         // strategy_id: this.form.localData[strategyIndex].id,
              //         reply: reply,
              //         type: "update",
              //     };
              // Clear existing timeout to prevent multiple calls
              // clearTimeout(this.timeouts[`activity_${strategyIndex}_${activityIndex}`]);
              myurl = "/revision-plan-comments/" + id;
              if (_this6.reply_concat.trim()) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              try {
                _this6.$inertia.patch(myurl, {
                  params: {
                    reply: _this6.reply_concat,
                    id: id
                  }
                }, {
                  preserveScroll: true,
                  onSuccess: function onSuccess() {
                    // $uname . ' replied: ' . $reply . '<br>';
                    var comment_init = "";
                    if (_this6.comments[index].reply) {
                      comment_init = _this6.comments[index].reply;
                    }
                    _this6.comments[index].reply = comment_init + " <b>" + _this6.auth.user.FullName + "</b> replied: <i>" + _this6.reply_concat + "</i> <br><br>";
                    _this6.comments[index].show_comment_box = false; // Hide the comment box after replying
                    _this6.reply_concat = ""; // Clear the reply input after saving
                    _this6.is_replying = false; // Reset the replying state
                  }
                });
                // console.log(payload);
                _this6.unsaved = false; // Reset unsaved flag after successful save
              } catch (error) {
                console.error('Error updating comment:', error);
              }
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
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
    closeCommentModal: function closeCommentModal() {
      this.show_comment_modal = false;
    },
    saveComment: function saveComment() {
      var _this7 = this;
      // Logic to save the comment
      // This is just a placeholder, implement your actual saving logic here
      var myurl = "/revision-plan-comments/store";
      // await axios
      var table_row_id_l = 0;
      // console.log(this.comment_table)
      if (this.comment_table === 'revision_plans') {
        table_row_id_l = this.comment_reference_object.id;
      }
      if (this.comment_table === 'strategy_projects') {
        table_row_id_l = this.comment_reference_object.strategy_id;
      }
      if (this.comment_table === 'activity_projects') {
        table_row_id_l = this.comment_reference_object.activity_id;
      }
      if (this.comment_table === 'budget_requirements') {
        table_row_id_l = this.comment_reference_object.id;
        // alert(table_row_id_l)
        // console.log(this.comment_reference_object)
      }
      if (this.comment_table === 'team_plans') {
        table_row_id_l = this.comment_reference_object.id;
      }
      if (this.comment_table === 'monitoring_and_evaluations') {
        table_row_id_l = this.comment_reference_object.id;
      }
      if (this.comment_table === 'risk_manangements') {
        table_row_id_l = this.comment_reference_object.id;
      }
      if (this.comment_table === 'expected_revised_outputs') {
        table_row_id_l = this.comment_reference_object.id;
      }
      if (this.comment_table === 'expected_revised_outcomes') {
        table_row_id_l = this.comment_reference_object.id;
      }
      if (this.comment_table === 'signatories') {
        table_row_id_l = this.comment_reference_object.id;
      }
      //alert(table_row_id_l)
      this.$inertia.post(myurl, {
        params: {
          table_row_id: table_row_id_l,
          table_name: this.comment_table,
          column_name: this.comment_column,
          comment_status: 0,
          comment: this.comment
        },
        preserveScroll: true
      });
      this.closeCommentModal();
      setTimeout(function () {
        _this7.comment = "";
      }, 1000); // 1000 milliseconds = 1 second
    },
    applyAllHighlights: function applyAllHighlights() {
      var _this8 = this;
      // alert("Applying all highlights...");
      var columns = ['rationale', 'beneficiaries', 'objective'];
      columns.forEach(function (column) {
        var el = _this8.$refs["".concat(column, "El")];
        if (!el || !_this8.editData[column]) return;
        var instance = new Mark(el);
        // alert("Applying highlights for column:"+column);
        // 🔴 MUST remove old highlights first
        instance.unmark({
          done: function done() {
            _this8.highlightWithComments(_this8.editData[column], _this8.all_comments, column, el);
          }
        });
      });
    },
    submitAction: function submitAction(type, comment_id, index) {
      var _this9 = this;
      var actionText = {
        "delete": "delete this comment",
        reset: "reset the status of this comment to unresolved",
        resolve: "mark this comment as resolved"
      };
      if (!confirm("Are you sure you want to ".concat(actionText[type], "?"))) {
        return; // User cancelled
      }
      var myurl = "/revision-plan-comments/action/done";
      this.$inertia.post(myurl, {
        params: {
          type: type,
          id: comment_id
        }
      }, {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          if (type === 'delete') {
            _this9.comments.splice(index, 1);
            alert("Comment deleted successfully.");
          } else if (type === 'reset') {
            _this9.comments[index].comment_status = '0';
            alert("Comment status reset to unresolved.");
          } else if (type === 'resolve') {
            _this9.comments[index].comment_status = '1';
            alert("Comment resolved successfully.");
          }
        }
      });
    },
    // TARGETED GUIDES
    scrollToSection: function scrollToSection(target, comment, column) {
      var _this0 = this;
      var el = document.getElementById(target);
      if (!el) return;
      // alert(target);
      var navbarHeight = 90;
      var targetPos = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPos,
        behavior: "smooth"
      });
      // FOr Quill
      if (['rationale', 'objective', 'beneficiaries'].includes(column)) {
        var flagMap = {
          rationale: 'briefRationale',
          objective: 'briefObjective',
          beneficiaries: 'briefBeneficiaries'
        };
        this[flagMap[column]] = true;
        setTimeout(function () {
          _this0[flagMap[column]] = false;
        }, 2000); // Adjust delay as needed
      }
      // Highlight effect
      el.classList.add("highlight-target");
      setTimeout(function () {
        return el.classList.remove("highlight-target");
      }, 2000);

      // NEW → show arrow
      this.showArrow(el);
    },
    showArrow: function showArrow(el) {
      // Remove previous arrow
      var oldArrow = document.querySelector(".jump-arrow");
      if (oldArrow) oldArrow.remove();

      // Create container div
      var arrow = document.createElement("div");
      arrow.classList.add("jump-arrow");
      arrow.innerHTML = "\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"red\" class=\"bi bi-arrow-right-circle-fill\" viewBox=\"0 0 16 16\">\n                    <path d=\"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z\"/>\n                </svg>\n            ";
      document.body.appendChild(arrow);

      // Get target element position
      var rect = el.getBoundingClientRect();
      var scrollTop = window.scrollY || window.pageYOffset;

      // Position arrow at the **top of the target element**
      var arrowX = rect.left - 40; // offset left from element
      var arrowY = scrollTop + rect.top; // align with element top

      arrow.style.position = "absolute";
      arrow.style.left = arrowX + "px";
      arrow.style.top = arrowY + "px";
      arrow.style.zIndex = 9999;
      arrow.style.transition = "opacity 0.3s";

      // Fade out after 2.5 seconds
      setTimeout(function () {
        arrow.style.opacity = 0;
        setTimeout(function () {
          return arrow.remove();
        }, 500);
      }, 2500);
    },
    // END OF COMMENTS*************************************************
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
    //*************************************************************** */

    // UPDATE Revision Plans*******************************************/
    updateRevisionPlans: lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default()(/*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(table_name, column_name, id, new_data) {
        var nonNegativeColumns, value, confirmed, payload, response, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              // Columns that must be >= 0
              nonNegativeColumns = ['ps_q1', 'ps_q2', 'ps_q3', 'ps_q4', 'mooe_q1', 'mooe_q2', 'mooe_q3', 'mooe_q4', 'fe_q1', 'fe_q2', 'fe_q3', 'fe_q4', 'co_q1', 'co_q2', 'co_q3', 'co_q4']; // Validate value
              if (!nonNegativeColumns.includes(column_name)) {
                _context2.n = 1;
                break;
              }
              value = parseFloat(new_data);
              if (!(isNaN(value) || value < 0)) {
                _context2.n = 1;
                break;
              }
              alert("Value must be greater than or equal to 0.");
              return _context2.a(2);
            case 1:
              if (!(column_name === 'ccet_code' && (!new_data || new_data.trim() === ''))) {
                _context2.n = 2;
                break;
              }
              confirmed = confirm("Are you sure you want to remove the CCET code?");
              if (confirmed) {
                _context2.n = 2;
                break;
              }
              return _context2.a(2);
            case 2:
              payload = {
                table_name: table_name,
                column_name: column_name,
                id: id,
                new_data: encodeURIComponent(new_data)
              };
              _context2.p = 3;
              _context2.n = 4;
              return axios__WEBPACK_IMPORTED_MODULE_5___default().patch("/revision/streamlined/".concat(id, "/update"), payload);
            case 4:
              response = _context2.v;
              console.log(response.data);
              this.setUnsaved(false);
              _context2.n = 6;
              break;
            case 5:
              _context2.p = 5;
              _t = _context2.v;
              console.error("Error updating ".concat(table_name, " (").concat(column_name, ")"), _t);
            case 6:
              return _context2.a(2);
          }
        }, _callee2, this, [[3, 5]]);
      }));
      return function (_x, _x2, _x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }(), 1000),
    // 🔥 Delay here (1s or 300ms)
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
      var text = "WARNING!\nAre you sure you want to delete a row from " + table + " with title " + title + "?";
      if (confirm(text) == true) {
        this.$inertia["delete"]("/revision/streamlined/" + id + "/" + table + "/" + project_id, {
          preserveScroll: true
        });
      }
    },
    //BUDGETARY REQUIREMENTS
    formatCategory: function formatCategory(key) {
      var map = {
        maintenanceOperating: 'Maintenance, Operating, and Other Expenses',
        personnelServices: 'Personnel Services',
        financialExpenses: 'Financial Expenses',
        capitalOutlay: 'Capital Outlay'
      };
      return map[key] || key;
    },
    closeBudgetModal: function closeBudgetModal() {
      this.BudgetModalVisible = false;
    },
    showBudgetModal: function showBudgetModal(revision_plan_id, gadType, category) {
      // open edit modal with row data
      // alert(revision_plan_id)
      this.budget_new.revision_plan_id = revision_plan_id;
      this.budget_new.category_gad = gadType;
      this.budget_new.category = category;
      this.budget_new.proposed_budget = 0;
      this.BudgetModalVisible = true;
      console.log('Edit row', revision_plan_id, gadType, category);
    },
    selectChartOfAccount: function selectChartOfAccount() {
      var _this1 = this;
      setTimeout(function () {
        if (_this1.budget_new.selected_chart_of_account !== null && _this1.budget_new.selected_chart_of_account !== undefined) {
          var index = _this1.account_code.findIndex(function (data) {
            return String(data.recid) === String(_this1.budget_new.selected_chart_of_account);
          });
          _this1.budget_new.particulars = _this1.account_code[index].FTITLE;
          _this1.budget_new.account_code = _this1.account_code[index].FACTCODE;
          console.log(_this1.account_code[index]);
        } else {
          // Handle case when no option is selected (form.ipcr_code is null or undefined)
          return -1; // Return -1 to indicate no option is selected
        }
      }, 300);
    },
    saveBudgetRequirement: function saveBudgetRequirement() {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var confirmed, response, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              if (!(!_this10.budget_new.particulars || _this10.budget_new.particulars.trim() === "")) {
                _context3.n = 1;
                break;
              }
              alert("Particulars cannot be empty.");
              return _context3.a(2);
            case 1:
              if (!(_this10.budget_new.amount === null || _this10.budget_new.amount === 0)) {
                _context3.n = 2;
                break;
              }
              alert("Amount cannot be empty or zero.");
              return _context3.a(2);
            case 2:
              if (!(!_this10.budget_new.source || _this10.budget_new.source.trim() === "")) {
                _context3.n = 3;
                break;
              }
              alert("Source cannot be empty.");
              return _context3.a(2);
            case 3:
              confirmed = window.confirm("Are you sure you want to save this budget requirement?");
              if (confirmed) {
                _context3.n = 4;
                break;
              }
              return _context3.a(2);
            case 4:
              _context3.p = 4;
              // Set the revision_plan_id dynamically if needed
              _this10.budget_new.revision_plan_id = _this10.paps.id;
              _context3.n = 5;
              return axios__WEBPACK_IMPORTED_MODULE_5___default().post('/budget/store/budget', _this10.budget_new);
            case 5:
              response = _context3.v;
              // Add the returned budget to your array (optional)
              _this10.budget_requirements.push(response.data);

              // Close modal and reset
              _this10.BudgetModalVisible = false;
              _this10.budget_new = {
                id: null,
                revision_plan_id: _this10.paps.id,
                particulars: "",
                account_code: "",
                amount: null,
                proposed_budget: null,
                category: "Personnel Services",
                category_gad: "GAD",
                source: "",
                selected_chart_of_account: ""
              };
              alert("Budget saved successfully!");
              _context3.n = 7;
              break;
            case 6:
              _context3.p = 6;
              _t2 = _context3.v;
              console.error(_t2);
              alert("Failed to save budget.");
            case 7:
              return _context3.a(2);
          }
        }, _callee3, null, [[4, 6]]);
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
    //SHOW STRATEGIES MODAL
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
      axios__WEBPACK_IMPORTED_MODULE_5___default().post('/implementation-workplan/strategies', {
        strategies: this.strategies,
        project_id: this.form.id,
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
    //ACTIVITIES************************************************************
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
        project_id: this.editData.id,
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
      var _this11 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var response, _t3;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return axios__WEBPACK_IMPORTED_MODULE_5___default().post('/implementation-workplan/strategies/activities', {
                activities: _this11.activities,
                strategy_id: _this11.strategy_id
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
              response = _context4.v;
              alert('Activities saved successfully!');
              _this11.closeActivityModal();
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t3 = _context4.v;
              console.error(_t3);
              alert('Error saving activities.');
            case 3:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 2]]);
      }))();
    },
    showEditActivityModal: function showEditActivityModal(activity) {
      this.activity_active = activity;
      this.ActivityModalVisibleEdit = true;
    },
    closeActivityModalEdit: function closeActivityModalEdit() {
      this.ActivityModalVisibleEdit = false;
      this.activity_active = [];
    },
    //IMPLEMENTING TEAM *******************************
    showTeamModal: function showTeamModal() {
      var _this12 = this;
      this.action_type_team = 'store';
      this.all_employees = [];
      this.addTeamRow();
      axios__WEBPACK_IMPORTED_MODULE_5___default().get('/get_employees_all').then(function (response) {
        _this12.all_employees = response.data; // store employees
        _this12.TeamModalVisible = true;
      })["catch"](function (error) {
        console.error("Error loading employees:", error);
      });
    },
    closeTeamModal: function closeTeamModal() {
      this.TeamModalVisible = false;
      this.all_employees = [];
      // this.team_members=[];
    },
    showTeamModalEdit: function showTeamModalEdit(emp) {
      var _this13 = this;
      this.action_type_team = 'update';
      this.TeamModalVisible = true;
      this.all_employees = [];
      this.team_members = {
        id: emp.id,
        revision_plan_id: this.editData.id,
        implementing_team_id: emp.empl_id,
        role: emp.role,
        empl_id: emp.empl_id,
        name: emp.name,
        competency: emp.competency,
        position: emp.position,
        with_gad_training: emp.with_gad_training,
        specify_GAD_training: emp.specify_GAD_training,
        gender: emp.gender,
        status: emp.status
      };
      axios__WEBPACK_IMPORTED_MODULE_5___default().get('/get_employees_all').then(function (response) {
        _this13.all_employees = response.data; // store employees
      })["catch"](function (error) {
        console.error("Error loading employees:", error);
      });
    },
    // TEAM MEMBERS *********************************************
    addTeamRow: function addTeamRow() {
      this.team_members = {
        id: 0,
        revision_plan_id: this.editData.id,
        implementing_team_id: 0,
        role: '',
        empl_id: 0,
        name: '',
        competency: '',
        position: '',
        with_gad_training: 1,
        specify_GAD_training: '',
        gender: '',
        status: ''
      };
    },
    removeTeamRow: function removeTeamRow(index) {
      this.team_members.splice(index, 1);
    },
    saveTeamMembers: function saveTeamMembers() {
      var _this14 = this;
      if (this.action_type_team === 'store') {
        axios__WEBPACK_IMPORTED_MODULE_5___default().post('/implementation-workplan/implementing/team/plans', {
          'rows': this.team_members
        }, {
          preserveScroll: true,
          preserveState: true
        }).then(function (res) {
          // optionally clear or close modal
          alert('Successfully saved team member!');
          _this14.team_members = [];
          _this14.TeamModalVisible = false;
          sessionStorage.setItem('scrollPosition', window.scrollY);
          window.location.reload();
        });
      } else if (this.action_type_team === 'update') {
        axios__WEBPACK_IMPORTED_MODULE_5___default().patch('/implementation-workplan/implementing/team/plans/update', {
          'rows': this.team_members
        }, {
          preserveScroll: true,
          preserveState: true
        }).then(function (res) {
          // optionally clear or close modal
          alert('Successfully saved team member!');
          _this14.team_members = [];
          _this14.TeamModalVisible = false;
          sessionStorage.setItem('scrollPosition', window.scrollY);
          window.location.reload();
        });
      }
    },
    updateEmployee: function updateEmployee(emplId) {
      var selectedEmp = this.all_employees.find(function (peop) {
        return String(peop.empl_id) === String(emplId);
      });
      this.team_members.name = (selectedEmp === null || selectedEmp === void 0 ? void 0 : selectedEmp.employee_name) || '';
      this.team_members.gender = (selectedEmp === null || selectedEmp === void 0 ? void 0 : selectedEmp.gender) || '';
      this.team_members.position = (selectedEmp === null || selectedEmp === void 0 ? void 0 : selectedEmp.position_long_title) || '';
      this.team_members.empl_id = emplId;
      this.team_members.status = (selectedEmp === null || selectedEmp === void 0 ? void 0 : selectedEmp.employment_type_descr) || '';
      // this.team_members=({
      //     id: selectedEmp?.employee_name || 0,
      //     revision_plan_id: this.editData.id,
      //     implementing_team_id: selectedEmp?.empl_id || '',
      //     role: selectedEmp?.role || '',
      //     empl_id: selectedEmp?.empl_id || '',
      //     name: selectedEmp?.name || '',
      //     competency: selectedEmp?.competency || '',
      //     position: selectedEmp?.position || '',
      //     with_gad_training: selectedEmp?.with_gad_training || '',
      //     specify_GAD_training: selectedEmp?.specify_GAD_training || '',
      //     gender: selectedEmp?.gender || '',
      //     status: selectedEmp?.status || ''
      // });
    },
    // CCET CODES *********************************************\
    updateCCET: function updateCCET(code_ccet) {
      var selectedEmp = this.ccet_codes.find(function (ccet) {
        return String(ccet.ccet_code) === String(code_ccet);
      });
    },
    //RISK MANAGEEMENT *******************************
    showRiskManagementModal: function showRiskManagementModal() {
      this.RiskManagementModalVisible = true;
    },
    closeRiskManagementModal: function closeRiskManagementModal() {
      this.RiskManagementModalVisible = false;
      this.risk_managements = [];
    },
    addRiskManagementRow: function addRiskManagementRow() {
      this.risk_managements.push({
        id: null,
        possible_risk: '',
        person_affected: '',
        management: '',
        revision_plan_id: this.editData.id
      });
    },
    removeRiskManagementRow: function removeRiskManagementRow(index) {
      this.risk_managements.splice(index, 1);
    },
    saveRiskManagements: function saveRiskManagements() {
      axios__WEBPACK_IMPORTED_MODULE_5___default().post('/revision/streamlined/subtables/save/risk/management', {
        risk_managements: this.risk_managements
      }).then(function (res) {
        console.log("Saved:", res.data);
        window.location.reload({
          preserveScroll: true,
          preserveState: true
        });
        // Optional success message or close modal
      })["catch"](function (err) {
        console.error(err);
      });
    },
    // MONITORING AND EVALUATION*******************************
    closeMonitoringModal: function closeMonitoringModal() {
      this.MonitoringModalVisible = false;
      this.monitoring_and_evaluations = [];
    },
    showMonitoringModal: function showMonitoringModal() {
      this.MonitoringModalVisible = true;
    },
    addMonitoringAndEvaluationRow: function addMonitoringAndEvaluationRow() {
      this.monitoring_and_evaluations.push({
        evaluation_mechanism_tool: "",
        opr: "",
        target_beneficiaries: "",
        gad: "No",
        revision_plan_id: this.editData.id // automatically attach
      });
    },
    removeMonitoringAndEvaluationRow: function removeMonitoringAndEvaluationRow(index) {
      this.monitoring_and_evaluations.splice(index, 1);
    },
    saveMonitoringAndEvaluation: function saveMonitoringAndEvaluation() {
      var _this15 = this;
      axios__WEBPACK_IMPORTED_MODULE_5___default().post('/revision/streamlined/subtables/save/monitoring/and/evaluation', {
        rows: this.monitoring_and_evaluations
      }).then(function (res) {
        // console.log("Saved:", res.data);
        _this15.MonitoringModalVisible = false;
        window.location.reload({
          preserveScroll: true,
          preserveState: true
        });
      })["catch"](function (err) {
        console.error(err);
      });
    },
    // SIGNATORIES*******************************
    closeSignatoryModal: function closeSignatoryModal() {
      this.SignatoryModalVisible = false;
    },
    showSignatoryModal: function showSignatoryModal() {
      this.SignatoryModalVisible = true;
    },
    addSignatoryRow: function addSignatoryRow() {
      this.signatories.push({
        id: null,
        name: "",
        position: "",
        acted: "",
        sequence: "",
        revision_plan_id: this.editData.id
      });
    },
    removeSignatoryRow: function removeSignatoryRow(index) {
      this.signatories.splice(index, 1);
    },
    saveSignatories: function saveSignatories() {
      var _this16 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return axios__WEBPACK_IMPORTED_MODULE_5___default().post("/revision/streamlined/subtables/save/signatories", {
                signatories: _this16.signatories,
                revision_plan_id: _this16.editData.id
              }).then(function (res) {
                console.log("Signatories saved successfully:", res.data);
                _this16.closeSignatoryModal();
                window.location.reload({
                  preserveScroll: true,
                  preserveState: true
                });
              })["catch"](function (err) {
                console.error("Error saving signatories:", err);
              });
            case 1:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    //IMPLEMENTATION
    computeCategory: function computeCategory(type) {
      var _this17 = this;
      if (!this.implementation) return 0;
      var categories = ["ps", "mooe", "co", "fe"];
      var activeCats = type === "total" ? categories : [type];
      var sum = 0;
      this.implementation.forEach(function (item) {
        if (item.activity && Array.isArray(item.activity)) {
          item.activity.forEach(function (act) {
            activeCats.forEach(function (cat) {
              sum += _this17.sumQuarterValues(act, cat);
            });
          });
        }
      });
      return sum;
    },
    sumQuarterValues: function sumQuarterValues(act, category) {
      var quarters = ["q1", "q2", "q3", "q4"];
      var total = 0;
      quarters.forEach(function (q) {
        var key = "".concat(category, "_").concat(q);
        // ex: "mooe_q1"
        var val = act[key];
        total += parseFloat(val) || 0;
      });
      return total;
    },
    //FIT WIDTH TO VISIBLE AREA ****************************
    fitWidthToVisibleArea: function fitWidthToVisibleArea() {
      var _document$querySelect;
      var table = document.querySelector('.table.table-hover.table-bordered.border-dark');
      var tableContainer = (_document$querySelect = document.querySelector('div[id="implementation_workplan"]')) === null || _document$querySelect === void 0 || (_document$querySelect = _document$querySelect.parentElement) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.querySelector('div > div');
      if (!table) return;
      if (this.implementationTableFitted) {
        // Reset to original state
        table.style.width = 'auto';
        table.style.tableLayout = 'auto';
        table.style.whiteSpace = 'normal';
        table.querySelectorAll('td, th').forEach(function (cell) {
          cell.style.whiteSpace = 'normal';
          cell.style.width = '';
        });
        this.implementationTableFitted = false;
      } else {
        // Fit to visible area
        var windowWidth = window.innerWidth;
        var padding = 40; // Account for margins and scrollbar
        var availableWidth = windowWidth - padding;
        table.style.width = availableWidth + 'px';
        table.style.tableLayout = 'fixed';
        table.style.whiteSpace = 'nowrap';

        // Make cells preserve space for text
        var cells = table.querySelectorAll('td, th');
        var numCols = table.querySelectorAll('th').length;
        var colWidth = availableWidth / numCols;
        cells.forEach(function (cell) {
          cell.style.whiteSpace = 'normal';
          cell.style.wordWrap = 'break-word';
          cell.style.overflowWrap = 'break-word';
        });
        this.implementationTableFitted = true;
      }
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
      var _this18 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var _this18$expected_outp, response, _t4;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _context6.p = 0;
              _context6.n = 1;
              return axios__WEBPACK_IMPORTED_MODULE_5___default().post('/revision/streamlined/expected/revised/outputs', {
                expected_outputs: _this18.expected_outputs_new
              });
            case 1:
              response = _context6.v;
              alert('Saved successfully!');
              (_this18$expected_outp = _this18.expected_outputs_current).push.apply(_this18$expected_outp, _toConsumableArray(_this18.expected_outputs_new));
              _this18.expected_outputs_new = []; // Clear table after save
              _this18.$emit('close-modal-event'); // Close modal
              _context6.n = 3;
              break;
            case 2:
              _context6.p = 2;
              _t4 = _context6.v;
              console.error(_t4);
              alert('Error saving expected outputs.');
            case 3:
              return _context6.a(2);
          }
        }, _callee6, null, [[0, 2]]);
      }))();
    },
    deleteExpectedOutput: function deleteExpectedOutput(id, table, title, index) {
      var _this19 = this;
      var text = "WARNING!\nAre you sure you want to delete a row from " + table + " with title " + title + "?";
      if (confirm(text) == true) {
        this.$inertia["delete"]("/revision/streamlined/".concat(id, "/").concat(table), {
          onSuccess: function onSuccess() {
            // Only runs if backend deletion succeeds
            _this19.expected_outputs_current.splice(index, 1);
          },
          onError: function onError() {
            alert("Delete failed! Please try again.");
          }
        });
      }
    },
    //EXPECTED OUTCOMES ******************************************
    showExpectedOutcomeModal: function showExpectedOutcomeModal(activity, activity_id, activity_project_id) {
      this.expected_outcomes_new = [];
      this.activity_id = activity_id;
      this.activity_project_id = activity_project_id;
      this.expected_outputs_new = [];
      this.expected_outcomes_current = activity;
      this.ExpectedOutcomeModalVisible = true;
    },
    hideExpectedOutcomeModal: function hideExpectedOutcomeModal() {
      // alert('outcome')
      this.ExpectedOutcomeModalVisible = false;
      window.location.reload({
        preserveScroll: true,
        preserveState: true
      });
    },
    addOutcome: function addOutcome() {
      this.expected_outcomes_new.push({
        id: null,
        description: '',
        strategy_id: null,
        strategy_project_id: null,
        activity_id: this.activity_id,
        activity_project_id: this.activity_project_id,
        is_strategy_outcome: 0
      });
    },
    removeOutcome: function removeOutcome(index) {
      this.expected_outcomes_new.splice(index, 1);
    },
    saveExpectedOutcomes: function saveExpectedOutcomes() {
      var _this20 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var payload, response, _this20$expected_outc, _t5;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              _context7.p = 0;
              payload = _this20.expected_outcomes_new.map(function (item) {
                return _objectSpread(_objectSpread({}, item), {}, {
                  activity_id: _this20.activity_id,
                  activity_project_id: _this20.activity_project_id,
                  project_id: _this20.project_id
                });
              });
              _context7.n = 1;
              return axios__WEBPACK_IMPORTED_MODULE_5___default().post('/revision/streamlined/expected/outcomes', {
                rows: payload
              });
            case 1:
              response = _context7.v;
              if (response.data.success) {
                // Push saved outcomes to current list
                (_this20$expected_outc = _this20.expected_outcomes_current).push.apply(_this20$expected_outc, _toConsumableArray(_this20.expected_outcomes_new));
                // Clear new outcomes
                _this20.expected_outcomes_new = [];
                // this.hideExpectedOutcomeModal();
              } else {
                alert('Failed to save expected outcomes');
              }
              _context7.n = 3;
              break;
            case 2:
              _context7.p = 2;
              _t5 = _context7.v;
              console.error(_t5);
              alert('Error saving expected outcomes');
            case 3:
              return _context7.a(2);
          }
        }, _callee7, null, [[0, 2]]);
      }))();
    },
    deleteExpectedOutcome: function deleteExpectedOutcome(id, table, title, index) {
      var _this21 = this;
      // this.deleteData(id,table,title)
      var text = "WARNING!\nAre you sure you want to delete a row from " + table + " with title " + title + "?";
      if (confirm(text) == true) {
        this.$inertia["delete"]("/revision/streamlined/".concat(id, "/").concat(table), {
          onSuccess: function onSuccess() {
            // Only runs if backend deletion succeeds
            _this21.expected_outcomes_current.splice(index, 1);
          },
          onError: function onError() {
            alert("Delete failed! Please try again.");
          }
        });
      }
    },
    // ATTRIBUTED AMOUNT**********************************************************
    getGadAttributedAmount: function getGadAttributedAmount(overallBudget, hgdg_score) {
      var score = parseFloat(hgdg_score) || 0;
      var budget = parseFloat(overallBudget) || 0;
      if (score < 4) {
        return budget * 0;
      } else if (score < 8) {
        return budget * 0.25;
      } else if (score < 15) {
        return budget * 0.50;
      } else if (score < 20) {
        return budget * 0.75;
      } else {
        return budget * 1.00;
      }
    },
    getGadClassification: function getGadClassification(hgdg_score) {
      var score = parseFloat(hgdg_score) || 0;
      // alert(hgdg_score)
      if (score < 4) {
        return 'GAD is invisible in the project';
      } else if (score < 8) {
        return 'Proposed project has promising GAD prospects';
      } else if (score < 15) {
        return 'Gender-sensitive';
      } else if (score < 20) {
        return 'Gender responsive';
      } else {
        return 'Fully gender responsive';
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitleSmall.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitleSmall.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/QuillEditorShared.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/QuillEditorShared.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'QuillEditor',
  props: {
    modelValue: String
  },
  emits: ['update:modelValue'],
  mounted: function mounted() {
    var _this = this;
    this.editor = new window.Quill(this.$refs.editorContainer, {
      theme: 'snow',
      modules: {
        table: false,
        'better-table': {
          operationMenu: {
            items: {
              unmergeCells: {
                text: 'Unmerge Cells'
              }
            }
          }
        },
        toolbar: {
          container: [['bold', 'italic', 'underline'], [{
            list: 'ordered'
          }, {
            list: 'bullet'
          }], ['link'], ['clean'], ['table']],
          handlers: {
            table: function table() {
              var table = this.quill.getModule('better-table');
              table.insertTable(3, 3);
            }
          }
        }
      }
    });

    // Set initial content
    if (this.modelValue) {
      this.editor.root.innerHTML = this.modelValue;
    }

    // Sync changes
    this.editor.on('text-change', function () {
      _this.$emit('update:modelValue', _this.editor.root.innerHTML);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/SmallModal.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/SmallModal.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SmallModal',
  props: {
    title: {
      type: String,
      "default": 'Modal'
    },
    modelValue: {
      type: Boolean,
      "default": false
    },
    width: {
      type: Number,
      "default": 350 // roughly Bootstrap col-3
    }
  },
  data: function data() {
    return {
      visible: this.modelValue,
      posX: 0,
      posY: 50,
      modalWidth: this.width,
      // modalWidth: Math.min(Math.max(baseWidth, 260), 420),
      modalHeight: 450,
      dragging: false,
      resizing: false,
      resizeDir: null,
      startX: 0,
      startY: 0
    };
  },
  computed: {
    modalStyle: function modalStyle() {
      return {
        top: this.posY + 'px',
        left: this.posX + 'px',
        width: this.modalWidth + 'px',
        height: this.modalHeight + 'px',
        zIndex: 9999
      };
    }
  },
  watch: {
    modelValue: function modelValue(val) {
      this.visible = val;
    }
  },
  mounted: function mounted() {
    this.posX = window.innerWidth - this.modalWidth - 20; // right side offset
    this.posY = 60;
    // this.setInitialPosition()

    // window.addEventListener('resize', this.handleResize)
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  },
  beforeUnmount: function beforeUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  },
  methods: {
    close: function close() {
      this.visible = false;
      this.$emit('update:modelValue', false);
    },
    startDrag: function startDrag(e) {
      this.dragging = true;
      this.startX = e.clientX - this.posX;
      this.startY = e.clientY - this.posY;
    },
    // startResize(e) {
    //     this.resizing = true
    //     this.startX = e.clientX
    //     this.startY = e.clientY
    // },
    startResize: function startResize(direction, e) {
      this.resizing = true;
      this.resizeDir = direction;
      this.startX = e.clientX;
      this.startY = e.clientY;
    },
    onMouseMove: function onMouseMove(e) {
      var MIN_SIZE_WIDTH = 330;
      var MIN_SIZE_HEIGHT = 450;
      if (this.resizing && e.buttons !== 1) {
        this.onMouseUp();
        return;
      }
      if (this.dragging) {
        this.posX = e.clientX - this.startX;
        this.posY = e.clientY - this.startY;
      }
      if (this.resizing) {
        var dx = e.clientX - this.startX;
        var dy = e.clientY - this.startY;

        /* ---- WIDTH ---- */
        if (this.resizeDir === 'right') {
          this.modalWidth = Math.max(MIN_SIZE_WIDTH, this.modalWidth + dx);
        }
        if (this.resizeDir === 'left') {
          var newWidth = this.modalWidth - dx;
          if (newWidth < MIN_SIZE_WIDTH) {
            this.posX += this.modalWidth - MIN_SIZE_WIDTH;
            this.modalWidth = MIN_SIZE_WIDTH;
          } else {
            this.modalWidth = newWidth;
            this.posX += dx;
          }
        }

        /* ---- HEIGHT ---- */
        this.modalHeight = Math.max(MIN_SIZE_HEIGHT, this.modalHeight + dy);
        this.startX = e.clientX;
        this.startY = e.clientY;
      }
    },
    onMouseUp: function onMouseUp() {
      this.dragging = false;
      this.resizing = false;
      this.resizeDir = null;
    } // onMouseMove(e) {
    //     if (this.dragging) {
    //         this.posX = e.clientX - this.startX
    //         this.posY = e.clientY - this.startY
    //     }
    //     if (this.resizing) {
    //         this.modalWidth += e.clientX - this.startX
    //         this.modalHeight += e.clientY - this.startY
    //         this.startX = e.clientX
    //         this.startY = e.clientY
    //     }
    // },
    // onMouseUp() {
    //     this.dragging = false
    //     this.resizing = false
    // },
    // setInitialPosition() {
    //     this.modalWidth = Math.min(
    //         Math.max(window.innerWidth * 0.25, 260),
    //         420
    //     )
    //     this.posX = window.innerWidth - this.modalWidth - 20
    //     this.posY = 60
    // },
    // handleResize() {
    //     const newWidth = Math.min(
    //         Math.max(window.innerWidth * 0.25, 260),
    //         420
    //     )
    //     this.modalWidth = newWidth
    //     // keep it inside viewport
    //     this.posX = Math.min(
    //         this.posX,
    //         window.innerWidth - this.modalWidth - 10
    //     )
    // },
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue?vue&type=template&id=296e597c":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue?vue&type=template&id=296e597c ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
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
  key: 2
};
var _hoisted_6 = {
  "class": "col-md-12"
};
var _hoisted_7 = {
  "class": "d-none"
};
var _hoisted_8 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_9 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_10 = ["src"];
var _hoisted_11 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_12 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_13 = {
  "class": "fw-bold"
};
var _hoisted_14 = {
  key: 0
};
var _hoisted_15 = {
  key: 1
};
var _hoisted_16 = ["value"];
var _hoisted_17 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_18 = {
  id: "revision_plans"
};
var _hoisted_19 = {
  name: "tabel",
  "class": "table table-sm table-borderless table-hover",
  style: {
    "border-color": "#000",
    "border-width": "2px"
  }
};
var _hoisted_20 = {
  "class": "bg-secondary text-white",
  colspan: "1"
};
var _hoisted_21 = ["id"];
var _hoisted_22 = {
  "class": "bg-secondary text-white",
  colspan: "1"
};
var _hoisted_23 = ["id"];
var _hoisted_24 = {
  "class": "bg-secondary text-white",
  colspan: "1"
};
var _hoisted_25 = ["id"];
var _hoisted_26 = {
  colspan: "1"
};
var _hoisted_27 = ["id"];
var _hoisted_28 = {
  colspan: "1"
};
var _hoisted_29 = ["id"];
var _hoisted_30 = {
  colspan: "1"
};
var _hoisted_31 = ["id"];
var _hoisted_32 = {
  colspan: "1"
};
var _hoisted_33 = ["id"];
var _hoisted_34 = ["id"];
var _hoisted_35 = {
  colspan: "1"
};
var _hoisted_36 = ["id"];
var _hoisted_37 = {
  colspan: "1"
};
var _hoisted_38 = ["id"];
var _hoisted_39 = {
  colspan: "1"
};
var _hoisted_40 = ["id"];
var _hoisted_41 = ["id"];
var _hoisted_42 = ["id"];
var _hoisted_43 = {
  key: 0
};
var _hoisted_44 = {
  key: 1
};
var _hoisted_45 = {
  "class": "bg-secondary text-white",
  colspan: "1"
};
var _hoisted_46 = {
  key: 0
};
var _hoisted_47 = {
  key: 1
};
var _hoisted_48 = ["id"];
var _hoisted_49 = ["value"];
var _hoisted_50 = {
  "class": "bg-secondary text-white",
  colspan: "1"
};
var _hoisted_51 = ["id"];
var _hoisted_52 = {
  id: "rationale"
};
var _hoisted_53 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_54 = {
  "class": "ql-container ql-snow",
  style: {
    "pointer-events": "none"
  }
};
var _hoisted_55 = ["innerHTML"];
var _hoisted_56 = {
  id: "objective"
};
var _hoisted_57 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_58 = {
  "class": "ql-container ql-snow",
  style: {
    "pointer-events": "none"
  }
};
var _hoisted_59 = ["innerHTML"];
var _hoisted_60 = {
  id: "beneficiaries"
};
var _hoisted_61 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_62 = {
  "class": "ql-container ql-snow",
  style: {
    "pointer-events": "none"
  }
};
var _hoisted_63 = ["innerHTML"];
var _hoisted_64 = {
  id: "implementation_workplan"
};
var _hoisted_65 = {
  style: {
    "overflow-x": "auto",
    "width": "100%"
  }
};
var _hoisted_66 = {
  "class": "table table-hover table-bordered border-dark"
};
var _hoisted_67 = {
  key: 0,
  style: {
    "background-color": "lightgrey",
    "font-weight": "bold"
  }
};
var _hoisted_68 = ["onClick"];
var _hoisted_69 = ["onClick"];
var _hoisted_70 = ["onUpdate:modelValue", "onChange"];
var _hoisted_71 = {
  key: 0
};
var _hoisted_72 = {
  key: 0
};
var _hoisted_73 = {
  key: 0
};
var _hoisted_74 = {
  key: 0
};
var _hoisted_75 = {
  key: 1
};
var _hoisted_76 = {
  key: 2
};
var _hoisted_77 = {
  key: 0
};
var _hoisted_78 = {
  key: 0
};
var _hoisted_79 = {
  key: 0
};
var _hoisted_80 = {
  key: 0
};
var _hoisted_81 = {
  key: 0
};
var _hoisted_82 = {
  "class": "text-end"
};
var _hoisted_83 = {
  key: 0
};
var _hoisted_84 = {
  key: 0
};
var _hoisted_85 = {
  key: 0
};
var _hoisted_86 = ["id"];
var _hoisted_87 = ["onUpdate:modelValue", "onChange"];
var _hoisted_88 = {
  "class": "d-flex justify-content-between align-items-center w-100"
};
var _hoisted_89 = ["onUpdate:modelValue", "onChange"];
var _hoisted_90 = ["onClick"];
var _hoisted_91 = ["onClick"];
var _hoisted_92 = ["onClick"];
var _hoisted_93 = ["onClick"];
var _hoisted_94 = {
  key: 0,
  style: {
    "height": "100%"
  }
};
var _hoisted_95 = ["onUpdate:modelValue", "onChange"];
var _hoisted_96 = ["id"];
var _hoisted_97 = ["onUpdate:modelValue", "onChange"];
var _hoisted_98 = ["onClick"];
var _hoisted_99 = ["onClick"];
var _hoisted_100 = {
  colspan: "4",
  style: {
    "width": "32%",
    "padding": "0",
    "border": "1px solid #000",
    "vertical-align": "top"
  }
};
var _hoisted_101 = {
  style: {
    "display": "flex",
    "flex-direction": "column",
    "height": "100%",
    "min-height": "100%"
  }
};
var _hoisted_102 = {
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
var _hoisted_103 = ["id"];
var _hoisted_104 = {
  key: 0
};
var _hoisted_105 = ["id", "onUpdate:modelValue", "onChange"];
var _hoisted_106 = {
  key: 0
};
var _hoisted_107 = ["onClick"];
var _hoisted_108 = ["onClick"];
var _hoisted_109 = ["id", "rowspan"];
var _hoisted_110 = {
  key: 0
};
var _hoisted_111 = ["onUpdate:modelValue", "onChange"];
var _hoisted_112 = ["onClick"];
var _hoisted_113 = ["onClick"];
var _hoisted_114 = ["rowspan"];
var _hoisted_115 = {
  key: 0
};
var _hoisted_116 = ["onUpdate:modelValue", "id", "onChange"];
var _hoisted_117 = ["onClick"];
var _hoisted_118 = ["onClick"];
var _hoisted_119 = ["onUpdate:modelValue", "onChange", "id"];
var _hoisted_120 = ["onClick"];
var _hoisted_121 = ["onClick"];
var _hoisted_122 = {
  "class": "align-top",
  style: {
    "width": "25%",
    "border": "1px solid #000",
    "padding": "4px"
  }
};
var _hoisted_123 = ["id", "onUpdate:modelValue", "onChange"];
var _hoisted_124 = ["onClick"];
var _hoisted_125 = ["onClick"];
var _hoisted_126 = ["id"];
var _hoisted_127 = ["onUpdate:modelValue", "onChange"];
var _hoisted_128 = ["onClick"];
var _hoisted_129 = ["onClick"];
var _hoisted_130 = {
  "class": "m-0",
  style: {
    "border-collapse": "collapse",
    "width": "100%",
    "height": "100%",
    "table-layout": "fixed"
  }
};
var _hoisted_131 = ["id", "rowspan"];
var _hoisted_132 = {
  key: 0
};
var _hoisted_133 = ["onUpdate:modelValue", "onChange"];
var _hoisted_134 = ["onClick"];
var _hoisted_135 = ["onClick"];
var _hoisted_136 = ["rowspan"];
var _hoisted_137 = {
  key: 0
};
var _hoisted_138 = ["id"];
var _hoisted_139 = ["onUpdate:modelValue", "onChange"];
var _hoisted_140 = ["onClick"];
var _hoisted_141 = ["onClick"];
var _hoisted_142 = {
  key: 1
};
var _hoisted_143 = ["id"];
var _hoisted_144 = ["onUpdate:modelValue", "onChange"];
var _hoisted_145 = ["onClick"];
var _hoisted_146 = ["onClick"];
var _hoisted_147 = ["id"];
var _hoisted_148 = {
  key: 0
};
var _hoisted_149 = ["onUpdate:modelValue", "onChange"];
var _hoisted_150 = ["onUpdate:modelValue", "onChange"];
var _hoisted_151 = ["onUpdate:modelValue", "onChange"];
var _hoisted_152 = ["onUpdate:modelValue", "onChange"];
var _hoisted_153 = ["onClick"];
var _hoisted_154 = ["onClick"];
var _hoisted_155 = ["id"];
var _hoisted_156 = {
  key: 0
};
var _hoisted_157 = ["onUpdate:modelValue", "onChange"];
var _hoisted_158 = ["onUpdate:modelValue", "onChange"];
var _hoisted_159 = ["onUpdate:modelValue", "onChange"];
var _hoisted_160 = ["onUpdate:modelValue", "onChange"];
var _hoisted_161 = ["onClick"];
var _hoisted_162 = ["onClick"];
var _hoisted_163 = ["id"];
var _hoisted_164 = {
  key: 0
};
var _hoisted_165 = ["onUpdate:modelValue", "onChange"];
var _hoisted_166 = ["onUpdate:modelValue", "onChange"];
var _hoisted_167 = ["onUpdate:modelValue", "onChange"];
var _hoisted_168 = ["onUpdate:modelValue", "onChange"];
var _hoisted_169 = ["onClick"];
var _hoisted_170 = ["onClick"];
var _hoisted_171 = ["id"];
var _hoisted_172 = {
  key: 0
};
var _hoisted_173 = ["onUpdate:modelValue", "onChange"];
var _hoisted_174 = ["onUpdate:modelValue", "onChange"];
var _hoisted_175 = ["onUpdate:modelValue", "onChange"];
var _hoisted_176 = ["onUpdate:modelValue", "onChange"];
var _hoisted_177 = ["onClick"];
var _hoisted_178 = ["onClick"];
var _hoisted_179 = ["value"];
var _hoisted_180 = ["value"];
var _hoisted_181 = ["value"];
var _hoisted_182 = ["value"];
var _hoisted_183 = ["id"];
var _hoisted_184 = {
  key: 0
};
var _hoisted_185 = ["onClick"];
var _hoisted_186 = ["onClick"];
var _hoisted_187 = ["id"];
var _hoisted_188 = {
  key: 0
};
var _hoisted_189 = ["onUpdate:modelValue", "onChange"];
var _hoisted_190 = ["onClick"];
var _hoisted_191 = ["onClick"];
var _hoisted_192 = ["onClick"];
var _hoisted_193 = ["onClick"];
var _hoisted_194 = ["onClick"];
var _hoisted_195 = ["onClick"];
var _hoisted_196 = ["id"];
var _hoisted_197 = ["id"];
var _hoisted_198 = ["id"];
var _hoisted_199 = ["id"];
var _hoisted_200 = {
  id: "budgetary_requirements"
};
var _hoisted_201 = {
  "class": "table table-bordered"
};
var _hoisted_202 = {
  key: 0
};
var _hoisted_203 = {
  "class": "table-primary"
};
var _hoisted_204 = {
  colspan: "8",
  "class": "fw-bold text-uppercase"
};
var _hoisted_205 = {
  "class": "table-secondary"
};
var _hoisted_206 = {
  colspan: "7",
  "class": "fw-bold"
};
var _hoisted_207 = {
  "class": "d-flex justify-content-between align-items-center w-100"
};
var _hoisted_208 = ["onClick"];
var _hoisted_209 = ["id"];
var _hoisted_210 = ["onUpdate:modelValue", "onChange"];
var _hoisted_211 = ["onClick"];
var _hoisted_212 = ["onClick"];
var _hoisted_213 = ["id"];
var _hoisted_214 = ["onUpdate:modelValue", "onChange"];
var _hoisted_215 = ["onClick"];
var _hoisted_216 = ["onClick"];
var _hoisted_217 = {
  key: 0
};
var _hoisted_218 = ["id"];
var _hoisted_219 = ["onUpdate:modelValue", "onChange"];
var _hoisted_220 = ["onClick"];
var _hoisted_221 = ["onClick"];
var _hoisted_222 = ["id"];
var _hoisted_223 = ["onUpdate:modelValue", "onChange"];
var _hoisted_224 = ["onClick"];
var _hoisted_225 = ["onClick"];
var _hoisted_226 = ["onClick"];
var _hoisted_227 = {
  key: 0
};
var _hoisted_228 = {
  colspan: "8",
  "class": "text-center text-muted"
};
var _hoisted_229 = {
  "class": "fw-bold bg-light"
};
var _hoisted_230 = {
  colspan: "2"
};
var _hoisted_231 = {
  key: 0
};
var _hoisted_232 = {
  key: 0
};
var _hoisted_233 = ["id"];
var _hoisted_234 = {
  key: 0
};
var _hoisted_235 = {
  id: "implementing_team"
};
var _hoisted_236 = {
  align: "justify",
  style: {
    "white-space": "pre-line"
  }
};
var _hoisted_237 = {
  table: "",
  name: "tabel",
  "class": "table table-hover table-bordered border-dark"
};
var _hoisted_238 = ["id"];
var _hoisted_239 = ["onClick"];
var _hoisted_240 = ["onClick"];
var _hoisted_241 = ["id"];
var _hoisted_242 = ["onClick"];
var _hoisted_243 = ["onClick"];
var _hoisted_244 = ["id"];
var _hoisted_245 = {
  key: 0
};
var _hoisted_246 = {
  key: 1
};
var _hoisted_247 = ["onClick"];
var _hoisted_248 = ["onClick"];
var _hoisted_249 = ["id"];
var _hoisted_250 = ["onClick"];
var _hoisted_251 = ["onClick"];
var _hoisted_252 = {
  id: "partnership_sustainability"
};
var _hoisted_253 = {
  align: "justify",
  style: {
    "white-space": "pre-line"
  }
};
var _hoisted_254 = {
  id: "monitoring_evaluation"
};
var _hoisted_255 = {
  align: "justify",
  style: {
    "white-space": "pre-line"
  }
};
var _hoisted_256 = {
  table: "",
  name: "tabel",
  "class": "table table-hover table-bordered border-dark"
};
var _hoisted_257 = ["id"];
var _hoisted_258 = ["onUpdate:modelValue", "onChange"];
var _hoisted_259 = ["onClick"];
var _hoisted_260 = ["onClick"];
var _hoisted_261 = ["id"];
var _hoisted_262 = ["onUpdate:modelValue", "onChange"];
var _hoisted_263 = ["onClick"];
var _hoisted_264 = ["onClick"];
var _hoisted_265 = ["id"];
var _hoisted_266 = ["onUpdate:modelValue", "onChange"];
var _hoisted_267 = ["onClick"];
var _hoisted_268 = ["onClick"];
var _hoisted_269 = ["id"];
var _hoisted_270 = ["onUpdate:modelValue", "onChange"];
var _hoisted_271 = ["onClick"];
var _hoisted_272 = ["onClick"];
var _hoisted_273 = ["onClick"];
var _hoisted_274 = {
  id: "risk_management"
};
var _hoisted_275 = {
  align: "justify",
  style: {
    "white-space": "pre-line"
  }
};
var _hoisted_276 = {
  table: "",
  name: "tabel",
  "class": "table table-hover table-bordered border-dark"
};
var _hoisted_277 = ["id"];
var _hoisted_278 = ["onClick"];
var _hoisted_279 = ["onClick"];
var _hoisted_280 = ["id"];
var _hoisted_281 = ["onClick"];
var _hoisted_282 = ["onClick"];
var _hoisted_283 = ["id"];
var _hoisted_284 = ["onClick"];
var _hoisted_285 = ["onClick"];
var _hoisted_286 = ["onClick"];
var _hoisted_287 = {
  id: "signatories"
};
var _hoisted_288 = {
  id: "signatories",
  "class": "signatory-grid"
};
var _hoisted_289 = ["onUpdate:modelValue", "onChange", "id"];
var _hoisted_290 = {
  key: 0
};
var _hoisted_291 = {
  key: 1
};
var _hoisted_292 = {
  key: 0
};
var _hoisted_293 = ["onClick"];
var _hoisted_294 = ["onClick"];
var _hoisted_295 = ["id"];
var _hoisted_296 = ["onUpdate:modelValue", "id", "onChange"];
var _hoisted_297 = ["onClick"];
var _hoisted_298 = ["onClick"];
var _hoisted_299 = ["id"];
var _hoisted_300 = ["onUpdate:modelValue", "onChange"];
var _hoisted_301 = ["onClick"];
var _hoisted_302 = ["onClick"];
var _hoisted_303 = ["onClick"];
var _hoisted_304 = {
  "class": "col-3"
};
var _hoisted_305 = {
  key: 0,
  "class": "sticky-comments"
};
var _hoisted_306 = {
  key: 0,
  style: {
    "color": "red"
  },
  "class": "blink"
};
var _hoisted_307 = {
  "class": "tab"
};
var _hoisted_308 = {
  key: 0,
  style: {
    "color": "red"
  },
  "class": "blink"
};
var _hoisted_309 = {
  key: 0
};
var _hoisted_310 = {
  "class": "scrollable-text"
};
var _hoisted_311 = {
  "class": "list-unstyled"
};
var _hoisted_312 = ["onClick"];
var _hoisted_313 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-x-square-fill",
  viewBox: "0 0 16 16"
};
var _hoisted_314 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-check-square-fill",
  viewBox: "0 0 16 16"
};
var _hoisted_315 = ["innerHTML"];
var _hoisted_316 = {
  key: 1
};
var _hoisted_317 = {
  "class": "scrollable-text",
  style: {
    "cursor": "pointer"
  }
};
var _hoisted_318 = {
  "class": "list-unstyled"
};
var _hoisted_319 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_320 = {
  "class": "list-unstyled"
};
var _hoisted_321 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_322 = {
  "class": "list-unstyled"
};
var _hoisted_323 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_324 = {
  "class": "list-unstyled"
};
var _hoisted_325 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_326 = {
  "class": "list-unstyled"
};
var _hoisted_327 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_328 = {
  "class": "list-unstyled"
};
var _hoisted_329 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_330 = {
  "class": "list-unstyled"
};
var _hoisted_331 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_332 = {
  "class": "list-unstyled"
};
var _hoisted_333 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_334 = {
  "class": "list-unstyled"
};
var _hoisted_335 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_336 = {
  "class": "list-unstyled"
};
var _hoisted_337 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_338 = {
  "class": "list-unstyled"
};
var _hoisted_339 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_340 = {
  key: 0
};
var _hoisted_341 = ["innerHTML"];
var _hoisted_342 = ["innerHTML"];
var _hoisted_343 = {
  key: 0
};
var _hoisted_344 = {
  key: 1
};
var _hoisted_345 = {
  key: 2
};
var _hoisted_346 = {
  "class": "col-9"
};
var _hoisted_347 = {
  "class": "table table-hover table-bordered border-dark"
};
var _hoisted_348 = {
  key: 0,
  "class": "bg-secondary text-white"
};
var _hoisted_349 = {
  key: 0
};
var _hoisted_350 = {
  "class": "bg-white p-3 rounded border"
};
var _hoisted_351 = ["innerHTML"];
var _hoisted_352 = ["onClick"];
var _hoisted_353 = ["disabled", "onClick"];
var _hoisted_354 = ["onClick"];
var _hoisted_355 = {
  key: 0
};
var _hoisted_356 = ["onClick"];
var _hoisted_357 = ["onClick"];
var _hoisted_358 = ["onClick"];
var _hoisted_359 = {
  "class": "p-3"
};
var _hoisted_360 = {
  "class": "mb-3"
};
var _hoisted_361 = {
  "class": "mb-3"
};
var _hoisted_362 = {
  "class": "mb-3"
};
var _hoisted_363 = {
  "class": "mb-3"
};
var _hoisted_364 = {
  "class": "mb-3"
};
var _hoisted_365 = {
  "class": "mb-3"
};
var _hoisted_366 = {
  "class": "mb-3"
};
var _hoisted_367 = {
  "class": "table table-sm table-borderless table-hover",
  style: {
    "border-color": "#000",
    "border-width": "2px"
  }
};
var _hoisted_368 = ["onUpdate:modelValue"];
var _hoisted_369 = ["onUpdate:modelValue"];
var _hoisted_370 = ["onClick"];
var _hoisted_371 = {
  "class": "table table-sm table-bordered table-hover"
};
var _hoisted_372 = ["onUpdate:modelValue"];
var _hoisted_373 = ["onUpdate:modelValue"];
var _hoisted_374 = ["onUpdate:modelValue"];
var _hoisted_375 = ["onUpdate:modelValue"];
var _hoisted_376 = ["onUpdate:modelValue"];
var _hoisted_377 = ["onUpdate:modelValue"];
var _hoisted_378 = ["onUpdate:modelValue"];
var _hoisted_379 = ["onUpdate:modelValue"];
var _hoisted_380 = ["onUpdate:modelValue"];
var _hoisted_381 = ["onUpdate:modelValue"];
var _hoisted_382 = ["onUpdate:modelValue"];
var _hoisted_383 = ["onUpdate:modelValue"];
var _hoisted_384 = ["onUpdate:modelValue"];
var _hoisted_385 = ["onUpdate:modelValue"];
var _hoisted_386 = ["onUpdate:modelValue"];
var _hoisted_387 = ["onUpdate:modelValue"];
var _hoisted_388 = ["onUpdate:modelValue"];
var _hoisted_389 = ["onUpdate:modelValue"];
var _hoisted_390 = ["onUpdate:modelValue"];
var _hoisted_391 = ["onUpdate:modelValue"];
var _hoisted_392 = ["onUpdate:modelValue"];
var _hoisted_393 = ["onClick"];
var _hoisted_394 = {
  "class": "mt-3 d-flex justify-content-between"
};
var _hoisted_395 = {
  "class": "table table-bordered"
};
var _hoisted_396 = ["onUpdate:modelValue"];
var _hoisted_397 = ["onUpdate:modelValue"];
var _hoisted_398 = ["onUpdate:modelValue"];
var _hoisted_399 = {
  "class": "text-center"
};
var _hoisted_400 = ["onClick"];
var _hoisted_401 = {
  "class": "modal-title"
};
var _hoisted_402 = {
  "class": "table table-bordered"
};
var _hoisted_403 = ["onUpdate:modelValue"];
var _hoisted_404 = ["onUpdate:modelValue"];
var _hoisted_405 = ["onUpdate:modelValue"];
var _hoisted_406 = ["onUpdate:modelValue"];
var _hoisted_407 = {
  "class": "text-center"
};
var _hoisted_408 = ["onClick"];
var _hoisted_409 = {
  "class": "my-3"
};
var _hoisted_410 = {
  "class": "table table-bordered"
};
var _hoisted_411 = ["onUpdate:modelValue"];
var _hoisted_412 = ["onUpdate:modelValue"];
var _hoisted_413 = ["onUpdate:modelValue"];
var _hoisted_414 = ["onUpdate:modelValue"];
var _hoisted_415 = ["onClick"];
var _hoisted_416 = {
  style: {
    "border": "none !important",
    "border-collapse": "collapse !important"
  }
};
var _hoisted_417 = {
  style: {
    "border": "none !important"
  }
};
var _hoisted_418 = {
  key: 0
};
var _hoisted_419 = {
  "class": "mb-3"
};
var _hoisted_420 = {
  "class": "table table-bordered"
};
var _hoisted_421 = ["onUpdate:modelValue"];
var _hoisted_422 = ["onUpdate:modelValue"];
var _hoisted_423 = ["onUpdate:modelValue"];
var _hoisted_424 = ["onUpdate:modelValue"];
var _hoisted_425 = ["onUpdate:modelValue"];
var _hoisted_426 = ["onUpdate:modelValue"];
var _hoisted_427 = ["onClick"];
var _hoisted_428 = {
  "class": "mt-3"
};
var _hoisted_429 = {
  "class": "table table-bordered"
};
var _hoisted_430 = ["onUpdate:modelValue", "onChange"];
var _hoisted_431 = ["onUpdate:modelValue", "onChange"];
var _hoisted_432 = ["onUpdate:modelValue", "onChange"];
var _hoisted_433 = ["onUpdate:modelValue", "onChange"];
var _hoisted_434 = ["onUpdate:modelValue", "onChange"];
var _hoisted_435 = ["onUpdate:modelValue", "onChange"];
var _hoisted_436 = ["onClick"];
var _hoisted_437 = {
  key: 0,
  "class": "table table-bordered w-100",
  style: {
    "width": "100%"
  }
};
var _hoisted_438 = ["onUpdate:modelValue"];
var _hoisted_439 = ["onClick"];
var _hoisted_440 = {
  "class": "mt-2"
};
var _hoisted_441 = {
  "class": "table table-bordered w-100",
  style: {
    "width": "100%"
  }
};
var _hoisted_442 = ["onUpdate:modelValue", "onChange"];
var _hoisted_443 = ["onClick"];
var _hoisted_444 = {
  colspan: "5",
  style: {
    "background-color": "#2b1402"
  }
};
var _hoisted_445 = {
  rowspan: "2"
};
var _hoisted_446 = ["id"];
var _hoisted_447 = ["id"];
var _hoisted_448 = {
  colspan: "2"
};
var _hoisted_449 = {
  colspan: "2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  var _component_QuillEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("QuillEditor");
  var _component_multiselect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("multiselect");
  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");
  var _component_SmallModalComments = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SmallModalComments");
  var _component_CommentModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CommentModal");
  var _component_BudgetModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BudgetModal");
  var _component_StrategyModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("StrategyModal");
  var _component_ActivityModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ActivityModal");
  var _component_TeamModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TeamModal");
  var _component_RiskManagementModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RiskManagementModal");
  var _component_MonitoringModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MonitoringModal");
  var _component_SignatoryModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SignatoryModal");
  var _component_ExpectedOutputModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ExpectedOutputModal");
  var _component_ExpectedOutcomeModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ExpectedOutcomeModal");
  var _component_ActivityModalEdit = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ActivityModalEdit");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[261] || (_cache[261] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Edit Project Profile", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_cache[264] || (_cache[264] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "v1", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pageTitle) + " Project ", 1 /* TEXT */), $props.editData.type === 'p' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_3, "Profile")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.editData.type === 'd' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_4, "Design")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.editData.type === 'sip' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_5, "Profile (SIP)")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $props.source == 'direct' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    href: "/revision/0?source=direct"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[262] || (_cache[262] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 1,
    href: "/revision/".concat($props.idpaps)
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[263] || (_cache[263] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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
  }, 8 /* PROPS */, ["href"]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ form }}\n        {{ selPaps }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_cache[394] || (_cache[394] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    required: ""
  }, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_cache[265] || (_cache[265] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "ID", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.form.id = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.id]]), $data.form.errors.id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.idooe), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _ctx.getImagePath('logo.png'),
    alt: "",
    "class": "img-fluid",
    style: {
      "width": "100px",
      "height": "100px"
    }
  }, null, 8 /* PROPS */, _hoisted_10)]), _cache[395] || (_cache[395] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex justify-content-center"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" REPUBLIC OF THE PHILIPPINES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" PROVINCE OF DAVAO DE ORO ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.office.office), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_13, [$props.editData.type === 'p' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, "PROJECT PROFILE")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, "PROJECT DESIGN"))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[266] || (_cache[266] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Year: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.form.year_period = $event;
    }),
    "class": "form-select d-inline-block w-auto",
    autocomplete: "chrome-off"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.my_years, function (yr) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: yr
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(yr), 9 /* TEXT, PROPS */, _hoisted_16);
  }), 256 /* UNKEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.year_period]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{form}} ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [_cache[268] || (_cache[268] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("I.    ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[267] || (_cache[267] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Title", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" I. TITLE************************************************************* "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("TITLE*************************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_20, [_cache[269] || (_cache[269] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Title ", -1 /* CACHED */)), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.handleClick('Title', $data.form.project_title, $data.form.project_title, 'project_title', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $data.form.project_title, $data.form.project_title, 'project_title', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.handleClick('Title', $data.form.project_title, $data.form.project_title, 'project_title', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "6",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $data.form.project_title, $data.form.project_title, 'project_title', 'revision_plans', $data.paps, $data.paps.comments)
    }),
    id: $data.paps.id + '_revision_plans_project_title'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "form-control transparent-bg",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.form.project_title = $event;
    }),
    type: "text",
    onInput: _cache[5] || (_cache[5] = function ($event) {
      return $options.setUnsaved(true);
    }),
    onChange: _cache[6] || (_cache[6] = function ($event) {
      return $options.updateRevisionPlans('revision_plans', 'project_title', $data.form.id, $data.form.project_title);
    })
  }, "                                            " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.project_title) + "\n                                    ", 545 /* TEXT, NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.project_title]])], 10 /* CLASS, PROPS */, _hoisted_21)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("PROJECT LOCATION*************************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_22, [_cache[270] || (_cache[270] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Project Location ", -1 /* CACHED */)), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $options.handleClick('Title', $data.paps.project_location, $data.paps.project_location, 'project_location', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $data.paps.project_location, $data.paps.project_location, 'project_location', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $options.handleClick('Title', $data.paps.project_location, $data.paps.project_location, 'project_location', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "6",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $data.paps.project_location, $data.paps.project_location, 'project_location', 'revision_plans', $data.paps, $data.paps.comments)
    }),
    id: $data.paps.id + '_revision_plans_project_location'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "form-control transparent-bg",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.form.project_location = $event;
    }),
    type: "text",
    onInput: _cache[10] || (_cache[10] = function ($event) {
      return $options.setUnsaved(true);
    }),
    onChange: _cache[11] || (_cache[11] = function ($event) {
      return $options.updateRevisionPlans('revision_plans', 'project_location', $data.form.id, $data.form.project_location);
    })
  }, "                                            " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.project_location) + "\n                                    ", 545 /* TEXT, NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.project_location]])], 10 /* CLASS, PROPS */, _hoisted_23)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("LIST OF LGUs Covered*************************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_24, [_cache[271] || (_cache[271] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("List of LGUs Covered ", -1 /* CACHED */)), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[12] || (_cache[12] = function ($event) {
      return $options.handleClick('Title', $data.paps.list_of_lgu_covered, $data.paps.list_of_lgu_covered, 'list_of_lgu_covered', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $data.paps.list_of_lgu_covered, $data.paps.list_of_lgu_covered, 'list_of_lgu_covered', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[13] || (_cache[13] = function ($event) {
      return $options.handleClick('Title', $data.paps.list_of_lgu_covered, $data.paps.list_of_lgu_covered, 'list_of_lgu_covered', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "6",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $data.paps.list_of_lgu_covered, $data.paps.list_of_lgu_covered, 'list_of_lgu_covered', 'revision_plans', $data.paps, $data.paps.comments)
    }),
    id: $data.paps.id + '_revision_plans_list_of_lgu_covered'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "form-control transparent-bg",
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $data.form.list_of_lgu_covered = $event;
    }),
    type: "text",
    onInput: _cache[15] || (_cache[15] = function ($event) {
      return $options.setUnsaved(true);
    }),
    onChange: _cache[16] || (_cache[16] = function ($event) {
      return $options.updateRevisionPlans('revision_plans', 'list_of_lgu_covered', $data.form.id, $data.form.list_of_lgu_covered);
    })
  }, "                                            " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.list_of_lgu_covered) + "\n                                    ", 545 /* TEXT, NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.list_of_lgu_covered]])], 10 /* CLASS, PROPS */, _hoisted_25)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("IMPLEMENTATION SCHEDULE*************************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[274] || (_cache[274] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "bg-secondary text-white",
    colspan: "1"
  }, "Implementation Schedule", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_26, [_cache[272] || (_cache[272] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Start ", -1 /* CACHED */)), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[17] || (_cache[17] = function ($event) {
      return $options.handleClick('Title', $data.paps.date_start, $data.paps.date_start, 'date_start', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $data.paps.date_start, $data.paps.date_start, 'date_start', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[18] || (_cache[18] = function ($event) {
      return $options.handleClick('Title', $data.paps.date_start, $data.paps.date_start, 'date_start', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    id: $data.paps.id + '_revision_plans_date_start',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $data.paps.date_start, $data.paps.date_start, 'date_start', 'revision_plans', $data.paps, $data.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    type: "date",
    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
      return $data.form.date_start = $event;
    }),
    onChange: _cache[20] || (_cache[20] = function ($event) {
      return $options.updateRevisionPlans('revision_plans', 'date_start', $data.form.id, $data.form.date_start);
    })
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.date_start]])], 10 /* CLASS, PROPS */, _hoisted_27), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_28, [_cache[273] || (_cache[273] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" End ", -1 /* CACHED */)), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[21] || (_cache[21] = function ($event) {
      return $options.handleClick('Title', $data.paps.date_end, $data.paps.date_end, 'date_end', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $data.paps.date_end, $data.paps.date_end, 'date_end', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[22] || (_cache[22] = function ($event) {
      return $options.handleClick('Title', $data.paps.date_end, $data.paps.date_end, 'date_end', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    id: $data.paps.id + '_revision_plans_date_end',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $data.paps.date_end, $data.paps.date_end, 'date_end', 'revision_plans', $data.paps, $data.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control",
    type: "date",
    "onUpdate:modelValue": _cache[23] || (_cache[23] = function ($event) {
      return $data.form.date_end = $event;
    }),
    onChange: _cache[24] || (_cache[24] = function ($event) {
      return $options.updateRevisionPlans('revision_plans', 'date_end', $data.form.id, $data.form.date_end);
    })
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.date_end]])], 10 /* CLASS, PROPS */, _hoisted_29)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("INTENDED BENEFICIARIES******************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[277] || (_cache[277] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "bg-secondary text-white",
    colspan: "1"
  }, "Intended Beneficiaries", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_30, [_cache[275] || (_cache[275] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Male ", -1 /* CACHED */)), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[25] || (_cache[25] = function ($event) {
      return $options.handleClick('Title', $data.paps.beneficiary_male, $data.paps.beneficiary_male, 'beneficiary_male', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $data.paps.beneficiary_male, $data.paps.beneficiary_male, 'beneficiary_male', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[26] || (_cache[26] = function ($event) {
      return $options.handleClick('Title', $data.paps.beneficiary_male, $data.paps.beneficiary_male, 'beneficiary_male', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    id: $data.paps.id + '_revision_plans_beneficiary_male',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $data.paps.beneficiary_male, $data.paps.beneficiary_male, 'beneficiary_male', 'revision_plans', $data.paps, $data.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "form-control transparent-bg",
    "onUpdate:modelValue": _cache[27] || (_cache[27] = function ($event) {
      return $data.form.beneficiary_male = $event;
    }),
    type: "text",
    onInput: _cache[28] || (_cache[28] = function ($event) {
      return $options.setUnsaved(true);
    }),
    onChange: _cache[29] || (_cache[29] = function ($event) {
      return $options.updateRevisionPlans('revision_plans', 'beneficiary_male', $data.form.id, $data.form.beneficiary_male);
    })
  }, "                                            " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.beneficiary_male) + "\n                                    ", 545 /* TEXT, NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.beneficiary_male]])], 10 /* CLASS, PROPS */, _hoisted_31), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_32, [_cache[276] || (_cache[276] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Female ", -1 /* CACHED */)), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[30] || (_cache[30] = function ($event) {
      return $options.handleClick('Title', $data.paps.beneficiary_female, $data.paps.beneficiary_female, 'beneficiary_female', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $data.paps.beneficiary_female, $data.paps.beneficiary_female, 'beneficiary_female', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[31] || (_cache[31] = function ($event) {
      return $options.handleClick('Title', $data.paps.beneficiary_female, $data.paps.beneficiary_female, 'beneficiary_female', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    id: $data.paps.id + '_revision_plans_beneficiary_female',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $data.paps.beneficiary_female, $data.paps.beneficiary_female, 'beneficiary_female', 'revision_plans', $data.paps, $data.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "form-control transparent-bg",
    "onUpdate:modelValue": _cache[32] || (_cache[32] = function ($event) {
      return $data.form.beneficiary_female = $event;
    }),
    type: "text",
    onInput: _cache[33] || (_cache[33] = function ($event) {
      return $options.setUnsaved(true);
    }),
    onChange: _cache[34] || (_cache[34] = function ($event) {
      return $options.updateRevisionPlans('revision_plans', 'beneficiary_female', $data.form.id, $data.form.beneficiary_female);
    })
  }, "                                            " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.beneficiary_female) + "\n                                    ", 545 /* TEXT, NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.beneficiary_female]])], 10 /* CLASS, PROPS */, _hoisted_33), _cache[278] || (_cache[278] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "1"
  }, "Total", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    id: $data.paps.id + '_revision_plans_beneficiary_total',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', _ctx.format_number_conv($data.paps.beneficiary_male + $data.paps.beneficiary_female, 0, true), _ctx.format_number_conv($data.paps.beneficiary_male + $data.paps.beneficiary_female, 0, true), 'beneficiary_total', 'revision_plans', $data.paps, $data.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat($data.form.beneficiary_male) + parseFloat($data.form.beneficiary_female), 0, true)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[35] || (_cache[35] = function ($event) {
      return $options.handleClick('Title', _ctx.format_number_conv($data.paps.beneficiary_male + $data.paps.beneficiary_female, 0, true), _ctx.format_number_conv($data.paps.beneficiary_male + $data.paps.beneficiary_female, 0, true), 'beneficiary_total', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', _ctx.format_number_conv($data.paps.beneficiary_male + $data.paps.beneficiary_female, 0, true), _ctx.format_number_conv($data.paps.beneficiary_male + $data.paps.beneficiary_female, 0, true), 'beneficiary_total', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[36] || (_cache[36] = function ($event) {
      return $options.handleClick('Title', _ctx.format_number_conv($data.paps.beneficiary_male + $data.paps.beneficiary_female, 0, true), _ctx.format_number_conv($data.paps.beneficiary_male + $data.paps.beneficiary_female, 0, true), 'beneficiary_total', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_34)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("BASELINE DISAGGREGATED DATA******************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[282] || (_cache[282] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "bg-secondary text-white",
    colspan: "1"
  }, "Baseline Disaggregated Data", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_35, [_cache[279] || (_cache[279] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Male ", -1 /* CACHED */)), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[37] || (_cache[37] = function ($event) {
      return $options.handleClick('Title', $data.paps.baseline_male, $data.paps.baseline_male, 'baseline_male', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $data.paps.baseline_male, $data.paps.baseline_male, 'baseline_male', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[38] || (_cache[38] = function ($event) {
      return $options.handleClick('Title', $data.paps.baseline_male, $data.paps.baseline_male, 'baseline_male', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    id: $data.paps.id + '_revision_plans_baseline_male',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $data.paps.baseline_male, $data.paps.baseline_male, 'baseline_male', 'revision_plans', $data.paps, $data.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "form-control transparent-bg",
    "onUpdate:modelValue": _cache[39] || (_cache[39] = function ($event) {
      return $data.form.baseline_male = $event;
    }),
    type: "text",
    onInput: _cache[40] || (_cache[40] = function ($event) {
      return $options.setUnsaved(true);
    }),
    onChange: _cache[41] || (_cache[41] = function ($event) {
      return $options.updateRevisionPlans('revision_plans', 'baseline_male', $data.form.id, $data.form.baseline_male);
    })
  }, "                                            " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.baseline_male) + "\n                                    ", 545 /* TEXT, NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.baseline_male]])], 10 /* CLASS, PROPS */, _hoisted_36), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_37, [_cache[280] || (_cache[280] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Female ", -1 /* CACHED */)), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[42] || (_cache[42] = function ($event) {
      return $options.handleClick('Title', $data.paps.baseline_female, $data.paps.baseline_female, 'baseline_female', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $data.paps.baseline_female, $data.paps.baseline_female, 'baseline_female', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[43] || (_cache[43] = function ($event) {
      return $options.handleClick('Title', $data.paps.baseline_female, $data.paps.baseline_female, 'baseline_female', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    id: $data.paps.id + '_revision_plans_baseline_female',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $data.paps.baseline_female, $data.paps.baseline_female, 'baseline_female', 'revision_plans', $data.paps, $data.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "form-control transparent-bg",
    "onUpdate:modelValue": _cache[44] || (_cache[44] = function ($event) {
      return $data.form.baseline_female = $event;
    }),
    type: "text",
    onInput: _cache[45] || (_cache[45] = function ($event) {
      return $options.setUnsaved(true);
    }),
    onChange: _cache[46] || (_cache[46] = function ($event) {
      return $options.updateRevisionPlans('revision_plans', 'baseline_female', $data.form.id, $data.form.baseline_female);
    })
  }, "                                            " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.baseline_female) + "\n                                    ", 545 /* TEXT, NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.baseline_female]])], 10 /* CLASS, PROPS */, _hoisted_38), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_39, [_cache[281] || (_cache[281] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Data Source ", -1 /* CACHED */)), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[47] || (_cache[47] = function ($event) {
      return $options.handleClick('Title', $data.paps.data_source, $data.paps.data_source, 'data_source', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $data.paps.data_source, $data.paps.data_source, 'data_source', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[48] || (_cache[48] = function ($event) {
      return $options.handleClick('Title', $data.paps.data_source, $data.paps.data_source, 'data_source', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    id: $data.paps.id + '_revision_plans_data_source',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $data.paps.data_source, $data.paps.data_source, 'data_source', 'revision_plans', $data.paps, $data.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "form-control transparent-bg",
    "onUpdate:modelValue": _cache[49] || (_cache[49] = function ($event) {
      return $data.form.data_source = $event;
    }),
    type: "text",
    onInput: _cache[50] || (_cache[50] = function ($event) {
      return $options.setUnsaved(true);
    }),
    onChange: _cache[51] || (_cache[51] = function ($event) {
      return $options.updateRevisionPlans('revision_plans', 'data_source', $data.form.id, $data.form.data_source);
    })
  }, "                                            " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.data_source) + "\n                                    ", 545 /* TEXT, NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.data_source]])], 10 /* CLASS, PROPS */, _hoisted_40), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th colspan=\"1\">Total</th>\n                                <td colspan=\"1\" :class=\"{\n                                    'text-danger': has_comment('Title',(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),'baseline_total','revision_plans', paps, paps.comments)\n                                }\">{{ format_number_conv(paps.baseline_male + paps.baseline_female, 0, true) }}\n                                    <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                        @click=\"handleClick('Title',(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),'baseline_total','revision_plans', paps, paps.comments)\">*\n                                    </button>\n                                    <button v-if=\"has_comment('Title',(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),'baseline_total','revision_plans', paps, paps.comments)\" class=\"superscript-btn\"\n                                        @click=\"handleClick('Title',(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),'baseline_total','revision_plans', paps, paps.comments)\">*\n                                    </button>\n                                </td> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("PROJECT COST*******************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[283] || (_cache[283] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "bg-secondary text-white",
    colspan: "1"
  }, "Cost of Program", -1 /* CACHED */)), _cache[284] || (_cache[284] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "1"
  }, "Amount (Php)", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Title', 'Amount', _ctx.imp_amount, 'amount', 'revision_plans', $data.paps, $data.paps.comments)
    }]),
    id: $data.paps.id + '_revision_plans_amount'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ format_number_conv(imp_amount, 2, true) }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.overallBudget.toLocaleString()) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[52] || (_cache[52] = function ($event) {
      return $options.handleClick('Title', 'Amount', _ctx.imp_amount, 'amount', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', 'Amount', _ctx.imp_amount, 'amount', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[53] || (_cache[53] = function ($event) {
      return $options.handleClick('Title', 'Amount', _ctx.imp_amount, 'amount', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_41), _cache[285] || (_cache[285] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "1"
  }, "Attributed GAD Budget (Php) ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    id: $data.paps.id + '_revision_plans_attributed_amount',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Title', 'GAD Attributed Amount', _ctx.imp_amount, 'attributed_amount', 'revision_plans', $data.paps, $data.paps.comments)
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ format_number_conv((imp_amount * (paps.hgdg_score/20)), 2, true) }} "), parseFloat($data.paps.hgdg_score) > 4 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($options.overallBudget * ($data.paps.hgdg_score / 20), 2, true)) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ format_number_conv(getGadAttributedAmount(overallBudget, paps.hgdg_score), 2, true) }} ")])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_44, "0.00")), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 2,
    "class": "superscript-btn",
    onClick: _cache[54] || (_cache[54] = function ($event) {
      return $options.handleClick('Title', 'GAD Attributed Amount', _ctx.format_number_conv(_ctx.imp_amount * ($data.paps.hgdg_score / 20), 2, true), 'attributed_amount', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', 'GAD Attributed Amount', _ctx.format_number_conv(_ctx.imp_amount * ($data.paps.hgdg_score / 20), 2, true), 'attributed_amount', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 3,
    "class": "superscript-btn",
    onClick: _cache[55] || (_cache[55] = function ($event) {
      return $options.handleClick('Title', 'GAD Attributed Amount', _ctx.format_number_conv(_ctx.imp_amount * ($data.paps.hgdg_score / 20), 2, true), 'attributed_amount', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_42)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("HGDG*************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_45, [$data.paps.checklist ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', 'HGDG Checklist', $data.paps.checklist.box_number + ' ' + $data.paps.checklist.sector, 'HGDG Checklist', 'revision_plans', $data.paps, $data.paps.comments)
    })
  }, [_cache[286] || (_cache[286] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" HGDG Checklist ", -1 /* CACHED */)), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[56] || (_cache[56] = function ($event) {
      return $options.handleClick('Title', 'HGDG Checklist', $data.paps.checklist.box_number + ' ' + $data.paps.checklist.sector, 'HGDG Checklist', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', 'HGDG Checklist', $data.paps.checklist.box_number + ' ' + $data.paps.checklist.sector, 'HGDG Checklist', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[57] || (_cache[57] = function ($event) {
      return $options.handleClick('Title', 'HGDG Checklist', $data.paps.checklist.box_number + ' ' + $data.paps.checklist.sector, 'HGDG Checklist', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_47, " HGDG Checklist (No Checklist selected) "))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "3",
    id: $data.paps.id + '_revision_plans_HGDG Checklist'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    type: "number",
    "onUpdate:modelValue": _cache[58] || (_cache[58] = function ($event) {
      return $data.form.checklist_id = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off",
    onChange: _cache[59] || (_cache[59] = function ($event) {
      return $options.updateRevisionPlans('revision_plans', 'checklist_id', $data.form.id, $data.form.checklist_id);
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.hgdgs, function (hgdg) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: hgdg.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(hgdg.box_number) + ". " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(hgdg.sector), 9 /* TEXT, PROPS */, _hoisted_49);
  }), 256 /* UNKEYED_FRAGMENT */))], 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.checklist_id]])], 8 /* PROPS */, _hoisted_48), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/HGDGScore/".concat($data.paps.id, "?source=rev_app"),
    style: {
      "color": "white"
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[287] || (_cache[287] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("HGDG Score ", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[60] || (_cache[60] = function ($event) {
      return $options.handleClick('Title', 'HGDG Score', $data.paps.hgdg_score, 'hgdg_score', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', 'HGDG Score', $data.paps.hgdg_score, 'hgdg_score', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[61] || (_cache[61] = function ($event) {
      return $options.handleClick('Title', 'HGDG Score', $data.paps.hgdg_score, 'hgdg_score', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    id: $data.paps.id + '_revision_plans_hgdg_score',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', 'HGDG Score', $data.paps.hgdg_score, 'hgdg_score', 'revision_plans', $data.paps, $data.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.editData.hgdg_score) + " - ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getGadClassification($props.editData.hgdg_score)), 1 /* TEXT */)], 10 /* CLASS, PROPS */, _hoisted_51)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" II. RATIONALE***************************************************************************************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Rationale', 'rationale', $data.paps.rationale, 'rationale', 'revision_plans', $data.paps, $data.paps.comments)
    })
  }, [_cache[289] || (_cache[289] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("II. ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.department_code_user === '04' || _ctx.department_code_user === _ctx.department_code_project ? "/revision/edit/".concat($data.paps.id) : null,
    target: "_blank",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Rationale', 'rationale', $data.paps.rationale, 'rationale', 'revision_plans', $data.paps, $data.paps.comments)
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[288] || (_cache[288] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Rationale ", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href", "class"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[62] || (_cache[62] = function ($event) {
      return $options.handleClick('Rationale', 'rationale', $data.paps.rationale, 'rationale', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Rationale', 'rationale', $data.paps.rationale, 'rationale', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[63] || (_cache[63] = function ($event) {
      return $options.handleClick('Rationale', 'rationale', $data.paps.rationale, 'rationale', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */)]), _cache[291] || (_cache[291] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Toolbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [_cache[290] || (_cache[290] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"ql-toolbar ql-snow\"><span class=\"ql-formats\"><button class=\"ql-bold\"></button><button class=\"ql-italic\"></button><button class=\"ql-underline\"></button></span><span class=\"ql-formats\"><button class=\"ql-list\" value=\"ordered\"></button><button class=\"ql-list\" value=\"bullet\"></button></span><span class=\"ql-formats\"><button class=\"ql-link\"></button></span></div>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "ql-editor",
    ref: "rationaleEl",
    innerHTML: $props.editData.rationale
  }, null, 8 /* PROPS */, _hoisted_55)], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.briefRationale]]), !$data.briefRationale ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_QuillEditor, {
    key: 0,
    theme: "snow",
    content: $data.form.rationale,
    "onUpdate:content": [_cache[64] || (_cache[64] = function ($event) {
      return $data.form.rationale = $event;
    }), _cache[65] || (_cache[65] = function (val) {
      return $options.updateRevisionPlans('revision_plans', 'rationale', $data.form.id, val);
    })],
    contentType: "html",
    ref: "rationaleQuill"
  }, null, 8 /* PROPS */, ["content"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _cache[292] || (_cache[292] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("III. OBJECTIVES ****************************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Objectives', 'objective', $data.paps.objective, 'objective', 'revision_plans', $data.paps, $data.paps.comments)
    })
  }, [_cache[294] || (_cache[294] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("III. ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.department_code_user === '04' || _ctx.department_code_user === _ctx.department_code_project ? "/revision/edit/".concat($data.paps.id) : null,
    target: "_blank",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Objectives', 'objective', $data.paps.objective, 'objective', 'revision_plans', $data.paps, $data.paps.comments)
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[293] || (_cache[293] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Objectives ", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href", "class"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[66] || (_cache[66] = function ($event) {
      return $options.handleClick('Objectives', 'objective', $data.paps.objective, 'objective', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Objectives', 'objective', $data.paps.objective, 'objective', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[67] || (_cache[67] = function ($event) {
      return $options.handleClick('Objectives', 'objective', $data.paps.objective, 'objective', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */)]), _cache[296] || (_cache[296] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [_cache[295] || (_cache[295] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"ql-toolbar ql-snow\"><span class=\"ql-formats\"><button class=\"ql-bold\"></button><button class=\"ql-italic\"></button><button class=\"ql-underline\"></button></span><span class=\"ql-formats\"><button class=\"ql-list\" value=\"ordered\"></button><button class=\"ql-list\" value=\"bullet\"></button></span><span class=\"ql-formats\"><button class=\"ql-link\"></button></span></div>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    ref: "objectiveEl",
    "class": "ql-editor",
    innerHTML: $props.editData.objective
  }, null, 8 /* PROPS */, _hoisted_59)], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.briefObjective]]), !$data.briefObjective ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_QuillEditor, {
    key: 0,
    theme: "snow",
    content: $data.form.objective,
    "onUpdate:content": [_cache[68] || (_cache[68] = function ($event) {
      return $data.form.objective = $event;
    }), _cache[69] || (_cache[69] = function (val) {
      return $options.updateRevisionPlans('revision_plans', 'objective', $data.form.id, val);
    })],
    contentType: "html",
    ref: "rationaleQuill",
    toolbar: "essential"
  }, null, 8 /* PROPS */, ["content"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _cache[297] || (_cache[297] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("IV. TARGET BENEFICIARIES *******************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Beneficiaries', 'beneficiaries', $data.paps.beneficiaries, 'beneficiaries', 'revision_plans', $data.paps, $data.paps.comments)
    })
  }, [_cache[299] || (_cache[299] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("IV. ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.department_code_user === '04' || _ctx.department_code_user === _ctx.department_code_project ? "/revision/edit/".concat($data.paps.id) : null,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Beneficiaries', 'beneficiaries', $data.paps.beneficiaries, 'beneficiaries', 'revision_plans', $data.paps, $data.paps.comments)
    }),
    target: "_blank"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[298] || (_cache[298] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Target Beneficiaries ", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href", "class"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[70] || (_cache[70] = function ($event) {
      return $options.handleClick('Beneficiaries', 'beneficiaries', $data.paps.beneficiaries, 'beneficiaries', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Beneficiaries', 'beneficiaries', $data.paps.beneficiaries, 'beneficiaries', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[71] || (_cache[71] = function ($event) {
      return $options.handleClick('Beneficiaries', 'beneficiaries', $data.paps.beneficiaries, 'beneficiaries', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */)]), _cache[301] || (_cache[301] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [_cache[300] || (_cache[300] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"ql-toolbar ql-snow\"><span class=\"ql-formats\"><button class=\"ql-bold\"></button><button class=\"ql-italic\"></button><button class=\"ql-underline\"></button></span><span class=\"ql-formats\"><button class=\"ql-list\" value=\"ordered\"></button><button class=\"ql-list\" value=\"bullet\"></button></span><span class=\"ql-formats\"><button class=\"ql-link\"></button></span></div>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    ref: "beneficiariesEl",
    "class": "ql-editor",
    innerHTML: $props.editData.beneficiaries
  }, null, 8 /* PROPS */, _hoisted_63), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.briefBeneficiaries]])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.briefBeneficiaries]]), !$data.briefBeneficiaries ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_QuillEditor, {
    key: 0,
    theme: "snow",
    content: $data.form.beneficiaries,
    "onUpdate:content": [_cache[72] || (_cache[72] = function ($event) {
      return $data.form.beneficiaries = $event;
    }), _cache[73] || (_cache[73] = function (val) {
      return $options.updateRevisionPlans('revision_plans', 'beneficiaries', $data.form.id, val);
    })],
    contentType: "html",
    ref: "objectiveQuill",
    toolbar: "essential"
  }, null, 8 /* PROPS */, ["content"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _cache[302] || (_cache[302] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("V. IMPLEMENTATION SCHEDULE/WORKPLAN *******************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /strategies-and-activities/${dat.id} "), _cache[304] || (_cache[304] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" V. ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.department_code_user === '04' || _ctx.department_code_user === _ctx.department_code_project ? "/strategies-and-activities/".concat($data.paps.id) : null,
    target: "_blank"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[303] || (_cache[303] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Implementation Schedule/Workplan ", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" v-if=\"editData.type === 'p'\"/= "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm text-white",
    onClick: _cache[74] || (_cache[74] = function ($event) {
      return $options.showStrategyModal();
    })
  }, " Add Strategies ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" class=\"table-responsive\" style=\"max-height: 500px; overflow-y: auto;\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [_cache[342] || (_cache[342] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("em", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Use the "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "numeric SEQ#"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" to order strategies and activities from lowest to highest. After making changes, click outside the field and refresh the page ("), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Ctrl+R"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(") to apply them.")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_66, [_cache[341] || (_cache[341] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
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
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" STRATEGIES***************************************************************************************************** "), $data.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(), 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_68)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_69)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
      "class": "form-control transparent-bg",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return dat.description = $event;
      },
      type: "text",
      onInput: _cache[75] || (_cache[75] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateRevisionPlans('strategies', 'description', dat.id, dat.description);
      }
    }, "                                                        " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.description) + "\n                                                ", 41 /* TEXT, PROPS, NEED_HYDRATION */, _hoisted_70), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, dat.description]])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Implementation Plan', 'strategies', dat.description, 'target_indicator', 'strategy_projects', dat, dat.comments)
      })
    }, [$data.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.target_indicator), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$data.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_72, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.gad_issue), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$data.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_73, [dat.date_from ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_74, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(dat.date_from)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), dat.date_from && dat.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_75, " to ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), dat.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_76, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(dat.date_to)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$data.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_77, [dat.strategyProject[0] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 0
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(((_dat$strategyProject$ = dat.strategyProject[0]) === null || _dat$strategyProject$ === void 0 ? void 0 : _dat$strategyProject$.expected_output) || [], function (eo) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(eo.description), 1 /* TEXT */), _cache[305] || (_cache[305] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */))]);
    }), 256 /* UNKEYED_FRAGMENT */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(((_dat$strategyProject$2 = dat.strategyProject[0]) === null || _dat$strategyProject$2 === void 0 ? void 0 : _dat$strategyProject$2.expected_outcome) || [], function (eo) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(eo.description), 1 /* TEXT */), _cache[306] || (_cache[306] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */))]);
    }), 256 /* UNKEYED_FRAGMENT */))], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$data.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_78, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$data.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$data.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_80, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$data.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_81)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_82, [$data.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_83, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total) + parseFloat(dat.mooe_total) + parseFloat(dat.co_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$data.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_84, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.ccet_code), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$data.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_85, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.responsible), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
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
      onInput: _cache[76] || (_cache[76] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateRevisionPlans('strategy_projects', 'seq_no', dat.strategy_id, dat.seq_no);
      }
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_87), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, dat.seq_no]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments)
      }),
      colspan: "12"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_88, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
      "class": "form-control transparent-bg",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return dat.description = $event;
      },
      type: "text",
      onInput: _cache[77] || (_cache[77] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateRevisionPlans('strategies', 'description', dat.id, dat.description);
      }
    }, "                                                            " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.description) + "\n                                                    ", 41 /* TEXT, PROPS, NEED_HYDRATION */, _hoisted_89), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, dat.description]])])]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_90)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_91)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" v-if=\"editData.type === 'p'\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-primary btn-sm text-white",
      onClick: function onClick($event) {
        return $options.showActivityModal(dat.id);
      }
    }, " Add Activities ", 8 /* PROPS */, _hoisted_92), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" @click=\"deleteData(dat.id, 'strategies', dat.description)\" "), $props.editData.type === 'p' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "btn btn-danger btn-sm text-white",
      onClick: function onClick($event) {
        return $options.deleteDataActivityOrStrat(dat.id, 'strategies', dat.description, _this.form.id);
      }
    }, " 🗑 Delete Strategy ", 8 /* PROPS */, _hoisted_93)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 8 /* PROPS */, _hoisted_86)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ACTIVITIES **************************************************************************************************** "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(dat.activity, function (act, subIndex) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: subIndex
      }, [dat.activity && $data.paps.is_strategy_based == 0 && act.is_active === '1' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SEQUENCE NUMBER "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.seq_no = $event;
        },
        style: {
          "width": "8ch"
        },
        onInput: _cache[78] || (_cache[78] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'seq_no', act.activity_id, act.seq_no);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_95), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.seq_no]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DESCRIPTION "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_activities'
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{act}}\n                                                    {{ act.id }}_activity_projects_activities "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        "class": "form-control transparent-bg",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.description = $event;
        },
        type: "text",
        onInput: _cache[79] || (_cache[79] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activities', 'description', act.id, act.description);
        }
      }, "                                                            " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.description) + "\n                                                    ", 41 /* TEXT, PROPS, NEED_HYDRATION */, _hoisted_97), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.description]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_98)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_99)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_96), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TARGET/INDICATORs, EXPECTED OUTPUTS, GAD ISSUE, IMPLEMENTATION DATES"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_100, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_101, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" IF THE ACTIVITY HAS OUTCOMES OR OUTPUTS "), $options.getPairedOutputs(act.activityProject[0]) && $options.getPairedOutputs(act.activityProject[0]).length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", _hoisted_102, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.getPairedOutputs(act.activityProject[0]), function (pair, i) {
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
        }, [$data.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_104, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          id: pair.id + '_target_indicator',
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return pair.target_indicator = $event;
          },
          type: "text",
          onInput: _cache[80] || (_cache[80] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outputs', 'target_indicator', pair.id, pair.target_indicator);
          }
        }, "                                                                            ", 40 /* PROPS, NEED_HYDRATION */, _hoisted_105), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, pair.target_indicator]]), pair.quantity > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_106, " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pair.quantity), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[307] || (_cache[307] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), _cache[308] || (_cache[308] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'Target/Indicator', pair.target_indicator, 'target_indicator', pair.table, pair, pair.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_107)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'Target/Indicator', pair.target_indicator, 'target_indicator', pair.table, pair, pair.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 2,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'Target/Indicator', pair.target_indicator, 'target_indicator', pair.table, pair, pair.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_108)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_103), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GAD Issue "), i === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
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
        }, [$data.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_110, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.gad_issue = $event;
          },
          type: "text",
          onInput: _cache[81] || (_cache[81] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('activity_projects', 'gad_issue', act.activity_id, act.gad_issue);
          }
        }, "                                                                                    " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.gad_issue) + "\n                                                                            ", 41 /* TEXT, PROPS, NEED_HYDRATION */, _hoisted_111), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.gad_issue]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_112)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_113)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_109)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Timeline "), i === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
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
        }, [$data.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_115, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" v-if=\"act.date_from\"  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "class": "form-control",
          type: "date",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.date_from = $event;
          },
          id: act.activity_id + '_activity_projects_date_from',
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('activity_projects', 'date_from', act.activity_id, act.date_from);
          }
        }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_116), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.date_from]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_117)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_118)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" v-if=\"act.date_from && act.date_to\" "), _cache[309] || (_cache[309] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " to ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" v-if=\"act.date_to\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "class": "form-control",
          type: "date",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.date_to = $event;
          },
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('activity_projects', 'date_to', act.activity_id, act.date_to);
          },
          id: act.activity_id + '_activity_projects_date_to'
        }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_119), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.date_to]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_120)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_121)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_114)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Expected Outputs/Outcomes "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_122, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" OUTPUTS*********************************************************************** "), pair.output_description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
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
          onInput: _cache[82] || (_cache[82] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outputs', 'description', pair.id, pair.output_description);
          }
        }, "                                                                                ", 40 /* PROPS, NEED_HYDRATION */, _hoisted_123), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, pair.output_description]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span v-if=\"pair.quantity>0\" > {{ pair.quantity }} </span> {{ pair.output_description }} gfhfghfghgfhgfh "), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_124)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_125)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" OUTCOMES*********************************************************************** "), pair.outcome_description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
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
          onInput: _cache[83] || (_cache[83] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outcomes', 'description', pair.id, pair.outcome_description);
          }
        }, "                                                                            ", 40 /* PROPS, NEED_HYDRATION */, _hoisted_127), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, pair.outcome_description]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_128)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_129)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_126)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
      }), 128 /* KEYED_FRAGMENT */))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 1
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" IF THE ACTIVITY HAS NO OUTCOMES OR OUTPUTS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_130, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[310] || (_cache[310] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GAD Issue "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
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
      }, [$data.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_132, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        "class": "form-control transparent-bg",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.gad_issue = $event;
        },
        type: "text",
        onInput: _cache[84] || (_cache[84] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'gad_issue', act.activity_id, act.gad_issue);
        }
      }, "                                                                                        " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.gad_issue) + "\n                                                                                ", 41 /* TEXT, PROPS, NEED_HYDRATION */, _hoisted_133), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.gad_issue]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_134)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_135)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_131), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Timeline "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        style: {
          "width": "25%",
          "border": "1px solid #000",
          "padding": "4px"
        },
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["align-top", {
          'text-danger': $options.has_comment('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments) || $options.has_comment('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments)
        }]),
        rowspan: $options.getPairedOutputs(act.activityProject[0]).length
      }, [$data.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_137, [act.date_from ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
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
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_139), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.date_from]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_140)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_141)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_138)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), act.date_from && act.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_142, " to ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), act.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
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
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_144), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.date_to]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_145)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_146)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_143)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_136), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Expected Outcome "), _cache[311] || (_cache[311] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */))])])])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PERSONNEL SERVICES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_ps_total'
      }, [$data.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_148, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[312] || (_cache[312] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q1:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.ps_q1 = $event;
        },
        onInput: _cache[85] || (_cache[85] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'ps_q1', act.activity_id, act.ps_q1);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_149), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ps_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[313] || (_cache[313] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q2:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.ps_q2 = $event;
        },
        onInput: _cache[86] || (_cache[86] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'ps_q2', act.activity_id, act.ps_q2);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_150), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ps_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[314] || (_cache[314] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q3:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.ps_q3 = $event;
        },
        onInput: _cache[87] || (_cache[87] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'ps_q3', act.activity_id, act.ps_q3);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_151), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ps_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[315] || (_cache[315] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q4:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.ps_q4 = $event;
        },
        onInput: _cache[88] || (_cache[88] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'ps_q4', act.activity_id, act.ps_q4);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_152), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ps_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.ps_q1) + parseFloat(act.ps_q2) + parseFloat(act.ps_q3) + parseFloat(act.ps_q4), 2, true)), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ dat.id + '_activity_projects_ps_total' }} "), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_153)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_154)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_147), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MAINTENANCE, OPERATING, AND OTHER EXPENSES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments)
        }),
        id: dat.id + '_activity_projects_mooe_total'
      }, [$data.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_156, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[316] || (_cache[316] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q1:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.mooe_q1 = $event;
        },
        onInput: _cache[89] || (_cache[89] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'mooe_q1', act.activity_id, act.mooe_q1);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_157), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.mooe_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[317] || (_cache[317] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q2:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.mooe_q2 = $event;
        },
        onInput: _cache[90] || (_cache[90] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'mooe_q2', act.activity_id, act.mooe_q2);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_158), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.mooe_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[318] || (_cache[318] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q3:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.mooe_q3 = $event;
        },
        onInput: _cache[91] || (_cache[91] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'mooe_q3', act.activity_id, act.mooe_q3);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_159), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.mooe_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[319] || (_cache[319] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q4:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.mooe_q4 = $event;
        },
        onInput: _cache[92] || (_cache[92] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'mooe_q4', act.activity_id, act.mooe_q4);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_160), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.mooe_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.mooe_q1) + parseFloat(act.mooe_q2) + parseFloat(act.mooe_q3) + parseFloat(act.mooe_q4), 2, true)), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_161)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_162)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_155), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FINANCIAL EXPENSES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments)
        }),
        id: dat.id + '_activity_projects_fe_total'
      }, [$data.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_164, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[320] || (_cache[320] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q1:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.fe_q1 = $event;
        },
        onInput: _cache[93] || (_cache[93] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'fe_q1', act.activity_id, act.fe_q1);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_165), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.fe_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[321] || (_cache[321] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q2:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.fe_q2 = $event;
        },
        onInput: _cache[94] || (_cache[94] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'fe_q2', act.activity_id, act.fe_q2);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_166), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.fe_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[322] || (_cache[322] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q3:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.fe_q3 = $event;
        },
        onInput: _cache[95] || (_cache[95] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'fe_q3', act.activity_id, act.fe_q3);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_167), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.fe_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[323] || (_cache[323] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q4:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.fe_q4 = $event;
        },
        onInput: _cache[96] || (_cache[96] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'fe_q4', act.activity_id, act.fe_q4);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_168), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.fe_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.fe_q1) + parseFloat(act.fe_q2) + parseFloat(act.fe_q3) + parseFloat(act.fe_q4), 2, true)), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_169)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_170)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_163), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CAPITAL OUTLAY "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_co_total'
      }, [$data.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_172, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[324] || (_cache[324] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q1:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.co_q1 = $event;
        },
        onInput: _cache[97] || (_cache[97] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'co_q1', act.activity_id, act.co_q1);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_173), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.co_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[325] || (_cache[325] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q2:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.co_q2 = $event;
        },
        onInput: _cache[98] || (_cache[98] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'co_q2', act.activity_id, act.co_q2);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_174), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.co_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[326] || (_cache[326] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q3:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.co_q3 = $event;
        },
        onInput: _cache[99] || (_cache[99] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'co_q3', act.activity_id, act.co_q3);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_175), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.co_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[327] || (_cache[327] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q4:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.co_q4 = $event;
        },
        onInput: _cache[100] || (_cache[100] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'co_q4', act.activity_id, act.co_q4);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_176), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.co_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.co_q1) + parseFloat(act.co_q2) + parseFloat(act.co_q3) + parseFloat(act.co_q4), 2, true)), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_177)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_178)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_171), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span v-if=\"paps.is_strategy_based==0\">{{ format_number_conv(parseFloat(act.ps_total) + parseFloat(act.mooe_total)+ parseFloat(act.co_total),2,true) }}</span> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[328] || (_cache[328] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q1: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        value: parseFloat(act.ps_q1) + parseFloat(act.mooe_q1) + parseFloat(act.fe_q1) + parseFloat(act.co_q1),
        disabled: ""
      }, null, 8 /* PROPS */, _hoisted_179)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[329] || (_cache[329] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q2: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        value: parseFloat(act.ps_q2) + parseFloat(act.mooe_q2) + parseFloat(act.fe_q2) + parseFloat(act.co_q2),
        disabled: ""
      }, null, 8 /* PROPS */, _hoisted_180)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[330] || (_cache[330] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q3: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        value: parseFloat(act.ps_q3) + parseFloat(act.mooe_q3) + parseFloat(act.fe_q3) + parseFloat(act.co_q3),
        disabled: ""
      }, null, 8 /* PROPS */, _hoisted_181)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[331] || (_cache[331] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q4: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        value: parseFloat(act.ps_q4) + parseFloat(act.mooe_q4) + parseFloat(act.fe_q4) + parseFloat(act.co_q4),
        disabled: ""
      }, null, 8 /* PROPS */, _hoisted_182)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SUM OF ALL 16 VALUES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.ps_q1) + parseFloat(act.mooe_q1) + parseFloat(act.fe_q1) + parseFloat(act.co_q1) + parseFloat(act.ps_q2) + parseFloat(act.mooe_q2) + parseFloat(act.fe_q2) + parseFloat(act.co_q2) + parseFloat(act.ps_q3) + parseFloat(act.mooe_q3) + parseFloat(act.fe_q3) + parseFloat(act.co_q3) + parseFloat(act.ps_q4) + parseFloat(act.mooe_q4) + parseFloat(act.fe_q4) + parseFloat(act.co_q4), 2, true)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CCET Code "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_ccet_code'
      }, [$data.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_184, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_multiselect, {
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
      }, null, 8 /* PROPS */, ["options", "reduce", "modelValue", "onUpdate:modelValue", "onInput"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <textarea\n                                                            class=\"form-control transparent-bg \"\n                                                            v-model=\"act.ccet_code\"\n                                                            type=\"text\"\n                                                            @input=\"setUnsaved(true)\"\n                                                            @input=\"updateCCET($event)\"\n                                                            @change=\"updateRevisionPlans('activity_projects', 'ccet_code', act.activity_id, act.ccet_code)\">\n                                                                {{ act.ccet_code }}\n                                                        </textarea> ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_185)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_186)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_183), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" RESPONSIBLE INDIVIDUAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_responsible'
      }, [$data.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_188, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        "class": "form-control transparent-bg",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.responsible = $event;
        },
        type: "text",
        onInput: _cache[101] || (_cache[101] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'responsible', act.activity_id, act.responsible);
        }
      }, "                                                                " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.ccet_code) + "\n                                                        ", 41 /* TEXT, PROPS, NEED_HYDRATION */, _hoisted_189), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.responsible]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_190)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_191)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_187), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Actions"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" activity_id {{ act.activityProject[0].activity_id }}\n                                                    activity_project_id: {{ act.activityProject[0].id }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary btn-sm text-white",
        onClick: function onClick($event) {
          return $options.showExpectedOutputModal(act.activityProject[0].expected_output, act.activityProject[0].activity_id, act.activityProject[0].id, act.description);
        }
      }, " Expected Outputs ", 8 /* PROPS */, _hoisted_192), _cache[332] || (_cache[332] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary btn-sm text-white",
        onClick: function onClick($event) {
          return $options.showExpectedOutcomeModal(act.activityProject[0].expected_outcome, act.activityProject[0].activity_id, act.activityProject[0].id);
        }
      }, " Expected Outcomes ", 8 /* PROPS */, _hoisted_193), _cache[333] || (_cache[333] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary btn-sm text-white",
        onClick: function onClick($event) {
          return $options.showEditActivityModal(act);
        }
      }, " Edit Activity ", 8 /* PROPS */, _hoisted_194), _cache[334] || (_cache[334] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-danger btn-sm text-white",
        onClick: function onClick($event) {
          return $options.deleteDataActivityOrStrat(act.id, 'activities', dat.description, _this.form.id);
        }
      }, " 🗑 Delete Activity ", 8 /* PROPS */, _hoisted_195), _cache[335] || (_cache[335] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
    }), 128 /* KEYED_FRAGMENT */))], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TOTALS*********************************************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[336] || (_cache[336] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[337] || (_cache[337] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "5"
  }, "TOTAL", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PS TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_ps, 2, true), _ctx.format_number_conv(_ctx.v_imp_ps, 2, true), 'imp_ps', 'revision_plans', $data.paps, $data.paps.comments)
    }),
    id: $data.paps.id + '_revision_plans_imp_ps'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ format_number_conv(v_imp_ps,2,true) }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ paps.id+'_revision_plans_imp_ps' }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.totalImplementationPS.toLocaleString()) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[102] || (_cache[102] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_ps, 2, true), _ctx.format_number_conv(_ctx.v_imp_ps, 2, true), 'imp_ps', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_ps, 2, true), _ctx.format_number_conv(_ctx.v_imp_ps, 2, true), 'imp_ps', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[103] || (_cache[103] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_ps, 2, true), _ctx.format_number_conv(_ctx.v_imp_ps, 2, true), 'imp_ps', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_196), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_mooe, 2, true), _ctx.format_number_conv(_ctx.v_imp_mooe, 2, true), 'imp_mooe', 'revision_plans', $data.paps, $data.paps.comments)
    }),
    id: $data.paps.id + '_revision_plans_imp_mooe'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ format_number_conv(v_imp_mooe,2,true) }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.totalImplementationMOOE.toLocaleString()) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[104] || (_cache[104] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_mooe, 2, true), _ctx.format_number_conv(_ctx.v_imp_mooe, 2, true), 'imp_mooe', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_mooe, 2, true), _ctx.format_number_conv(_ctx.v_imp_mooe, 2, true), 'imp_mooe', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[105] || (_cache[105] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_mooe, 2, true), _ctx.format_number_conv(_ctx.v_imp_mooe, 2, true), 'imp_mooe', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_197), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FE TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_fe, 2, true), _ctx.format_number_conv(_ctx.v_imp_fe, 2, true), 'imp_fe', 'revision_plans', $data.paps, $data.paps.comments)
    }),
    id: $data.paps.id + '_revision_plans_imp_fe'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ format_number_conv(v_imp_fe,2,true) }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.totalImplementationFE.toLocaleString()) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[106] || (_cache[106] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_fe, 2, true), _ctx.format_number_conv(_ctx.v_imp_fe, 2, true), 'imp_fe', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_fe, 2, true), _ctx.format_number_conv(_ctx.v_imp_fe, 2, true), 'imp_fe', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[107] || (_cache[107] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_fe, 2, true), _ctx.format_number_conv(_ctx.v_imp_fe, 2, true), 'imp_fe', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_198), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CO TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_co, 2, true), _ctx.format_number_conv(_ctx.v_imp_co, 2, true), 'imp_co', 'revision_plans', $data.paps, $data.paps.comments)
    }),
    id: $data.paps.id + '_revision_plans_imp_fe'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ format_number_conv(v_imp_co,2,true)}} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.totalImplementationCO.toLocaleString()) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[108] || (_cache[108] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_co, 2, true), _ctx.format_number_conv(_ctx.v_imp_co, 2, true), 'imp_co', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_co, 2, true), _ctx.format_number_conv(_ctx.v_imp_co, 2, true), 'imp_co', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[109] || (_cache[109] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_co, 2, true), _ctx.format_number_conv(_ctx.v_imp_co, 2, true), 'imp_co', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_199), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv(_ctx.imp_amount, 2, true), _ctx.format_number_conv(_ctx.imp_amount, 2, true), 'total_imp_amount', 'revision_plans', $data.paps, $data.paps.comments)
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ format_number_conv(imp_amount,2,true) }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.totalImplementationAll.toLocaleString()) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[110] || (_cache[110] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv(_ctx.imp_amount, 2, true), _ctx.format_number_conv(_ctx.imp_amount, 2, true), 'total_imp_amount', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv(_ctx.imp_amount, 2, true), _ctx.format_number_conv(_ctx.imp_amount, 2, true), 'total_imp_amount', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[111] || (_cache[111] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv(_ctx.imp_amount, 2, true), _ctx.format_number_conv(_ctx.imp_amount, 2, true), 'total_imp_amount', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */), _cache[338] || (_cache[338] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[339] || (_cache[339] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[340] || (_cache[340] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("VI. BUDGETARY REQUIREMENTS************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_200, [_cache[344] || (_cache[344] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" VI. ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.department_code_user === '04' || _ctx.department_code_user === _ctx.department_code_project ? "/budget/".concat($data.paps.id) : null
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[343] || (_cache[343] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Estimated Cost/Budgetary Requirements ", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_201, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[345] || (_cache[345] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "3"
  }, "Particulars", -1 /* CACHED */)), _cache[346] || (_cache[346] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Account Code", -1 /* CACHED */)), $props.source === 'sip' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", _hoisted_202, "SIP Number")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[347] || (_cache[347] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Amount", -1 /* CACHED */)), _cache[348] || (_cache[348] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Source", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th>Edit</th> "), _cache[349] || (_cache[349] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Delete", -1 /* CACHED */))])]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.groupedBudget, function (gadGroups, category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tbody", {
      key: category
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CATEGORY HEADER "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_203, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_204, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatCategory(category)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GAD + NON-GAD GROUPS "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(gadGroups, function (rows, gadType) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: gadType
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SUB HEADER (GAD / NON-GAD) "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_205, [_cache[350] || (_cache[350] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_206, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_207, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(gadType) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-success btn-sm text-white",
        onClick: function onClick($event) {
          return $options.showBudgetModal($data.paps.id, gadType, $options.formatCategory(category));
        }
      }, " ADD NEW ", 8 /* PROPS */, _hoisted_208)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DATA ROWS "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(rows, function (row) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: row.id
        }, [_cache[351] || (_cache[351] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[352] || (_cache[352] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" BUDGET PARTICULARS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'text-danger': $options.has_comment('Budgetary Requirements', 'Particulars', row.particulars, 'particulars', 'budget_requirements', row, row.comments)
          }),
          id: row.id + '_budget_requirements_particulars'
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          type: "text",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return row.particulars = $event;
          },
          onInput: _cache[112] || (_cache[112] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('budget_requirements', 'particulars', row.id, row.particulars);
          }
        }, "                                                    " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.particulars) + "\n                                            ", 41 /* TEXT, PROPS, NEED_HYDRATION */, _hoisted_210), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, row.particulars]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Budgetary Requirements', 'Particulars', row.particulars, 'particulars', 'budget_requirements', row, row.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_211)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Particulars', row.particulars, 'particulars', 'budget_requirements', row, row.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Budgetary Requirements', 'Particulars', row.particulars, 'particulars', 'budget_requirements', row, row.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_212)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_209), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ACCOUNT CODE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'text-danger': $options.has_comment('Budgetary Requirements', 'Account Code', row.account_code, 'account_code', 'budget_requirements', row, row.comments)
          }),
          id: row.id + '_budget_requirements_account_code'
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          type: "text",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return row.account_code = $event;
          },
          onInput: _cache[113] || (_cache[113] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('budget_requirements', 'account_code', row.id, row.account_code);
          },
          disabled: ""
        }, "                                                    " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.account_code) + "\n                                            ", 41 /* TEXT, PROPS, NEED_HYDRATION */, _hoisted_214), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, row.account_code]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Budgetary Requirements', 'Account Code', row.account_code, 'account_code', 'budget_requirements', row, row.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_215)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Account Code', row.account_code, 'account_code', 'budget_requirements', row, row.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Budgetary Requirements', 'Account Code', row.account_code, 'account_code', 'budget_requirements', row, row.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_216)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_213), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SIP Number "), $props.source === 'sip' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_217, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.sip_number), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" AMOUNT "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'text-danger': $options.has_comment('Budgetary Requirements', 'Amount', row.amount, 'amount', 'budget_requirements', row, row.comments)
          }),
          id: row.id + '_budget_requirements_amount'
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          type: "text",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return row.amount = $event;
          },
          onInput: _cache[114] || (_cache[114] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('budget_requirements', 'amount', row.id, row.amount);
          }
        }, "                                                    " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.amount) + "\n                                            ", 41 /* TEXT, PROPS, NEED_HYDRATION */, _hoisted_219), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, row.amount]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Budgetary Requirements', 'Source', row.source, 'source', 'budget_requirements', row, row.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_220)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Source', row.source, 'source', 'budget_requirements', row, row.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Budgetary Requirements', 'Source', row.source, 'source', 'budget_requirements', row, row.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_221)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_218), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SOURCE OF FUND "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'text-danger': $options.has_comment('Budgetary Requirements', 'Source', row.source, 'source', 'budget_requirements', row, row.comments)
          }),
          id: row.id + '_budget_requirements_source'
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          type: "text",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return row.source = $event;
          },
          onInput: _cache[115] || (_cache[115] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('budget_requirements', 'source', row.id, row.source);
          }
        }, "                                                    " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.source) + "\n                                            ", 41 /* TEXT, PROPS, NEED_HYDRATION */, _hoisted_223), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, row.source]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Budgetary Requirements', 'Source', row.source, 'source', 'budget_requirements', row, row.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_224)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Source', row.source, 'source', 'budget_requirements', row, row.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Budgetary Requirements', 'Source', row.source, 'source', 'budget_requirements', row, row.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_225)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_222), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" EDIT "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td>\n                                            <button class=\"btn btn-primary btn-sm text-white\"\n                                                @click=\"showBudgetModal(form.id,gadType,category)\">\n                                                ✏ Edit\n                                            </button>\n                                        </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DELETE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-danger btn-sm text-white",
          onClick: function onClick($event) {
            return $options.deleteData(row.id, 'budget_requirements', row.particulars);
          }
        }, " 🗑 Delete ", 8 /* PROPS */, _hoisted_226)])]);
      }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" NO DATA ROW "), rows.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_227, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_228, " No entries under " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(gadType) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatCategory(category)), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TOTAL ROW "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_229, [_cache[353] || (_cache[353] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_230, "TOTAL " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(gadType), 1 /* TEXT */), _cache[354] || (_cache[354] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), $props.source === 'sip' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_231)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " ₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.budgetSum(category, gadType).toLocaleString()), 1 /* TEXT */), _cache[355] || (_cache[355] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        colspan: "3"
      }, null, -1 /* CACHED */))])], 64 /* STABLE_FRAGMENT */);
    }), 128 /* KEYED_FRAGMENT */))]);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tfoot", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[356] || (_cache[356] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "GAD TOTAL")], -1 /* CACHED */)), $props.source === 'sip' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_232)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Budgetary Requirements', 'GAD Grand Total', _ctx.format_number_conv(_ctx.tot_gad, 2, true), 'gad_total', 'revision_plans', $data.paps, $data.paps.comments)
    }),
    id: $data.paps.id + '_revision_plans_gad_total'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.gadBudgetTotal.toLocaleString()) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[116] || (_cache[116] = function ($event) {
      return $options.handleClick('Budgetary Requirements', 'GAD Grand Total', _ctx.format_number_conv(_ctx.tot_gad, 2, true), 'gad_total', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'GAD Grand Total', _ctx.format_number_conv(_ctx.tot_gad, 2, true), 'gad_total', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[117] || (_cache[117] = function ($event) {
      return $options.handleClick('Budgetary Requirements', 'GAD Grand Total', _ctx.format_number_conv(_ctx.tot_gad, 2, true), 'gad_total', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_233), _cache[357] || (_cache[357] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "3"
  }, null, -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[358] || (_cache[358] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "TOTAL")], -1 /* CACHED */)), $props.source === 'sip' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_234)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.overallBudget.toLocaleString()), 1 /* TEXT */), _cache[359] || (_cache[359] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "3"
  }, null, -1 /* CACHED */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("VI. IMPLEMENTING TEAM************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_235, [_cache[361] || (_cache[361] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" VII. ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.department_code_user === '04' || _ctx.department_code_user === _ctx.department_code_project ? "/team/".concat($data.paps.id, "/revision/plan/team") : null,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementing Team', 'implementing team', $data.paps.rationale, 'implementing_team', 'revision_plans', $data.paps, $data.paps.comments)
    }),
    id: $data.paps.id + '_revision_plans_implementing_team'
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[360] || (_cache[360] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Implementing Team", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href", "class", "id"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[118] || (_cache[118] = function ($event) {
      return $options.handleClick('Implementing Team', 'implementing team', $data.paps.implementing_team, 'implementing_team', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementing Team', 'implementing team', $data.paps.implementing_team, 'implementing_team', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[119] || (_cache[119] = function ($event) {
      return $options.handleClick('Implementing Team', 'implementing team', $data.paps.implementing_team, 'implementing_team', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm text-white",
    onClick: _cache[120] || (_cache[120] = function ($event) {
      return $options.showTeamModal();
    })
  }, " Add Team Members ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_236, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ paps.implementing_team }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuillEditor, {
    theme: "snow",
    content: $data.form.implementing_team,
    "onUpdate:content": [_cache[121] || (_cache[121] = function ($event) {
      return $data.form.implementing_team = $event;
    }), _cache[122] || (_cache[122] = function (val) {
      return $options.updateRevisionPlans('revision_plans', 'implementing_team', $data.form.id, val);
    })],
    contentType: "html",
    placeholder: "Introductory paragraph for the implementing team ...",
    toolbar: "essential"
  }, null, 8 /* PROPS */, ["content"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_237, [_cache[365] || (_cache[365] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    "class": "bg-secondary text-white"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "No."), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Name"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Gender"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Position"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Employment Status"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "GAD-related trainings"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Actions")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.implementing_team, function (team_member, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index + 1), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Team Members', 'Name', team_member.name, 'name', 'team_plans', team_member, team_member.comments)
      }),
      id: team_member.id + '_team_plans_name'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(team_member.name) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'Name', team_member.name, 'name', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_239)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Team Plan', 'Name', team_member.name, 'name', 'team_plans', team_member, team_member.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'Name', team_member.name, 'name', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_240)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_238), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Gender "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(team_member.gender), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Position "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      id: team_member.id + '_team_plans_position',
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Team Plan', 'Position', team_member.position, 'position', 'team_plans', team_member, team_member.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(team_member.position) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'Position', team_member.position, 'position', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_242)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Team Plan', 'Position', team_member.position, 'position', 'team_plans', team_member, team_member.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'Position', team_member.position, 'position', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_243)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_241), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Employment Status "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      id: team_member.id + '_team_plans_status',
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Team Plan', 'status', team_member.status, 'status', 'team_plans', team_member, team_member.comments)
      })
    }, [team_member.status === 'Regular' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_245, "Permanent")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_246, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(team_member.status), 1 /* TEXT */)), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 2,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'status', team_member.status, 'status', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_247)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Team Plan', 'status', team_member.status, 'status', 'team_plans', team_member, team_member.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 3,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'status', team_member.status, 'status', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_248)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_244), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Competency "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Team Plan', 'with_gad_training', team_member.with_gad_training, 'with_gad_training', 'team_plans', team_member, team_member.comments)
      }),
      id: team_member.id + '_team_plans_with_gad_training'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(team_member.with_gad_training === '1' ? team_member.specify_GAD_training : 'No') + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'with_gad_training', team_member.with_gad_training, 'with_gad_training', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_250)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Team Plan', 'with_gad_training', team_member.with_gad_training, 'with_gad_training', 'team_plans', team_member, team_member.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'with_gad_training', team_member.with_gad_training, 'with_gad_training', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_251)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_249), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Actions"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
      "class": "btn btn-primary btn-sm text-white",
      onClick: function onClick($event) {
        return $options.showTeamModalEdit(team_member);
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return _toConsumableArray(_cache[362] || (_cache[362] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          fill: "currentColor",
          "class": "bi bi-pencil-square",
          viewBox: "0 0 16 16"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          "fill-rule": "evenodd",
          d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
        })], -1 /* CACHED */)]));
      }),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onClick"]), _cache[364] || (_cache[364] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
      "class": "btn btn-danger btn-sm text-white",
      onClick: function onClick($event) {
        return $options.deleteData(team_member.id, 'team_plans', team_member.name);
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return _toConsumableArray(_cache[363] || (_cache[363] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          fill: "currentColor",
          "class": "bi bi-trash-fill",
          viewBox: "0 0 16 16"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          d: "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"
        })], -1 /* CACHED */)]));
      }),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onClick"])])]);
  }), 128 /* KEYED_FRAGMENT */))])]), _cache[366] || (_cache[366] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("VIII. PARTNERSHIP & SUSTAINABILITY"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_252, [_cache[368] || (_cache[368] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" VIII. ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Partnership and Sustainability', 'Partnership and Sustainability', $data.paps.partnership, 'partnership', 'revision_plans', $data.paps, $data.paps.comments)
    }),
    id: $data.paps.id + '_revision_plans_partnership'
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[367] || (_cache[367] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Partnership and Sustainability", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class", "id"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_253, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuillEditor, {
    theme: "snow",
    content: $data.form.partnership,
    "onUpdate:content": [_cache[123] || (_cache[123] = function ($event) {
      return $data.form.partnership = $event;
    }), _cache[124] || (_cache[124] = function (val) {
      return $options.updateRevisionPlans('revision_plans', 'partnership', $data.form.id, val);
    })],
    contentType: "html",
    placeholder: "Introductory paragraph for partnership and sustainability ...",
    toolbar: "essential"
  }, null, 8 /* PROPS */, ["content"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("XI. MONITORING & EVALUATION"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_254, [_cache[370] || (_cache[370] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" IX. ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.department_code_user === '04' || _ctx.department_code_user === _ctx.department_code_project ? "/EvaluationMechanismTool/".concat($data.paps.id) : null,
    id: $data.paps.id + '_revision_plans_monitoring',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Monitoring and Evaluation', 'Monitoring and Evaluation', $data.paps.monitoring, 'monitoring', 'revision_plans', $data.paps, $data.paps.comments)
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[369] || (_cache[369] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Monitoring and Evaluation", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href", "id", "class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm text-white",
    onClick: _cache[125] || (_cache[125] = function ($event) {
      return $options.showMonitoringModal();
    })
  }, " Add Monitoring and Evaluation Details ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_255, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div v-html=\"paps.monitoring\"></div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuillEditor, {
    theme: "snow",
    content: $data.form.monitoring,
    "onUpdate:content": [_cache[126] || (_cache[126] = function ($event) {
      return $data.form.monitoring = $event;
    }), _cache[127] || (_cache[127] = function (val) {
      return $options.updateRevisionPlans('revision_plans', 'monitoring', $data.form.id, val);
    })],
    contentType: "html",
    placeholder: "Introductory paragraph for monitoring and evaluation ...",
    toolbar: "essential"
  }, null, 8 /* PROPS */, ["content"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_256, [_cache[372] || (_cache[372] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    "class": "bg-secondary text-white"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Evaluation Mechanism/Tools"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "OPR and their Roles"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Target Beneficiaries"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Need for External M&E Team or GAD Expert/Consultant"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Actions")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.monitoring_and_avaluation, function (monitor) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" M&E Evaluation Mechanism Tool "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      id: monitor.id + '_monitoring_and_evaluations_evaluation_mechanism_tool'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        'text-danger': $options.has_comment('Monitoring and Evaluation', 'Evaluation Mechanism Tool', monitor.evaluation_mechanism_tool, 'evaluation_mechanism_tool', 'monitoring_and_evaluations', monitor, monitor.comments)
      }, "form-control transparent-bg"]),
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return monitor.evaluation_mechanism_tool = $event;
      },
      onInput: _cache[128] || (_cache[128] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateRevisionPlans('monitoring_and_evaluations', 'evaluation_mechanism_tool', monitor.id, monitor.evaluation_mechanism_tool);
      }
    }, "                                                " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(monitor.evaluation_mechanism_tool) + "\n                                        ", 43 /* TEXT, CLASS, PROPS, NEED_HYDRATION */, _hoisted_258), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, monitor.evaluation_mechanism_tool]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Evaluation Mechanism Tool', monitor.evaluation_mechanism_tool, 'evaluation_mechanism_tool', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_259)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Monitoring and Evaluation', 'Evaluation Mechanism Tool', monitor.evaluation_mechanism_tool, 'evaluation_mechanism_tool', 'monitoring_and_evaluations', monitor, monitor.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Evaluation Mechanism Tool', monitor.evaluation_mechanism_tool, 'evaluation_mechanism_tool', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_260)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_257), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" M&E OPR and their roles "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      id: monitor.id + '_monitoring_and_evaluations_opr'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        'text-danger': $options.has_comment('Monitoring and Evaluation', 'OPCR & their roles', monitor.opr, 'opr', 'monitoring_and_evaluations', monitor, monitor.comments)
      }, "form-control transparent-bg"]),
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return monitor.opr = $event;
      },
      onInput: _cache[129] || (_cache[129] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateRevisionPlans('monitoring_and_evaluations', 'opr', monitor.id, monitor.opr);
      }
    }, "                                                " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(monitor.opr) + "\n                                        ", 43 /* TEXT, CLASS, PROPS, NEED_HYDRATION */, _hoisted_262), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, monitor.opr]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'OPCR & their roles', monitor.opr, 'opr', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_263)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Monitoring and Evaluation', 'OPCR & their roles', monitor.opr, 'opr', 'monitoring_and_evaluations', monitor, monitor.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'OPCR & their roles', monitor.opr, 'opr', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_264)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_261), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" M&E Target Beneficiaries "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Monitoring and Evaluation', 'Target Beneficiaries', monitor.target_beneficiaries, 'target_beneficiaries', 'monitoring_and_evaluations', monitor, monitor.comments)
      }),
      id: monitor.id + '_monitoring_and_evaluations_target_beneficiaries'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
      "class": "form-control transparent-bg",
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return monitor.target_beneficiaries = $event;
      },
      onInput: _cache[130] || (_cache[130] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateRevisionPlans('monitoring_and_evaluations', 'target_beneficiaries', monitor.id, monitor.target_beneficiaries);
      }
    }, "                                                " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(monitor.target_beneficiaries) + "\n                                        ", 41 /* TEXT, PROPS, NEED_HYDRATION */, _hoisted_266), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, monitor.target_beneficiaries]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Target Beneficiaries', monitor.target_beneficiaries, 'target_beneficiaries', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_267)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Monitoring and Evaluation', 'Target Beneficiaries', monitor.target_beneficiaries, 'target_beneficiaries', 'monitoring_and_evaluations', monitor, monitor.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Target Beneficiaries', monitor.target_beneficiaries, 'target_beneficiaries', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_268)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_265), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" M&E GAD Expert/Consultant "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Monitoring and Evaluation', 'Target Beneficiaries', monitor.gad, 'gad', 'monitoring_and_evaluations', monitor, monitor.comments)
      }),
      id: monitor.id + '_monitoring_and_evaluations_gad'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return monitor.gad = $event;
      },
      "class": "form-select",
      onChange: function onChange($event) {
        return $options.updateRevisionPlans('monitoring_and_evaluations', 'gad', monitor.id, monitor.gad);
      }
    }, _toConsumableArray(_cache[371] || (_cache[371] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Yes", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "No", -1 /* CACHED */)])), 40 /* PROPS, NEED_HYDRATION */, _hoisted_270), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, monitor.gad]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Target Beneficiaries', monitor.gad, 'gad', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_271)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Monitoring and Evaluation', 'Target Beneficiaries', monitor.gad, 'gad', 'monitoring_and_evaluations', monitor, monitor.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Target Beneficiaries', monitor.gad, 'gad', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_272)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_269), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-danger btn-sm text-white",
      onClick: function onClick($event) {
        return $options.deleteData(monitor.id, 'monitoring_and_evaluations', monitor.evaluation_mechanism_tool);
      }
    }, " 🗑 Delete ", 8 /* PROPS */, _hoisted_273)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])]), _cache[373] || (_cache[373] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("RISK MANAGEMENT"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_274, [_cache[375] || (_cache[375] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" X. ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.department_code_user === '04' || _ctx.department_code_user === _ctx.department_code_project ? "/RiskManagement/".concat($data.paps.id) : null,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Risk Management', 'Risk Management', $data.paps.risk_management, 'risk_management', 'revision_plans', $data.paps, $data.paps.comments)
    }),
    id: $data.paps.id + '_revision_plans_risk_management'
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[374] || (_cache[374] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Risk Management", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href", "class", "id"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm text-white",
    onClick: _cache[131] || (_cache[131] = function ($event) {
      return $options.showRiskManagementModal();
    })
  }, " Add Risk Management Details ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_275, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuillEditor, {
    theme: "snow",
    content: $data.form.risk_management,
    "onUpdate:content": [_cache[132] || (_cache[132] = function ($event) {
      return $data.form.risk_management = $event;
    }), _cache[133] || (_cache[133] = function (val) {
      return $options.updateRevisionPlans('revision_plans', 'risk_management', $data.form.id, val);
    })],
    contentType: "html",
    placeholder: "Introductory paragraph for risk management ...",
    toolbar: "essential"
  }, null, 8 /* PROPS */, ["content"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_276, [_cache[376] || (_cache[376] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    "class": "bg-secondary text-white"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Prospective Possible Risks"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Preventive Measures"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Mechanisms to monitor"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Actions")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.risk_manangement, function (risk) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Risk Management -Possible Risks "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Risk Management', 'Possible Risks', risk.possible_risk, 'possible_risk', 'risk_manangements', risk, risk.comments)
      }),
      id: risk.id + '_risk_manangements_possible_risk'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuillEditor, {
      theme: "snow",
      content: risk.possible_risk,
      "onUpdate:content": [function ($event) {
        return risk.possible_risk = $event;
      }, function (val) {
        return $options.updateRevisionPlans('risk_manangements', 'possible_risk', risk.id, risk.possible_risk);
      }],
      contentType: "html",
      placeholder: "Mechanisms to monitor ...",
      toolbar: "essential"
    }, null, 8 /* PROPS */, ["content", "onUpdate:content"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Possible Risks', risk.possible_risk, 'possible_risk', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_278)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Risk Management', 'Possible Risks', risk.possible_risk, 'possible_risk', 'risk_manangements', risk, risk.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Possible Risks', risk.possible_risk, 'possible_risk', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_279)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_277), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Risk Management -Person Affected "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Risk Management', 'Person Affected', risk.person_affected, 'person_affected', 'risk_manangements', risk, risk.comments)
      }),
      id: risk.id + '_risk_manangements_person_affected'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuillEditor, {
      theme: "snow",
      content: risk.person_affected,
      "onUpdate:content": [function ($event) {
        return risk.person_affected = $event;
      }, function (val) {
        return $options.updateRevisionPlans('risk_manangements', 'person_affected', risk.id, risk.person_affected);
      }],
      contentType: "html",
      placeholder: "Mechanisms to monitor ...",
      toolbar: "essential"
    }, null, 8 /* PROPS */, ["content", "onUpdate:content"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Person Affected', risk.person_affected, 'person_affected', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_281)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Risk Management', 'Person Affected', risk.person_affected, 'person_affected', 'risk_manangements', risk, risk.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Person Affected', risk.person_affected, 'person_affected', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_282)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_280), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Risk Management -Management "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Risk Management', 'Management', risk.management, 'management', 'risk_manangements', risk, risk.comments)
      }),
      id: risk.id + '_risk_manangements_management'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuillEditor, {
      theme: "snow",
      content: risk.management,
      "onUpdate:content": [function ($event) {
        return risk.management = $event;
      }, function (val) {
        return $options.updateRevisionPlans('risk_manangements', 'management', risk.id, risk.management);
      }],
      contentType: "html",
      placeholder: "Mechanisms to monitor ...",
      toolbar: "essential"
    }, null, 8 /* PROPS */, ["content", "onUpdate:content"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Management', risk.management, 'management', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_284)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Risk Management', 'Management', risk.management, 'management', 'risk_manangements', risk, risk.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Management', risk.management, 'management', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_285)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_283), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Remove"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-danger btn-sm text-white",
      onClick: function onClick($event) {
        return $options.deleteData(risk.id, 'risk_manangements', risk.possible_risk);
      }
    }, " 🗑 Delete ", 8 /* PROPS */, _hoisted_286)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])]), _cache[377] || (_cache[377] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))]), _cache[392] || (_cache[392] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), _cache[393] || (_cache[393] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("SIGNATORIES"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_287, [_cache[379] || (_cache[379] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" XI. ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.department_code_user === '04' || _ctx.department_code_user === _ctx.department_code_project ? "/RiskManagement/".concat($data.paps.id) : null
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[378] || (_cache[378] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Signatories", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm text-white",
    onClick: _cache[134] || (_cache[134] = function ($event) {
      return $options.showSignatoryModal();
    })
  }, " Add Signatories ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{signatoriesProps }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_288, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.signatoriesprops, function (signatory, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['signatory-card', signatory.acted !== 'Prepared' && signatory.acted !== 'Reviewed' ? 'signatory-card-full' : 'signatory-card'])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SIGNATORY ACTED ************************************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return signatory.acted = $event;
      },
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-select", {
        'text-danger': $options.has_comment('Signatories', 'Acted', signatory.acted, 'acted', 'signatories', signatory, signatory.comments)
      }]),
      autocomplete: "chrome-off",
      onChange: function onChange($event) {
        return $options.updateRevisionPlans('signatories', 'acted', signatory.id, signatory.acted);
      },
      id: signatory.id + '_signatories_acted'
    }, [_cache[380] || (_cache[380] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Prepared", -1 /* CACHED */)), _cache[381] || (_cache[381] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Reviewed", -1 /* CACHED */)), _cache[382] || (_cache[382] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Noted", -1 /* CACHED */)), _cache[383] || (_cache[383] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Approved", -1 /* CACHED */)), _cache[384] || (_cache[384] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Recommending Approval", -1 /* CACHED */)), $props.editData.type !== 'p' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", _hoisted_290, "As to AIP Inclusion")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.editData.type !== 'p' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", _hoisted_291, "As to AIP Appropriation")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_289), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, signatory.acted]]), signatory.acted === 'Prepared' || signatory.acted === 'Reviewed' || signatory.acted === 'Noted' || signatory.acted === 'Approved' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_292, "by: ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Signatories', 'Acted', signatory.acted, 'acted', 'signatories', signatory, signatory.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_293)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Signatories', 'Acted', signatory.acted, 'acted', 'signatories', signatory, signatory.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 2,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Signatories', 'Acted', signatory.acted, 'acted', 'signatories', signatory, signatory.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_294)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _cache[385] || (_cache[385] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), _cache[386] || (_cache[386] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SIGNATORY ACTED ************************************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": "text-decoration-underline",
      id: signatory.id + '_signatories_name'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
        'text-danger': $options.has_comment('Signatories', 'Name', signatory.name, 'name', 'signatories', signatory, signatory.comments)
      }]),
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return signatory.name = $event;
      },
      type: "text",
      id: signatory.id + '_signatories_name',
      onInput: _cache[135] || (_cache[135] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateRevisionPlans('signatories', 'name', signatory.id, signatory.name);
      }
    }, null, 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_296), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, signatory.name]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Signatories', 'Name', signatory.name, 'name', 'signatories', signatory, signatory.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_297)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Signatories', 'Name', signatory.name, 'name', 'signatories', signatory, signatory.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Signatories', 'Name', signatory.name, 'name', 'signatories', signatory, signatory.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_298)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </input> ")])], 8 /* PROPS */, _hoisted_295), _cache[387] || (_cache[387] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      id: signatory.id + '_signatories_position'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control transparent-bg", {
        'text-danger': $options.has_comment('Signatories', 'Position', signatory.position, 'position', 'signatories', signatory, signatory.comments)
      }]),
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return signatory.position = $event;
      },
      type: "text",
      onInput: _cache[136] || (_cache[136] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateRevisionPlans('signatories', 'position', signatory.id, signatory.position);
      }
    }, null, 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_300), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, signatory.position]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Signatories', 'Position', signatory.position, 'position', 'signatories', signatory, signatory.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_301)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Signatories', 'Position', signatory.position, 'position', 'signatories', signatory, signatory.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Signatories', 'Position', signatory.position, 'position', 'signatories', signatory, signatory.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_302)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_299), _cache[388] || (_cache[388] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), _cache[389] || (_cache[389] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), _cache[390] || (_cache[390] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), _cache[391] || (_cache[391] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-danger btn-sm text-white",
      onClick: function onClick($event) {
        return $options.deleteData(signatory.id, 'signatories', signatory.name);
      }
    }, " 🗑 Delete ", 8 /* PROPS */, _hoisted_303)], 2 /* CLASS */);
  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{editData}} ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_304, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ALL YOUR EXISTING COMMENT PANEL HTML HERE "), !$data.showComments ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_305, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "close-btn text-danger",
    onClick: _cache[137] || (_cache[137] = function () {
      return $options.toggleShowCommentPanel && $options.toggleShowCommentPanel.apply($options, arguments);
    })
  }, [_cache[396] || (_cache[396] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "currentColor",
    "class": "bi bi-three-dots",
    viewBox: "0 0 16 16"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
  })], -1 /* CACHED */)), _cache[397] || (_cache[397] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("   ", -1 /* CACHED */)), $options.countUnresolvedComments > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_306, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.countUnresolvedComments) + " unresolved " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.countUnresolvedComments > 1 ? 'updates' : 'update') + " — click to review ", 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SmallModalComments, {
    modelValue: $data.showComments,
    "onUpdate:modelValue": _cache[151] || (_cache[151] = function ($event) {
      return $data.showComments = $event;
    }),
    title: "NAVIGATION PANEL"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_307, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["button", {
          active: $data.open_tab === 'Navigation'
        }]),
        onClick: _cache[138] || (_cache[138] = function ($event) {
          return $options.openTab('Navigation');
        })
      }, "Navigation", 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["button", {
          active: $data.open_tab === 'Comments'
        }]),
        onClick: _cache[139] || (_cache[139] = function ($event) {
          return $options.openTab('Comments');
        })
      }, [_cache[398] || (_cache[398] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Comments ", -1 /* CACHED */)), $options.countUnresolvedComments > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_308, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.countUnresolvedComments) + " unresolved) ", 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */)]), $data.open_tab === 'Comments' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_309, [_cache[402] || (_cache[402] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "comments-header"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "COMMENTS ...")], -1 /* CACHED */)), _cache[403] || (_cache[403] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Click a comment and follow the "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        style: {
          "color": "red"
        }
      }, "red"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" arrow")])], -1 /* CACHED */)), _cache[404] || (_cache[404] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_310, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_311, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.all_comments, function (comment, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
          key: index,
          "class": "mb-2"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["clickable-comment", comment.comment_status == 1 ? 'comment-approved' : 'comment-rejected']),
          onClick: function onClick($event) {
            return $options.scrollToSection(['beneficiaries', 'objective', 'rationale'].includes(comment.column_name) ? _ctx.resolvePapsTargetId($props.editData, comment.column_name, comment) : ['expected_revised_outputs', 'expected_revised_outcomes'].includes(comment.table_name) ? "".concat(comment.table_row_id, "_").concat(comment.table_name) : "".concat(comment.table_row_id, "_").concat(comment.table_name, "_").concat(comment.column_name), comment, comment.column_name);
          },
          style: {
            "cursor": "pointer"
          }
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" IF UNRESOLVED "), comment.comment_status == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_313, _toConsumableArray(_cache[399] || (_cache[399] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          d: "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"
        }, null, -1 /* CACHED */)])))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" IF RESOLVED "), comment.comment_status == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_314, _toConsumableArray(_cache[400] || (_cache[400] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          d: "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"
        }, null, -1 /* CACHED */)])))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.comment) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <p>{{comment.table_row_id}}_{{comment.table_name}}_{{comment.column_name}}</p> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{\n                                    ['beneficiaries', 'objective', 'rationale'].includes(comment.column_name)\n                                        ? comment.column_name\n                                            : (\n                                            ['expected_revised_outputs', 'expected_revised_outcomes'].includes(comment.table_name)\n                                                ? `${comment.table_row_id}_${comment.table_name}`\n                                                : `${comment.table_row_id}_${comment.table_name}_${comment.column_name}`\n                                        )\n                                }} ")], 10 /* CLASS, PROPS */, _hoisted_312), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          innerHTML: comment.reply
        }, null, 8 /* PROPS */, _hoisted_315), _cache[401] || (_cache[401] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */))]);
      }), 128 /* KEYED_FRAGMENT */))])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.open_tab === 'Navigation' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_316, [_cache[405] || (_cache[405] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "comments-header"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "NAVIGATION ...")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_317, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_318, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_319, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "clickable-comment",
        onClick: _cache[140] || (_cache[140] = function ($event) {
          return $options.scrollToSection('revision_plans');
        })
      }, " I. Title ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_320, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_321, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "clickable-comment",
        onClick: _cache[141] || (_cache[141] = function ($event) {
          return $options.scrollToSection('rationale');
        })
      }, " II. Rationale ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_322, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_323, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "clickable-comment",
        onClick: _cache[142] || (_cache[142] = function ($event) {
          return $options.scrollToSection('objective');
        })
      }, " III. Objectives ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_324, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_325, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "clickable-comment",
        onClick: _cache[143] || (_cache[143] = function ($event) {
          return $options.scrollToSection('beneficiaries');
        })
      }, " IV. Target Beneficiaries ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_326, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_327, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "clickable-comment",
        onClick: _cache[144] || (_cache[144] = function ($event) {
          return $options.scrollToSection('implementation_workplan');
        })
      }, " V. Implementation Schedule/Workplan ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_328, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_329, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "clickable-comment",
        onClick: _cache[145] || (_cache[145] = function ($event) {
          return $options.scrollToSection('budgetary_requirements');
        })
      }, " VI. Estimated Cost/Budgetary Requirements ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_330, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_331, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "clickable-comment",
        onClick: _cache[146] || (_cache[146] = function ($event) {
          return $options.scrollToSection('implementing_team');
        })
      }, " VII. Implementing Team ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" partnership_sustainability "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_332, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_333, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "clickable-comment",
        onClick: _cache[147] || (_cache[147] = function ($event) {
          return $options.scrollToSection('partnership_sustainability');
        })
      }, " VIII. Partnership and Sustainability ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_334, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_335, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "clickable-comment",
        onClick: _cache[148] || (_cache[148] = function ($event) {
          return $options.scrollToSection('monitoring_evaluation');
        })
      }, " IX. Monitoring and Evaluation ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_336, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_337, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "clickable-comment",
        onClick: _cache[149] || (_cache[149] = function ($event) {
          return $options.scrollToSection('risk_management');
        })
      }, " X. Risk Management ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_338, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_339, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "clickable-comment",
        onClick: _cache[150] || (_cache[150] = function ($event) {
          return $options.scrollToSection('signatories');
        })
      }, " XI. Signatories ")])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue"]), $data.show_comment_modal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_CommentModal, {
    key: 0,
    onCloseModalEvent: $options.closeCommentModal,
    title: "COMMENTS"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_cache[423] || (_cache[423] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" test ", -1 /* CACHED */)), _cache[424] || (_cache[424] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "d-flex justify-content-center"
      }, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [$props.auth.user.department_code === '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_340, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        "class": "form-control",
        rows: "5",
        "onUpdate:modelValue": _cache[152] || (_cache[152] = function ($event) {
          return $data.comment = $event;
        }),
        placeholder: "Write your comment here..."
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.comment]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary mt-2 text-white",
        onClick: _cache[153] || (_cache[153] = function ($event) {
          return $options.saveComment();
        })
      }, " Submit Comment ")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[406] || (_cache[406] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Section: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.comment_section), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[407] || (_cache[407] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Subtitle:", -1 /* CACHED */)), _cache[408] || (_cache[408] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)()), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        innerHTML: $data.comment_subtitle
      }, null, 8 /* PROPS */, _hoisted_341)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[409] || (_cache[409] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Data:", -1 /* CACHED */)), _cache[410] || (_cache[410] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)()), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        innerHTML: $data.comment_data
      }, null, 8 /* PROPS */, _hoisted_342)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[411] || (_cache[411] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Column:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.comment_column) + " ", 1 /* TEXT */), $data.comment_column == 'Person Affected' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_343, "Preventive Measures")) : $data.comment_column == 'Management' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_344, "Mechanisms to monitor")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_345, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.comment_colun), 1 /* TEXT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[412] || (_cache[412] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Table:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.comment_table), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div>Reference Object: {{ comment_reference_object.id }}</div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_346, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_347, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[413] || (_cache[413] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "bg-secondary text-white"
      }, "Comment", -1 /* CACHED */)), _cache[414] || (_cache[414] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "bg-secondary text-white"
      }, "Status  ", -1 /* CACHED */)), $props.auth.user.department_code === '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", _hoisted_348, "Actions  ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th class=\"bg-secondary text-white\" v-if=\"auth.user.department_code==='04'\">Actions&nbsp;&nbsp;</th> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th class=\"bg-secondary text-white\">Comment by&nbsp;&nbsp;</th> "), _cache[415] || (_cache[415] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "bg-secondary text-white"
      }, "Date", -1 /* CACHED */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.comments, function (comment, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [comment.user ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h6", _hoisted_349, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.user.FullName) + " commented:  ", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_350, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.comment), 1 /* TEXT */)]), _cache[416] || (_cache[416] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          innerHTML: comment.reply
        }, null, 8 /* PROPS */, _hoisted_351), comment.show_comment_box == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "btn btn-link p-0",
          onClick: function onClick($event) {
            return $options.showCommentBox(index);
          }
        }, "reply", 8 /* PROPS */, _hoisted_352)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), comment.show_comment_box ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
          key: 2,
          "class": "form-control",
          type: "text",
          "onUpdate:modelValue": _cache[154] || (_cache[154] = function ($event) {
            return $data.reply_concat = $event;
          })
        }, "                                    ", 512 /* NEED_PATCH */)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.reply_concat]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), comment.show_comment_box ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 3,
          disabled: !$data.reply_concat || $data.reply_concat.trim() === '',
          "class": "btn btn-primary text-white",
          onClick: function onClick($event) {
            return $options.updateComment(comment.id, comment, index);
          }
        }, "Send", 8 /* PROPS */, _hoisted_353)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), comment.show_comment_box ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 4,
          "class": "btn btn-danger text-white",
          onClick: function onClick($event) {
            return $options.showCommentBox(index);
          }
        }, "Cancel", 8 /* PROPS */, _hoisted_354)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
            backgroundColor: comment.comment_status === '0' ? '#fecaca' : '#bbf7d0',
            color: comment.comment_status === '0' ? '#991b1b' : '#065f46'
          }),
          "class": "px-2 py-1 rounded"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.comment_status === '0' ? 'Unresolved' : 'OK'), 1 /* TEXT */)], 4 /* STYLE */), $props.auth.user.department_code === '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_355, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-success text-white",
          onClick: function onClick($event) {
            return $options.submitAction('resolve', comment.id, index);
          },
          title: "Mark comment as Resolved"
        }, _toConsumableArray(_cache[417] || (_cache[417] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          fill: "currentColor",
          "class": "bi bi-check-circle",
          viewBox: "0 0 16 16"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          d: "m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"
        })], -1 /* CACHED */)])), 8 /* PROPS */, _hoisted_356), _cache[420] || (_cache[420] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-primary text-white",
          onClick: function onClick($event) {
            return $options.submitAction('reset', comment.id, index);
          },
          title: "Reset to Unresolved"
        }, _toConsumableArray(_cache[418] || (_cache[418] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          fill: "currentColor",
          "class": "bi bi-arrow-counterclockwise",
          viewBox: "0 0 16 16"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          "fill-rule": "evenodd",
          d: "M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          d: "M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"
        })], -1 /* CACHED */)])), 8 /* PROPS */, _hoisted_357), _cache[421] || (_cache[421] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-danger text-white",
          onClick: function onClick($event) {
            return $options.submitAction('delete', comment.id, index);
          },
          title: "Delete this comment"
        }, _toConsumableArray(_cache[419] || (_cache[419] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          fill: "currentColor",
          "class": "bi bi-trash-fill",
          viewBox: "0 0 16 16"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          d: "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"
        })], -1 /* CACHED */)])), 8 /* PROPS */, _hoisted_358), _cache[422] || (_cache[422] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  ", -1 /* CACHED */))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td>\n                                    <span v-if=\"comment.user\">{{ comment.user.FullName }}</span>\n                                    <span v-else>Not recorded</span>\n                                </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatDate(comment.created_at)), 1 /* TEXT */)]);
      }), 256 /* UNKEYED_FRAGMENT */))])])])]), _cache[425] || (_cache[425] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ccet_computed:\n        {{ ccet_computed }} ")]), $data.BudgetModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_BudgetModal, {
    key: 0,
    onCloseModalEvent: $options.closeBudgetModal,
    title: "BUDGETARY REQUIREMENTS"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_359, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_360, [_cache[426] || (_cache[426] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "for": ""
      }, "CHART OF ACCOUNTS ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_multiselect, {
        ref: "AccountCodeInput",
        options: $options.chart_of_accounts,
        searchable: true,
        modelValue: $data.budget_new.selected_chart_of_account,
        "onUpdate:modelValue": _cache[155] || (_cache[155] = function ($event) {
          return $data.budget_new.selected_chart_of_account = $event;
        }),
        label: "label",
        "track-by": "label",
        onClose: $options.selectChartOfAccount
      }, null, 8 /* PROPS */, ["options", "modelValue", "onClose"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_361, [_cache[427] || (_cache[427] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "class": "form-label"
      }, "Particulars", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[156] || (_cache[156] = function ($event) {
          return $data.budget_new.particulars = $event;
        }),
        type: "text",
        "class": "form-control",
        placeholder: "Enter particulars"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.budget_new.particulars]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_362, [_cache[428] || (_cache[428] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "class": "form-label"
      }, "Account Code", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[157] || (_cache[157] = function ($event) {
          return $data.budget_new.account_code = $event;
        }),
        type: "text",
        "class": "form-control",
        placeholder: "Enter account code"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.budget_new.account_code]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_363, [_cache[429] || (_cache[429] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "class": "form-label"
      }, "Amount", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[158] || (_cache[158] = function ($event) {
          return $data.budget_new.amount = $event;
        }),
        type: "number",
        "class": "form-control",
        placeholder: "Enter amount"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.budget_new.amount, void 0, {
        number: true
      }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_364, [_cache[431] || (_cache[431] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "class": "form-label"
      }, "Category", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        "onUpdate:modelValue": _cache[159] || (_cache[159] = function ($event) {
          return $data.budget_new.category = $event;
        }),
        "class": "form-select",
        disabled: ""
      }, _toConsumableArray(_cache[430] || (_cache[430] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
        value: ""
      }, "Select category", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Personnel Services", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Maintenance, Operating, and Other Expenses", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Financial Expenses", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Capital Outlay", -1 /* CACHED */)])), 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.budget_new.category]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_365, [_cache[433] || (_cache[433] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "class": "form-label"
      }, "GAD Type", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        "onUpdate:modelValue": _cache[160] || (_cache[160] = function ($event) {
          return $data.budget_new.category_gad = $event;
        }),
        "class": "form-select",
        disabled: ""
      }, _toConsumableArray(_cache[432] || (_cache[432] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
        value: ""
      }, "Select type", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
        value: "GAD"
      }, "GAD", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
        value: "NON-GAD"
      }, "NON-GAD", -1 /* CACHED */)])), 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.budget_new.category_gad]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_366, [_cache[434] || (_cache[434] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "class": "form-label"
      }, "Source", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[161] || (_cache[161] = function ($event) {
          return $data.budget_new.source = $event;
        }),
        type: "text",
        "class": "form-control",
        placeholder: "Enter source"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.budget_new.source]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn btn-danger mt-3 text-white",
        onClick: _cache[162] || (_cache[162] = function () {
          return $options.closeBudgetModal && $options.closeBudgetModal.apply($options, arguments);
        })
      }, "Cancel"), _cache[435] || (_cache[435] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn btn-primary mt-3 text-white",
        onClick: _cache[163] || (_cache[163] = function ($event) {
          return $options.saveBudgetRequirement();
        })
      }, "Save")])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.StrategyModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_StrategyModal, {
    key: 1,
    onCloseModalEvent: $options.closeStrategyModal,
    title: "STRATEGIES MODAL"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_367, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.strategies, function (strategy, index) {
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
        }, null, 8 /* PROPS */, _hoisted_368), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return strategy.year_period = $event;
          },
          placeholder: "Year Period",
          type: "number",
          "class": "form-control mb-1"
        }, null, 8 /* PROPS */, _hoisted_369), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.year_period]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          onClick: function onClick($event) {
            return $options.removeStrategy(index);
          },
          "class": "btn btn-danger btn-sm",
          style: {
            "background-color": "#dc3545",
            "color": "#fff",
            "border": "none"
          }
        }, " X", 8 /* PROPS */, _hoisted_370)])]);
      }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[164] || (_cache[164] = function () {
          return $options.addStrategy && $options.addStrategy.apply($options, arguments);
        }),
        "class": "btn btn-primary mt-2"
      }, "Add Row"), _cache[436] || (_cache[436] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[165] || (_cache[165] = function () {
          return $options.saveStrategies && $options.saveStrategies.apply($options, arguments);
        }),
        "class": "btn btn-success mt-2"
      }, "Save"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{strategies}} ")];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.ActivityModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ActivityModal, {
    key: 2,
    onCloseModalEvent: $options.closeActivityModal,
    title: "ACTIVITIES MODAL"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_371, [_cache[439] || (_cache[439] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Description"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Gender Issues"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Timeline"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Period"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
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
        }, null, 8 /* PROPS */, _hoisted_372), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.gad_issue = $event;
          },
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_373), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.gad_issue]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.date_from = $event;
          },
          type: "date",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_374), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.date_from]]), _cache[437] || (_cache[437] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "to", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.date_to = $event;
          },
          type: "date",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_375), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.date_to]])])]), _cache[438] || (_cache[438] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
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
        }, null, 8 /* PROPS */, _hoisted_376), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ps_q1, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.ps_q2 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_377), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ps_q2, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.ps_q3 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_378), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ps_q3, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.ps_q4 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_379), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ps_q4, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Total (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.ps_q1) + parseFloat(act.ps_q2) + parseFloat(act.ps_q3) + parseFloat(act.ps_q4), 2, true)) + ")", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.mooe_q1 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_380), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.mooe_q1, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.mooe_q2 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_381), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.mooe_q2, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.mooe_q3 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_382), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.mooe_q3, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.mooe_q4 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_383), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.mooe_q4, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Total (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.mooe_q1) + parseFloat(act.mooe_q2) + parseFloat(act.mooe_q3) + parseFloat(act.mooe_q4), 2, true)) + ")", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CO "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.co_q1 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_384), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.co_q1, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.co_q2 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_385), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.co_q2, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.co_q3 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_386), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.co_q3, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.co_q4 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_387), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.co_q4, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Total (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.co_q1) + parseFloat(act.co_q2) + parseFloat(act.co_q3) + parseFloat(act.co_q4), 2, true)) + ")", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.fe_q1 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_388), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.fe_q1, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.fe_q2 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_389), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.fe_q2, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.fe_q3 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_390), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.fe_q3, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.fe_q4 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_391), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.fe_q4, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Total (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.fe_q1) + parseFloat(act.fe_q2) + parseFloat(act.fe_q3) + parseFloat(act.fe_q4), 2, true)) + ")", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CCET "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input v-model=\"act.ccet_code\" class=\"form-control\" /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <select v-model=\"act.ccet_code\" class=\"form-select\" >\n                            <option value=\"\">Select CCET</option>\n                            <option v-for=\"ccet in ccet_codes\" :key=\"ccet.ccet_code\" :value=\"ccet.ccet_code\">\n                                {{ ccet.ccet_code }} - {{ ccet.description }}\n                            </option>\n                        </select> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_multiselect, {
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
          onInput: _cache[166] || (_cache[166] = function ($event) {
            return $options.updateCCET($event);
          })
        }, null, 8 /* PROPS */, ["options", "reduce", "modelValue", "onUpdate:modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PERSON RESPONSIBLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.responsible = $event;
          },
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_392), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.responsible]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-danger btn-sm",
          onClick: function onClick($event) {
            return $options.removeActivity(index);
          }
        }, " X ", 8 /* PROPS */, _hoisted_393)])]);
      }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_394, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary text-white",
        onClick: _cache[167] || (_cache[167] = function () {
          return $options.addActivity && $options.addActivity.apply($options, arguments);
        })
      }, "Add Row"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-success text-white",
        onClick: _cache[168] || (_cache[168] = function () {
          return $options.saveActivities && $options.saveActivities.apply($options, arguments);
        })
      }, "Save")])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.TeamModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_TeamModal, {
    key: 3,
    onCloseModalEvent: $options.closeTeamModal,
    title: "IMPLEMENTING TEAM"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ team_members }} "), _cache[446] || (_cache[446] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "hidden",
        required: ""
      }, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "hidden",
        "onUpdate:modelValue": _cache[169] || (_cache[169] = function ($event) {
          return $data.team_members.revision_plan_id = $event;
        }),
        "class": "form-control",
        autocomplete: "chrome-off"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.team_members.revision_plan_id]]), _cache[447] || (_cache[447] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "for": ""
      }, "ASSIGN PERSON", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" team_members.implementing_team_id: {{ team_members.implementing_team_id }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_multiselect, {
        options: $options.employees_computed,
        searchable: true,
        label: "label",
        "track-by": "label",
        reduce: function reduce(emp) {
          return emp.empl_id;
        },
        modelValue: $data.team_members.implementing_team_id,
        "onUpdate:modelValue": _cache[170] || (_cache[170] = function ($event) {
          return $data.team_members.implementing_team_id = $event;
        }),
        onInput: _cache[171] || (_cache[171] = function ($event) {
          return $options.updateEmployee($event);
        })
      }, null, 8 /* PROPS */, ["options", "reduce", "modelValue"]), _cache[448] || (_cache[448] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "for": ""
      }, "NAME", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "onUpdate:modelValue": _cache[172] || (_cache[172] = function ($event) {
          return $data.team_members.name = $event;
        }),
        "class": "form-control",
        autocomplete: "chrome-off"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.team_members.name]]), _cache[449] || (_cache[449] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "for": ""
      }, "GENDER", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        "class": "form-select",
        "onUpdate:modelValue": _cache[173] || (_cache[173] = function ($event) {
          return $data.team_members.gender = $event;
        }),
        autocomplete: "chrome-off"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <options> "), _cache[440] || (_cache[440] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
        value: "M"
      }, "Male", -1 /* CACHED */)), _cache[441] || (_cache[441] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
        value: "F"
      }, "Female", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </options> ")], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.team_members.gender]]), _cache[450] || (_cache[450] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "for": ""
      }, "ROLE IN THE PROJECT", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "onUpdate:modelValue": _cache[174] || (_cache[174] = function ($event) {
          return $data.team_members.role = $event;
        }),
        "class": "form-control",
        autocomplete: "chrome-off"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.team_members.role]]), _cache[451] || (_cache[451] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "for": ""
      }, "JOB STATUS", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input type=\"text\" v-model=\"team_members.status\" class=\"form-control\" autocomplete=\"chrome-off\"> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        "onUpdate:modelValue": _cache[175] || (_cache[175] = function ($event) {
          return $data.team_members.status = $event;
        }),
        "class": "form-control",
        autocomplete: "chrome-off"
      }, [_cache[442] || (_cache[442] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Job Order", -1 /* CACHED */)), _cache[443] || (_cache[443] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Regular", -1 /* CACHED */)), _cache[444] || (_cache[444] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Casual", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <option>Regular</options>\n            <option>Job Order</option>\n            <option>Casual</option> ")], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.team_members.status]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "checkbox",
        "onUpdate:modelValue": _cache[176] || (_cache[176] = function ($event) {
          return $data.team_members.with_gad_training = $event;
        }),
        "true-value": 1,
        "false-value": 0
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.team_members.with_gad_training]]), _cache[452] || (_cache[452] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  With GAD training ", -1 /* CACHED */)), _cache[453] || (_cache[453] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [_cache[445] || (_cache[445] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "for": ""
      }, "Specify GAD Training", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "onUpdate:modelValue": _cache[177] || (_cache[177] = function ($event) {
          return $data.team_members.specify_GAD_training = $event;
        }),
        "class": "form-control",
        autocomplete: "chrome-off"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.team_members.specify_GAD_training]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "hidden",
        "onUpdate:modelValue": _cache[178] || (_cache[178] = function ($event) {
          return $data.team_members.id = $event;
        }),
        "class": "form-control",
        autocomplete: "chrome-off"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.team_members.id]]), _cache[454] || (_cache[454] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "for": ""
      }, "POSITION", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "onUpdate:modelValue": _cache[179] || (_cache[179] = function ($event) {
          return $data.team_members.position = $event;
        }),
        "class": "form-control",
        autocomplete: "chrome-off"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.team_members.position]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary text-white",
        onClick: _cache[180] || (_cache[180] = function ($event) {
          return $options.saveTeamMembers();
        })
      }, "Save")];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.RiskManagementModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_RiskManagementModal, {
    key: 4,
    onCloseModalEvent: $options.closeRiskManagementModal,
    title: "RISK MANAGEMENT"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TABLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_395, [_cache[455] || (_cache[455] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Possible Risk"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Preventive Measures"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Mechanisms to monitor"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Actions")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.risk_managements, function (row, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return row.possible_risk = $event;
          }
        }, "                        ", 8 /* PROPS */, _hoisted_396), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, row.possible_risk]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "text",
          "class": "form-control",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return row.person_affected = $event;
          }
        }, null, 8 /* PROPS */, _hoisted_397), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, row.person_affected]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return row.management = $event;
          }
        }, "                        ", 8 /* PROPS */, _hoisted_398), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, row.management]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_399, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-danger",
          onClick: function onClick($event) {
            return $options.removeRiskManagementRow(index);
          }
        }, " Remove ", 8 /* PROPS */, _hoisted_400)])]);
      }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("ADD RISK MANAGEMENT ROW"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary mb-2 text-white",
        onClick: _cache[181] || (_cache[181] = function () {
          return $options.addRiskManagementRow && $options.addRiskManagementRow.apply($options, arguments);
        })
      }, " + Add Row "), _cache[456] || (_cache[456] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("    ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SAVE BUTTON "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-success mb-2 text-white",
        onClick: _cache[182] || (_cache[182] = function () {
          return $options.saveRiskManagements && $options.saveRiskManagements.apply($options, arguments);
        })
      }, " Save Risk Managements ")];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.MonitoringModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MonitoringModal, {
    key: 5,
    onCloseModalEvent: $options.closeMonitoringModal,
    title: "MONITORING AND EVALUATION"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_401, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TABLE FOR INPUT "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_402, [_cache[458] || (_cache[458] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Evaluation Mechanism/Tools"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "OPR and their Roles "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Target Beneficiaries"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Need for External M&E Team or GAD Expert/Consultant"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.monitoring_and_evaluations, function (item, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return item.evaluation_mechanism_tool = $event;
          }
        }, null, 8 /* PROPS */, _hoisted_403), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, item.evaluation_mechanism_tool]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return item.opr = $event;
          }
        }, null, 8 /* PROPS */, _hoisted_404), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, item.opr]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return item.target_beneficiaries = $event;
          }
        }, null, 8 /* PROPS */, _hoisted_405), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, item.target_beneficiaries]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          type: "text",
          "class": "form-select",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return item.gad = $event;
          }
        }, _toConsumableArray(_cache[457] || (_cache[457] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Yes", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "No", -1 /* CACHED */)])), 8 /* PROPS */, _hoisted_406), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, item.gad]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_407, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-danger btn-sm",
          onClick: function onClick($event) {
            return $options.removeMonitoringAndEvaluationRow(index);
          }
        }, " Remove ", 8 /* PROPS */, _hoisted_408)])]);
      }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" BUTTONS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_409, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary text-white",
        onClick: _cache[183] || (_cache[183] = function ($event) {
          return $options.addMonitoringAndEvaluationRow();
        })
      }, "Add Row"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-success text-white float-end",
        onClick: _cache[184] || (_cache[184] = function ($event) {
          return $options.saveMonitoringAndEvaluation();
        })
      }, "Save")])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.SignatoryModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SignatoryModal, {
    key: 6,
    onCloseModalEvent: $options.closeSignatoryModal,
    title: "SIGNATORIES"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ADD SIGNATORY BUTTON "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SIGNATORIES TABLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_410, [_cache[460] || (_cache[460] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Name"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Position"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Acted"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Sequence"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Action")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.signatories, function (row, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "text",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return row.name = $event;
          },
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_411), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, row.name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "text",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return row.position = $event;
          },
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_412), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, row.position]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return row.acted = $event;
          },
          "class": "form-select",
          autocomplete: "chrome-off"
        }, _toConsumableArray(_cache[459] || (_cache[459] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Prepared", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Reviewed", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Noted", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Approved", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Recommending Approval", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "As to AIP Inclusion", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "As to AIP Appropriation", -1 /* CACHED */)])), 8 /* PROPS */, _hoisted_413), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, row.acted]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "number",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return row.sequence = $event;
          },
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_414), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, row.sequence]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          onClick: function onClick($event) {
            return $options.removeSignatoryRow(index);
          },
          "class": "btn btn-danger btn-sm"
        }, " Remove ", 8 /* PROPS */, _hoisted_415)])]);
      }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[185] || (_cache[185] = function () {
          return $options.addSignatoryRow && $options.addSignatoryRow.apply($options, arguments);
        }),
        "class": "btn btn-primary mb-3"
      }, " + Add Row "), _cache[461] || (_cache[461] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("   ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[186] || (_cache[186] = function ($event) {
          return $options.saveSignatories();
        }),
        "class": "btn btn-success text-white"
      }, "Save")];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.ExpectedOutputModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ExpectedOutputModal, {
    key: 7,
    onCloseModalEvent: $options.hideExpectedOutputModal,
    title: "EXPECTED OUTPUTS"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <h3><p><b>Activity: </b><u>{{activity_description_current}}</u></p></h3> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_416, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[462] || (_cache[462] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        style: {
          "border": "none !important"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Activity: ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_417, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.activity_description_current), 1 /* TEXT */)])])])]), _cache[465] || (_cache[465] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Expected Outputs", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ expected_outputs_current }}\n        activity_id: {{ activity_id }}\n        activity_project_id: {{ activity_project_id }} "), $data.expected_outputs_new.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_418, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_419, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_420, [_cache[463] || (_cache[463] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
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
        }, null, 8 /* PROPS */, _hoisted_421), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, output.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          type: "text",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return output.target_indicator = $event;
          },
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_422), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, output.target_indicator]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "number",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return output.physical_q1 = $event;
          },
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_423), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, output.physical_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "number",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return output.physical_q2 = $event;
          },
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_424), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, output.physical_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "number",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return output.physical_q3 = $event;
          },
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_425), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, output.physical_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "number",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return output.physical_q4 = $event;
          },
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_426), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, output.physical_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          onClick: function onClick($event) {
            return $options.removeExpectedOutput(index);
          },
          "class": "btn btn-danger btn-sm"
        }, "Remove", 8 /* PROPS */, _hoisted_427)])]);
      }), 128 /* KEYED_FRAGMENT */))])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_428, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[187] || (_cache[187] = function () {
          return $options.addExpectedOutput && $options.addExpectedOutput.apply($options, arguments);
        }),
        "class": "btn btn-primary"
      }, "Add Row"), $data.expected_outputs_new.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        onClick: _cache[188] || (_cache[188] = function () {
          return $options.saveExpectedOutputs && $options.saveExpectedOutputs.apply($options, arguments);
        }),
        "class": "btn btn-success"
      }, "Save")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_429, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <tr> "), _cache[464] || (_cache[464] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
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
          onInput: _cache[189] || (_cache[189] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outputs', 'description', exp.id, exp.description);
          }
        }, "\n                            ", 40 /* PROPS, NEED_HYDRATION */, _hoisted_430), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, exp.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return exp.target_indicator = $event;
          },
          type: "text",
          onInput: _cache[190] || (_cache[190] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outputs', 'target_indicator', exp.id, exp.target_indicator);
          }
        }, "\n                            ", 40 /* PROPS, NEED_HYDRATION */, _hoisted_431), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, exp.target_indicator]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return exp.physical_q1 = $event;
          },
          type: "text",
          onInput: _cache[191] || (_cache[191] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outputs', 'physical_q1', exp.id, exp.physical_q1);
          }
        }, "                            ", 40 /* PROPS, NEED_HYDRATION */, _hoisted_432), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, exp.physical_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return exp.physical_q2 = $event;
          },
          type: "text",
          onInput: _cache[192] || (_cache[192] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outputs', 'physical_q2', exp.id, exp.physical_q2);
          }
        }, "                            ", 40 /* PROPS, NEED_HYDRATION */, _hoisted_433), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, exp.physical_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return exp.physical_q3 = $event;
          },
          type: "text",
          onInput: _cache[193] || (_cache[193] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outputs', 'physical_q3', exp.id, exp.physical_q3);
          }
        }, "                            ", 40 /* PROPS, NEED_HYDRATION */, _hoisted_434), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, exp.physical_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return exp.physical_q4 = $event;
          },
          type: "text",
          onInput: _cache[194] || (_cache[194] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outputs', 'physical_q4', exp.id, exp.physical_q4);
          }
        }, "                            ", 40 /* PROPS, NEED_HYDRATION */, _hoisted_435), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, exp.physical_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-danger btn-sm text-white",
          onClick: function onClick($event) {
            return $options.deleteExpectedOutput(exp.id, 'expected_revised_outputs', exp.description, _ctx.index);
          }
        }, " 🗑 Delete ", 8 /* PROPS */, _hoisted_436)])]);
      }), 256 /* UNKEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </tr> ")])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.ExpectedOutcomeModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ExpectedOutcomeModal, {
    key: 8,
    onCloseModalEvent: $options.hideExpectedOutcomeModal,
    title: "EXPECTED OUTCOMES"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ expected_outputs_current }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Table for Expected Outcomes "), $data.expected_outcomes_new.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", _hoisted_437, [_cache[466] || (_cache[466] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Description"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Action")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.expected_outcomes_new, function (outcome, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return outcome.description = $event;
          },
          "class": "form-control"
        }, null, 8 /* PROPS */, _hoisted_438), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, outcome.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          onClick: function onClick($event) {
            return $options.removeOutcome(index);
          },
          "class": "btn btn-danger btn-sm"
        }, "Remove", 8 /* PROPS */, _hoisted_439)])]);
      }), 128 /* KEYED_FRAGMENT */))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Add & Save Buttons "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_440, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[195] || (_cache[195] = function () {
          return $options.addOutcome && $options.addOutcome.apply($options, arguments);
        }),
        "class": "btn btn-primary"
      }, "Add Outcome"), $data.expected_outcomes_new.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        onClick: _cache[196] || (_cache[196] = function () {
          return $options.saveExpectedOutcomes && $options.saveExpectedOutcomes.apply($options, arguments);
        }),
        "class": "btn btn-success"
      }, "Save All")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_441, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <tr> "), _cache[467] || (_cache[467] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
        "class": "table thead-dark"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        rowspan: "2"
      }, "Description"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Actions")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.expected_outcomes_current, function (exp) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return exp.description = $event;
          },
          type: "text",
          onInput: _cache[197] || (_cache[197] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outcomes', 'description', exp.id, exp.description);
          }
        }, "\n                            ", 40 /* PROPS, NEED_HYDRATION */, _hoisted_442), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, exp.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-danger btn-sm text-white",
          onClick: function onClick($event) {
            return $options.deleteExpectedOutcome(exp.id, 'expected_revised_outcomes', exp.description, _ctx.index);
          }
        }, " 🗑 Delete ", 8 /* PROPS */, _hoisted_443)])]);
      }), 256 /* UNKEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </tr> ")])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.ActivityModalVisibleEdit ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ActivityModalEdit, {
    key: 9,
    onCloseModalEvent: $options.closeActivityModalEdit,
    title: "ACTIVITIES MODAL"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[468] || (_cache[468] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        style: {
          "background-color": "#2b1402",
          "color": "#fff"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Activity Description"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_444, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        "class": "form-control",
        "onUpdate:modelValue": _cache[198] || (_cache[198] = function ($event) {
          return $data.activity_active.description = $event;
        }),
        type: "text",
        onInput: _cache[199] || (_cache[199] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onBlur: _cache[200] || (_cache[200] = function ($event) {
          return $options.updateRevisionPlans('activities', 'description', $data.activity_active.id, $data.activity_active.description);
        })
      }, "                                " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.activity_active.description) + "\n                        ", 545 /* TEXT, NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.activity_active.description]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GAD Issue "), _cache[469] || (_cache[469] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        style: {
          "background-color": "#703a13",
          "color": "#fff"
        },
        rowspan: "2"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, " GAD Issue ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_445, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        "class": "form-control transparent-bg",
        "onUpdate:modelValue": _cache[201] || (_cache[201] = function ($event) {
          return $data.activity_active.gad_issue = $event;
        }),
        type: "text",
        onInput: _cache[202] || (_cache[202] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: _cache[203] || (_cache[203] = function ($event) {
          return $options.updateRevisionPlans('activity_projects', 'gad_issue', $data.activity_active.activity_id, $data.activity_active.gad_issue);
        })
      }, "                                " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.activity_active.gad_issue) + "\n                        ", 545 /* TEXT, NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.activity_active.gad_issue]])]), _cache[470] || (_cache[470] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        style: {
          "background-color": "#703a13",
          "color": "#fff",
          "text-align": "center"
        },
        colspan: "4"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, " TIMELINE ")], -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Timeline "), _cache[471] || (_cache[471] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        style: {
          "background-color": "#703a13",
          "color": "#fff"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, " FROM ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "date",
        "onUpdate:modelValue": _cache[204] || (_cache[204] = function ($event) {
          return $data.activity_active.date_from = $event;
        }),
        id: $data.activity_active.activity_id + '_activity_projects_date_from',
        onChange: _cache[205] || (_cache[205] = function ($event) {
          return $options.updateRevisionPlans('activity_projects', 'date_from', $data.activity_active.activity_id, $data.activity_active.date_from);
        })
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_446), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.activity_active.date_from]])]), _cache[472] || (_cache[472] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        style: {
          "background-color": "#703a13",
          "color": "#fff"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, " TO ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "date",
        "onUpdate:modelValue": _cache[206] || (_cache[206] = function ($event) {
          return $data.activity_active.date_to = $event;
        }),
        onChange: _cache[207] || (_cache[207] = function ($event) {
          return $options.updateRevisionPlans('activity_projects', 'date_to', $data.activity_active.activity_id, $data.activity_active.date_to);
        }),
        id: $data.activity_active.activity_id + '_activity_projects_date_to'
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_447), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.activity_active.date_to]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" COLUMN HEADERS "), _cache[479] || (_cache[479] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
        style: {
          "background-color": "#2b1402",
          "color": "#fff"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Quarter 1")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Quarter 2")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Quarter 3")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Quarter 4")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Total")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PERSONNEL SERVICES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[473] || (_cache[473] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        style: {
          "background-color": "#703a13",
          "color": "#fff"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, " Personnel Services ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": _cache[208] || (_cache[208] = function ($event) {
          return $data.activity_active.ps_q1 = $event;
        }),
        onInput: _cache[209] || (_cache[209] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onBlur: _cache[210] || (_cache[210] = function ($event) {
          return $options.updateRevisionPlans('activity_projects', 'ps_q1', $data.activity_active.activity_id, $data.activity_active.ps_q1);
        })
      }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.activity_active.ps_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": _cache[211] || (_cache[211] = function ($event) {
          return $data.activity_active.ps_q2 = $event;
        }),
        onInput: _cache[212] || (_cache[212] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onBlur: _cache[213] || (_cache[213] = function ($event) {
          return $options.updateRevisionPlans('activity_projects', 'ps_q2', $data.activity_active.activity_id, $data.activity_active.ps_q2);
        })
      }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.activity_active.ps_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": _cache[214] || (_cache[214] = function ($event) {
          return $data.activity_active.ps_q3 = $event;
        }),
        onInput: _cache[215] || (_cache[215] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onBlur: _cache[216] || (_cache[216] = function ($event) {
          return $options.updateRevisionPlans('activity_projects', 'ps_q3', $data.activity_active.activity_id, $data.activity_active.ps_q3);
        })
      }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.activity_active.ps_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": _cache[217] || (_cache[217] = function ($event) {
          return $data.activity_active.ps_q4 = $event;
        }),
        onInput: _cache[218] || (_cache[218] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onBlur: _cache[219] || (_cache[219] = function ($event) {
          return $options.updateRevisionPlans('activity_projects', 'ps_q4', $data.activity_active.activity_id, $data.activity_active.ps_q4);
        })
      }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.activity_active.ps_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat($data.activity_active.ps_q1) + parseFloat($data.activity_active.ps_q2) + parseFloat($data.activity_active.ps_q3) + parseFloat($data.activity_active.ps_q4), 2, true)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[474] || (_cache[474] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        style: {
          "background-color": "#703a13",
          "color": "#fff"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, " MOOE ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": _cache[220] || (_cache[220] = function ($event) {
          return $data.activity_active.mooe_q1 = $event;
        }),
        onInput: _cache[221] || (_cache[221] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onBlur: _cache[222] || (_cache[222] = function ($event) {
          return $options.updateRevisionPlans('activity_projects', 'mooe_q1', $data.activity_active.activity_id, $data.activity_active.mooe_q1);
        })
      }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.activity_active.mooe_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": _cache[223] || (_cache[223] = function ($event) {
          return $data.activity_active.mooe_q2 = $event;
        }),
        onInput: _cache[224] || (_cache[224] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onBlur: _cache[225] || (_cache[225] = function ($event) {
          return $options.updateRevisionPlans('activity_projects', 'mooe_q2', $data.activity_active.activity_id, $data.activity_active.mooe_q2);
        })
      }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.activity_active.mooe_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": _cache[226] || (_cache[226] = function ($event) {
          return $data.activity_active.mooe_q3 = $event;
        }),
        onInput: _cache[227] || (_cache[227] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onBlur: _cache[228] || (_cache[228] = function ($event) {
          return $options.updateRevisionPlans('activity_projects', 'mooe_q3', $data.activity_active.activity_id, $data.activity_active.mooe_q3);
        })
      }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.activity_active.mooe_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": _cache[229] || (_cache[229] = function ($event) {
          return $data.activity_active.mooe_q4 = $event;
        }),
        onInput: _cache[230] || (_cache[230] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onBlur: _cache[231] || (_cache[231] = function ($event) {
          return $options.updateRevisionPlans('activity_projects', 'mooe_q4', $data.activity_active.activity_id, $data.activity_active.mooe_q4);
        })
      }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.activity_active.mooe_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat($data.activity_active.mooe_q1) + parseFloat($data.activity_active.mooe_q2) + parseFloat($data.activity_active.mooe_q3) + parseFloat($data.activity_active.mooe_q4), 2, true)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FINANCIAL EXPENSES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[475] || (_cache[475] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        style: {
          "background-color": "#703a13",
          "color": "#fff"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, " Financial Expenses ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": _cache[232] || (_cache[232] = function ($event) {
          return $data.activity_active.fe_q1 = $event;
        }),
        onInput: _cache[233] || (_cache[233] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onBlur: _cache[234] || (_cache[234] = function ($event) {
          return $options.updateRevisionPlans('activity_projects', 'fe_q1', $data.activity_active.activity_id, $data.activity_active.fe_q1);
        })
      }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.activity_active.fe_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": _cache[235] || (_cache[235] = function ($event) {
          return $data.activity_active.fe_q2 = $event;
        }),
        onInput: _cache[236] || (_cache[236] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onBlur: _cache[237] || (_cache[237] = function ($event) {
          return $options.updateRevisionPlans('activity_projects', 'fe_q2', $data.activity_active.activity_id, $data.activity_active.fe_q2);
        })
      }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.activity_active.fe_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": _cache[238] || (_cache[238] = function ($event) {
          return $data.activity_active.fe_q3 = $event;
        }),
        onInput: _cache[239] || (_cache[239] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onBlur: _cache[240] || (_cache[240] = function ($event) {
          return $options.updateRevisionPlans('activity_projects', 'fe_q3', $data.activity_active.activity_id, $data.activity_active.fe_q3);
        })
      }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.activity_active.fe_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": _cache[241] || (_cache[241] = function ($event) {
          return $data.activity_active.fe_q4 = $event;
        }),
        onInput: _cache[242] || (_cache[242] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onBlur: _cache[243] || (_cache[243] = function ($event) {
          return $options.updateRevisionPlans('activity_projects', 'fe_q4', $data.activity_active.activity_id, $data.activity_active.fe_q4);
        })
      }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.activity_active.fe_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat($data.activity_active.fe_q1) + parseFloat($data.activity_active.fe_q2) + parseFloat($data.activity_active.fe_q3) + parseFloat($data.activity_active.fe_q4), 2, true)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CAPITAL OUTLAY "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[476] || (_cache[476] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        style: {
          "background-color": "#703a13",
          "color": "#fff"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, " Capital Outlay ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": _cache[244] || (_cache[244] = function ($event) {
          return $data.activity_active.co_q1 = $event;
        }),
        onInput: _cache[245] || (_cache[245] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: _cache[246] || (_cache[246] = function ($event) {
          return $options.updateRevisionPlans('activity_projects', 'co_q1', $data.activity_active.activity_id, $data.activity_active.co_q1);
        })
      }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.activity_active.co_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": _cache[247] || (_cache[247] = function ($event) {
          return $data.activity_active.co_q2 = $event;
        }),
        onInput: _cache[248] || (_cache[248] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: _cache[249] || (_cache[249] = function ($event) {
          return $options.updateRevisionPlans('activity_projects', 'co_q2', $data.activity_active.activity_id, $data.activity_active.co_q2);
        })
      }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.activity_active.co_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": _cache[250] || (_cache[250] = function ($event) {
          return $data.activity_active.co_q3 = $event;
        }),
        onInput: _cache[251] || (_cache[251] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: _cache[252] || (_cache[252] = function ($event) {
          return $options.updateRevisionPlans('activity_projects', 'co_q3', $data.activity_active.activity_id, $data.activity_active.co_q3);
        })
      }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.activity_active.co_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": _cache[253] || (_cache[253] = function ($event) {
          return $data.activity_active.co_q4 = $event;
        }),
        onInput: _cache[254] || (_cache[254] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: _cache[255] || (_cache[255] = function ($event) {
          return $options.updateRevisionPlans('activity_projects', 'co_q4', $data.activity_active.activity_id, $data.activity_active.co_q4);
        })
      }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.activity_active.co_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat($data.activity_active.co_q1) + parseFloat($data.activity_active.co_q2) + parseFloat($data.activity_active.co_q3) + parseFloat($data.activity_active.co_q4), 2, true)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CCET Code/Respoinsible Person "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Climate Change Expenditure Tagging "), _cache[477] || (_cache[477] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        style: {
          "background-color": "#703a13",
          "color": "#fff"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, " CCET Code ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_448, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_multiselect, {
        "class": "form-select dynamic-width",
        style: {
          "width": "100%"
        },
        options: $options.ccet_computed,
        searchable: true,
        label: "label",
        "track-by": "label",
        reduce: function reduce(act) {
          return $data.activity_active.ccet_code;
        },
        modelValue: $data.activity_active.ccet_code,
        "onUpdate:modelValue": _cache[256] || (_cache[256] = function ($event) {
          return $data.activity_active.ccet_code = $event;
        }),
        onInput: _cache[257] || (_cache[257] = function (newVal) {
          return $options.updateRevisionPlans('activity_projects', 'ccet_code', $data.activity_active.activity_id, newVal);
        })
      }, null, 8 /* PROPS */, ["options", "reduce", "modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PERSON Responsible "), _cache[478] || (_cache[478] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        style: {
          "background-color": "#703a13",
          "color": "#fff"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, " Person Responsible ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_449, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "text",
        "onUpdate:modelValue": _cache[258] || (_cache[258] = function ($event) {
          return $data.activity_active.responsible = $event;
        }),
        onInput: _cache[259] || (_cache[259] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onBlur: _cache[260] || (_cache[260] = function ($event) {
          return $options.updateRevisionPlans('activity_projects', 'responsible', $data.activity_active.activity_id, $data.activity_active.responsible);
        })
      }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.activity_active.responsible]])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{activity_active}} ")];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[480] || (_cache[480] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "jump-arrow"
  }, null, -1 /* CACHED */))], 64 /* STABLE_FRAGMENT */);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitleSmall.vue?vue&type=template&id=5be881dd&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitleSmall.vue?vue&type=template&id=5be881dd&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "modal-dialog modal-lg"
};
var _hoisted_4 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_5 = {
  "class": "modal-content",
  style: {
    "width": "150% !important",
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
  "class": "modal-title",
  style: {
    "color": "#ffe819",
    "text-align": "center !important"
  }
};
var _hoisted_8 = {
  "class": "modal-body"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
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
  }, "×", -1 /* CACHED */)])))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)]), _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "modal-footer",
    style: {
      "background-color": "#090137"
    }
  }, null, -1 /* CACHED */))])])])])]);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/QuillEditorShared.vue?vue&type=template&id=4d40f6aa&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/QuillEditorShared.vue?vue&type=template&id=4d40f6aa&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  ref: "editorContainer"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, null, 512 /* NEED_PATCH */)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/SmallModal.vue?vue&type=template&id=7f054742&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/SmallModal.vue?vue&type=template&id=7f054742&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "modal-title"
};
var _hoisted_2 = {
  "class": "modal-body"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.visible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "small-modal",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.modalStyle),
    onMousedown: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["stop"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Header "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "modal-header",
    onMousedown: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.startDrag && $options.startDrag.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "close-btn",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.close && $options.close.apply($options, arguments);
    })
  }, "×")], 32 /* NEED_HYDRATION */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Body "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Resize Handle "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div\r\n            class=\"resize-handle\"\r\n            @mousedown.prevent=\"startResize\"\r\n        ></div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Resize Handle (Right) "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "resize-handle resize-right",
    onMousedown: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.startResize('right', $event);
    }, ["prevent"]))
  }, null, 32 /* NEED_HYDRATION */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Resize Handle (Left) "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "resize-handle resize-left",
    onMousedown: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.startResize('left', $event);
    }, ["prevent"]))
  }, null, 32 /* NEED_HYDRATION */)], 36 /* STYLE, NEED_HYDRATION */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue?vue&type=style&index=0&id=296e597c&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue?vue&type=style&index=0&id=296e597c&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ntd, th {\n  border: 1px solid #000 !important;\n}\ntable {\n  border-collapse: collapse !important;\n}\n.th {\n    background-color: #929292 !important;\n}\n.superscript-btn {\n  /* font-size: 0.6em; */\n  /* vertical-align: super; */\n  border: none;\n  background: none;\n  padding: 0;\n  margin-left: 4px;\n  cursor: pointer;\n  color: #df280c;\n}\n.action-btn {\n  width: 100%;\n}\n.no-border-table td,\n.no-border-table th {\n  border: none !important;\n}\n.no-border-table {\n  border-collapse: collapse !important;\n}\n.signatory-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem; /* space between cards */\n}\n.signatory-card {\n  flex: 0 0 calc(50% - 0.5rem); /* 2 per row with spacing */\n  border: 0px solid #ccc;\n  padding: 1rem;\n  border-radius: 8px;\n}\n.signatory-card-full {\n  width: 100%; /* each card full width */\n  margin-bottom: 1rem;\n}\n.sticky-comments {\n    position: fixed;\n    top: 70px;\n    right: 20px;\n    width: 450px;\n    z-index: 10;\n}\n.scrollable-text {\n    height: 300px;           /*define the height you want*/\n    overflow-y: auto;        /*vertical scrollbar if content exceeds height*/\n    /*padding: 0px;           optional padding*/\n    /*border: 1px solid #ccc;  optional border*/\n    background-color: #fff;  /*optional background*/\n    /*line-height: 1.6;        improve readability*/\n}\n.sticky-comments .comments-header {\n    display: flex;\n    justify-content: space-between; /* Push h4 left and button right */\n    align-items: center;            /* Vertical alignment */\n    margin-bottom: 10px;            /* Space below the header */\n}\n.sticky-comments .close-btn {\n    background: transparent;\n    border: none;\n    font-size: 20px;\n    cursor: pointer;\n    line-height: 1;\n    padding: 0;\n    color: #333;\n}\n.highlight-target {\n    animation: highlightFlash 2s ease-out;\n}\n@keyframes highlightFlash {\n0% { background-color: #46ff18ff;\n}\n100% { background-color: transparent;\n}\n}\n.comment-approved {\n    color: darkgreen;\n    padding: 3px 6px;\n    border-radius: 4px;\n    transition: color .2s;\n}\n.comment-approved:hover {\n    color: #00AEEF; /* sky blue */\n}\n.comment-rejected {\n    color: red;\n    padding: 3px 6px;\n    border-radius: 4px;\n    transition: color .2s;\n}\n.comment-rejected:hover {\n    color: #CC7722; /* golden ochre */\n}\n.transparent-bg {\n    background-color: transparent !important;\n}\n/* TAB DESIGN *******************************************************************************************************************/\n/* Style the tab */\n/* .tab {\n  overflow: hidden;\n  border: 1px solid #ccc;\n  background-color: #f1f1f1;\n  color: #000 !important\n} */\n\n/* Style the buttons that are used to open the tab content */\n/* .tab button {\n  background-color: inherit;\n  color: red;\n  float: left;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 14px 16px;\n  transition: 0.3s;\n}\n\n/* Change background color of buttons on hover */\n/* .tab button:hover {\n  background-color: #ddd;\n} */\n\n/* Create an active/current tablink class */\n/* .tab button.active {\n  background-color: #ccc;\n  color: #df280c\n} */\n\n/* Style the tab content */\n/*.tabcontent {\n  display: none;\n  padding: 6px 12px;\n  border: 1px solid #ccc;\n  border-top: none;\n}\n\n.tablinks {\n    color: red;\n\n} */\n.comment-rejected:hover {\n    color: #CC7722; /* golden ochre */\n}\n.blink {\n    color: red;\n    animation: blinker 1s linear infinite;\n}\n@keyframes blinker {\n0%, 100% { color: red;\n}\n50% { color: #f8d823;\n} /* paler red */\n}\n\n/* HIDING QUILL EDITOR */\n/* Hide only the .ql-editor inside this wrapper */\n:deep([ref=\"beneficiariesEditorWrapper\"]) .ql-editor {\n  display: none;\n}\n/* .jump-arrow {\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-top: 12px solid transparent;\n    border-bottom: 12px solid transparent;\n    border-right: 18px solid red;\n    z-index: 9999;\n    animation: fadeOut 2s forwards;\n}\n\n@keyframes fadeOut {\n    0% { opacity: 1; }\n    70% { opacity: 1; }\n    100% { opacity: 0; }\n} */\n\n\n", ""]);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitleSmall.vue?vue&type=style&index=0&id=5be881dd&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitleSmall.vue?vue&type=style&index=0&id=5be881dd&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n    /* Override default value of 'none' */\n.modal[data-v-5be881dd] {\r\n      display: block;\n}\r\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/QuillEditorShared.vue?vue&type=style&index=0&id=4d40f6aa&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/QuillEditorShared.vue?vue&type=style&index=0&id=4d40f6aa&scoped=true&lang=css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n  /* Optional: Make sure it expands nicely */\n.editor-container[data-v-4d40f6aa] {\r\n    min-height: 300px;\n}\r\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/SmallModal.vue?vue&type=style&index=0&id=7f054742&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/SmallModal.vue?vue&type=style&index=0&id=7f054742&scoped=true&lang=css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.small-modal[data-v-7f054742] {\r\n    position: fixed;\r\n    background: rgba(255, 255, 255, 0.85);\r\n    border-radius: 6px;\r\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);\r\n    overflow: hidden;\r\n    pointer-events: auto;\n}\r\n\r\n/* Header */\n.modal-header[data-v-7f054742] {\r\n    cursor: move;\r\n    padding: 8px 10px;\r\n    background: rgba(0, 0, 0, 0.08);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\n}\n.modal-title[data-v-7f054742] {\r\n    font-size: 13px;\r\n    font-weight: 600;\n}\n.close-btn[data-v-7f054742] {\r\n    background: none;\r\n    border: none;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n    line-height: 1;\n}\r\n\r\n/* Body */\n.modal-body[data-v-7f054742] {\r\n    padding: 10px;\r\n    font-size: 13px;\r\n    height: calc(100% - 36px);\r\n    overflow: auto;\n}\r\n\r\n/* Resize Handle */\r\n/* .resize-handle {\r\n    position: absolute;\r\n    bottom: 2px;\r\n    right: 2px;\r\n    width: 12px;\r\n    height: 12px;\r\n    cursor: nwse-resize;\r\n    background: rgba(0, 0, 0, 0.2);\r\n} */\r\n /* Resize Handles */\n.resize-handle[data-v-7f054742] {\r\n    position: absolute;\r\n    bottom: 2px;\r\n    width: 12px;\r\n    height: 12px;\r\n    background: rgba(0, 0, 0, 0.25);\n}\n.resize-right[data-v-7f054742] {\r\n    right: 2px;\r\n    cursor: nwse-resize;\n}\n.resize-left[data-v-7f054742] {\r\n    left: 2px;\r\n    cursor: nesw-resize;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue?vue&type=style&index=0&id=296e597c&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue?vue&type=style&index=0&id=296e597c&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_style_index_0_id_296e597c_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=style&index=0&id=296e597c&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue?vue&type=style&index=0&id=296e597c&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_style_index_0_id_296e597c_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_style_index_0_id_296e597c_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitleSmall.vue?vue&type=style&index=0&id=5be881dd&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitleSmall.vue?vue&type=style&index=0&id=5be881dd&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitleSmall_vue_vue_type_style_index_0_id_5be881dd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitleSmall.vue?vue&type=style&index=0&id=5be881dd&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitleSmall.vue?vue&type=style&index=0&id=5be881dd&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitleSmall_vue_vue_type_style_index_0_id_5be881dd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitleSmall_vue_vue_type_style_index_0_id_5be881dd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/QuillEditorShared.vue?vue&type=style&index=0&id=4d40f6aa&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/QuillEditorShared.vue?vue&type=style&index=0&id=4d40f6aa&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuillEditorShared_vue_vue_type_style_index_0_id_4d40f6aa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuillEditorShared.vue?vue&type=style&index=0&id=4d40f6aa&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/QuillEditorShared.vue?vue&type=style&index=0&id=4d40f6aa&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuillEditorShared_vue_vue_type_style_index_0_id_4d40f6aa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuillEditorShared_vue_vue_type_style_index_0_id_4d40f6aa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/SmallModal.vue?vue&type=style&index=0&id=7f054742&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/SmallModal.vue?vue&type=style&index=0&id=7f054742&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SmallModal_vue_vue_type_style_index_0_id_7f054742_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SmallModal.vue?vue&type=style&index=0&id=7f054742&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/SmallModal.vue?vue&type=style&index=0&id=7f054742&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SmallModal_vue_vue_type_style_index_0_id_7f054742_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SmallModal_vue_vue_type_style_index_0_id_7f054742_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_296e597c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=296e597c */ "./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue?vue&type=template&id=296e597c");
/* harmony import */ var _Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js */ "./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue?vue&type=script&lang=js");
/* harmony import */ var _Create_vue_vue_type_style_index_0_id_296e597c_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=0&id=296e597c&lang=css */ "./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue?vue&type=style&index=0&id=296e597c&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_296e597c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue"]])
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

/***/ "./resources/js/Shared/ModalDynamicTitleSmall.vue":
/*!********************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitleSmall.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalDynamicTitleSmall_vue_vue_type_template_id_5be881dd_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalDynamicTitleSmall.vue?vue&type=template&id=5be881dd&scoped=true */ "./resources/js/Shared/ModalDynamicTitleSmall.vue?vue&type=template&id=5be881dd&scoped=true");
/* harmony import */ var _ModalDynamicTitleSmall_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalDynamicTitleSmall.vue?vue&type=script&lang=js */ "./resources/js/Shared/ModalDynamicTitleSmall.vue?vue&type=script&lang=js");
/* harmony import */ var _ModalDynamicTitleSmall_vue_vue_type_style_index_0_id_5be881dd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalDynamicTitleSmall.vue?vue&type=style&index=0&id=5be881dd&scoped=true&lang=css */ "./resources/js/Shared/ModalDynamicTitleSmall.vue?vue&type=style&index=0&id=5be881dd&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ModalDynamicTitleSmall_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ModalDynamicTitleSmall_vue_vue_type_template_id_5be881dd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-5be881dd"],['__file',"resources/js/Shared/ModalDynamicTitleSmall.vue"]])
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

/***/ "./resources/js/Shared/QuillEditorShared.vue":
/*!***************************************************!*\
  !*** ./resources/js/Shared/QuillEditorShared.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuillEditorShared_vue_vue_type_template_id_4d40f6aa_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuillEditorShared.vue?vue&type=template&id=4d40f6aa&scoped=true */ "./resources/js/Shared/QuillEditorShared.vue?vue&type=template&id=4d40f6aa&scoped=true");
/* harmony import */ var _QuillEditorShared_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuillEditorShared.vue?vue&type=script&lang=js */ "./resources/js/Shared/QuillEditorShared.vue?vue&type=script&lang=js");
/* harmony import */ var _QuillEditorShared_vue_vue_type_style_index_0_id_4d40f6aa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuillEditorShared.vue?vue&type=style&index=0&id=4d40f6aa&scoped=true&lang=css */ "./resources/js/Shared/QuillEditorShared.vue?vue&type=style&index=0&id=4d40f6aa&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_QuillEditorShared_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_QuillEditorShared_vue_vue_type_template_id_4d40f6aa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-4d40f6aa"],['__file',"resources/js/Shared/QuillEditorShared.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/SmallModal.vue":
/*!********************************************!*\
  !*** ./resources/js/Shared/SmallModal.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SmallModal_vue_vue_type_template_id_7f054742_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SmallModal.vue?vue&type=template&id=7f054742&scoped=true */ "./resources/js/Shared/SmallModal.vue?vue&type=template&id=7f054742&scoped=true");
/* harmony import */ var _SmallModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SmallModal.vue?vue&type=script&lang=js */ "./resources/js/Shared/SmallModal.vue?vue&type=script&lang=js");
/* harmony import */ var _SmallModal_vue_vue_type_style_index_0_id_7f054742_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SmallModal.vue?vue&type=style&index=0&id=7f054742&scoped=true&lang=css */ "./resources/js/Shared/SmallModal.vue?vue&type=style&index=0&id=7f054742&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_SmallModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SmallModal_vue_vue_type_template_id_7f054742_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-7f054742"],['__file',"resources/js/Shared/SmallModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Shared/ModalDynamicTitleSmall.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitleSmall.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitleSmall_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitleSmall_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitleSmall.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitleSmall.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Shared/QuillEditorShared.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/Shared/QuillEditorShared.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuillEditorShared_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuillEditorShared_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuillEditorShared.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/QuillEditorShared.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/SmallModal.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/Shared/SmallModal.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SmallModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SmallModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SmallModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/SmallModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue?vue&type=template&id=296e597c":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue?vue&type=template&id=296e597c ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_296e597c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_296e597c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=template&id=296e597c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue?vue&type=template&id=296e597c");


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

/***/ "./resources/js/Shared/ModalDynamicTitleSmall.vue?vue&type=template&id=5be881dd&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitleSmall.vue?vue&type=template&id=5be881dd&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitleSmall_vue_vue_type_template_id_5be881dd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitleSmall_vue_vue_type_template_id_5be881dd_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitleSmall.vue?vue&type=template&id=5be881dd&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitleSmall.vue?vue&type=template&id=5be881dd&scoped=true");


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

/***/ "./resources/js/Shared/QuillEditorShared.vue?vue&type=template&id=4d40f6aa&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Shared/QuillEditorShared.vue?vue&type=template&id=4d40f6aa&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuillEditorShared_vue_vue_type_template_id_4d40f6aa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuillEditorShared_vue_vue_type_template_id_4d40f6aa_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuillEditorShared.vue?vue&type=template&id=4d40f6aa&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/QuillEditorShared.vue?vue&type=template&id=4d40f6aa&scoped=true");


/***/ }),

/***/ "./resources/js/Shared/SmallModal.vue?vue&type=template&id=7f054742&scoped=true":
/*!**************************************************************************************!*\
  !*** ./resources/js/Shared/SmallModal.vue?vue&type=template&id=7f054742&scoped=true ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SmallModal_vue_vue_type_template_id_7f054742_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SmallModal_vue_vue_type_template_id_7f054742_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SmallModal.vue?vue&type=template&id=7f054742&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/SmallModal.vue?vue&type=template&id=7f054742&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue?vue&type=style&index=0&id=296e597c&lang=css":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue?vue&type=style&index=0&id=296e597c&lang=css ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_style_index_0_id_296e597c_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=style&index=0&id=296e597c&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/ProjectProfile/Create.vue?vue&type=style&index=0&id=296e597c&lang=css");


/***/ }),

/***/ "./resources/js/Shared/ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitle_vue_vue_type_style_index_0_id_0e4809fa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitle.vue?vue&type=style&index=0&id=0e4809fa&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/Shared/ModalDynamicTitleSmall.vue?vue&type=style&index=0&id=5be881dd&scoped=true&lang=css":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/Shared/ModalDynamicTitleSmall.vue?vue&type=style&index=0&id=5be881dd&scoped=true&lang=css ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalDynamicTitleSmall_vue_vue_type_style_index_0_id_5be881dd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalDynamicTitleSmall.vue?vue&type=style&index=0&id=5be881dd&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalDynamicTitleSmall.vue?vue&type=style&index=0&id=5be881dd&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/Shared/QuillEditorShared.vue?vue&type=style&index=0&id=4d40f6aa&scoped=true&lang=css":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Shared/QuillEditorShared.vue?vue&type=style&index=0&id=4d40f6aa&scoped=true&lang=css ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuillEditorShared_vue_vue_type_style_index_0_id_4d40f6aa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuillEditorShared.vue?vue&type=style&index=0&id=4d40f6aa&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/QuillEditorShared.vue?vue&type=style&index=0&id=4d40f6aa&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/Shared/SmallModal.vue?vue&type=style&index=0&id=7f054742&scoped=true&lang=css":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Shared/SmallModal.vue?vue&type=style&index=0&id=7f054742&scoped=true&lang=css ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SmallModal_vue_vue_type_style_index_0_id_7f054742_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SmallModal.vue?vue&type=style&index=0&id=7f054742&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/SmallModal.vue?vue&type=style&index=0&id=7f054742&scoped=true&lang=css");


/***/ })

}]);