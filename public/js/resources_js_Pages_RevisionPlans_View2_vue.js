"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_RevisionPlans_View2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View2.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View2.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Filter */ "./resources/js/Shared/Filter.vue");
/* harmony import */ var _Shared_Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Pagination */ "./resources/js/Shared/Pagination.vue");
/* harmony import */ var _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/ModalDynamicTitle */ "./resources/js/Shared/ModalDynamicTitle.vue");
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Filtering: _Shared_Filter__WEBPACK_IMPORTED_MODULE_0__["default"],
    Pagination: _Shared_Pagination__WEBPACK_IMPORTED_MODULE_1__["default"],
    CommentModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    auth: Object,
    paps: Object,
    office: String,
    implementation: Object,
    implementation_reference_profile: Object,
    all_comments: Object,
    team_members: Object,
    monitors: Object,
    risks: Object,
    sig_rev: Object,
    sig_prep: Object,
    sig_app: Object,
    signatories: Object,
    data: Object,
    imp_amount: Number,
    budget_requirements: Object,
    budget_requirements_reference_profile: Object,
    department_code_project: String,
    department_code_user: String,
    // mooe_gad: Object,
    // mooe_non: Object,
    // cap_gad: Object,
    // cap_non: Object,
    // ps_gad: Object,
    // ps_non: Object,
    s_mooe_gad: Number,
    s_mooe_non: Number,
    s_cap_gad: Number,
    s_cap_non: Number,
    s_ps_gad: Number,
    s_ps_non: Number,
    s_fe_gad: Number,
    s_fe_non: Number,
    capitalOutlay: Object,
    maintenanceOperating: Object,
    personnelServices: Object,
    financialExpenses: Object,
    src: Object
  },
  computed: {
    groupedBudget: function groupedBudget() {
      var result = {
        maintenanceOperating: [],
        personnelServices: [],
        financialExpenses: [],
        capitalOutlay: []
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
        result[catKey].push(item); // push directly, no GAD / NON-GAD classification
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
        var rows = this.groupedBudget[category];
        rows.forEach(function (item) {
          var amount = parseFloat(item.amount || 0);
          if (!isNaN(amount)) {
            total += amount;
          }
        });
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
    countUnresolvedComments: function countUnresolvedComments() {
      return this.all_comments.filter(function (c) {
        return c.comment_status !== "1";
      }).length;
    },
    unresolvedComments: function unresolvedComments() {
      return this.all_comments.filter(function (c) {
        return c.comment_status == 0;
      });
    },
    resolvedComments: function resolvedComments() {
      return this.all_comments.filter(function (c) {
        return c.comment_status == 1;
      });
    },
    // Reference Profile
    groupedBudgetReference: function groupedBudgetReference() {
      var result = {
        maintenanceOperating: [],
        personnelServices: [],
        financialExpenses: [],
        capitalOutlay: []
      };
      var map = {
        'Maintenance, Operating, and Other Expenses': 'maintenanceOperating',
        'Personnel Services': 'personnelServices',
        'Financial Expenses': 'financialExpenses',
        'Capital Outlay': 'capitalOutlay'
      };
      this.budget_requirements_reference_profile.forEach(function (item) {
        var catKey = map[item.category];
        if (!catKey) return;
        result[catKey].push(item); // push directly, no GAD / NON-GAD classification
      });
      return result;
    }
  },
  watch: {
    search: _.debounce(function (value) {
      var paps_id_here = 0;
      var source_here = "";
      if (this.paps.id) {
        this.paps.id, _readOnlyError("paps_id_here");
      }
      if (this.src) {
        "?source=" + this.src, _readOnlyError("source_here");
      }
      this.$inertia.get("/source/" + paps_id_here + source_here, {
        search: value,
        filter_type: this.filter_type
      }, {
        preserveScroll: true,
        preserveState: true,
        replace: true
      });
    }, 300),
    all_comments: {
      handler: function handler() {
        var _this2 = this;
        this.$nextTick(function () {
          _this2.applyAllHighlights();
        });
      },
      deep: true
    }
  },
  data: function data() {
    return {
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
      reply_index: -1,
      v_imp_fe: 0,
      v_imp_co: 0,
      v_imp_mooe: 0,
      v_imp_ps: 0,
      has: 0,
      tot_gad: 0,
      tot_non: 0,
      grand_total: 0,
      showComments: false,
      open_tab: 'Navigation'
    };
  },
  mounted: function mounted() {
    this.isOne();
    this.calculateTotals(this.paps.is_strategy_based);
    if (!sessionStorage.getItem('reloaded')) {
      sessionStorage.setItem('reloaded', 'true');
      window.location.reload();
    } else {
      sessionStorage.removeItem('reloaded');
    }
    window.addEventListener('beforeunload', this.handleBeforeUnload);
    this.tot_gad = parseFloat(this.s_cap_gad) + parseFloat(this.s_mooe_gad) + parseFloat(this.s_ps_gad) + parseFloat(this.s_fe_gad);
    this.tot_non = parseFloat(this.s_cap_non) + parseFloat(this.s_mooe_non) + parseFloat(this.s_ps_non) + parseFloat(this.s_fe_non);
    this.grand_total = this.tot_gad + this.tot_non;
    this.applyAllHighlights();
  },
  beforeUnmount: function beforeUnmount() {
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
  },
  // watch: {
  //     all_comments: {
  //         handler() {
  //             this.$nextTick(() => {
  //                 this.applyRationaleHighlights()
  //             })
  //         },
  //         deep: true
  //     }
  // },
  methods: {
    openTab: function openTab(tab_name) {
      this.open_tab = tab_name;
    },
    isOne: function isOne() {
      // var mooe=this.b_mooe.length;
      // var co=this.b_capital.length;
      // var ps=this.b_ps.length;
      // var has=0;
      // if(mooe>0){
      //     has+=1;
      // }
      // if(ps>0){        has+=1;
      // }
      // if(co>0){
      //     has+=1;
      // }
      // this.has=has;
    },
    getBudgetTotal: function getBudgetTotal() {
      var total = parseFloat(this.s_cap_gad) + parseFloat(this.s_cap_non);
      total = total + parseFloat(this.s_mooe_gad) + parseFloat(this.s_mooe_non);
      total = total + parseFloat(this.s_ps_gad) + parseFloat(this.s_ps_non);
      return this.format_number_conv(total, 2, true);
    },
    showBudgetTable: function showBudgetTable() {
      var sb = false;
      // if (this.mooe_gad.length > 0 || this.mooe_non.length > 0 ||
      //     this.cap_gad.length > 0 || this.cap_non.length > 0 ||
      //     this.ps_gad.length > 0 || this.ps_non.length > 0
      // ) {
      //     sb = true;
      // }
      if (this.maintenanceOperating.length > 0 || this.capitalOutlay.length > 0 || this.personnelServices.length > 0) {
        sb = true;
      }
      return sb;
    },
    calculateTotals: function calculateTotals(revs_is_strat_based) {
      var ps_total = 0;
      var mooe_total = 0;
      var co_total = 0;
      var fe_total = 0;
      this.implementation.forEach(function (strategy) {
        if (revs_is_strat_based == 1) {
          // Sum from the main strategy level
          ps_total += parseFloat(strategy.ps_total) || 0;
          mooe_total += parseFloat(strategy.mooe_total) || 0;
          co_total += parseFloat(strategy.co_total) || 0;
          fe_total += parseFloat(strategy.fe_total) || 0;
        } else {
          // Sum from the activity child table
          if (Array.isArray(strategy.activity)) {
            strategy.activity.forEach(function (activity) {
              ps_total += parseFloat(activity.ps_total) || 0;
              mooe_total += parseFloat(activity.mooe_total) || 0;
              co_total += parseFloat(activity.co_total) || 0;
              fe_total += parseFloat(activity.fe_total) || 0;
            });
          }
        }
      });
      this.v_imp_ps = ps_total;
      this.v_imp_mooe = mooe_total;
      this.v_imp_co = co_total;
      this.v_imp_fe = fe_total;
      return {
        ps_total: ps_total,
        mooe_total: mooe_total,
        co_total: co_total,
        fe_total: fe_total
      };
    },
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
      this.showComments = false;
      this.show_comment_modal = true;
    },
    closeCommentModal: function closeCommentModal() {
      this.show_comment_modal = false;
      this.removeHighlights();
    },
    saveComment: function saveComment() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var myurl, table_row_id_l, payload;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              // Logic to save the comment
              // This is just a placeholder, implement your actual saving logic here
              myurl = "/revision-plan-comments/store"; // await axios
              table_row_id_l = 0; // console.log(this.comment_table)
              if (_this3.comment_table === 'revision_plans') {
                table_row_id_l = _this3.comment_reference_object.id;
              }
              if (_this3.comment_table === 'strategy_projects') {
                table_row_id_l = _this3.comment_reference_object.strategy_id;
              }
              if (_this3.comment_table === 'activity_projects') {
                table_row_id_l = _this3.comment_reference_object.activity_id;
              }
              if (_this3.comment_table === 'budget_requirements') {
                table_row_id_l = _this3.comment_reference_object.id;
                // alert(table_row_id_l)
                // console.log(this.comment_reference_object)
              }
              if (_this3.comment_table === 'team_plans') {
                table_row_id_l = _this3.comment_reference_object.id;
              }
              if (_this3.comment_table === 'monitoring_and_evaluations') {
                table_row_id_l = _this3.comment_reference_object.id;
              }
              if (_this3.comment_table === 'risk_manangements') {
                table_row_id_l = _this3.comment_reference_object.id;
              }
              if (_this3.comment_table === 'expected_revised_outputs') {
                table_row_id_l = _this3.comment_reference_object.id;
              }
              if (_this3.comment_table === 'expected_revised_outcomes') {
                table_row_id_l = _this3.comment_reference_object.id;
              }
              if (_this3.comment_table === 'signatories') {
                table_row_id_l = _this3.comment_reference_object.id;
              }
              //alert(table_row_id_l)
              payload = {
                table_row_id: table_row_id_l,
                table_name: _this3.comment_table,
                column_name: _this3.comment_column,
                comment_status: 0,
                comment: _this3.comment
              };
              if (['rationale', 'objective', 'beneficiaries'].includes(_this3.comment_column)) {
                payload.selected_text = _this3.selectedText;
                payload.start_index = _this3.selectedStart;
                payload.end_index = _this3.selectedEnd;
                payload.context_before = _this3.contextBefore;
                payload.context_after = _this3.contextAfter;
              }
              _context.n = 1;
              return _this3.$nextTick();
            case 1:
              _this3.$inertia.post('/revision-plan-comments/store', payload, {
                preserveScroll: true
              });
              _this3.closeCommentModal();
              setTimeout(function () {
                _this3.comment = "";
              }, 1000); // 1000 milliseconds = 1 second
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // COMMENTS FOR RATIONALE, TARGET BENEFICIARIES, OBJECTIVES
    // Detect user highlighted text
    handleSelection: function handleSelection(column) {
      // this.removeHighlights('rationale');
      // this.removeHighlights('objective');
      // this.removeHighlights('beneficiaries');
      var text = window.getSelection().toString().trim();
      if (!text) return;

      // ❗ New validation: minimum 4 characters
      if (text.length < 4) {
        alert("Selected text must be at least 4 characters long.");
        return;
      }
      this.highlightSelection(); // ⬅️ TEMPORARY HIGHLIGHT
      // Only handle fuzzy matching for specific columns
      if (!['rationale', 'objective', 'beneficiaries'].includes(column)) return;
      this.selectedText = text;
      this.selectedColumn = column;

      // Compute start and end index
      var fullText = this.paps[column] || "";
      var startIndex = fullText.indexOf(text);
      var endIndex = startIndex + text.length;

      // Compute context (30 chars before and after)
      var contextBefore = fullText.substring(Math.max(0, startIndex - 30), startIndex);
      var contextAfter = fullText.substring(endIndex, Math.min(fullText.length, endIndex + 30));
      this.selectedStart = startIndex;
      this.selectedEnd = endIndex;
      this.contextBefore = contextBefore;
      this.contextAfter = contextAfter;
      //
      // console.log("Selected text:", text);
      if (column === 'rationale') {
        this.handleClick('Rationale', 'rationale', this.selectedText, 'rationale', 'revision_plans', this.paps, this.paps.comments);
      }
      if (column === 'objective') {
        this.handleClick('Objective', 'objective', this.selectedText, 'objective', 'revision_plans', this.paps, this.paps.comments);
      }
      if (column === 'beneficiaries') {
        this.handleClick('Beneficiaries', 'beneficiaries', this.selectedText, 'beneficiaries', 'revision_plans', this.paps, this.paps.comments);
      }
      // this.showComments=true;
      // this.show_comment_modal = false;
      // beneficiaries
    },
    // Re-render Comments on Save
    applyAllHighlights: function applyAllHighlights() {
      var _this4 = this;
      var columns = ['rationale', 'beneficiaries', 'objective'];
      columns.forEach(function (column) {
        var el = _this4.$refs["".concat(column, "El")];
        if (!el || !_this4.paps[column]) return;
        var instance = new Mark(el);

        // 🔴 MUST remove old highlights first
        instance.unmark({
          done: function done() {
            _this4.highlightWithComments(_this4.paps[column], _this4.all_comments, column, el);
          }
        });
      });
    },
    submitAction: function submitAction(type, comment_id, index) {
      var _this5 = this;
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
            _this5.comments.splice(index, 1);
            alert("Comment deleted successfully.");
          } else if (type === 'reset') {
            _this5.comments[index].comment_status = '0';
            alert("Comment status reset to unresolved.");
          } else if (type === 'resolve') {
            _this5.comments[index].comment_status = '1';
            alert("Comment resolved successfully.");
          }
        }
      });
    },
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
    updateComment: function updateComment(id, comment, index) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var myurl;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
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
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
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
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // async saveComment(payload) {
    //     // alert("naabiot");
    //     try {
    //         const response = await axios.post(`/activities-project/r/create`, payload);
    //         console.log(response.data);
    //         // this.refreshData();
    //     } catch (error) {
    //         console.error('Error creating activity:', error);
    //     }
    // },
    setUnsaved: function setUnsaved(status) {
      this.unsaved = status;
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
    toggleShowCommentPanel: function toggleShowCommentPanel() {
      this.showComments = !this.showComments;
    },
    /*scrollToSection(target) {
        // const el = document.getElementById(target);
        // alert(target);
        // if (el) {
        //     el.scrollIntoView({
        //         behavior: "smooth",
        //         block: "start"
        //     });
        // }
        const el = document.getElementById(target);
        if (!el) return;
         const navbarHeight = 90; // adjust to your real navbar height
         const topPos = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
         window.scrollTo({
            top: topPos,
            behavior: "smooth"
        });
    }*/
    scrollToSection: function scrollToSection(target) {
      var el = document.getElementById(target);
      if (!el) return;
      // alert(target);
      var navbarHeight = 90;
      var targetPos = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPos,
        behavior: "smooth"
      });

      // Highlight effect
      el.classList.add("highlight-target");
      setTimeout(function () {
        return el.classList.remove("highlight-target");
      }, 2000);
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
    //BUDGETARY
    formatCategory: function formatCategory(key) {
      var map = {
        maintenanceOperating: 'Maintenance, Operating, and Other Expenses',
        personnelServices: 'Personnel Services',
        financialExpenses: 'Financial Expenses',
        capitalOutlay: 'Capital Outlay'
      };
      return map[key] || key;
    },
    hasRows: function hasRows(rows) {
      return rows && rows.length > 0;
    },
    hasAnyRows: function hasAnyRows(gadGroupsForCategory) {
      return Object.values(gadGroupsForCategory).some(function (r) {
        return r.length > 0;
      });
    },
    //RATIONALE COMMENTS
    onHighlight: function onHighlight() {
      var data = this.getHighlightIndexes();
      if (data) {
        alert("calculating text range selected: start=" + data.start + "; end=" + data.end + "; selected:" + data.selected);
        console.log("Start index:", data.start);
        console.log("End index:", data.end);
        console.log("Selected text:", data.selected);
      }
    },
    getHighlightIndexes: function getHighlightIndexes() {
      var selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) {
        return;
      }
      var range = selection.getRangeAt(0);
      var selectedText = selection.toString();
      if (!selectedText) {
        return;
      }

      // Get the full text (flattened) from the div
      var container = this.$refs.rationaleDiv;
      var fullText = container.innerText;

      // Build a Range to compute index relative to the container
      var preRange = document.createRange();
      preRange.selectNodeContents(container);
      preRange.setEnd(range.startContainer, range.startOffset);
      var startIndex = preRange.toString().length;
      var endIndex = startIndex + selectedText.length;
      return {
        start: startIndex,
        end: endIndex,
        selected: selectedText
      };
    },
    shouldDisplayQuantity: function shouldDisplayQuantity(description) {
      if (!description) return false;
      var text = description.trim();

      // 1. If description starts with a number → DO NOT display quantity
      if (/^\d+/.test(text)) {
        return false;
      }

      /*
          2. If description follows:
          <verb> <number> ...
          OR
          <verb1>, <verb2>, and <verbN> <number> ...
           Example matches:
          "Conduct 5 trainings"
          "Prepare, review, and submit 3 reports"
      */

      var verbNumberPattern = /^[A-Za-z,\s]+?\s\d+\b/;
      if (verbNumberPattern.test(text)) {
        return false;
      }

      // Otherwise, display quantity
      return true;
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
    // RETURN/REVIEW/APPROVE
    statusAction: function statusAction(revision_plan, newStatus, column) {
      var actions = {
        0: "Submit",
        "-1": "Recall",
        1: "Review",
        2: "Approve",
        "-2": "Return",
        5: "Request for Return",
        7: "Approve the request for return for"
      };
      var actionLabel = actions[newStatus];
      var typeLabel = revision_plan.type === 'p' ? 'Project Profile' : 'Project Design';
      var confirmMessage = "Are you sure you want to ".concat(actionLabel, " the ").concat(typeLabel, " entitled \"").concat(revision_plan.project_title, "\"?");
      var actionlabelcomplete = actionLabel + ' ' + typeLabel;
      if (!confirm(confirmMessage)) return;
      _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_3__.router.post("/status/revision/update/".concat(revision_plan.id, "/").concat(actionlabelcomplete, "/").concat(newStatus), {
        remarks: this.remarks,
        // ← SEND IT HERE
        column: column
      }, {
        preserveScroll: true,
        preserveState: true // ⭐ keeps pagination page
      });
    },
    // Generate DOM-based PDF and download automatically
    generatePDF: function generatePDF() {
      var _this7 = this;
      var element = this.$refs.printableDiv;
      if (!element) {
        alert('Printable element not found!');
        return;
      }

      // Load html2pdf library from CDN
      var script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
      script.onload = function () {
        // Extract year from paps.date_start
        var year = new Date().getFullYear();
        if (_this7.paps.date_start) {
          year = new Date(_this7.paps.date_start).getFullYear();
        }

        // Create filename from project title and year
        var filename = "".concat(_this7.paps.project_title || 'document', "_").concat(year, ".pdf");
        var options = {
          margin: 10,
          filename: filename,
          image: {
            type: 'jpeg',
            quality: 0.98
          },
          html2canvas: {
            scale: 2
          },
          jsPDF: {
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
          }
        };

        // Generate PDF and download automatically
        html2pdf().set(options).from(element).save();
      };
      document.head.appendChild(script);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View2.vue?vue&type=template&id=17eef298":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View2.vue?vue&type=template&id=17eef298 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "row gap-10 masonry pos-r"
};
var _hoisted_2 = {
  "class": "row gap-1"
};
var _hoisted_3 = {
  key: 0,
  "class": "peers fxw-nw jc-sb ai-c justify-content-end"
};
var _hoisted_4 = {
  key: 1,
  "class": "peers fxw-nw jc-sb ai-c justify-content-end"
};
var _hoisted_5 = {
  "class": "col-12",
  ref: "printableDiv"
};
var _hoisted_6 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_7 = ["src"];
var _hoisted_8 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_9 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_10 = {
  "class": "fw-bold"
};
var _hoisted_11 = {
  key: 0
};
var _hoisted_12 = {
  key: 1
};
var _hoisted_13 = {
  "class": "row"
};
var _hoisted_14 = {
  "class": "col-12"
};
var _hoisted_15 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_16 = {
  "class": "table-responsive"
};
var _hoisted_17 = {
  id: "revision_plans"
};
var _hoisted_18 = {
  name: "tabel",
  "class": "table table-hover table-bordered border-dark"
};
var _hoisted_19 = ["id"];
var _hoisted_20 = ["id"];
var _hoisted_21 = ["id"];
var _hoisted_22 = ["id"];
var _hoisted_23 = ["id"];
var _hoisted_24 = ["id"];
var _hoisted_25 = ["id"];
var _hoisted_26 = ["id"];
var _hoisted_27 = ["id"];
var _hoisted_28 = ["id"];
var _hoisted_29 = ["id"];
var _hoisted_30 = ["id"];
var _hoisted_31 = ["id"];
var _hoisted_32 = {
  key: 0
};
var _hoisted_33 = {
  key: 1
};
var _hoisted_34 = ["id"];
var _hoisted_35 = {
  "class": "bg-secondary text-white",
  colspan: "1"
};
var _hoisted_36 = ["id"];
var _hoisted_37 = {
  key: 0
};
var _hoisted_38 = {
  id: "rationale"
};
var _hoisted_39 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_40 = ["innerHTML"];
var _hoisted_41 = {
  key: 1
};
var _hoisted_42 = {
  id: "objective"
};
var _hoisted_43 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_44 = ["innerHTML"];
var _hoisted_45 = {
  key: 2
};
var _hoisted_46 = {
  id: "beneficiaries"
};
var _hoisted_47 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_48 = ["innerHTML"];
var _hoisted_49 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_50 = {
  "class": "table-responsive"
};
var _hoisted_51 = {
  key: 0
};
var _hoisted_52 = {
  id: "implementation_workplan"
};
var _hoisted_53 = {
  "class": "table-responsive",
  style: {
    "overflow-x": "auto"
  }
};
var _hoisted_54 = {
  "class": "table table-hover table-bordered border-dark"
};
var _hoisted_55 = {
  key: 0,
  style: {
    "background-color": "lightgrey",
    "font-weight": "bold"
  }
};
var _hoisted_56 = ["onClick"];
var _hoisted_57 = ["onClick"];
var _hoisted_58 = {
  key: 0
};
var _hoisted_59 = {
  key: 0
};
var _hoisted_60 = {
  key: 0
};
var _hoisted_61 = {
  key: 0
};
var _hoisted_62 = {
  key: 1
};
var _hoisted_63 = {
  key: 2
};
var _hoisted_64 = {
  key: 0
};
var _hoisted_65 = {
  key: 0
};
var _hoisted_66 = {
  key: 0
};
var _hoisted_67 = {
  key: 0
};
var _hoisted_68 = {
  key: 0
};
var _hoisted_69 = {
  "class": "text-end"
};
var _hoisted_70 = {
  key: 0
};
var _hoisted_71 = {
  key: 0
};
var _hoisted_72 = {
  key: 0
};
var _hoisted_73 = ["id"];
var _hoisted_74 = ["onClick"];
var _hoisted_75 = ["onClick"];
var _hoisted_76 = ["id"];
var _hoisted_77 = ["onClick"];
var _hoisted_78 = ["onClick"];
var _hoisted_79 = {
  colspan: "4",
  style: {
    "width": "32%",
    "padding": "0",
    "border": "1px solid #000",
    "vertical-align": "top"
  }
};
var _hoisted_80 = {
  style: {
    "display": "flex",
    "flex-direction": "column",
    "height": "100%",
    "min-height": "100%"
  }
};
var _hoisted_81 = {
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
var _hoisted_82 = ["id"];
var _hoisted_83 = {
  key: 0
};
var _hoisted_84 = ["onClick"];
var _hoisted_85 = ["onClick"];
var _hoisted_86 = ["id", "rowspan"];
var _hoisted_87 = {
  key: 0
};
var _hoisted_88 = ["onClick"];
var _hoisted_89 = ["onClick"];
var _hoisted_90 = ["rowspan"];
var _hoisted_91 = {
  key: 0
};
var _hoisted_92 = ["id"];
var _hoisted_93 = ["onClick"];
var _hoisted_94 = ["onClick"];
var _hoisted_95 = {
  key: 1
};
var _hoisted_96 = ["id"];
var _hoisted_97 = ["onClick"];
var _hoisted_98 = ["onClick"];
var _hoisted_99 = {
  "class": "align-top",
  style: {
    "width": "25%",
    "border": "1px solid #000",
    "padding": "4px"
  }
};
var _hoisted_100 = ["id"];
var _hoisted_101 = {
  key: 0
};
var _hoisted_102 = ["onClick"];
var _hoisted_103 = ["onClick"];
var _hoisted_104 = ["id"];
var _hoisted_105 = ["onClick"];
var _hoisted_106 = ["onClick"];
var _hoisted_107 = {
  key: 1,
  "class": "m-0",
  style: {
    "border-collapse": "collapse",
    "width": "100%",
    "height": "100%",
    "table-layout": "fixed"
  }
};
var _hoisted_108 = ["id", "rowspan"];
var _hoisted_109 = {
  key: 0
};
var _hoisted_110 = ["onClick"];
var _hoisted_111 = ["onClick"];
var _hoisted_112 = ["rowspan"];
var _hoisted_113 = {
  key: 0
};
var _hoisted_114 = ["id"];
var _hoisted_115 = ["onClick"];
var _hoisted_116 = ["onClick"];
var _hoisted_117 = {
  key: 1
};
var _hoisted_118 = ["id"];
var _hoisted_119 = ["onClick"];
var _hoisted_120 = ["onClick"];
var _hoisted_121 = ["id"];
var _hoisted_122 = {
  key: 0
};
var _hoisted_123 = ["onClick"];
var _hoisted_124 = ["onClick"];
var _hoisted_125 = ["id"];
var _hoisted_126 = {
  key: 0
};
var _hoisted_127 = ["onClick"];
var _hoisted_128 = ["onClick"];
var _hoisted_129 = ["id"];
var _hoisted_130 = {
  key: 0
};
var _hoisted_131 = ["onClick"];
var _hoisted_132 = ["onClick"];
var _hoisted_133 = ["id"];
var _hoisted_134 = {
  key: 0
};
var _hoisted_135 = ["onClick"];
var _hoisted_136 = ["onClick"];
var _hoisted_137 = {
  key: 0
};
var _hoisted_138 = ["id"];
var _hoisted_139 = {
  key: 0
};
var _hoisted_140 = ["onClick"];
var _hoisted_141 = ["onClick"];
var _hoisted_142 = ["id"];
var _hoisted_143 = {
  key: 0
};
var _hoisted_144 = ["onClick"];
var _hoisted_145 = ["onClick"];
var _hoisted_146 = ["id"];
var _hoisted_147 = ["id"];
var _hoisted_148 = ["id"];
var _hoisted_149 = ["id"];
var _hoisted_150 = ["id"];
var _hoisted_151 = {
  key: 0,
  "class": "col-6"
};
var _hoisted_152 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_153 = {
  "class": "table-responsive"
};
var _hoisted_154 = {
  key: 0
};
var _hoisted_155 = {
  id: "implementation_workplan"
};
var _hoisted_156 = {
  "class": "table-responsive",
  style: {
    "overflow-x": "auto"
  }
};
var _hoisted_157 = {
  "class": "table table-hover table-bordered border-dark"
};
var _hoisted_158 = {
  key: 0,
  style: {
    "background-color": "lightgrey",
    "font-weight": "bold"
  }
};
var _hoisted_159 = ["onClick"];
var _hoisted_160 = ["onClick"];
var _hoisted_161 = {
  key: 0
};
var _hoisted_162 = {
  key: 0
};
var _hoisted_163 = {
  key: 0
};
var _hoisted_164 = {
  key: 0
};
var _hoisted_165 = {
  key: 1
};
var _hoisted_166 = {
  key: 2
};
var _hoisted_167 = {
  key: 0
};
var _hoisted_168 = {
  key: 0
};
var _hoisted_169 = {
  key: 0
};
var _hoisted_170 = {
  key: 0
};
var _hoisted_171 = {
  key: 0
};
var _hoisted_172 = {
  "class": "text-end"
};
var _hoisted_173 = {
  key: 0
};
var _hoisted_174 = {
  key: 0
};
var _hoisted_175 = {
  key: 0
};
var _hoisted_176 = ["id"];
var _hoisted_177 = ["onClick"];
var _hoisted_178 = ["onClick"];
var _hoisted_179 = ["id"];
var _hoisted_180 = ["onClick"];
var _hoisted_181 = ["onClick"];
var _hoisted_182 = {
  colspan: "4",
  style: {
    "width": "32%",
    "padding": "0",
    "border": "1px solid #000",
    "vertical-align": "top"
  }
};
var _hoisted_183 = {
  style: {
    "display": "flex",
    "flex-direction": "column",
    "height": "100%",
    "min-height": "100%"
  }
};
var _hoisted_184 = {
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
var _hoisted_185 = ["id"];
var _hoisted_186 = {
  key: 0
};
var _hoisted_187 = ["onClick"];
var _hoisted_188 = ["onClick"];
var _hoisted_189 = ["id", "rowspan"];
var _hoisted_190 = {
  key: 0
};
var _hoisted_191 = ["onClick"];
var _hoisted_192 = ["onClick"];
var _hoisted_193 = ["rowspan"];
var _hoisted_194 = {
  key: 0
};
var _hoisted_195 = ["id"];
var _hoisted_196 = ["onClick"];
var _hoisted_197 = ["onClick"];
var _hoisted_198 = {
  key: 1
};
var _hoisted_199 = ["id"];
var _hoisted_200 = ["onClick"];
var _hoisted_201 = ["onClick"];
var _hoisted_202 = {
  "class": "align-top",
  style: {
    "width": "25%",
    "border": "1px solid #000",
    "padding": "4px"
  }
};
var _hoisted_203 = ["id"];
var _hoisted_204 = {
  key: 0
};
var _hoisted_205 = ["onClick"];
var _hoisted_206 = ["onClick"];
var _hoisted_207 = ["id"];
var _hoisted_208 = ["onClick"];
var _hoisted_209 = ["onClick"];
var _hoisted_210 = {
  key: 1,
  "class": "m-0",
  style: {
    "border-collapse": "collapse",
    "width": "100%",
    "height": "100%",
    "table-layout": "fixed"
  }
};
var _hoisted_211 = ["id", "rowspan"];
var _hoisted_212 = {
  key: 0
};
var _hoisted_213 = ["onClick"];
var _hoisted_214 = ["onClick"];
var _hoisted_215 = ["rowspan"];
var _hoisted_216 = {
  key: 0
};
var _hoisted_217 = ["id"];
var _hoisted_218 = ["onClick"];
var _hoisted_219 = ["onClick"];
var _hoisted_220 = {
  key: 1
};
var _hoisted_221 = ["id"];
var _hoisted_222 = ["onClick"];
var _hoisted_223 = ["onClick"];
var _hoisted_224 = ["id"];
var _hoisted_225 = {
  key: 0
};
var _hoisted_226 = ["onClick"];
var _hoisted_227 = ["onClick"];
var _hoisted_228 = ["id"];
var _hoisted_229 = {
  key: 0
};
var _hoisted_230 = ["onClick"];
var _hoisted_231 = ["onClick"];
var _hoisted_232 = ["id"];
var _hoisted_233 = {
  key: 0
};
var _hoisted_234 = ["onClick"];
var _hoisted_235 = ["onClick"];
var _hoisted_236 = ["id"];
var _hoisted_237 = {
  key: 0
};
var _hoisted_238 = ["onClick"];
var _hoisted_239 = ["onClick"];
var _hoisted_240 = {
  key: 0
};
var _hoisted_241 = ["id"];
var _hoisted_242 = {
  key: 0
};
var _hoisted_243 = ["onClick"];
var _hoisted_244 = ["onClick"];
var _hoisted_245 = ["id"];
var _hoisted_246 = {
  key: 0
};
var _hoisted_247 = ["onClick"];
var _hoisted_248 = ["onClick"];
var _hoisted_249 = ["id"];
var _hoisted_250 = ["id"];
var _hoisted_251 = ["id"];
var _hoisted_252 = ["id"];
var _hoisted_253 = ["id"];
var _hoisted_254 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_255 = {
  "class": "table-responsive"
};
var _hoisted_256 = {
  id: "budgetary_requirements"
};
var _hoisted_257 = {
  "class": "table table-bordered"
};
var _hoisted_258 = {
  key: 0,
  "class": "table-primary"
};
var _hoisted_259 = {
  colspan: "8",
  "class": "fw-bold text-uppercase"
};
var _hoisted_260 = ["id"];
var _hoisted_261 = ["onClick"];
var _hoisted_262 = ["id"];
var _hoisted_263 = ["onClick"];
var _hoisted_264 = ["id"];
var _hoisted_265 = ["onClick"];
var _hoisted_266 = ["id"];
var _hoisted_267 = ["onClick"];
var _hoisted_268 = {
  key: 1,
  "class": "fw-bold bg-light"
};
var _hoisted_269 = {
  colspan: "2"
};
var _hoisted_270 = {
  key: 1,
  "class": "col-6"
};
var _hoisted_271 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_272 = {
  "class": "table-responsive"
};
var _hoisted_273 = {
  id: "budgetary_requirements"
};
var _hoisted_274 = {
  "class": "table table-bordered"
};
var _hoisted_275 = {
  key: 0,
  "class": "table-primary"
};
var _hoisted_276 = {
  colspan: "8",
  "class": "fw-bold text-uppercase"
};
var _hoisted_277 = ["id"];
var _hoisted_278 = ["onClick"];
var _hoisted_279 = ["id"];
var _hoisted_280 = ["onClick"];
var _hoisted_281 = ["id"];
var _hoisted_282 = ["onClick"];
var _hoisted_283 = ["id"];
var _hoisted_284 = ["onClick"];
var _hoisted_285 = {
  key: 1,
  "class": "fw-bold bg-light"
};
var _hoisted_286 = {
  colspan: "2"
};
var _hoisted_287 = {
  "class": "col-12"
};
var _hoisted_288 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_289 = {
  "class": "table-responsive"
};
var _hoisted_290 = {
  id: "implementing_team"
};
var _hoisted_291 = {
  align: "justify",
  style: {
    "white-space": "pre-line"
  }
};
var _hoisted_292 = ["innerHTML"];
var _hoisted_293 = {
  key: 0
};
var _hoisted_294 = {
  table: "",
  name: "tabel",
  "class": "table table-hover table-bordered border-dark"
};
var _hoisted_295 = ["id"];
var _hoisted_296 = ["onClick"];
var _hoisted_297 = ["onClick"];
var _hoisted_298 = ["id"];
var _hoisted_299 = ["onClick"];
var _hoisted_300 = ["onClick"];
var _hoisted_301 = ["id"];
var _hoisted_302 = {
  key: 0
};
var _hoisted_303 = {
  key: 1
};
var _hoisted_304 = ["onClick"];
var _hoisted_305 = ["onClick"];
var _hoisted_306 = ["id"];
var _hoisted_307 = ["onClick"];
var _hoisted_308 = ["onClick"];
var _hoisted_309 = {
  key: 1
};
var _hoisted_310 = {
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_311 = {
  key: 2,
  id: "partnership_sustainability"
};
var _hoisted_312 = {
  align: "justify",
  style: {
    "white-space": "pre-line"
  }
};
var _hoisted_313 = ["innerHTML"];
var _hoisted_314 = {
  key: 3,
  id: "monitoring_evaluation"
};
var _hoisted_315 = {
  align: "justify",
  style: {
    "white-space": "pre-line"
  }
};
var _hoisted_316 = ["innerHTML"];
var _hoisted_317 = {
  key: 4
};
var _hoisted_318 = {
  table: "",
  name: "tabel",
  "class": "table table-hover table-bordered border-dark"
};
var _hoisted_319 = ["id"];
var _hoisted_320 = ["onClick"];
var _hoisted_321 = ["onClick"];
var _hoisted_322 = ["id"];
var _hoisted_323 = ["onClick"];
var _hoisted_324 = ["onClick"];
var _hoisted_325 = ["id"];
var _hoisted_326 = ["onClick"];
var _hoisted_327 = ["onClick"];
var _hoisted_328 = ["id"];
var _hoisted_329 = ["onClick"];
var _hoisted_330 = ["onClick"];
var _hoisted_331 = {
  key: 5
};
var _hoisted_332 = {
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_333 = {
  key: 6,
  id: "risk_management"
};
var _hoisted_334 = {
  align: "justify",
  style: {
    "white-space": "pre-line"
  }
};
var _hoisted_335 = ["innerHTML"];
var _hoisted_336 = {
  key: 7
};
var _hoisted_337 = {
  table: "",
  name: "tabel",
  "class": "table table-hover table-bordered border-dark"
};
var _hoisted_338 = ["id"];
var _hoisted_339 = ["innerHTML"];
var _hoisted_340 = ["onClick"];
var _hoisted_341 = ["onClick"];
var _hoisted_342 = ["id"];
var _hoisted_343 = ["innerHTML"];
var _hoisted_344 = ["onClick"];
var _hoisted_345 = ["onClick"];
var _hoisted_346 = ["id"];
var _hoisted_347 = ["innerHTML"];
var _hoisted_348 = ["onClick"];
var _hoisted_349 = ["onClick"];
var _hoisted_350 = {
  key: 8
};
var _hoisted_351 = {
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};
var _hoisted_352 = {
  id: "signatories",
  "class": "signatory-grid"
};
var _hoisted_353 = ["id"];
var _hoisted_354 = {
  key: 0
};
var _hoisted_355 = ["onClick"];
var _hoisted_356 = ["onClick"];
var _hoisted_357 = ["id"];
var _hoisted_358 = ["onClick"];
var _hoisted_359 = ["onClick"];
var _hoisted_360 = ["id"];
var _hoisted_361 = ["onClick"];
var _hoisted_362 = ["onClick"];
var _hoisted_363 = {
  "class": "col-3"
};
var _hoisted_364 = {
  key: 0,
  "class": "sticky-comments"
};
var _hoisted_365 = {
  key: 0,
  style: {
    "color": "red"
  },
  "class": "blink"
};
var _hoisted_366 = ["disabled", "title"];
var _hoisted_367 = ["disabled", "title"];
var _hoisted_368 = {
  key: 1,
  "class": "p-20 bd sticky-comments",
  style: {
    "background": "rgba(255, 255, 255, 0.7)"
  }
};
var _hoisted_369 = {
  "class": "d-flex justify-content-end"
};
var _hoisted_370 = {
  "class": "tab"
};
var _hoisted_371 = {
  key: 0,
  style: {
    "color": "red"
  },
  "class": "blink"
};
var _hoisted_372 = {
  key: 0
};
var _hoisted_373 = {
  "class": "scrollable-text",
  style: {
    "background": "rgba(255, 255, 255, 0.7)"
  }
};
var _hoisted_374 = {
  key: 0
};
var _hoisted_375 = {
  "class": "list-unstyled"
};
var _hoisted_376 = {
  style: {
    "border-collapse": "collapse",
    "border": "none !important"
  }
};
var _hoisted_377 = {
  style: {
    "border": "none !important",
    "vertical-align": "top"
  }
};
var _hoisted_378 = {
  style: {
    "border": "none !important",
    "vertical-align": "top",
    "text-align": "left"
  }
};
var _hoisted_379 = ["disabled", "onClick"];
var _hoisted_380 = {
  style: {
    "border": "none !important",
    "vertical-align": "top",
    "text-align": "left"
  }
};
var _hoisted_381 = ["onClick"];
var _hoisted_382 = ["innerHTML"];
var _hoisted_383 = {
  key: 0,
  "class": "text-end"
};
var _hoisted_384 = ["onClick"];
var _hoisted_385 = ["onClick"];
var _hoisted_386 = {
  key: 1
};
var _hoisted_387 = {
  "class": "list-unstyled"
};
var _hoisted_388 = ["onClick"];
var _hoisted_389 = {
  style: {
    "border-collapse": "collapse",
    "border": "none !important"
  }
};
var _hoisted_390 = {
  style: {
    "border": "none !important",
    "vertical-align": "top"
  }
};
var _hoisted_391 = {
  style: {
    "border": "none !important",
    "vertical-align": "top",
    "text-align": "left"
  }
};
var _hoisted_392 = {
  key: 0,
  "class": "text-end"
};
var _hoisted_393 = ["onClick"];
var _hoisted_394 = ["onClick"];
var _hoisted_395 = {
  key: 1
};
var _hoisted_396 = {
  "class": "scrollable-text",
  style: {
    "background": "rgba(255, 255, 255, 0.7)",
    "cursor": "pointer"
  }
};
var _hoisted_397 = {
  "class": "list-unstyled"
};
var _hoisted_398 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_399 = {
  "class": "list-unstyled"
};
var _hoisted_400 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_401 = {
  "class": "list-unstyled"
};
var _hoisted_402 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_403 = {
  "class": "list-unstyled"
};
var _hoisted_404 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_405 = {
  "class": "list-unstyled"
};
var _hoisted_406 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_407 = {
  "class": "list-unstyled"
};
var _hoisted_408 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_409 = {
  "class": "list-unstyled"
};
var _hoisted_410 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_411 = {
  "class": "list-unstyled"
};
var _hoisted_412 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_413 = {
  "class": "list-unstyled"
};
var _hoisted_414 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_415 = {
  "class": "list-unstyled"
};
var _hoisted_416 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_417 = {
  "class": "list-unstyled"
};
var _hoisted_418 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_419 = {
  "class": "col-3"
};
var _hoisted_420 = {
  key: 0,
  "class": "p-20 bd sticky-comments",
  style: {
    "background": "rgba(255, 255, 255, 0.7)"
  }
};
var _hoisted_421 = {
  "class": "d-flex justify-content-end"
};
var _hoisted_422 = {
  key: 0
};
var _hoisted_423 = ["innerHTML"];
var _hoisted_424 = ["innerHTML"];
var _hoisted_425 = {
  key: 0
};
var _hoisted_426 = {
  key: 1
};
var _hoisted_427 = {
  key: 2
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$props$paps$checklis, _$props$paps$checklis2;
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[88] || (_cache[88] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "View PAPS", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("class=\"peers fxw-nw jc-sb ai-c\""), _cache[248] || (_cache[248] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "v2", -1 /* CACHED */)), $props.src !== 'budget' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [$props.paps.scope === 'GAS' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    href: $props.src !== 'direct' || $props.department_code_user === $props.department_code_project ? "/revision/general/administration/services/".concat($props.paps.FFUNCCOD, "/plan") : "/revision_plans"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[89] || (_cache[89] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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
  }, 8 /* PROPS */, ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.paps.idmfo == 0 && $props.paps.scope !== 'GAS' && $props.src !== 'rev_app' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 1,
    href: $props.src !== 'direct' || $props.department_code_user === $props.department_code_project ? "/revision/".concat($props.paps.idpaps) : "/revision_plans"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[90] || (_cache[90] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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
  }, 8 /* PROPS */, ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.paps.idpaps == 0 && $props.paps.scope !== 'GAS' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 2,
    href: $props.src !== 'direct' || $props.department_code_user === $props.department_code_project ? "/mforevision/".concat($props.paps.idmfo) : "/revision_plans"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[91] || (_cache[91] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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
  }, 8 /* PROPS */, ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("REVApp"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ paps }} "), $props.paps.scope !== 'GAS' && $props.src === 'rev_app' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 3,
    href: "/revision_plans?source=rev_app"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[92] || (_cache[92] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.src === 'budget' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [$props.paps.scope === 'GAS' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    href: "/revision_plans?source=budget"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[93] || (_cache[93] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.paps.idmfo == 0 && $props.paps.scope !== 'GAS' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 1,
    href: "/revision_plans?source=budget"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[94] || (_cache[94] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.paps.idpaps == 0 && $props.paps.scope !== 'GAS' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 2,
    href: "/revision_plans?source=budget"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[95] || (_cache[95] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _ctx.getImagePath('logo.png'),
    alt: "",
    "class": "img-fluid",
    style: {
      "width": "100px",
      "height": "100px"
    }
  }, null, 8 /* PROPS */, _hoisted_7)]), _cache[96] || (_cache[96] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex justify-content-center"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" REPUBLIC OF THE PHILIPPINES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" PROVINCE OF DAVAO DE ORO ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.office), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_10, [$props.paps.type === 'p' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, "PROJECT PROFILE")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, "PROJECT DESIGN"))])])], 512 /* NEED_PATCH */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Main Table "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("MAIN TABLE"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [_cache[98] || (_cache[98] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("I.    ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/revision/edit/".concat($props.paps.id) : null,
    target: "_blank"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[97] || (_cache[97] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Title", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TITLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[99] || (_cache[99] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "bg-secondary text-white",
    colspan: "1"
  }, "Title", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "6",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.project_title, $props.paps.project_title, 'project_title', 'revision_plans', $props.paps, $props.paps.comments)
    }),
    id: $props.paps.id + '_revision_plans_project_title'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.paps.project_title) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.handleClick('Title', $props.paps.project_title, $props.paps.project_title, 'project_title', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.project_title, $props.paps.project_title, 'project_title', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.handleClick('Title', $props.paps.project_title, $props.paps.project_title, 'project_title', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_19)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PROJECT LOCATION "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[100] || (_cache[100] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "bg-secondary text-white",
    colspan: "1"
  }, "Project Location", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "6",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.project_location, $props.paps.project_location, 'project_location', 'revision_plans', $props.paps, $props.paps.comments)
    }),
    id: $props.paps.id + '_revision_plans_project_location'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.paps.project_location) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.handleClick('Title', $props.paps.project_location, $props.paps.project_location, 'project_location', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.project_location, $props.paps.project_location, 'project_location', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.handleClick('Title', $props.paps.project_location, $props.paps.project_location, 'project_location', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_20)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" LIST OF LGUs COVERED "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[101] || (_cache[101] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "bg-secondary text-white",
    colspan: "1"
  }, "List of LGUs Covered", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "6",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.project_location, $props.paps.list_of_lgu_covered, 'list_of_lgu_covered', 'revision_plans', $props.paps, $props.paps.comments)
    }),
    id: $props.paps.id + '_revision_plans_list_of_lgu_covered'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.paps.list_of_lgu_covered) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.handleClick('Title', $props.paps.list_of_lgu_covered, $props.paps.list_of_lgu_covered, 'list_of_lgu_covered', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.list_of_lgu_covered, $props.paps.list_of_lgu_covered, 'list_of_lgu_covered', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.handleClick('Title', $props.paps.list_of_lgu_covered, $props.paps.list_of_lgu_covered, 'list_of_lgu_covered', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_21)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" IMPLEMENTATION SCHEDULE -FROM-TO "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[102] || (_cache[102] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "bg-secondary text-white",
    colspan: "1"
  }, "Implementation Schedule", -1 /* CACHED */)), _cache[103] || (_cache[103] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "1"
  }, "Start", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    id: $props.paps.id + '_revision_plans_date_start',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.date_start, $props.paps.date_start, 'date_start', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear($props.paps.date_start)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $options.handleClick('Title', $props.paps.date_start, $props.paps.date_start, 'date_start', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.date_start, $props.paps.date_start, 'date_start', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $options.handleClick('Title', $props.paps.date_start, $props.paps.date_start, 'date_start', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_22), _cache[104] || (_cache[104] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "1"
  }, "End", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    id: $props.paps.id + '_revision_plans_date_end',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.date_end, $props.paps.date_end, 'date_end', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear($props.paps.date_end)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $options.handleClick('Title', $props.paps.date_end, $props.paps.date_end, 'date_end', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.date_end, $props.paps.date_end, 'date_end', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return $options.handleClick('Title', $props.paps.date_end, $props.paps.date_end, 'date_end', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_23)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" INTENDED BENEFICIARIES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[105] || (_cache[105] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "bg-secondary text-white",
    colspan: "1"
  }, "Intended Beneficiaries", -1 /* CACHED */)), _cache[106] || (_cache[106] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "1"
  }, "Male", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    id: $props.paps.id + '_revision_plans_beneficiary_male',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.beneficiary_male, $props.paps.beneficiary_male, 'beneficiary_male', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.paps.beneficiary_male, 0, true)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[10] || (_cache[10] = function ($event) {
      return $options.handleClick('Title', $props.paps.beneficiary_male, $props.paps.beneficiary_male, 'beneficiary_male', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.beneficiary_male, $props.paps.beneficiary_male, 'beneficiary_male', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[11] || (_cache[11] = function ($event) {
      return $options.handleClick('Title', $props.paps.beneficiary_male, $props.paps.beneficiary_male, 'beneficiary_male', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_24), _cache[107] || (_cache[107] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "1"
  }, "Female", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    id: $props.paps.id + '_revision_plans_beneficiary_female',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.beneficiary_female, $props.paps.beneficiary_female, 'beneficiary_female', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.paps.beneficiary_female, 0, true)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[12] || (_cache[12] = function ($event) {
      return $options.handleClick('Title', $props.paps.beneficiary_female, $props.paps.beneficiary_female, 'beneficiary_female', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.beneficiary_female, $props.paps.beneficiary_female, 'beneficiary_female', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[13] || (_cache[13] = function ($event) {
      return $options.handleClick('Title', $props.paps.beneficiary_female, $props.paps.beneficiary_female, 'beneficiary_female', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_25), _cache[108] || (_cache[108] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "1"
  }, "Total", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    id: $props.paps.id + '_revision_plans_beneficiary_total',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', _ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true), _ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true), 'beneficiary_total', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[14] || (_cache[14] = function ($event) {
      return $options.handleClick('Title', _ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true), _ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true), 'beneficiary_total', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', _ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true), _ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true), 'beneficiary_total', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[15] || (_cache[15] = function ($event) {
      return $options.handleClick('Title', _ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true), _ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true), 'beneficiary_total', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_26)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" BASELINE DISAGGREGATED DATA "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[109] || (_cache[109] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "bg-secondary text-white",
    colspan: "1"
  }, "Baseline Disaggregated Data", -1 /* CACHED */)), _cache[110] || (_cache[110] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "1"
  }, "Male", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    id: $props.paps.id + '_revision_plans_baseline_male',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.baseline_male, $props.paps.baseline_male, 'baseline_male', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.paps.baseline_male, 0, true)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[16] || (_cache[16] = function ($event) {
      return $options.handleClick('Title', $props.paps.baseline_male, $props.paps.baseline_male, 'baseline_male', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.baseline_male, $props.paps.baseline_male, 'baseline_male', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[17] || (_cache[17] = function ($event) {
      return $options.handleClick('Title', $props.paps.baseline_male, $props.paps.baseline_male, 'baseline_male', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_27), _cache[111] || (_cache[111] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "1"
  }, "Female", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    id: $props.paps.id + '_revision_plans_baseline_female',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.baseline_female, $props.paps.baseline_female, 'baseline_female', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.paps.baseline_female, 0, true)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[18] || (_cache[18] = function ($event) {
      return $options.handleClick('Title', $props.paps.baseline_female, $props.paps.baseline_female, 'baseline_female', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.baseline_female, $props.paps.baseline_female, 'baseline_female', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[19] || (_cache[19] = function ($event) {
      return $options.handleClick('Title', $props.paps.baseline_female, $props.paps.baseline_female, 'baseline_female', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_28), _cache[112] || (_cache[112] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "1"
  }, "Data Source", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    id: $props.paps.id + '_revision_plans_data_source',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.data_source, $props.paps.data_source, 'data_source', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.paps.data_source) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[20] || (_cache[20] = function ($event) {
      return $options.handleClick('Title', $props.paps.data_source, $props.paps.data_source, 'data_source', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.data_source, $props.paps.data_source, 'data_source', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[21] || (_cache[21] = function ($event) {
      return $options.handleClick('Title', $props.paps.data_source, $props.paps.data_source, 'data_source', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_29), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th colspan=\"1\">Total</th>\n                                    <td colspan=\"1\" :class=\"{\n                                        'text-danger': has_comment('Title',(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),'baseline_total','revision_plans', paps, paps.comments)\n                                    }\">{{ format_number_conv(paps.baseline_male + paps.baseline_female, 0, true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Title',(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),'baseline_total','revision_plans', paps, paps.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Title',(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),'baseline_total','revision_plans', paps, paps.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Title',(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),'baseline_total','revision_plans', paps, paps.comments)\">*\n                                        </button>\n                                    </td> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" COST OF PROGRAM "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[113] || (_cache[113] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "bg-secondary text-white",
    colspan: "1"
  }, "Cost of Program", -1 /* CACHED */)), _cache[114] || (_cache[114] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "1"
  }, "Amount (Php)", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Title', 'Amount', $props.imp_amount, 'amount', 'revision_plans', $props.paps, $props.paps.comments)
    }]),
    id: $props.paps.id + '_revision_plans_amount'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.imp_amount, 2, true)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[22] || (_cache[22] = function ($event) {
      return $options.handleClick('Title', 'Amount', $props.imp_amount, 'amount', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', 'Amount', $props.imp_amount, 'amount', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[23] || (_cache[23] = function ($event) {
      return $options.handleClick('Title', 'Amount', $props.imp_amount, 'amount', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_30), _cache[115] || (_cache[115] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "1"
  }, "Attributed GAD Budget (Php) ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    id: $props.paps.id + '_revision_plans_attributed_amount',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Title', 'GAD Attributed Amount', $props.imp_amount, 'attributed_amount', 'revision_plans', $props.paps, $props.paps.comments)
    }])
  }, [parseFloat($props.paps.hgdg_score) > 4 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.imp_amount * ($props.paps.hgdg_score / 20), 2, true)) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ format_number_conv(getGadAttributedAmount(imp_amount, paps.hgdg_score), 2, true) }} ")])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_33, "0.00")), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 2,
    "class": "superscript-btn",
    onClick: _cache[24] || (_cache[24] = function ($event) {
      return $options.handleClick('Title', 'GAD Attributed Amount', _ctx.format_number_conv($props.imp_amount * ($props.paps.hgdg_score / 20), 2, true), 'attributed_amount', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', 'GAD Attributed Amount', _ctx.format_number_conv($props.imp_amount * ($props.paps.hgdg_score / 20), 2, true), 'attributed_amount', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 3,
    "class": "superscript-btn",
    onClick: _cache[25] || (_cache[25] = function ($event) {
      return $options.handleClick('Title', 'GAD Attributed Amount', _ctx.format_number_conv($props.imp_amount * ($props.paps.hgdg_score / 20), 2, true), 'attributed_amount', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_31)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" HGDG CHECKLIST "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[117] || (_cache[117] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "bg-secondary text-white",
    colspan: "1"
  }, "HGDG Checklist", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "3",
    id: $props.paps.id + '_revision_plans_HGDG Checklist'
  }, [$props.paps.checklist ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 0,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', 'HGDG Checklist', $props.paps.checklist.box_number + ' ' + $props.paps.checklist.sector, 'HGDG Checklist', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" GAD " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$paps$checklis = $props.paps.checklist) === null || _$props$paps$checklis === void 0 ? void 0 : _$props$paps$checklis.box_number) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$paps$checklis2 = $props.paps.checklist) === null || _$props$paps$checklis2 === void 0 ? void 0 : _$props$paps$checklis2.sector) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[26] || (_cache[26] = function ($event) {
      return $options.handleClick('Title', 'HGDG Checklist', $props.paps.checklist.box_number + ' ' + $props.paps.checklist.sector, 'HGDG Checklist', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', 'HGDG Checklist', $props.paps.checklist.box_number + ' ' + $props.paps.checklist.sector, 'HGDG Checklist', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[27] || (_cache[27] = function ($event) {
      return $options.handleClick('Title', 'HGDG Checklist', $props.paps.checklist.box_number + ' ' + $props.paps.checklist.sector, 'HGDG Checklist', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_34), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/HGDGScore/".concat($props.paps.id),
    style: {
      "color": "white"
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[116] || (_cache[116] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("HGDG Score ", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    id: $props.paps.id + '_revision_plans_hgdg_score',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', 'HGDG Score', $props.paps.hgdg_score, 'hgdg_score', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.paps.hgdg_score) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[28] || (_cache[28] = function ($event) {
      return $options.handleClick('Title', 'HGDG Score', $props.paps.hgdg_score, 'hgdg_score', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', 'HGDG Score', $props.paps.hgdg_score, 'hgdg_score', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[29] || (_cache[29] = function ($event) {
      return $options.handleClick('Title', 'HGDG Score', $props.paps.hgdg_score, 'hgdg_score', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_36)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" RATIONALE "), $props.paps.rationale ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Rationale', 'rationale', $props.paps.rationale, 'rationale', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [_cache[119] || (_cache[119] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("II. ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/revision/edit/".concat($props.paps.id) : null,
    target: "_blank",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Rationale', 'rationale', $props.paps.rationale, 'rationale', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[118] || (_cache[118] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Rationale ", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href", "class"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[30] || (_cache[30] = function ($event) {
      return $options.handleClick('Rationale', 'rationale', $props.paps.rationale, 'rationale', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Rationale', 'rationale', $props.paps.rationale, 'rationale', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[31] || (_cache[31] = function ($event) {
      return $options.handleClick('Rationale', 'rationale', $props.paps.rationale, 'rationale', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */)]), _cache[120] || (_cache[120] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div v-html=\"paps.rationale\"\n                                    style=\"white-space: pre-line\"\n                                    ref=\"rationaleDiv\"\n                                    @mouseup=\"onHighlight\"></div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    ref: "rationaleEl",
    onMouseup: _cache[32] || (_cache[32] = function ($event) {
      return $options.handleSelection('rationale');
    }),
    innerHTML: $props.paps.rationale,
    style: {
      "text-align": "justify"
    }
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_40)]), _cache[121] || (_cache[121] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" OBJECTIVES "), $props.paps.objective ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Objectives', 'objective', $props.paps.objective, 'objective', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [_cache[123] || (_cache[123] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("III. ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/revision/edit/".concat($props.paps.id) : null,
    target: "_blank",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Objectives', 'objective', $props.paps.objective, 'objective', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[122] || (_cache[122] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Objectives ", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href", "class"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[33] || (_cache[33] = function ($event) {
      return $options.handleClick('Objectives', 'objective', $props.paps.objective, 'objective', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Objectives', 'objective', $props.paps.objective, 'objective', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[34] || (_cache[34] = function ($event) {
      return $options.handleClick('Objectives', 'objective', $props.paps.objective, 'objective', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */)]), _cache[124] || (_cache[124] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div v-html=\"paps.objective\" style=\"white-space: pre-line\"></div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    ref: "objectiveEl",
    onMouseup: _cache[35] || (_cache[35] = function ($event) {
      return $options.handleSelection('objective');
    }),
    innerHTML: $props.paps.objective
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_44)]), _cache[125] || (_cache[125] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Target Beneficiaries "), $props.paps.beneficiaries ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Beneficiaries', 'beneficiaries', $props.paps.beneficiaries, 'beneficiaries', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [_cache[127] || (_cache[127] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("IV. ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/revision/edit/".concat($props.paps.id) : null,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Beneficiaries', 'beneficiaries', $props.paps.beneficiaries, 'beneficiaries', 'revision_plans', $props.paps, $props.paps.comments)
    }),
    target: "_blank"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[126] || (_cache[126] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Target Beneficiaries ", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href", "class"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[36] || (_cache[36] = function ($event) {
      return $options.handleClick('Beneficiaries', 'beneficiaries', $props.paps.beneficiaries, 'beneficiaries', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Beneficiaries', 'beneficiaries', $props.paps.beneficiaries, 'beneficiaries', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[37] || (_cache[37] = function ($event) {
      return $options.handleClick('Beneficiaries', 'beneficiaries', $props.paps.beneficiaries, 'beneficiaries', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */)]), _cache[128] || (_cache[128] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div v-html=\"paps.beneficiaries\" style=\"white-space: pre-line\"></div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    ref: "beneficiariesEl",
    onMouseup: _cache[38] || (_cache[38] = function ($event) {
      return $options.handleSelection('beneficiaries');
    }),
    innerHTML: $props.paps.beneficiaries
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_48)]), _cache[129] || (_cache[129] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Implementation Schedule -Current Project"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.paps.type === 'p' ? 'col-12' : 'col-6')
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("IMPLEMENTATION PLAN"), $props.implementation ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /strategies-and-activities/${dat.id} "), _cache[131] || (_cache[131] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" V. ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/strategies-and-activities/".concat($props.paps.id) : null,
    target: "_blank"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[130] || (_cache[130] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Implementation Plan ", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_54, [_cache[141] || (_cache[141] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    "class": "bg-secondary text-white"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "width": "12%",
      "text-align": "center"
    }
  }, "Strategies/Activities"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "width": "8%",
      "text-align": "center"
    }
  }, "Performance Target and Indicator"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
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
  }, "Expected Output/Outcome"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
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
  }, "Person Responsible")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.implementation, function (dat, index) {
    var _dat$strategyProject$, _dat$strategyProject$2;
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: dat.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" STRATEGIES***************************************************************************************************** "), $props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.description), 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_56)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_57)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Implementation Plan', 'strategies', dat.description, 'target_indicator', 'strategy_projects', dat, dat.comments)
      })
    }, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_58, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.target_indicator), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.gad_issue), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_60, [dat.date_from ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(dat.date_from)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), dat.date_from && dat.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_62, " to ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), dat.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_63, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(dat.date_to)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_64, [dat.strategyProject[0] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 0
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(((_dat$strategyProject$ = dat.strategyProject[0]) === null || _dat$strategyProject$ === void 0 ? void 0 : _dat$strategyProject$.expected_output) || [], function (eo) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(eo.description), 1 /* TEXT */), _cache[132] || (_cache[132] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */))]);
    }), 256 /* UNKEYED_FRAGMENT */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(((_dat$strategyProject$2 = dat.strategyProject[0]) === null || _dat$strategyProject$2 === void 0 ? void 0 : _dat$strategyProject$2.expected_outcome) || [], function (eo) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(eo.description), 1 /* TEXT */), _cache[133] || (_cache[133] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */))]);
    }), 256 /* UNKEYED_FRAGMENT */))], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_65, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_68)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_69, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_70, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total) + parseFloat(dat.mooe_total) + parseFloat(dat.co_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.ccet_code), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_72, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.responsible), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: 1,
      id: dat.strategy_id + '_strategy_projects_strategy',
      style: {
        "background-color": "lightgrey",
        "font-weight": "bold"
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments)
      }),
      colspan: "12"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.description), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{dat.strategy_id }}_strategy_projects_strategy "), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_74)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_75)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */)], 8 /* PROPS */, _hoisted_73)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ACTIVITIES **************************************************************************************************** "), dat.activity && $props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 2
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(dat.activity, function (act, subIndex) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
        key: subIndex,
        style: {
          "height": "100%"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DESCRIPTION "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_activities'
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.description), 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_77)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_78)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_76), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TARGET INDICATOR "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td :class=\"{\n                                                    'text-danger': has_comment('Implementation Plan','activity target indicator',act.target_indicator,'activity target indicator','activity_projects', act, act.comments)\n                                                }\">\n                                                        <div v-if=\"act.activityProject[0]\" v-for=\"(eo,index) in act.activityProject[0].expected_output\" :key=\"index\">\n                                                            <div>{{ eo.target_indicator }}\n                                                                <span v-if=\"paps.is_strategy_based==0\">{{ act.target_indicator }}\n                                                                    <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                                                        @click=\"handleClick('Implementation Plan','activity target indicator',eo.target_indicator,'activity target indicator','expected_revised_outputs', eo, eo.comments)\">*\n                                                                    </button>\n                                                                    <button v-if=\"has_comment('Implementation Plan','activity target indicator',eo.target_indicator,'activity target indicator','expected_revised_outputs', eo, eo.comments)\" class=\"superscript-btn\"\n                                                                        @click=\"handleClick('Implementation Plan','activity target indicator',eo.target_indicator,'activity target indicator','expected_revised_outputs', eo, eo.comments)\">*\n                                                                    </button>\n                                                                    <hr>\n                                                                </span>\n                                                            </div>\n                                                            <hr>\n                                                        </div>\n                                                        <tr v-if=\"act.activityProject[0]\" v-for=\"eo in act.activityProject[0].expected_outcome\">\n                                                            <div>{{ eo.description }} </div>\n                                                            <hr>\n                                                        </tr>\n                                                </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GAD ISSUE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MERGED "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TARGET/INDICATORs, EXPECTED OUTPUTS, GAD ISSUE, IMPLEMENTATION DATES"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" style=\"border-collapse: collapse; width: 100%; height: 100%; table-layout: fixed;\" "), $options.getPairedOutputs(act.activityProject[0]) && $options.getPairedOutputs(act.activityProject[0]).length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", _hoisted_81, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.getPairedOutputs(act.activityProject[0]), function (pair, i) {
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
          id: pair.outcome_description ? pair.id + '_expected_revised_outcomes_target_indicator' : pair.id + '_expected_revised_outputs_target_indicator'
        }, [$props.paps.is_strategy_based == 0 && pair.target_indicator ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
          key: 0,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'text-danger': $options.has_comment('Implementation Plan', 'Target/Indicator', pair.target_indicator, 'target_indicator', 'expected_revised_outputs', pair, pair.comments) || $options.has_comment('Implementation Plan', 'Target/Indicator', pair.target_indicator, 'target_indicator', 'expected_revised_outputs', pair, pair.comments)
          })
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pair.target_indicator) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span v-if=\"pair.quantity>0\n                                                                                && !/\\d+(\\s*[a-zA-Z]+)?$/.test(pair.target_indicator)\n                                                                                && !/-\\s*\\d{1,3}(,\\d{3})*/.test(pair.target_indicator)\"> "), pair.quantity > 0 && !/\d+\s*$/.test((pair.target_indicator || '').trim()) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_83, " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pair.quantity), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[134] || (_cache[134] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), _cache[135] || (_cache[135] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'Target/Indicator', pair.target_indicator, 'target_indicator', pair.table, pair, pair.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_84)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'Target/Indicator', pair.target_indicator, 'target_indicator', pair.table, pair, pair.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 2,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'Target/Indicator', pair.target_indicator, 'target_indicator', pair.table, pair, pair.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_85)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_82), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GAD Issue "), i === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
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
        }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_87, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.gad_issue) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_88)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_89)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_86)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Timeline "), i === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
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
        }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_91, [act.date_from ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
          key: 0,
          id: act.activity_id + '_activity_projects_date_from'
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(act.date_from)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_93)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_94)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_92)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), act.date_from && act.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_95, " to ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), act.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
          key: 2,
          id: act.activity_id + '_activity_projects_date_to'
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(act.date_to)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_97)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_98)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_96)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_90)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Expected Outputs/Outcomes "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_99, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" OUTPUTS*********************************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'text-danger': $options.has_comment('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments) || $options.has_comment('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments)
          }),
          id: pair.id + '_expected_revised_outputs_output_description'
        }, [pair.quantity > 0 && $options.shouldDisplayQuantity(pair.output_description) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_101, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pair.quantity), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pair.output_description) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_102)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 2,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_103)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_100), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" OUTCOMES*********************************************************************** "), pair.outcome_description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: 0,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'text-danger': $options.has_comment('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments) || $options.has_comment('Implementation Plan', 'outcome_description', pair.output_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments)
          }),
          id: pair.id + '_expected_revised_outcomes'
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pair.outcome_description) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_105)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_106)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_104)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
      }), 128 /* KEYED_FRAGMENT */))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", _hoisted_107, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <template > "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[136] || (_cache[136] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GAD Issue "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
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
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_109, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.gad_issue) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_110)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_111)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_108), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Timeline "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        style: {
          "width": "25%",
          "border": "1px solid #000",
          "padding": "4px"
        },
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["align-top", {
          'text-danger': $options.has_comment('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments) || $options.has_comment('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments)
        }]),
        rowspan: $options.getPairedOutputs(act.activityProject[0]).length
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_113, [act.date_from ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
        key: 0,
        id: act.activity_id + '_activity_projects_date_from'
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(act.date_from)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_115)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_116)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_114)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), act.date_from && act.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_117, " to ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), act.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
        key: 2,
        id: act.activity_id + '_activity_projects_date_to'
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(act.date_to)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
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
      }, "* ", 8 /* PROPS */, _hoisted_120)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_118)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_112), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Expected Outcome "), _cache[137] || (_cache[137] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </template> ")])]))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PERSONNEL SERVICES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_ps_total'
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_122, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.ps_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_123)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_124)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_121), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MAINTENANCE, OPERATING, AND OTHER EXPENSES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_mooe_total'
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_126, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.mooe_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_127)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_128)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_125), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FINANCIAL EXPENSES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_fe_total'
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_130, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.fe_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_131)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_132)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_129), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CAPITAL OUTLAY "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_co_total'
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_134, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.co_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_135)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_136)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_133), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_137, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.ps_total) + parseFloat(act.mooe_total) + parseFloat(act.co_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CCET Code "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_ccet_code'
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_139, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.ccet_code && act.ccet_code !== 'null' ? act.ccet_code : ''), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_140)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_141)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_138), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" RESPONSIBLE INDIVIDUAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_responsible'
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_143, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.responsible), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_144)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_145)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_142)]);
    }), 128 /* KEYED_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TOTALS*********************************************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[138] || (_cache[138] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "5"
  }, "TOTAL", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PS TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_ps, 2, true), _ctx.format_number_conv($data.v_imp_ps, 2, true), 'imp_ps', 'revision_plans', $props.paps, $props.paps.comments)
    }),
    id: $props.paps.id + '_revision_plans_imp_ps'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($data.v_imp_ps, 2, true)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[39] || (_cache[39] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_ps, 2, true), _ctx.format_number_conv($data.v_imp_ps, 2, true), 'imp_ps', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_ps, 2, true), _ctx.format_number_conv($data.v_imp_ps, 2, true), 'imp_ps', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[40] || (_cache[40] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_ps, 2, true), _ctx.format_number_conv($data.v_imp_ps, 2, true), 'imp_ps', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_146), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_mooe, 2, true), _ctx.format_number_conv($data.v_imp_mooe, 2, true), 'imp_mooe', 'revision_plans', $props.paps, $props.paps.comments)
    }),
    id: $props.paps.id + '_revision_plans_imp_mooe'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($data.v_imp_mooe, 2, true)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[41] || (_cache[41] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_mooe, 2, true), _ctx.format_number_conv($data.v_imp_mooe, 2, true), 'imp_mooe', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_mooe, 2, true), _ctx.format_number_conv($data.v_imp_mooe, 2, true), 'imp_mooe', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[42] || (_cache[42] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_mooe, 2, true), _ctx.format_number_conv($data.v_imp_mooe, 2, true), 'imp_mooe', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_147), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FE TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_fe, 2, true), _ctx.format_number_conv($data.v_imp_fe, 2, true), 'imp_fe', 'revision_plans', $props.paps, $props.paps.comments)
    }),
    id: $props.paps.id + '_revision_plans_imp_fe'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($data.v_imp_fe, 2, true)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[43] || (_cache[43] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_fe, 2, true), _ctx.format_number_conv($data.v_imp_fe, 2, true), 'imp_fe', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_fe, 2, true), _ctx.format_number_conv($data.v_imp_fe, 2, true), 'imp_fe', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[44] || (_cache[44] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_fe, 2, true), _ctx.format_number_conv($data.v_imp_fe, 2, true), 'imp_fe', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_148), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CO TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_co, 2, true), _ctx.format_number_conv($data.v_imp_co, 2, true), 'imp_co', 'revision_plans', $props.paps, $props.paps.comments)
    }),
    id: $props.paps.id + '_revision_plans_imp_co'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($data.v_imp_co, 2, true)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[45] || (_cache[45] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_co, 2, true), _ctx.format_number_conv($data.v_imp_co, 2, true), 'imp_co', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_co, 2, true), _ctx.format_number_conv($data.v_imp_co, 2, true), 'imp_co', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[46] || (_cache[46] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_co, 2, true), _ctx.format_number_conv($data.v_imp_co, 2, true), 'imp_co', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_149), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv($props.imp_amount, 2, true), _ctx.format_number_conv($props.imp_amount, 2, true), 'total_imp_amount', 'revision_plans', $props.paps, $props.paps.comments)
    }]),
    id: $props.paps.id + '_revision_plans_total_imp_amount'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.imp_amount, 2, true)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[47] || (_cache[47] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($props.imp_amount, 2, true), _ctx.format_number_conv($props.imp_amount, 2, true), 'total_imp_amount', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv($props.imp_amount, 2, true), _ctx.format_number_conv($props.imp_amount, 2, true), 'total_imp_amount', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[48] || (_cache[48] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($props.imp_amount, 2, true), _ctx.format_number_conv($props.imp_amount, 2, true), 'total_imp_amount', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_150), _cache[139] || (_cache[139] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[140] || (_cache[140] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ implementation }} ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[142] || (_cache[142] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))])])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Implementation Schedule -Project Design -Reference Project Profile"), $props.paps.type === 'd' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_151, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_152, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_153, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("IMPLEMENTATION PLAN"), $props.implementation ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_154, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_155, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /strategies-and-activities/${dat.id} "), _cache[144] || (_cache[144] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" V. ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/strategies-and-activities/".concat($props.paps.id) : null,
    target: "_blank"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[143] || (_cache[143] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Implementation Plan ", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_156, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_157, [_cache[154] || (_cache[154] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    "class": "bg-secondary text-white"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "width": "12%",
      "text-align": "center"
    }
  }, "Strategies/Activities"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "width": "8%",
      "text-align": "center"
    }
  }, "Performance Target and Indicator"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
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
  }, "Expected Output/Outcome"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
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
  }, "Person Responsible")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.implementation_reference_profile, function (dat, index) {
    var _dat$strategyProject$3, _dat$strategyProject$4;
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: dat.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" STRATEGIES***************************************************************************************************** "), $props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_158, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.description), 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_159)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_160)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Implementation Plan', 'strategies', dat.description, 'target_indicator', 'strategy_projects', dat, dat.comments)
      })
    }, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_161, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.target_indicator), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_162, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.gad_issue), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_163, [dat.date_from ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_164, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(dat.date_from)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), dat.date_from && dat.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_165, " to ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), dat.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_166, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(dat.date_to)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_167, [dat.strategyProject[0] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 0
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(((_dat$strategyProject$3 = dat.strategyProject[0]) === null || _dat$strategyProject$3 === void 0 ? void 0 : _dat$strategyProject$3.expected_output) || [], function (eo) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(eo.description), 1 /* TEXT */), _cache[145] || (_cache[145] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */))]);
    }), 256 /* UNKEYED_FRAGMENT */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(((_dat$strategyProject$4 = dat.strategyProject[0]) === null || _dat$strategyProject$4 === void 0 ? void 0 : _dat$strategyProject$4.expected_outcome) || [], function (eo) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(eo.description), 1 /* TEXT */), _cache[146] || (_cache[146] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */))]);
    }), 256 /* UNKEYED_FRAGMENT */))], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_168, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_169, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_170, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_171)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_172, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_173, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total) + parseFloat(dat.mooe_total) + parseFloat(dat.co_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_174, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.ccet_code), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_175, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.responsible), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: 1,
      id: dat.strategy_id + '_strategy_projects_strategy',
      style: {
        "background-color": "lightgrey",
        "font-weight": "bold"
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments)
      }),
      colspan: "12"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.description), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{dat.strategy_id }}_strategy_projects_strategy "), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_177)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_178)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */)], 8 /* PROPS */, _hoisted_176)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ACTIVITIES **************************************************************************************************** "), dat.activity && $props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 2
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(dat.activity, function (act, subIndex) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
        key: subIndex,
        style: {
          "height": "100%"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DESCRIPTION "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_activities'
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.description), 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_180)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_181)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_179), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TARGET INDICATOR "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td :class=\"{\n                                                    'text-danger': has_comment('Implementation Plan','activity target indicator',act.target_indicator,'activity target indicator','activity_projects', act, act.comments)\n                                                }\">\n                                                        <div v-if=\"act.activityProject[0]\" v-for=\"(eo,index) in act.activityProject[0].expected_output\" :key=\"index\">\n                                                            <div>{{ eo.target_indicator }}\n                                                                <span v-if=\"paps.is_strategy_based==0\">{{ act.target_indicator }}\n                                                                    <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                                                        @click=\"handleClick('Implementation Plan','activity target indicator',eo.target_indicator,'activity target indicator','expected_revised_outputs', eo, eo.comments)\">*\n                                                                    </button>\n                                                                    <button v-if=\"has_comment('Implementation Plan','activity target indicator',eo.target_indicator,'activity target indicator','expected_revised_outputs', eo, eo.comments)\" class=\"superscript-btn\"\n                                                                        @click=\"handleClick('Implementation Plan','activity target indicator',eo.target_indicator,'activity target indicator','expected_revised_outputs', eo, eo.comments)\">*\n                                                                    </button>\n                                                                    <hr>\n                                                                </span>\n                                                            </div>\n                                                            <hr>\n                                                        </div>\n                                                        <tr v-if=\"act.activityProject[0]\" v-for=\"eo in act.activityProject[0].expected_outcome\">\n                                                            <div>{{ eo.description }} </div>\n                                                            <hr>\n                                                        </tr>\n                                                </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GAD ISSUE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MERGED "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TARGET/INDICATORs, EXPECTED OUTPUTS, GAD ISSUE, IMPLEMENTATION DATES"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_182, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_183, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" style=\"border-collapse: collapse; width: 100%; height: 100%; table-layout: fixed;\" "), $options.getPairedOutputs(act.activityProject[0]) && $options.getPairedOutputs(act.activityProject[0]).length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", _hoisted_184, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.getPairedOutputs(act.activityProject[0]), function (pair, i) {
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
          id: pair.outcome_description ? pair.id + '_expected_revised_outcomes_target_indicator' : pair.id + '_expected_revised_outputs_target_indicator'
        }, [$props.paps.is_strategy_based == 0 && pair.target_indicator ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
          key: 0,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'text-danger': $options.has_comment('Implementation Plan', 'Target/Indicator', pair.target_indicator, 'target_indicator', 'expected_revised_outputs', pair, pair.comments) || $options.has_comment('Implementation Plan', 'Target/Indicator', pair.target_indicator, 'target_indicator', 'expected_revised_outputs', pair, pair.comments)
          })
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pair.target_indicator) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span v-if=\"pair.quantity>0\n                                                                                && !/\\d+(\\s*[a-zA-Z]+)?$/.test(pair.target_indicator)\n                                                                                && !/-\\s*\\d{1,3}(,\\d{3})*/.test(pair.target_indicator)\"> "), pair.quantity > 0 && !/\d+\s*$/.test((pair.target_indicator || '').trim()) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_186, " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pair.quantity), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[147] || (_cache[147] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), _cache[148] || (_cache[148] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'Target/Indicator', pair.target_indicator, 'target_indicator', pair.table, pair, pair.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_187)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'Target/Indicator', pair.target_indicator, 'target_indicator', pair.table, pair, pair.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 2,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'Target/Indicator', pair.target_indicator, 'target_indicator', pair.table, pair, pair.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_188)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_185), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GAD Issue "), i === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
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
        }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_190, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.gad_issue) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_191)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_192)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_189)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Timeline "), i === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
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
        }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_194, [act.date_from ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
          key: 0,
          id: act.activity_id + '_activity_projects_date_from'
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(act.date_from)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_196)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_197)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_195)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), act.date_from && act.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_198, " to ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), act.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
          key: 2,
          id: act.activity_id + '_activity_projects_date_to'
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(act.date_to)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_200)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_201)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_199)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_193)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Expected Outputs/Outcomes "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_202, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" OUTPUTS*********************************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'text-danger': $options.has_comment('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments) || $options.has_comment('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments)
          }),
          id: pair.id + '_expected_revised_outputs_output_description'
        }, [pair.quantity > 0 && $options.shouldDisplayQuantity(pair.output_description) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_204, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pair.quantity), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pair.output_description) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_205)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 2,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_206)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_203), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" OUTCOMES*********************************************************************** "), pair.outcome_description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: 0,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'text-danger': $options.has_comment('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments) || $options.has_comment('Implementation Plan', 'outcome_description', pair.output_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments)
          }),
          id: pair.id + '_expected_revised_outcomes'
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pair.outcome_description) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_208)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments);
          }
        }, "* ", 8 /* PROPS */, _hoisted_209)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_207)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
      }), 128 /* KEYED_FRAGMENT */))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", _hoisted_210, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <template > "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[149] || (_cache[149] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GAD Issue "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
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
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_212, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.gad_issue) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_213)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_214)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_211), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Timeline "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        style: {
          "width": "25%",
          "border": "1px solid #000",
          "padding": "4px"
        },
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["align-top", {
          'text-danger': $options.has_comment('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments) || $options.has_comment('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments)
        }]),
        rowspan: $options.getPairedOutputs(act.activityProject[0]).length
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_216, [act.date_from ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
        key: 0,
        id: act.activity_id + '_activity_projects_date_from'
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(act.date_from)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_218)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_219)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_217)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), act.date_from && act.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_220, " to ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), act.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
        key: 2,
        id: act.activity_id + '_activity_projects_date_to'
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(act.date_to)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_222)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_223)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_221)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_215), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Expected Outcome "), _cache[150] || (_cache[150] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </template> ")])]))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PERSONNEL SERVICES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_ps_total'
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_225, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.ps_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_226)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_227)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_224), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MAINTENANCE, OPERATING, AND OTHER EXPENSES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_mooe_total'
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_229, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.mooe_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_230)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_231)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_228), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FINANCIAL EXPENSES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_fe_total'
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_233, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.fe_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_234)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_235)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_232), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CAPITAL OUTLAY "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_co_total'
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_237, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.co_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_238)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_239)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_236), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_240, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.ps_total) + parseFloat(act.mooe_total) + parseFloat(act.co_total), 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CCET Code "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_ccet_code'
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_242, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.ccet_code && act.ccet_code !== 'null' ? act.ccet_code : ''), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_243)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_244)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_241), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" RESPONSIBLE INDIVIDUAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_responsible'
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_246, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.responsible), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_247)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments);
        }
      }, "* ", 8 /* PROPS */, _hoisted_248)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_245)]);
    }), 128 /* KEYED_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TOTALS*********************************************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[151] || (_cache[151] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "5"
  }, "TOTAL", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PS TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_ps, 2, true), _ctx.format_number_conv($data.v_imp_ps, 2, true), 'imp_ps', 'revision_plans', $props.paps, $props.paps.comments)
    }),
    id: $props.paps.id + '_revision_plans_imp_ps'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($data.v_imp_ps, 2, true)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[49] || (_cache[49] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_ps, 2, true), _ctx.format_number_conv($data.v_imp_ps, 2, true), 'imp_ps', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_ps, 2, true), _ctx.format_number_conv($data.v_imp_ps, 2, true), 'imp_ps', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[50] || (_cache[50] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_ps, 2, true), _ctx.format_number_conv($data.v_imp_ps, 2, true), 'imp_ps', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_249), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_mooe, 2, true), _ctx.format_number_conv($data.v_imp_mooe, 2, true), 'imp_mooe', 'revision_plans', $props.paps, $props.paps.comments)
    }),
    id: $props.paps.id + '_revision_plans_imp_mooe'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($data.v_imp_mooe, 2, true)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[51] || (_cache[51] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_mooe, 2, true), _ctx.format_number_conv($data.v_imp_mooe, 2, true), 'imp_mooe', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_mooe, 2, true), _ctx.format_number_conv($data.v_imp_mooe, 2, true), 'imp_mooe', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[52] || (_cache[52] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_mooe, 2, true), _ctx.format_number_conv($data.v_imp_mooe, 2, true), 'imp_mooe', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_250), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FE TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_fe, 2, true), _ctx.format_number_conv($data.v_imp_fe, 2, true), 'imp_fe', 'revision_plans', $props.paps, $props.paps.comments)
    }),
    id: $props.paps.id + '_revision_plans_imp_fe'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($data.v_imp_fe, 2, true)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[53] || (_cache[53] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_fe, 2, true), _ctx.format_number_conv($data.v_imp_fe, 2, true), 'imp_fe', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_fe, 2, true), _ctx.format_number_conv($data.v_imp_fe, 2, true), 'imp_fe', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[54] || (_cache[54] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_fe, 2, true), _ctx.format_number_conv($data.v_imp_fe, 2, true), 'imp_fe', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_251), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CO TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_co, 2, true), _ctx.format_number_conv($data.v_imp_co, 2, true), 'imp_co', 'revision_plans', $props.paps, $props.paps.comments)
    }),
    id: $props.paps.id + '_revision_plans_imp_co'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($data.v_imp_co, 2, true)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[55] || (_cache[55] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_co, 2, true), _ctx.format_number_conv($data.v_imp_co, 2, true), 'imp_co', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_co, 2, true), _ctx.format_number_conv($data.v_imp_co, 2, true), 'imp_co', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[56] || (_cache[56] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_co, 2, true), _ctx.format_number_conv($data.v_imp_co, 2, true), 'imp_co', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_252), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv($props.imp_amount, 2, true), _ctx.format_number_conv($props.imp_amount, 2, true), 'total_imp_amount', 'revision_plans', $props.paps, $props.paps.comments)
    }]),
    id: $props.paps.id + '_revision_plans_total_imp_amount'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.imp_amount, 2, true)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[57] || (_cache[57] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($props.imp_amount, 2, true), _ctx.format_number_conv($props.imp_amount, 2, true), 'total_imp_amount', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv($props.imp_amount, 2, true), _ctx.format_number_conv($props.imp_amount, 2, true), 'total_imp_amount', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[58] || (_cache[58] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($props.imp_amount, 2, true), _ctx.format_number_conv($props.imp_amount, 2, true), 'total_imp_amount', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_253), _cache[152] || (_cache[152] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[153] || (_cache[153] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ implementation }} ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[155] || (_cache[155] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Budgetary Requirements -Current Project"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.paps.type === 'p' ? 'col-12' : 'col-6')
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_254, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_255, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("BUDGETARY REQUIREMENTS"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" v-if=\"b_mooe.length>0 || b_capital.length>0 || b_ps.length>0\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_256, [_cache[157] || (_cache[157] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" VI. ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/budget/".concat($props.paps.id) : null
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_cache[156] || (_cache[156] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Estimated Cost/Budgetary Requirements ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.paps.type === 'd')
      }, "(Project Design)", 2 /* CLASS */)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ capitalOutlay }}\n                            showBudgetTable: {{ showBudgetTable() }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_257, [_cache[165] || (_cache[165] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "3"
  }, "Particulars"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Account Code"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Amount"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Source")])], -1 /* CACHED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.groupedBudget, function (rows, category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tbody", {
      key: category
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CATEGORY HEADER "), rows.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_258, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_259, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatCategory(category)), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DATA ROWS "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(rows, function (row) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
        key: row.id
      }, [_cache[158] || (_cache[158] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[159] || (_cache[159] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PARTICULARS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Budgetary Requirements', 'Particulars', row.particulars, 'particulars', 'budget_requirements', row, row.comments)
        }),
        id: row.id + '_budget_requirements_particulars'
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.particulars) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Budgetary Requirements', 'Particulars', row.particulars, 'particulars', 'budget_requirements', row, row.comments);
        }
      }, " * ", 8 /* PROPS */, _hoisted_261)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_260), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ACCOUNT CODE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Budgetary Requirements', 'Account Code', row.account_code, 'account_code', 'budget_requirements', row, row.comments)
        }),
        id: row.id + '_budget_requirements_account_code'
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.account_code) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Budgetary Requirements', 'Account Code', row.account_code, 'account_code', 'budget_requirements', row, row.comments);
        }
      }, " * ", 8 /* PROPS */, _hoisted_263)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_262), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" AMOUNT "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Budgetary Requirements', 'Amount', row.amount, 'amount', 'budget_requirements', row, row.comments)
        }),
        id: row.id + '_budget_requirements_amount'
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(row.amount, 2, true)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Budgetary Requirements', 'Amount', row.amount, 'amount', 'budget_requirements', row, row.comments);
        }
      }, " * ", 8 /* PROPS */, _hoisted_265)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_264), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SOURCE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Budgetary Requirements', 'Source', row.source, 'source', 'budget_requirements', row, row.comments)
        }),
        id: row.id + '_budget_requirements_source'
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.source) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Budgetary Requirements', 'Source', row.source, 'source', 'budget_requirements', row, row.comments);
        }
      }, " * ", 8 /* PROPS */, _hoisted_267)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_266)]);
    }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TOTAL ROW "), rows.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_268, [_cache[160] || (_cache[160] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_269, "TOTAL " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatCategory(category)), 1 /* TEXT */), _cache[161] || (_cache[161] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " ₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.reduce(function (sum, r) {
      return sum + Number(r.amount);
    }, 0).toLocaleString()), 1 /* TEXT */), _cache[162] || (_cache[162] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      colspan: "3"
    }, null, -1 /* CACHED */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <tr >\n                                    <td colspan=\"4\"><h5>GAD TOTAL</h5></td>\n                                    <td :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements',\n                                                'GAD Grand Total',\n                                                format_number_conv(tot_gad,2,true),\n                                                'gad_total', 'revision_plans',\n                                                paps, paps.comments)\n                                            }\"\n                                            :id=\"paps.id + '_revision_plans_gad_total'\">\n                                            ₱ {{ gadBudgetTotal.toLocaleString() }}\n                                            <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                                @click=\"handleClick('Budgetary Requirements',\n                                                'GAD Grand Total',\n                                                format_number_conv(tot_gad,2,true),\n                                                'gad_total', 'revision_plans',\n                                                paps, paps.comments)\">*\n                                            </button>\n                                            <button v-if=\"has_comment('Budgetary Requirements',\n                                                'GAD Grand Total',\n                                                format_number_conv(tot_gad,2,true),\n                                                'gad_total', 'revision_plans',\n                                                paps, paps.comments)\" class=\"superscript-btn\"\n                                                @click=\"handleClick('Budgetary Requirements',\n                                                'GAD Grand Total',\n                                                format_number_conv(tot_gad,2,true),\n                                                'gad_total', 'revision_plans',\n                                                paps, paps.comments)\">*\n                                            </button>\n                                    </td>\n                                    <td colspan=\"3\"></td>\n                                </tr> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[163] || (_cache[163] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "TOTAL")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.overallBudget.toLocaleString()), 1 /* TEXT */), _cache[164] || (_cache[164] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "3"
  }, null, -1 /* CACHED */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <tr>\n                                        <td colspan=\"4\"><h4>TOTAL</h4></td>\n                                        <td>₱ {{ overallBudget.toLocaleString() }}</td>\n                                        <td colspan=\"3\"></td>\n                                    </tr>")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <table v-if=\"showBudgetTable()\" class=\"table table-hover table-bordered border-dark\">\n                                <thead>\n                                    <tr class=\"bg-secondary text-white\">\n                                        <th colspan=\"3\">Particular</th>\n                                        <th>Account Code</th>\n                                        <th>Amount (Php)</th>\n                                        <th>Source</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr v-if=\"mooe_gad.length > 0 || mooe_non.length > 0\">\n                                        <th colspan=\"3\">Maintenance, Operating, and Other Expenses</th>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                    </tr>\n                                    <tr v-if=\"mooe_gad.length > 0\">\n                                        <td></td>\n                                        <th colspan=\"2\">GAD </th>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                    </tr>\n                                    <template v-if=\"mooe_gad.length > 0\">\n                                    <tr v-for=\"dat in mooe_gad\">\n                                        <td></td>\n                                        <td></td>\n                                        <td>{{ dat.particulars }}</td>\n                                        <td>{{ dat.account_code }}</td>\n                                        <td class=\"text-end\">{{ format_number_conv(dat.amount, 2, true) }}</td>\n                                        <td>{{ dat.source }}</td>\n                                    </tr>\n                                    </template>\n                                    <tr v-if=\"mooe_gad.length > 0\">\n                                        <td></td>\n                                        <td></td>\n                                        <th colspan=\"2\">SUB TOTAL (GAD) </th>\n                                        <th class=\"text-end\">{{ format_number_conv(s_mooe_gad, 2, true) }}</th>\n                                        <td></td>\n                                    </tr>\n                                    <tr v-if=\"mooe_non.length > 0\">\n                                        <td></td>\n                                        <th colspan=\"2\">NON-GAD </th>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                    </tr>\n                                    <template v-if=\"mooe_non.length > 0\">\n                                    <tr v-for=\"dat in mooe_non\">\n                                        <td></td>\n                                        <td></td>\n                                        <td>{{ dat.particulars }}</td>\n                                        <td>{{ dat.account_code }}</td>\n                                        <td class=\"text-end\">{{ format_number_conv(dat.amount, 2, true) }}</td>\n                                        <td>{{ dat.source }}</td>\n                                    </tr>\n                                    </template>\n                                    <tr v-if=\"mooe_non.length > 0\" class=\"text-bg-dark\">\n                                        <td></td>\n                                        <td></td>\n                                        <th colspan=\"2\">SUB TOTAL (NON-GAD) </th>\n                                        <th class=\"text-end\">{{ format_number_conv(s_mooe_non, 2, true) }}</th>\n                                        <td></td>\n                                    </tr>\n                                    <tr v-if=\"mooe_gad.length > 0 || mooe_non.length > 0\">\n                                        <td></td>\n                                        <th colspan=\"3\">SUB TOTAL (MOOE) </th>\n                                        <th class=\"text-end\">{{ getSum(s_mooe_gad, s_mooe_non) }}</th>\n                                        <td></td>\n                                    </tr>\n                                    <tr v-if=\"cap_gad.length > 0 || cap_non.length > 0\">\n                                        <th colspan=\"3\">Capital Outlay</th>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                    </tr>\n                                    <tr v-if=\"cap_gad.length > 0\">\n                                        <td></td>\n                                        <th colspan=\"2\">GAD </th>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                    </tr>\n                                    <template v-if=\"cap_gad.length > 0\">\n                                    <tr v-for=\"dat in cap_gad\">\n                                        <td></td>\n                                        <td></td>\n                                        <td>{{ dat.particulars }}</td>\n                                        <td>{{ dat.account_code }}</td>\n                                        <td class=\"text-end\">{{ format_number_conv(dat.amount, 2, true) }}</td>\n                                        <td>{{ dat.source }}</td>\n                                    </tr>\n                                    </template>\n                                    <tr v-if=\"cap_gad.length > 0\" class=\"text-bg-dark\">\n                                        <td></td>\n                                        <td></td>\n                                        <th colspan=\"2\">SUB TOTAL (GAD) </th>\n                                        <th class=\"text-end\">{{ format_number_conv(s_cap_gad, 2, true) }}</th>\n                                        <td></td>\n                                    </tr>\n                                    <tr v-if=\"cap_non.length > 0\">\n                                        <td></td>\n                                        <th colspan=\"2\">NON-GAD </th>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                    </tr>\n                                    <template v-if=\"cap_non.length > 0\">\n                                    <tr v-for=\"dat in cap_non\">\n                                        <td></td>\n                                        <td></td>\n                                        <td>{{ dat.particulars }}</td>\n                                        <td>{{ dat.account_code }}</td>\n                                        <td class=\"text-end\">{{ format_number_conv(dat.amount, 2, true) }}</td>\n                                        <td>{{ dat.source }}</td>\n                                    </tr>\n                                    </template>\n                                    <tr v-if=\"cap_non.length > 0\" class=\"text-bg-dark\">\n                                        <td></td>\n                                        <td></td>\n                                        <th colspan=\"2\">SUB TOTAL (NON-GAD) </th>\n                                        <th class=\"text-end\">{{ format_number_conv(s_cap_non, 2, true) }}</th>\n                                        <td></td>\n                                    </tr>\n                                    <tr v-if=\"cap_gad.length > 0 || cap_non.length > 0\">\n                                        <td></td>\n                                        <th colspan=\"3\">SUB TOTAL (Capital Outlay) </th>\n                                        <th class=\"text-end\">{{ getSum(s_cap_gad, s_cap_non) }}</th>\n                                        <td></td>\n                                    </tr>\n                                    <tr v-if=\"ps_gad.length > 0 || ps_non.length > 0\">\n                                        <th colspan=\"3\">Personnel Services</th>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                    </tr>\n                                    <tr v-if=\"ps_gad.length > 0\">\n                                        <td></td>\n                                        <th colspan=\"2\">GAD </th>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                    </tr>\n                                    <template v-if=\"ps_gad.length > 0\">\n                                    <tr v-for=\"dat in ps_gad\">\n                                        <td></td>\n                                        <td></td>\n                                        <td>{{ dat.particulars }}</td>\n                                        <td>{{ dat.account_code }}</td>\n                                        <td class=\"text-end\">{{ format_number_conv(dat.amount, 2, true) }}</td>\n                                        <td>{{ dat.source }}</td>\n                                    </tr>\n                                    </template>\n                                    <tr v-if=\"ps_gad.length > 0\" class=\"text-bg-dark\">\n                                        <td></td>\n                                        <td></td>\n                                        <th colspan=\"2\">SUB TOTAL (GAD) </th>\n                                        <th class=\"text-end\">{{ format_number_conv(s_ps_gad, 2, true) }}</th>\n                                        <td></td>\n                                    </tr>\n                                    <tr v-if=\"ps_non.length > 0\">\n                                        <td></td>\n                                        <th colspan=\"2\">NON-GAD</th>\n                                        <td></td>\n                                        <td></td>\n                                        <td></td>\n                                    </tr>\n                                    <template v-if=\"ps_non.length > 0\">\n                                    <tr v-for=\"dat in ps_non\">\n                                        <td></td>\n                                        <td></td>\n                                        <td>{{ dat.particulars }}</td>\n                                        <td>{{ dat.account_code }}</td>\n                                        <td class=\"text-end\">{{ format_number_conv(dat.amount, 2, true) }}</td>\n                                        <td>{{ dat.source }}</td>\n                                    </tr>\n                                    </template>\n                                    <tr v-if=\"ps_non.length > 0\" class=\"text-bg-dark\">\n                                        <td></td>\n                                        <td></td>\n                                        <th colspan=\"2\">SUB TOTAL (NON-GAD) </th>\n                                        <th class=\"text-end\">{{ format_number_conv(s_ps_non, 2, true) }}</th>\n                                        <td></td>\n                                    </tr>\n                                    <tr v-if=\"ps_gad.length > 0 || ps_non.length > 0\">\n                                        <td></td>\n                                        <th colspan=\"3\">SUB TOTAL (Personnel Services) </th>\n                                        <th class=\"text-end\">{{ getSum(s_ps_gad, s_ps_non) }}</th>\n                                        <td></td>\n                                    </tr>\n                                    <tr>\n                                        <th colspan=\"4\">GRAND TOTAL</th>\n                                        <th class=\"text-end\">{{ getBudgetTotal() }}</th>\n                                        <th></th>\n                                    </tr>\n                                </tbody>\n                            </table> "), _cache[166] || (_cache[166] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))])])])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Budgetary Requirements -Project Design -Reference Project Profile"), $props.paps.type === 'd' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_270, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_271, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_272, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("BUDGETARY REQUIREMENTS"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" v-if=\"b_mooe.length>0 || b_capital.length>0 || b_ps.length>0\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_273, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/budget/".concat($props.paps.id) : null
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[167] || (_cache[167] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Budgetary Requirements (Project Profile Reference) ", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ capitalOutlay }}\n                            showBudgetTable: {{ showBudgetTable() }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_274, [_cache[175] || (_cache[175] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "3"
  }, "Particulars"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Account Code"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Amount"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Source")])], -1 /* CACHED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.groupedBudgetReference, function (rows, category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tbody", {
      key: category
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CATEGORY HEADER "), rows.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_275, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_276, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatCategory(category)), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DATA ROWS "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(rows, function (row) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
        key: row.id
      }, [_cache[168] || (_cache[168] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), _cache[169] || (_cache[169] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PARTICULARS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Budgetary Requirements', 'Particulars', row.particulars, 'particulars', 'budget_requirements', row, row.comments)
        }),
        id: row.id + '_budget_requirements_particulars'
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.particulars) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Budgetary Requirements', 'Particulars', row.particulars, 'particulars', 'budget_requirements', row, row.comments);
        }
      }, " * ", 8 /* PROPS */, _hoisted_278)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_277), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ACCOUNT CODE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Budgetary Requirements', 'Account Code', row.account_code, 'account_code', 'budget_requirements', row, row.comments)
        }),
        id: row.id + '_budget_requirements_account_code'
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.account_code) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Budgetary Requirements', 'Account Code', row.account_code, 'account_code', 'budget_requirements', row, row.comments);
        }
      }, " * ", 8 /* PROPS */, _hoisted_280)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_279), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" AMOUNT "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Budgetary Requirements', 'Amount', row.amount, 'amount', 'budget_requirements', row, row.comments)
        }),
        id: row.id + '_budget_requirements_amount'
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(row.amount, 2, true)) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Budgetary Requirements', 'Amount', row.amount, 'amount', 'budget_requirements', row, row.comments);
        }
      }, " * ", 8 /* PROPS */, _hoisted_282)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_281), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SOURCE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Budgetary Requirements', 'Source', row.source, 'source', 'budget_requirements', row, row.comments)
        }),
        id: row.id + '_budget_requirements_source'
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.source) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Budgetary Requirements', 'Source', row.source, 'source', 'budget_requirements', row, row.comments);
        }
      }, " * ", 8 /* PROPS */, _hoisted_284)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_283)]);
    }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TOTAL ROW "), rows.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_285, [_cache[170] || (_cache[170] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_286, "TOTAL " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatCategory(category)), 1 /* TEXT */), _cache[171] || (_cache[171] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " ₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.reduce(function (sum, r) {
      return sum + Number(r.amount);
    }, 0).toLocaleString()), 1 /* TEXT */), _cache[172] || (_cache[172] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      colspan: "3"
    }, null, -1 /* CACHED */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[173] || (_cache[173] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "TOTAL")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.overallBudget.toLocaleString()), 1 /* TEXT */), _cache[174] || (_cache[174] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "3"
  }, null, -1 /* CACHED */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <tr>\n                                        <td colspan=\"4\"><h4>TOTAL</h4></td>\n                                        <td>₱ {{ overallBudget.toLocaleString() }}</td>\n                                        <td colspan=\"3\"></td>\n                                    </tr>")]), _cache[176] || (_cache[176] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Implementing Team to Signatories "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_287, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_288, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_289, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("IMPLEMENTING TEAM v-if=\"team_members.length > 0 || paps.implementing_team !== null\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_290, [_cache[178] || (_cache[178] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" VII. ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/team/".concat($props.paps.id, "/revision/plan/team") : null,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementing Team', 'implementing team', $props.paps.rationale, 'implementing_team', 'revision_plans', $props.paps, $props.paps.comments)
    }),
    id: $props.paps.id + '_revision_plans_implementing_team'
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[177] || (_cache[177] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Implementing Team", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href", "class", "id"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[59] || (_cache[59] = function ($event) {
      return $options.handleClick('Implementing Team', 'implementing team', $props.paps.implementing_team, 'implementing_team', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementing Team', 'implementing team', $props.paps.implementing_team, 'implementing_team', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[60] || (_cache[60] = function ($event) {
      return $options.handleClick('Implementing Team', 'implementing team', $props.paps.implementing_team, 'implementing_team', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_291, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ paps.implementing_team }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $props.paps.implementing_team
  }, null, 8 /* PROPS */, _hoisted_292), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td colspan=\"6\" :class=\"{\n                                'text-danger': has_comment('Title', paps.project_title, paps.project_title, 'project_title', 'revision_plans', paps, paps.comments)\n                            }\">\n                                {{ paps.project_title }}\n                                <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                    @click=\"handleClick('Title',paps.project_title,paps.project_title,'project_title','revision_plans', paps, paps.comments)\">*\n                                </button>\n                                <button v-if=\"has_comment('Title',paps.project_title,paps.project_title,'project_title','revision_plans', paps, paps.comments)\" class=\"superscript-btn\"\n                                    @click=\"handleClick('Title',paps.project_title,paps.project_title,'project_title','revision_plans', paps, paps.comments)\">*\n                                </button>\n                            </td> ")]), $props.team_members.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_293, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_294, [_cache[179] || (_cache[179] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    "class": "bg-secondary text-white"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "No."), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Name"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Gender"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Position"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Employment Status"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th>Role</th> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "GAD-related trainings")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.team_members, function (team_member, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index + 1), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Name "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
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
    }, "* ", 8 /* PROPS */, _hoisted_296)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Team Plan', 'Name', team_member.name, 'name', 'team_plans', team_member, team_member.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'Name', team_member.name, 'name', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_297)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_295), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Gender "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(team_member.gender), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Position "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
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
    }, "* ", 8 /* PROPS */, _hoisted_299)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Team Plan', 'Position', team_member.position, 'position', 'team_plans', team_member, team_member.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'Position', team_member.position, 'position', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_300)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_298), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Employment Status "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      id: team_member.id + '_team_plans_status',
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Team Plan', 'status', team_member.status, 'status', 'team_plans', team_member, team_member.comments)
      })
    }, [team_member.status === 'Regular' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_302, "Permanent")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_303, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(team_member.status), 1 /* TEXT */)), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 2,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'status', team_member.status, 'status', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_304)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Team Plan', 'status', team_member.status, 'status', 'team_plans', team_member, team_member.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 3,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'status', team_member.status, 'status', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_305)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_301), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Competency "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td :class=\"{\n                                                    'text-danger': has_comment('Team Plan','competency',team_member.competency,'competency','team_plans', team_member, team_member.comments)\n                                                }\">{{ team_member.competency }}\n                                            <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                                @click=\"handleClick('Team Plan','competency',team_member.competency,'competency','team_plans', team_member, team_member.comments)\">*\n                                            </button>\n                                            <button v-if=\"has_comment('Team Plan','competency',team_member.competency,'competency','team_plans', team_member, team_member.comments)\" class=\"superscript-btn\"\n                                                @click=\"handleClick('Team Plan','competency',team_member.competency,'competency','team_plans', team_member, team_member.comments)\">*\n                                            </button>\n                                        </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td :class=\"{\n                                                    'text-danger': has_comment('Team Plan','role',team_member.role,'role','team_plans', team_member, team_member.comments)\n                                                }\">{{ team_member.role }}\n                                            <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                                @click=\"handleClick('Team Plan','role',team_member.role,'role','team_plans', team_member, team_member.comments)\">*\n                                            </button>\n                                            <button v-if=\"has_comment('Team Plan','role',team_member.role,'role','team_plans', team_member, team_member.comments)\" class=\"superscript-btn\"\n                                                @click=\"handleClick('Team Plan','role',team_member.role,'role','team_plans', team_member, team_member.comments)\">*\n                                            </button>\n                                        </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
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
    }, "* ", 8 /* PROPS */, _hoisted_307)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Team Plan', 'with_gad_training', team_member.with_gad_training, 'with_gad_training', 'team_plans', team_member, team_member.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'with_gad_training', team_member.with_gad_training, 'with_gad_training', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_308)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_306)]);
  }), 128 /* KEYED_FRAGMENT */))])]), _cache[180] || (_cache[180] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_309, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_310, [_cache[182] || (_cache[182] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" This Project has no recorded members of the implementation team! ", -1 /* CACHED */)), _cache[183] || (_cache[183] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), _cache[184] || (_cache[184] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Click ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/team/".concat($props.paps.id, "/revision/plan/team")
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[181] || (_cache[181] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("here", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"]), _cache[185] || (_cache[185] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" to edit implementation team. ", -1 /* CACHED */))]), _cache[186] || (_cache[186] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))])), _cache[218] || (_cache[218] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("PARTNERSHIP & SUSTAINABILITY"), $props.paps.partnership !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h3", _hoisted_311, [_cache[188] || (_cache[188] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" VIII. ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Partnership and Sustainability', 'Partnership and Sustainability', $props.paps.partnership, 'partnership', 'revision_plans', $props.paps, $props.paps.comments)
    }),
    id: $props.paps.id + '_revision_plans_partnership'
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[187] || (_cache[187] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Partnership and Sustainability", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class", "id"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[61] || (_cache[61] = function ($event) {
      return $options.handleClick('Partnership and Sustainability', 'Partnership and Sustainability', $props.paps.partnership, 'partnership', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Partnership and Sustainability', 'Partnership and Sustainability', $props.paps.partnership, 'partnership', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[62] || (_cache[62] = function ($event) {
      return $options.handleClick('Partnership and Sustainability', 'Partnership and Sustainability', $props.paps.partnership, 'partnership', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_312, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $props.paps.partnership
  }, null, 8 /* PROPS */, _hoisted_313)]), _cache[219] || (_cache[219] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), _cache[220] || (_cache[220] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("MONITORING & EVALUATION"), $props.monitors.length > 0 || $props.paps.monitoring !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h3", _hoisted_314, [_cache[190] || (_cache[190] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" IX. ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    id: $props.paps.id + '_revision_plans_monitoring',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Monitoring and Evaluation', 'Monitoring and Evaluation', $props.paps.monitoring, 'monitoring', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[189] || (_cache[189] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Monitoring and Evaluation", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["id", "class"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[63] || (_cache[63] = function ($event) {
      return $options.handleClick('Monitoring and Evaluation', 'Monitoring and Evaluation', $props.paps.monitoring, 'monitoring', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Monitoring and Evaluation', 'Monitoring and Evaluation', $props.paps.monitoring, 'monitoring', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[64] || (_cache[64] = function ($event) {
      return $options.handleClick('Monitoring and Evaluation', 'Monitoring and Evaluation', $props.paps.monitoring, 'monitoring', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_315, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $props.paps.monitoring
  }, null, 8 /* PROPS */, _hoisted_316)]), $props.monitors.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_317, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_318, [_cache[191] || (_cache[191] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    "class": "bg-secondary text-white"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Evaluation Mechanism/Tools"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "OPR and their Roles"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Target Beneficiaries"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Need for External M&E Team or GAD Expert/Consultant")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.monitors, function (monitor) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" M&E Evaluation Mechanism Tool "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Monitoring and Evaluation', 'Evaluation Mechanism Tool', monitor.evaluation_mechanism_tool, 'evaluation_mechanism_tool', 'monitoring_and_evaluations', monitor, monitor.comments)
      }),
      id: monitor.id + '_monitoring_and_evaluations_evaluation_mechanism_tool'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(monitor.evaluation_mechanism_tool) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Evaluation Mechanism Tool', monitor.evaluation_mechanism_tool, 'evaluation_mechanism_tool', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_320)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Monitoring and Evaluation', 'Evaluation Mechanism Tool', monitor.evaluation_mechanism_tool, 'evaluation_mechanism_tool', 'monitoring_and_evaluations', monitor, monitor.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Evaluation Mechanism Tool', monitor.evaluation_mechanism_tool, 'evaluation_mechanism_tool', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_321)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_319), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" M&E OPR and their roles "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Monitoring and Evaluation', 'OPCR & their roles', monitor.opr, 'opr', 'monitoring_and_evaluations', monitor, monitor.comments)
      }),
      id: monitor.id + '_monitoring_and_evaluations_opr'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(monitor.opr) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'OPCR & their roles', monitor.opr, 'opr', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_323)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Monitoring and Evaluation', 'OPCR & their roles', monitor.opr, 'opr', 'monitoring_and_evaluations', monitor, monitor.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'OPCR & their roles', monitor.opr, 'opr', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_324)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_322), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" M&E Target Beneficiaries "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Monitoring and Evaluation', 'Target Beneficiaries', monitor.target_beneficiaries, 'target_beneficiaries', 'monitoring_and_evaluations', monitor, monitor.comments)
      }),
      id: monitor.id + '_monitoring_and_evaluations_target_beneficiaries'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(monitor.target_beneficiaries) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Target Beneficiaries', monitor.target_beneficiaries, 'target_beneficiaries', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_326)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Monitoring and Evaluation', 'Target Beneficiaries', monitor.target_beneficiaries, 'target_beneficiaries', 'monitoring_and_evaluations', monitor, monitor.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Target Beneficiaries', monitor.target_beneficiaries, 'target_beneficiaries', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_327)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_325), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" M&E GAD Expert/Consultant "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Monitoring and Evaluation', 'Target Beneficiaries', monitor.gad, 'gad', 'monitoring_and_evaluations', monitor, monitor.comments)
      }),
      id: monitor.id + '_monitoring_and_evaluations_gad'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(monitor.gad) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Target Beneficiaries', monitor.gad, 'gad', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_329)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Monitoring and Evaluation', 'Target Beneficiaries', monitor.gad, 'gad', 'monitoring_and_evaluations', monitor, monitor.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Target Beneficiaries', monitor.gad, 'gad', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_330)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_328)]);
  }), 256 /* UNKEYED_FRAGMENT */))])]), _cache[192] || (_cache[192] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_331, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_332, [_cache[194] || (_cache[194] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" The project has no recorded data for monitoring and evaluation! ", -1 /* CACHED */)), _cache[195] || (_cache[195] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), _cache[196] || (_cache[196] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Click ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/EvaluationMechanismTool/".concat($props.paps.id)
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[193] || (_cache[193] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("here", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"]), _cache[197] || (_cache[197] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" to edit monitoring and evaluation. ", -1 /* CACHED */))]), _cache[198] || (_cache[198] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), _cache[199] || (_cache[199] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("RISK MANAGEMENT"), $props.risks.length > 0 || $props.paps.risk_management !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h3", _hoisted_333, [_cache[201] || (_cache[201] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" X. ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/RiskManagement/".concat($props.paps.id) : null,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Risk Management', 'Risk Management', $props.paps.risk_management, 'risk_management', 'revision_plans', $props.paps, $props.paps.comments)
    }),
    id: $props.paps.id + '_revision_plans_risk_management'
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[200] || (_cache[200] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Risk Management", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href", "class", "id"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[65] || (_cache[65] = function ($event) {
      return $options.handleClick('Risk Management', 'Risk Management', $props.paps.risk_management, 'risk_management', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Risk Management', 'Risk Management', $props.paps.risk_management, 'risk_management', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[66] || (_cache[66] = function ($event) {
      return $options.handleClick('Risk Management', 'Risk Management', $props.paps.risk_management, 'risk_management', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_334, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $props.paps.risk_management
  }, null, 8 /* PROPS */, _hoisted_335)]), $props.risks.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_336, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_337, [_cache[202] || (_cache[202] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    "class": "bg-secondary text-white"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Prospective Possible Risks"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Preventive Measures"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Mechanisms to monitor")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.risks, function (risk) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Risk Management -Possible Risks "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Risk Management', 'Possible Risks', risk.possible_risk, 'possible_risk', 'risk_manangements', risk, risk.comments)
      }),
      id: risk.id + '_risk_manangements_possible_risk'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ has_comment('Risk Management','Possible Risks',risk.possible_risk,'possible_risk','risk_manangements', risk, risk.comments) }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span v-html=\"risk.possible_risk\"></span> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      innerHTML: risk.possible_risk,
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.has_comment('Risk Management', 'Possible Risks', risk.possible_risk, 'possible_risk', 'risk_manangements', risk, risk.comments) ? 'color:red !important;' : '')
    }, null, 12 /* STYLE, PROPS */, _hoisted_339), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Possible Risks', risk.possible_risk, 'possible_risk', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_340)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Risk Management', 'Possible Risks', risk.possible_risk, 'possible_risk', 'risk_manangements', risk, risk.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Possible Risks', risk.possible_risk, 'possible_risk', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_341)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_338), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Risk Management -Person Affected "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Risk Management', 'Person Affected', risk.person_affected, 'person_affected', 'risk_manangements', risk, risk.comments)
      }),
      id: risk.id + '_risk_manangements_person_affected'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      innerHTML: risk.person_affected
    }, null, 8 /* PROPS */, _hoisted_343), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Person Affected', risk.person_affected, 'person_affected', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_344)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Risk Management', 'Person Affected', risk.person_affected, 'person_affected', 'risk_manangements', risk, risk.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Person Affected', risk.person_affected, 'person_affected', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_345)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_342), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Risk Management -Management "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Risk Management', 'Management', risk.management, 'management', 'risk_manangements', risk, risk.comments)
      }),
      id: risk.id + '_risk_manangements_management'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      innerHTML: risk.management
    }, null, 8 /* PROPS */, _hoisted_347), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Management', risk.management, 'management', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_348)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Risk Management', 'Management', risk.management, 'management', 'risk_manangements', risk, risk.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Management', risk.management, 'management', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_349)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_346)]);
  }), 256 /* UNKEYED_FRAGMENT */))])]), _cache[203] || (_cache[203] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_350, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_351, [_cache[205] || (_cache[205] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" The project has no recorded data for risk management! ", -1 /* CACHED */)), _cache[206] || (_cache[206] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), _cache[207] || (_cache[207] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Click ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/RiskManagement/".concat($props.paps.id)
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[204] || (_cache[204] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("here", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"]), _cache[208] || (_cache[208] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" to edit risk management. ", -1 /* CACHED */))]), _cache[209] || (_cache[209] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), _cache[210] || (_cache[210] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("SIGNATORIES class=\"signatory-card\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_352, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.signatories, function (signatory, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['signatory-card', signatory.acted !== 'Prepared' && signatory.acted !== 'Reviewed' ? 'signatory-card-full' : 'signatory-card'])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div v-if=\"signatory.acted !== 'Prepared' && signatory.acted !== 'Reviewed'\"></div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Signatories', 'Acted', signatory.acted, 'acted', 'signatories', signatory, signatory.comments)
      }),
      id: signatory.id + '_signatories_acted'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(signatory.acted) + " ", 1 /* TEXT */), signatory.acted === 'Prepared' || signatory.acted === 'Reviewed' || signatory.acted === 'Noted' || signatory.acted === 'Approved' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_354, "by: ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Signatories', 'Acted', signatory.acted, 'acted', 'signatories', signatory, signatory.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_355)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Signatories', 'Acted', signatory.acted, 'acted', 'signatories', signatory, signatory.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 2,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Signatories', 'Acted', signatory.acted, 'acted', 'signatories', signatory, signatory.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_356)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _cache[211] || (_cache[211] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), _cache[212] || (_cache[212] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))], 10 /* CLASS, PROPS */, _hoisted_353), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-decoration-underline", {
        'text-danger': $options.has_comment('Signatories', 'Name', signatory.name, 'name', 'signatories', signatory, signatory.comments)
      }]),
      id: signatory.id + '_signatories_name'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(signatory.name), 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Signatories', 'Name', signatory.name, 'name', 'signatories', signatory, signatory.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_358)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Signatories', 'Name', signatory.name, 'name', 'signatories', signatory, signatory.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Signatories', 'Name', signatory.name, 'name', 'signatories', signatory, signatory.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_359)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_357), _cache[213] || (_cache[213] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Signatories', 'Position', signatory.position, 'position', 'signatories', signatory, signatory.comments)
      }),
      id: signatory.id + '_signatories_position'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(signatory.position) + " ", 1 /* TEXT */), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Signatories', 'Position', signatory.position, 'position', 'signatories', signatory, signatory.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_361)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Signatories', 'Position', signatory.position, 'position', 'signatories', signatory, signatory.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Signatories', 'Position', signatory.position, 'position', 'signatories', signatory, signatory.comments);
      }
    }, "* ", 8 /* PROPS */, _hoisted_362)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_360), _cache[214] || (_cache[214] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), _cache[215] || (_cache[215] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), _cache[216] || (_cache[216] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), _cache[217] || (_cache[217] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))], 2 /* CLASS */);
  }), 128 /* KEYED_FRAGMENT */))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" NAVIGATION -COMMENTS/SECTIONS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_363, [!$data.showComments ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_364, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "close-btn text-danger",
    onClick: _cache[67] || (_cache[67] = function () {
      return $options.toggleShowCommentPanel && $options.toggleShowCommentPanel.apply($options, arguments);
    })
  }, [_cache[221] || (_cache[221] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "currentColor",
    "class": "bi bi-three-dots",
    viewBox: "0 0 16 16"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
  })], -1 /* CACHED */)), _cache[222] || (_cache[222] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  ", -1 /* CACHED */)), $options.countUnresolvedComments > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_365, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.countUnresolvedComments) + " unresolved " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.countUnresolvedComments > 1 ? 'updates' : 'update') + " — click to review ", 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [$props.paps.gad_status == '0' && $props.src == 'rev_app' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    disabled: $options.countUnresolvedComments > 0,
    onClick: _cache[68] || (_cache[68] = function ($event) {
      return $options.statusAction($props.paps, 1, 'gad_status');
    }),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      padding: '4px 10px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: $options.countUnresolvedComments > 0 ? '#cccccc' : 'blue',
      color: 'white',
      cursor: $options.countUnresolvedComments > 0 ? 'not-allowed' : 'pointer',
      fontWeight: 'bold',
      marginRight: '4px',
      opacity: $options.countUnresolvedComments > 0 ? 0.6 : 1
    }),
    title: $options.countUnresolvedComments > 0 ? "Cannot review while there are ".concat($options.countUnresolvedComments, " unresolved comment(s)") : 'Review GAD aspects of this project'
  }, " GAD Review ", 12 /* STYLE, PROPS */, _hoisted_366)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[223] || (_cache[223] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("   ", -1 /* CACHED */)), $props.paps.status == '0' && $props.paps.gad_status == '1' && $props.src == 'rev_app' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    disabled: $options.countUnresolvedComments > 0,
    onClick: _cache[69] || (_cache[69] = function ($event) {
      return $options.statusAction($props.paps, 1, 'status');
    }),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      padding: '4px 10px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: $options.countUnresolvedComments > 0 ? '#cccccc' : 'blue',
      color: 'white',
      cursor: $options.countUnresolvedComments > 0 ? 'not-allowed' : 'pointer',
      fontWeight: 'bold',
      marginRight: '4px',
      opacity: $options.countUnresolvedComments > 0 ? 0.6 : 1
    }),
    title: $options.countUnresolvedComments > 0 ? "Cannot approve while there are ".concat($options.countUnresolvedComments, " unresolved comment(s)") : 'Approve this project profile'
  }, " Approve ", 12 /* STYLE, PROPS */, _hoisted_367)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[224] || (_cache[224] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("   ", -1 /* CACHED */)), ['0', '1'].includes($props.paps.status) && $props.src == 'rev_app' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 2,
    onClick: _cache[70] || (_cache[70] = function ($event) {
      return $options.statusAction($props.paps, -2);
    }),
    style: {
      padding: '4px 10px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#fc00d7',
      color: 'white',
      cursor: 'pointer',
      fontWeight: 'bold',
      marginRight: '4px'
    }
  }, " Return ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[225] || (_cache[225] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("   ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<button\n                            v-if=\"['0'].includes(paps.return_request_status)\"\n                            @click=\"statusAction(paps, 7)\"\n                            :style=\"{\n                            padding: '4px 10px',\n                            border: 'none',\n                            borderRadius: '4px',\n                            backgroundColor: 'red',\n                            color: 'white',\n                            cursor: 'pointer',\n                            fontWeight: 'bold'\n                            }\"\n                        >\n                            Approve Return Request\n                        </button> &nbsp;"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button\n                            @click=\"generatePDF()\"\n                            :style=\"{\n                            padding: '4px 10px',\n                            border: 'none',\n                            borderRadius: '4px',\n                            backgroundColor: '#28a745',\n                            color: 'white',\n                            cursor: 'pointer',\n                            fontWeight: 'bold'\n                            }\"\n                            title=\"Generate PDF and open in new tab\"\n                        >\n                            📄 PDF\n                        </button> ")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" p-20  "), $data.showComments ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_368, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_369, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "close-btn text-danger",
    onClick: _cache[71] || (_cache[71] = function () {
      return $options.toggleShowCommentPanel && $options.toggleShowCommentPanel.apply($options, arguments);
    })
  }, _toConsumableArray(_cache[226] || (_cache[226] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "currentColor",
    "class": "bi bi-x-lg",
    viewBox: "0 0 16 16"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
  })], -1 /* CACHED */)])))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_370, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["button", {
      active: $data.open_tab === 'Navigation'
    }]),
    onClick: _cache[72] || (_cache[72] = function ($event) {
      return $options.openTab('Navigation');
    })
  }, "Sections", 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["button", {
      active: $data.open_tab === 'Comments'
    }]),
    onClick: _cache[73] || (_cache[73] = function ($event) {
      return $options.openTab('Comments');
    })
  }, [_cache[227] || (_cache[227] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Comments ", -1 /* CACHED */)), $options.countUnresolvedComments > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_371, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.countUnresolvedComments) + " unresolved) ", 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */)]), $data.open_tab === 'Comments' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_372, [_cache[236] || (_cache[236] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "comments-header"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "COMMENTS ... ")], -1 /* CACHED */)), _cache[237] || (_cache[237] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Click a comment and follow the "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    style: {
      "color": "red"
    }
  }, "red"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" arrow")])], -1 /* CACHED */)), _cache[238] || (_cache[238] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_373, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("********************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" 🔴 UNRESOLVED COMMENTS "), $options.unresolvedComments.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_374, [_cache[231] || (_cache[231] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "p-2 mb-2",
    style: {
      "background": "#ffe5e5",
      "border-radius": "4px"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Unresolved Comments")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_375, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.unresolvedComments, function (comment, index) {
    var _comment$user;
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: 'r-' + index,
      "class": "mb-2",
      style: {
        "cursor": "pointer"
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_376, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_377, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_378, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn p-0 border-0 bg-transparent",
      disabled: $props.auth.user.department_code !== '04',
      onClick: function onClick($event) {
        return $options.submitAction('delete', comment.id, index);
      },
      title: "Delete this comment"
    }, _toConsumableArray(_cache[228] || (_cache[228] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "red",
      "class": "bi bi-x-square-fill",
      viewBox: "0 0 16 16"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
      d: "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"
    })], -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("    ", -1 /* CACHED */)])), 8 /* PROPS */, _hoisted_379)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" comment.column_name "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_380, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" @click=\"scrollToSection(\n                                                            ['beneficiaries', 'objective', 'rationale'].includes(comment.column_name)\n                                                                ? `${comment.id}_${comment.table_name}_${comment.column_name}`\n                                                                : `${comment.table_row_id}_${comment.table_name}_${comment.column_name}`\n                                                        )\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_comment$user = comment.user) === null || _comment$user === void 0 ? void 0 : _comment$user.FullName) + " commented: ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["clickable-comment", 'comment-rejected']),
      onClick: function onClick($event) {
        return $options.scrollToSection(['beneficiaries', 'objective', 'rationale'].includes(comment.column_name) ? $props.paps[comment.column_name] && $props.paps[comment.column_name].includes("".concat(comment.id, "_").concat(comment.table_name, "_").concat(comment.column_name)) ? "".concat(comment.id, "_").concat(comment.table_name, "_").concat(comment.column_name) : comment.column_name : "".concat(comment.table_row_id, "_").concat(comment.table_name, "_").concat(comment.column_name));
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.comment) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <p>{{comment.table_row_id}}_{{comment.table_name}}_{{comment.column_name}}</p> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{\n                                                                    ['beneficiaries', 'objective', 'rationale'].includes(comment.column_name)\n                                                                        ? comment.column_name\n                                                                        : (comment.table_row_id + '_' + comment.table_name + '_' + comment.column_name)\n                                                                }} ")], 8 /* PROPS */, _hoisted_381), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      innerHTML: comment.reply
    }, null, 8 /* PROPS */, _hoisted_382)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Action Buttons "), $props.auth.user.department_code === '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_383, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-success btn-sm text-white",
      onClick: function onClick($event) {
        return $options.submitAction('resolve', comment.id, index);
      },
      title: "Mark comment as Resolved"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <i class=\"bi bi-check-circle\"></i> "), _cache[229] || (_cache[229] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" resolve ", -1 /* CACHED */))], 8 /* PROPS */, _hoisted_384), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button class=\"btn btn-primary btn-sm text-white\"\n                                            @click=\"submitAction('reset', comment.id, index)\"\n                                            title=\"Reset to Unresolved\">\n                                            <i class=\"bi bi-arrow-counterclockwise\"></i>\n                                                reset\n                                        </button> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-danger btn-sm text-white",
      onClick: function onClick($event) {
        return $options.submitAction('delete', comment.id, index);
      },
      title: "Delete this comment"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <i class=\"bi bi-trash-fill\"></i>"), _cache[230] || (_cache[230] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" delete ", -1 /* CACHED */))], 8 /* PROPS */, _hoisted_385)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 128 /* KEYED_FRAGMENT */))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("END OF UNRESOLVED"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" 🟢 RESOLVED COMMENTS "), $options.resolvedComments.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_386, [_cache[235] || (_cache[235] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "p-2 mt-4 mb-2",
    style: {
      "background": "#e8ffe8",
      "border-radius": "4px"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Resolved Comments")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_387, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.resolvedComments, function (comment, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: 'r-' + index,
      "class": "mb-2",
      style: {
        "cursor": "pointer"
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" comment.column_name "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["clickable-comment", 'comment-approved']),
      onClick: function onClick($event) {
        return $options.scrollToSection(['beneficiaries', 'objective', 'rationale'].includes(comment.column_name) ? "".concat(comment.id, "_").concat(comment.table_name, "_").concat(comment.column_name) : "".concat(comment.table_row_id, "_").concat(comment.table_name, "_").concat(comment.column_name));
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_389, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_390, [_cache[232] || (_cache[232] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      style: {
        "border": "none !important",
        "vertical-align": "top",
        "text-align": "left"
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" RESOLVED ICON "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      "class": "bi bi-check-square-fill",
      viewBox: "0 0 16 16"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
      d: "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"
    })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("    ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_391, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.comment), 1 /* TEXT */)])])])], 8 /* PROPS */, _hoisted_388), $props.auth.user.department_code === '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_392, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button class=\"btn btn-success btn-sm text-white\"\n                                            @click=\"submitAction('resolve', comment.id, index)\"\n                                            title=\"Mark comment as Resolved\">\n                                            <i class=\"bi bi-check-circle\"></i>\n                                                resolve\n                                        </button> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-primary btn-sm text-white",
      onClick: function onClick($event) {
        return $options.submitAction('reset', comment.id, index);
      },
      title: "Reset to Unresolved"
    }, _toConsumableArray(_cache[233] || (_cache[233] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": "bi bi-arrow-counterclockwise"
    }, null, -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" reset ", -1 /* CACHED */)])), 8 /* PROPS */, _hoisted_393), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-danger btn-sm text-white",
      onClick: function onClick($event) {
        return $options.submitAction('delete', comment.id, index);
      },
      title: "Delete this comment"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <i class=\"bi bi-trash-fill\"></i>"), _cache[234] || (_cache[234] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" delete ", -1 /* CACHED */))], 8 /* PROPS */, _hoisted_394)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 128 /* KEYED_FRAGMENT */))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("END OF RESOLVED"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ ['beneficiaries', 'objective', 'rationale'].includes(comment.column_name)\n                                    ? comment.column_name\n                                        : (\n                                        ['expected_revised_outputs', 'expected_revised_outcomes'].includes(comment.table_name)\n                                            ? `${comment.table_row_id}_${comment.table_name}_${comment.column_name}`\n                                            : `${comment.table_row_id}_${comment.table_name}_${comment.column_name}`\n                                    )  }} ")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.open_tab === 'Navigation' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_395, [_cache[239] || (_cache[239] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "comments-header"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "NAVIGATION ...")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_396, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_397, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_398, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[74] || (_cache[74] = function ($event) {
      return $options.scrollToSection('revision_plans');
    })
  }, " I. Title ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_399, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_400, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[75] || (_cache[75] = function ($event) {
      return $options.scrollToSection('rationale');
    })
  }, " II. Rationale ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_401, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_402, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[76] || (_cache[76] = function ($event) {
      return $options.scrollToSection('objective');
    })
  }, " III. Objectives ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_403, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_404, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[77] || (_cache[77] = function ($event) {
      return $options.scrollToSection('beneficiaries');
    })
  }, " IV. Target Beneficiaries ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_405, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_406, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[78] || (_cache[78] = function ($event) {
      return $options.scrollToSection('implementation_workplan');
    })
  }, " V. Implementation Schedule/Workplan ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_407, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_408, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[79] || (_cache[79] = function ($event) {
      return $options.scrollToSection('budgetary_requirements');
    })
  }, " VI. Estimated Cost/Budgetary Requirements ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_409, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_410, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[80] || (_cache[80] = function ($event) {
      return $options.scrollToSection('implementing_team');
    })
  }, " VII. Implementing Team ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" partnership_sustainability "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_411, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_412, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[81] || (_cache[81] = function ($event) {
      return $options.scrollToSection('partnership_sustainability');
    })
  }, " VIII. Partnership and Sustainability ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_413, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_414, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[82] || (_cache[82] = function ($event) {
      return $options.scrollToSection('monitoring_evaluation');
    })
  }, " XI. Monitoring and Evaluation ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_415, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_416, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[83] || (_cache[83] = function ($event) {
      return $options.scrollToSection('risk_management');
    })
  }, " X. Risk Management ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_417, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_418, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[84] || (_cache[84] = function ($event) {
      return $options.scrollToSection('signatories');
    })
  }, " XI. Signatories ")])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" COMMENTING ******************************************************************************************************* "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_419, [$data.show_comment_modal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_420, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_421, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "close-btn text-danger",
    onClick: _cache[85] || (_cache[85] = function () {
      return $options.closeCommentModal && $options.closeCommentModal.apply($options, arguments);
    })
  }, _toConsumableArray(_cache[240] || (_cache[240] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "currentColor",
    "class": "bi bi-x-lg",
    viewBox: "0 0 16 16"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
  })], -1 /* CACHED */)])))]), $props.auth.user.department_code === '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_422, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "form-control",
    rows: "5",
    "onUpdate:modelValue": _cache[86] || (_cache[86] = function ($event) {
      return $data.comment = $event;
    }),
    placeholder: "Write your comment here..."
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.comment]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-primary mt-2 text-white",
    onClick: _cache[87] || (_cache[87] = function ($event) {
      return $options.saveComment();
    })
  }, " Submit Comment ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[241] || (_cache[241] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Section: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.comment_section), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[242] || (_cache[242] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Subtitle:", -1 /* CACHED */)), _cache[243] || (_cache[243] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)()), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    innerHTML: $data.comment_subtitle
  }, null, 8 /* PROPS */, _hoisted_423)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[244] || (_cache[244] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Data:", -1 /* CACHED */)), _cache[245] || (_cache[245] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)()), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    innerHTML: $data.comment_data
  }, null, 8 /* PROPS */, _hoisted_424)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[246] || (_cache[246] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Column:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.comment_column) + " ", 1 /* TEXT */), $data.comment_column == 'Person Affected' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_425, "Preventive Measures")) : $data.comment_column == 'Management' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_426, "Mechanisms to monitor")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_427, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.comment_column), 1 /* TEXT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[247] || (_cache[247] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Table:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.comment_table), 1 /* TEXT */)])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <CommentModal v-if=\"show_comment_modal\" @close-modal-event=\"closeCommentModal\" title=\"COMMENTS\">\n            <div class=\"d-flex justify-content-center\">\n            </div>\n            <div>\n                <span v-if=\"auth.user.department_code==='04'\">\n                    <div>\n                        <textarea class=\"form-control\" rows=\"5\" v-model=\"comment\"\n                            placeholder=\"Write your comment here...\"></textarea>\n                    </div>\n                    <div>\n                        <button class=\"btn btn-primary mt-2 text-white\" @click=\"saveComment()\">\n                            Submit Comment\n                        </button>\n                    </div>\n                </span>\n\n                <div><b>Section: </b>{{ comment_section }}</div>\n                <div><b>Subtitle:</b> <span v-html=\"comment_subtitle\"></span></div>\n                <div><b>Data:</b> <span v-html=\"comment_data\"></span></div>\n                <div><b>Column:</b> {{ comment_column }}\n                    <span v-if=\"comment_column=='Person Affected'\">Preventive Measures</span>\n                    <span v-else-if=\"comment_column=='Management'\">Mechanisms to monitor</span>\n                    <span v-else>{{ comment_colun }}</span>\n                </div>\n                <div><b>Table:</b> {{ comment_table }}</div>\n\n                <div class=\"col-9\">\n                    <table class=\"table table-hover table-bordered border-dark\">\n                        <thead>\n                            <tr>\n                                <th class=\"bg-secondary text-white\">Comment</th>\n                                <th class=\"bg-secondary text-white\">Status&nbsp;&nbsp;</th>\n                                <th class=\"bg-secondary text-white\" v-if=\"auth.user.department_code==='04'\">Actions&nbsp;&nbsp;</th>\n                                <th class=\"bg-secondary text-white\" v-if=\"auth.user.department_code==='04'\">Actions&nbsp;&nbsp;</th>\n                                <th class=\"bg-secondary text-white\">Comment by&nbsp;&nbsp;</th>\n\n                                <th class=\"bg-secondary text-white\">Date</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr v-for=\"(comment,index) in comments\">\n                                <td>\n                                    <h6 v-if=\"comment.user\">{{ comment.user.FullName }}&nbsp;commented:&nbsp;&nbsp;</h6>\n                                    <h5 class=\"bg-white p-3 rounded border\"><i>{{ comment.comment}}</i></h5>\n                                    <br>\n                                    <div v-html=\"comment.reply\"></div>\n                                    <button class=\"btn btn-link p-0\" v-if=\"comment.show_comment_box==false\" @click=\"showCommentBox(index)\">reply</button>\n                                    <textarea class=\"form-control\"\n                                        type=\"text\"\n                                        v-if=\"comment.show_comment_box\"\n                                        v-model=\"reply_concat\"\n                                    >\n                                    </textarea>\n                                    <button :disabled=\"!reply_concat || reply_concat.trim() === ''\" class=\"btn btn-primary text-white\" v-if=\"comment.show_comment_box\" @click=\"updateComment(comment.id, comment, index)\" >Send</button>\n                                    <button class=\"btn btn-danger text-white\" v-if=\"comment.show_comment_box\" @click=\"showCommentBox(index)\">Cancel</button>\n                                </td>\n                                <td :style=\"{ backgroundColor: comment.comment_status === '0' ? '#fecaca' : '#bbf7d0',\n                                    color: comment.comment_status === '0' ? '#991b1b' : '#065f46' }\" class=\"px-2 py-1 rounded\">\n                                    <b>{{ comment.comment_status === '0' ? 'Unresolved' : 'OK' }}</b>\n                                </td>\n                                <td v-if=\"auth.user.department_code==='04'\">\n                                    <div >\n                                        <button class=\"btn btn-success text-white\"\n                                        @click=\"submitAction('resolve', comment.id, index)\"\n                                        title=\"Mark comment as Resolved\">\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-check-circle\" viewBox=\"0 0 16 16\">\n                                                <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16\"/>\n                                                <path d=\"m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05\"/>\n                                            </svg>\n                                        </button>&nbsp;\n                                        <button class=\"btn btn-primary text-white\"\n                                        @click=\"submitAction('reset', comment.id, index)\"\n                                        title=\"Reset to Unresolved\">\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-counterclockwise\" viewBox=\"0 0 16 16\">\n                                                <path fill-rule=\"evenodd\" d=\"M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z\"/>\n                                                <path d=\"M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466\"/>\n                                            </svg>\n                                        </button>&nbsp;\n                                        <button class=\"btn btn-danger text-white\"\n                                        @click=\"submitAction('delete', comment.id, index)\"\n                                        title=\"Delete this comment\"\n                                        >\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-trash-fill\" viewBox=\"0 0 16 16\">\n                                                <path d=\"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0\"/>\n                                            </svg>\n                                        </button>&nbsp;\n                                    </div>\n                                </td>\n                                <td>\n                                    <span v-if=\"comment.user\">{{ comment.user.FullName }}</span>\n                                    <span v-else>Not recorded</span>\n                                </td>\n\n                                <td>{{ formatDate(comment.created_at) }}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n\n            </div>\n            <br>\n        </CommentModal> "), _cache[249] || (_cache[249] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex justify-content-center"
  }, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{paps}} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ department_code_project }}\n        {{ department_code_user }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ auth.user }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ auth.user }}\n        {{ paps.is_strategy_based }} ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Sa class=\"row gap-10\" ni"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{budget_requirements}} ")])], 64 /* STABLE_FRAGMENT */);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View2.vue?vue&type=style&index=0&id=17eef298&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View2.vue?vue&type=style&index=0&id=17eef298&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ntd, th {\n  border: 1px solid #000 !important;\n}\ntable {\n  border-collapse: collapse !important;\n}\n.th {\n    background-color: #929292 !important;\n}\n.superscript-btn {\n  /* font-size: 0.6em; */\n  /* vertical-align: super; */\n  border: none;\n  background: none;\n  padding: 0;\n  margin-left: 4px;\n  cursor: pointer;\n  color: #df280c;\n}\n.action-btn {\n  width: 100%;\n}\n.no-border-table td,\n.no-border-table th {\n  border: none !important;\n}\n.no-border-table {\n  border-collapse: collapse !important;\n}\n.signatory-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem; /* space between cards */\n}\n.signatory-card {\n  flex: 0 0 calc(50% - 0.5rem); /* 2 per row with spacing */\n  border: 0px solid #ccc;\n  padding: 1rem;\n  border-radius: 8px;\n}\n.signatory-card-full {\n  width: 100%; /* each card full width */\n  margin-bottom: 1rem;\n}\n.sticky-comments {\n    position: fixed;\n    top: 70px;\n    right: 20px;\n    width: 450px;\n    z-index: 10;\n}\n.scrollable-text {\n    height: 400px;           /*define the height you want*/\n    overflow-y: auto;        /*vertical scrollbar if content exceeds height*/\n    /*padding: 0px;           optional padding*/\n    /*border: 1px solid #ccc;  optional border*/\n    background-color: #fff;  /*optional background*/\n    /*line-height: 1.6;        improve readability*/\n}\n.sticky-comments .comments-header {\n    display: flex;\n    justify-content: space-between; /* Push h4 left and button right */\n    align-items: center;            /* Vertical alignment */\n    margin-bottom: 10px;            /* Space below the header */\n}\n.sticky-comments .close-btn {\n    background: transparent;\n    border: none;\n    font-size: 20px;\n    cursor: pointer;\n    line-height: 1;\n    padding: 0;\n    color: #333;\n}\n.highlight-target {\n    animation: highlightFlash 2s ease-out;\n}\n@keyframes highlightFlash {\n0% { background-color: #46ff18ff;\n}\n100% { background-color: transparent;\n}\n}\n.comment-approved {\n    color: darkgreen;\n    padding: 3px 6px;\n    border-radius: 4px;\n    transition: color .2s;\n}\n.comment-approved:hover {\n    color: #00AEEF; /* sky blue */\n}\n.comment-rejected {\n    color: red;\n    padding: 3px 6px;\n    border-radius: 4px;\n    transition: color .2s;\n}\n.comment-rejected:hover {\n    color: #CC7722; /* golden ochre */\n}\n.blink {\n    color: red;\n    animation: blinker 1s linear infinite;\n}\n@keyframes blinker {\n0%, 100% { color: red;\n}\n50% { color: #f8d823;\n} /* paler red */\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View2.vue?vue&type=style&index=0&id=17eef298&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View2.vue?vue&type=style&index=0&id=17eef298&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View2_vue_vue_type_style_index_0_id_17eef298_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./View2.vue?vue&type=style&index=0&id=17eef298&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View2.vue?vue&type=style&index=0&id=17eef298&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View2_vue_vue_type_style_index_0_id_17eef298_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View2_vue_vue_type_style_index_0_id_17eef298_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/Pages/RevisionPlans/View2.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/View2.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _View2_vue_vue_type_template_id_17eef298__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View2.vue?vue&type=template&id=17eef298 */ "./resources/js/Pages/RevisionPlans/View2.vue?vue&type=template&id=17eef298");
/* harmony import */ var _View2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View2.vue?vue&type=script&lang=js */ "./resources/js/Pages/RevisionPlans/View2.vue?vue&type=script&lang=js");
/* harmony import */ var _View2_vue_vue_type_style_index_0_id_17eef298_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View2.vue?vue&type=style&index=0&id=17eef298&lang=css */ "./resources/js/Pages/RevisionPlans/View2.vue?vue&type=style&index=0&id=17eef298&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_View2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_View2_vue_vue_type_template_id_17eef298__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/RevisionPlans/View2.vue"]])
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

/***/ "./resources/js/Pages/RevisionPlans/View2.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/View2.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./View2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View2.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Pages/RevisionPlans/View2.vue?vue&type=template&id=17eef298":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/View2.vue?vue&type=template&id=17eef298 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View2_vue_vue_type_template_id_17eef298__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View2_vue_vue_type_template_id_17eef298__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./View2.vue?vue&type=template&id=17eef298 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View2.vue?vue&type=template&id=17eef298");


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

/***/ "./resources/js/Pages/RevisionPlans/View2.vue?vue&type=style&index=0&id=17eef298&lang=css":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/View2.vue?vue&type=style&index=0&id=17eef298&lang=css ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View2_vue_vue_type_style_index_0_id_17eef298_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./View2.vue?vue&type=style&index=0&id=17eef298&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View2.vue?vue&type=style&index=0&id=17eef298&lang=css");


/***/ }),

/***/ "./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css":
/*!************************************************************************************!*\
  !*** ./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_style_index_0_id_09f80c58_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css");


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