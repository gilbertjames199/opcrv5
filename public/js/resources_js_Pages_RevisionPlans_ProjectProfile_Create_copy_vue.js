"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_RevisionPlans_ProjectProfile_Create_copy_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/ProjectProfile/Create copy.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/ProjectProfile/Create copy.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Shared_PlacesShared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/PlacesShared */ "./resources/js/Shared/PlacesShared.vue");
/* harmony import */ var _Shared_QuillEditorShared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/QuillEditorShared */ "./resources/js/Shared/QuillEditorShared.vue");
/* harmony import */ var _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/ModalDynamicTitle */ "./resources/js/Shared/ModalDynamicTitle.vue");
/* harmony import */ var _Shared_ModalDynamicTitleSmall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/ModalDynamicTitleSmall */ "./resources/js/Shared/ModalDynamicTitleSmall.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_7__);
var _props;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















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
  }, _defineProperty(_props, "source", String), _defineProperty(_props, "hgdgs", Object), _defineProperty(_props, "popsp_agencies", Object), _defineProperty(_props, "office", Object), _defineProperty(_props, "all_comments", Object), _defineProperty(_props, "s_mooe_gad", Number), _defineProperty(_props, "s_mooe_non", Number), _defineProperty(_props, "s_cap_gad", Number), _defineProperty(_props, "s_cap_non", Number), _defineProperty(_props, "s_ps_gad", Number), _defineProperty(_props, "s_ps_non", Number), _defineProperty(_props, "s_fe_gad", Number), _defineProperty(_props, "s_fe_non", Number), _defineProperty(_props, "budget_requirements", Object), _defineProperty(_props, "account_code", Object), _defineProperty(_props, "implementation", Object), _defineProperty(_props, "monitoring_and_avaluation", Object), _defineProperty(_props, "implementing_team", Object), _defineProperty(_props, "signatoriesprops", Object), _defineProperty(_props, "risk_manangement", Object), _defineProperty(_props, "source", String), _props),
  components: {
    Places: function Places() {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(_Shared_PlacesShared__WEBPACK_IMPORTED_MODULE_2__["default"]);
        }, 2000);
      });
    },
    QuillEditorC: _Shared_QuillEditorShared__WEBPACK_IMPORTED_MODULE_3__["default"],
    BudgetModal: _Shared_ModalDynamicTitleSmall__WEBPACK_IMPORTED_MODULE_5__["default"],
    CommentModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_4__["default"],
    StrategyModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_4__["default"],
    ActivityModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_4__["default"],
    TeamModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_4__["default"],
    RiskManagementModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_4__["default"],
    MonitoringModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_4__["default"],
    SignatoryModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_4__["default"],
    ExpectedOutputModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_4__["default"],
    ExpectedOutcomeModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_4__["default"]
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
      form: (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
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
        selPaps: ""
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
    }, _defineProperty(_ref, "unsaved", false), _defineProperty(_ref, "BudgetModalVisible", false), _defineProperty(_ref, "budget_new", {
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
    }), _defineProperty(_ref, "StrategyModalVisible", false), _defineProperty(_ref, "strategies", []), _defineProperty(_ref, "strategy_id", 0), _defineProperty(_ref, "ActivityModalVisible", false), _defineProperty(_ref, "activities", []), _defineProperty(_ref, "TeamModalVisible", false), _defineProperty(_ref, "team_members", []), _defineProperty(_ref, "all_employees", []), _defineProperty(_ref, "action_type_team", ''), _defineProperty(_ref, "RiskManagementModalVisible", false), _defineProperty(_ref, "risk_managements", []), _defineProperty(_ref, "MonitoringModalVisible", false), _defineProperty(_ref, "monitoring_and_evaluations", []), _defineProperty(_ref, "SignatoryModalVisible", false), _defineProperty(_ref, "signatories", []), _defineProperty(_ref, "ExpectedOutputModalVisible", false), _defineProperty(_ref, "expected_outputs_current", []), _defineProperty(_ref, "expected_outputs_new", []), _defineProperty(_ref, "activity_id", 0), _defineProperty(_ref, "activity_project_id", 0), _defineProperty(_ref, "ExpectedOutcomeModalVisible", false), _defineProperty(_ref, "expected_outcomes_current", []), _defineProperty(_ref, "expected_outcomes_new", []), _ref;
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
            var amount = parseFloat(item.amount || 0); // Only include rows with category_gad === "GAD"

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
    countUnresolvedComments: function countUnresolvedComments() {
      // alert('unresolved')
      return this.all_comments.filter(function (c) {
        return c.comment_status !== "1";
      }).length;
    }
  },
  mounted: function mounted() {
    window.addEventListener('beforeunload', this.handleBeforeUnload);
    this.form.idpaps = this.idpaps;

    if (this.source !== undefined) {
      this.form.source = this.source;
    } //this.form.idinteroutcome=this.idinteroutcome


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

      if (this.form.checklist_id == '0') {
        this.form.checklist_id = null;
      }
    } else {
      this.pageTitle = "Create";
      this.form.is_strategy_based = 0; //this.form.idpaps=this.idpaps
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
      } else {// this.form.project_title = this.paps[0].paps_desc
        //alert('undefined si idpaps!');
      }
    } //TEXTAREA -Set Sizes ***********************************************************************************************************
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
  methods: {
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
        this.form.id = null; //alert('store');

        this.form.post("/revision/store", this.form);
      } // }

    },
    limitWords: function limitWords() {
      var words = this.form.rationale.trim().split(/\s+/);
      this.act_words = words.length;

      if (words.length > this.maxWords) {//alert("Rationale has already 200 words!")
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
      var _this2 = this;

      var selectedPap = this.paps_all.find(function (pap) {
        return String(pap.id) === String(_this2.form.idpaps);
      }); // alert("fsdfsdf")

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
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var myurl;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
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

                if (_this3.reply_concat.trim()) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                try {
                  _this3.$inertia.patch(myurl, {
                    params: {
                      reply: _this3.reply_concat,
                      id: id
                    }
                  }, {
                    preserveScroll: true,
                    onSuccess: function onSuccess() {
                      // $uname . ' replied: ' . $reply . '<br>';
                      var comment_init = "";

                      if (_this3.comments[index].reply) {
                        comment_init = _this3.comments[index].reply;
                      }

                      _this3.comments[index].reply = comment_init + " <b>" + _this3.auth.user.FullName + "</b> replied: <i>" + _this3.reply_concat + "</i> <br><br>";
                      _this3.comments[index].show_comment_box = false; // Hide the comment box after replying

                      _this3.reply_concat = ""; // Clear the reply input after saving

                      _this3.is_replying = false; // Reset the replying state
                    }
                  }); // console.log(payload);


                  _this3.unsaved = false; // Reset unsaved flag after successful save
                } catch (error) {
                  console.error('Error updating comment:', error);
                }

              case 4:
              case "end":
                return _context.stop();
            }
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
      console.trace(); // if(this.auth.user.department_code==='04'){
      //     has_comm=false
      // }else{

      var count = Array.isArray(comments_obj) ? comments_obj.filter(function (comment) {
        return comment.table_name === table && comment.column_name === column && comment.comment_status === "0";
      }).length : 0;

      if (count > 0) {
        has_comm = true;
      } // }


      return has_comm;
    },
    handleClick: function handleClick(section, subtitle, data, column, table, obj, comments_obj) {
      this.comment_section = section;
      this.comment_subtitle = subtitle;
      this.comment_data = data;
      this.comment_column = column;
      this.comment_table = table;
      this.comment_reference_object = obj; // this.comments = comments_obj;

      this.comments = comments_obj.filter(function (comment) {
        return comment.table_name === table && comment.column_name === column;
      });
      this.show_comment_modal = true;
    },
    closeCommentModal: function closeCommentModal() {
      this.show_comment_modal = false;
    },
    saveComment: function saveComment() {
      var _this4 = this;

      // Logic to save the comment
      // This is just a placeholder, implement your actual saving logic here
      var myurl = "/revision-plan-comments/store"; // await axios

      var table_row_id_l = 0; // console.log(this.comment_table)

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
        table_row_id_l = this.comment_reference_object.id; // alert(table_row_id_l)
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
      } //alert(table_row_id_l)


      this.$inertia.post(myurl, {
        params: {
          table_row_id: table_row_id_l,
          table_name: this.comment_table,
          column_name: this.comment_column,
          comment_status: 0,
          comment: this.comment
        }
      });
      this.closeCommentModal();
      setTimeout(function () {
        _this4.comment = "";
      }, 1000); // 1000 milliseconds = 1 second
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
    scrollToSection: function scrollToSection(target) {
      var el = document.getElementById(target);
      if (!el) return; // alert(target);

      var navbarHeight = 90;
      var targetPos = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPos,
        behavior: "smooth"
      }); // Highlight effect

      el.classList.add("highlight-target");
      setTimeout(function () {
        return el.classList.remove("highlight-target");
      }, 2000);
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
    updateRevisionPlans: lodash_debounce__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(table_name, column_name, id, new_data) {
        var payload, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                payload = {
                  table_name: table_name,
                  column_name: column_name,
                  id: id,
                  new_data: encodeURIComponent(new_data)
                };
                _context2.prev = 1;
                _context2.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_6___default().patch("/revision/streamlined/".concat(id, "/update"), payload);

              case 4:
                response = _context2.sent;
                console.log(response.data);
                this.setUnsaved(false);
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);
                console.error("Error updating ".concat(table_name, " (").concat(column_name, ")"), _context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 9]]);
      }));

      return function (_x, _x2, _x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }(), 1000),
    // 🔥 Delay here (1s or 300ms)
    // async updateRevisionPlans(table_name, column_name, id, new_data){
    //     const payload = {
    //         table_name: table_name,
    //         column_name: column_name,
    //         id: id,
    //         new_data: encodeURIComponent(new_data)
    //     };
    //     const debouncedCall = debounce(async () => {
    //         try {
    //             const response = await axios.patch(`/revision/streamlined/${id}/update`, payload);
    //             console.log(response.data);
    //             this.setUnsaved(false);
    //             // this.refreshData();
    //         } catch (error) {
    //             console.error('Error updating ' + table_name + ' (' + column_name + ')', error);
    //         }
    //     }, 1000);
    // call the debounced function
    // debouncedCall();
    // try {
    //     const response = await axios.patch(`/revision/streamlined/${id}/update`, payload);
    //     console.log(response.data);
    //     this.setUnsaved(false)
    //     // this.refreshData();
    // } catch (error) {
    //     console.error('Error updating '+table_name+' ('+column_name+')', error);
    // }
    // },
    // GENERAL DELETION ************************************************
    deleteData: function deleteData(id, table, title) {
      //alert(this.idpaps);
      var text = "WARNING!\nAre you sure you want to delete a row from " + table + " with title " + title + "?";

      if (confirm(text) == true) {
        this.$inertia["delete"]("/revision/streamlined/" + id + "/" + table);
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
      var _this6 = this;

      setTimeout(function () {
        if (_this6.budget_new.selected_chart_of_account !== null && _this6.budget_new.selected_chart_of_account !== undefined) {
          var index = _this6.account_code.findIndex(function (data) {
            return String(data.recid) === String(_this6.budget_new.selected_chart_of_account);
          });

          _this6.budget_new.particulars = _this6.account_code[index].FTITLE;
          _this6.budget_new.account_code = _this6.account_code[index].FACTCODE;
          console.log(_this6.account_code[index]);
        } else {
          // Handle case when no option is selected (form.ipcr_code is null or undefined)
          return -1; // Return -1 to indicate no option is selected
        }
      }, 300);
    },
    saveBudgetRequirement: function saveBudgetRequirement() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var confirmed, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(!_this7.budget_new.particulars || _this7.budget_new.particulars.trim() === "")) {
                  _context3.next = 3;
                  break;
                }

                alert("Particulars cannot be empty.");
                return _context3.abrupt("return");

              case 3:
                if (!(_this7.budget_new.amount === null || _this7.budget_new.amount === 0)) {
                  _context3.next = 6;
                  break;
                }

                alert("Amount cannot be empty or zero.");
                return _context3.abrupt("return");

              case 6:
                if (!(!_this7.budget_new.source || _this7.budget_new.source.trim() === "")) {
                  _context3.next = 9;
                  break;
                }

                alert("Source cannot be empty.");
                return _context3.abrupt("return");

              case 9:
                confirmed = window.confirm("Are you sure you want to save this budget requirement?");

                if (confirmed) {
                  _context3.next = 12;
                  break;
                }

                return _context3.abrupt("return");

              case 12:
                _context3.prev = 12;
                // Set the revision_plan_id dynamically if needed
                _this7.budget_new.revision_plan_id = _this7.paps.id;
                _context3.next = 16;
                return axios__WEBPACK_IMPORTED_MODULE_6___default().post('/budget/store/budget', _this7.budget_new);

              case 16:
                response = _context3.sent;

                // Add the returned budget to your array (optional)
                _this7.budget_requirements.push(response.data); // Close modal and reset


                _this7.BudgetModalVisible = false;
                _this7.budget_new = {
                  id: null,
                  revision_plan_id: _this7.paps.id,
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
                _context3.next = 27;
                break;

              case 23:
                _context3.prev = 23;
                _context3.t0 = _context3["catch"](12);
                console.error(_context3.t0);
                alert("Failed to save budget.");

              case 27:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[12, 23]]);
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
      }); // { length: max },

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
      } // Proceed to save (e.g., emit event or call API)


      axios__WEBPACK_IMPORTED_MODULE_6___default().post('/implementation-workplan/strategies', {
        strategies: this.strategies,
        paps_id: this.paps_specific.id
      }).then(function (response) {
        console.log('Saved successfully:', response.data);
        window.location.reload(); // Optionally clear the strategies array or show a success message
      })["catch"](function (error) {
        console.error('Error saving strategies:', error);
      }); // Optionally, close modal after save

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
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_6___default().post('/implementation-workplan/strategies/activities', {
                  activities: _this8.activities,
                  strategy_id: _this8.strategy_id
                }).then(function (response) {
                  window.location.reload();
                });

              case 3:
                response = _context4.sent;
                alert('Activities saved successfully!');

                _this8.closeActivityModal();

                _context4.next = 12;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                console.error(_context4.t0);
                alert('Error saving activities.');

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8]]);
      }))();
    },
    //IMPLEMENTING TEAM *******************************
    showTeamModal: function showTeamModal() {
      var _this9 = this;

      this.action_type_team = 'store';
      this.all_employees = [];
      this.addTeamRow();
      axios__WEBPACK_IMPORTED_MODULE_6___default().get('/get_employees_all').then(function (response) {
        _this9.all_employees = response.data; // store employees

        _this9.TeamModalVisible = true;
      })["catch"](function (error) {
        console.error("Error loading employees:", error);
      });
    },
    closeTeamModal: function closeTeamModal() {
      this.TeamModalVisible = false;
      this.all_employees = []; // this.team_members=[];
    },
    showTeamModalEdit: function showTeamModalEdit(emp) {
      var _this10 = this;

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
      axios__WEBPACK_IMPORTED_MODULE_6___default().get('/get_employees_all').then(function (response) {
        _this10.all_employees = response.data; // store employees
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
      var _this11 = this;

      if (this.action_type_team === 'store') {
        axios__WEBPACK_IMPORTED_MODULE_6___default().post('/implementation-workplan/implementing/team/plans', {
          'rows': this.team_members
        }).then(function (res) {
          // optionally clear or close modal
          alert('Successfully saved team member!');
          _this11.team_members = [];
          _this11.TeamModalVisible = false;
          window.location.reload();
        });
      } else if (this.action_type_team === 'update') {
        axios__WEBPACK_IMPORTED_MODULE_6___default().patch('/implementation-workplan/implementing/team/plans/update', {
          'rows': this.team_members
        }).then(function (res) {
          // optionally clear or close modal
          alert('Successfully saved team member!');
          _this11.team_members = [];
          _this11.TeamModalVisible = false;
          window.location.reload();
        });
      }
    },
    // updateEmployee(){
    //     var selectedEmp = this.all_employees.find(peop => String(peop.empl_id) === String(this.team_members.implementing_team_id));
    //     // alert("fsdfsdf")
    //     console.log(this.team_members.implementing_team_id)
    //     console.log(selectedEmp)
    //     this.team_members.name = selectedEmp ? selectedEmp.employee_name : '';
    //     this.team_members.gender = selectedEmp ? selectedEmp.gender : '';
    //     this.team_members.position = selectedEmp ? selectedEmp.position_long_title : '';
    // },
    updateEmployee: function updateEmployee(emplId) {
      var selectedEmp = this.all_employees.find(function (peop) {
        return String(peop.empl_id) === String(emplId);
      });
      this.team_members.name = (selectedEmp === null || selectedEmp === void 0 ? void 0 : selectedEmp.employee_name) || '';
      this.team_members.gender = (selectedEmp === null || selectedEmp === void 0 ? void 0 : selectedEmp.gender) || '';
      this.team_members.position = (selectedEmp === null || selectedEmp === void 0 ? void 0 : selectedEmp.position_long_title) || '';
      this.team_members.empl_id = emplId;
      this.team_members.status = (selectedEmp === null || selectedEmp === void 0 ? void 0 : selectedEmp.employment_type_descr) || ''; // this.team_members=({
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
      axios__WEBPACK_IMPORTED_MODULE_6___default().post('/revision/streamlined/subtables/save/risk/management', {
        risk_managements: this.risk_managements
      }).then(function (res) {
        console.log("Saved:", res.data);
        window.location.reload(); // Optional success message or close modal
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
      var _this12 = this;

      axios__WEBPACK_IMPORTED_MODULE_6___default().post('/revision/streamlined/subtables/save/monitoring/and/evaluation', {
        rows: this.monitoring_and_evaluations
      }).then(function (res) {
        // console.log("Saved:", res.data);
        _this12.MonitoringModalVisible = false;
        window.location.reload();
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
      var _this13 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_6___default().post("/revision/streamlined/subtables/save/signatories", {
                  signatories: _this13.signatories,
                  revision_plan_id: _this13.editData.id
                }).then(function (res) {
                  console.log("Signatories saved successfully:", res.data);

                  _this13.closeSignatoryModal();

                  window.location.reload();
                })["catch"](function (err) {
                  console.error("Error saving signatories:", err);
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    //IMPLEMENTATION
    computeCategory: function computeCategory(type) {
      var _this14 = this;

      if (!this.implementation) return 0;
      var categories = ["ps", "mooe", "co", "fe"];
      var activeCats = type === "total" ? categories : [type];
      var sum = 0;
      this.implementation.forEach(function (item) {
        if (item.activity && Array.isArray(item.activity)) {
          item.activity.forEach(function (act) {
            activeCats.forEach(function (cat) {
              sum += _this14.sumQuarterValues(act, cat);
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
        var key = "".concat(category, "_").concat(q); // ex: "mooe_q1"

        var val = act[key];
        total += parseFloat(val) || 0;
      });
      return total;
    },
    //EXPECTED OUTPUT ******************************************
    showExpectedOutputModal: function showExpectedOutputModal(activity, activity_id, activity_project_id) {
      this.activity_id = activity_id;
      this.activity_project_id = activity_project_id;
      this.expected_outputs_new = [];
      this.expected_outputs_current = activity;
      this.ExpectedOutputModalVisible = true;
    },
    hideExpectedOutputModal: function hideExpectedOutputModal() {
      this.ExpectedOutputModalVisible = false;
      window.location.reload();
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
      var _this15 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        var _this15$expected_outp, response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_6___default().post('/revision/streamlined/expected/revised/outputs', {
                  expected_outputs: _this15.expected_outputs_new
                });

              case 3:
                response = _context6.sent;
                alert('Saved successfully!');

                (_this15$expected_outp = _this15.expected_outputs_current).push.apply(_this15$expected_outp, _toConsumableArray(_this15.expected_outputs_new));

                _this15.expected_outputs_new = []; // Clear table after save

                _this15.$emit('close-modal-event'); // Close modal


                _context6.next = 14;
                break;

              case 10:
                _context6.prev = 10;
                _context6.t0 = _context6["catch"](0);
                console.error(_context6.t0);
                alert('Error saving expected outputs.');

              case 14:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 10]]);
      }))();
    },
    deleteExpectedOutput: function deleteExpectedOutput(id, table, title, index) {
      var _this16 = this;

      var text = "WARNING!\nAre you sure you want to delete a row from " + table + " with title " + title + "?";

      if (confirm(text) == true) {
        this.$inertia["delete"]("/revision/streamlined/".concat(id, "/").concat(table), {
          onSuccess: function onSuccess() {
            // Only runs if backend deletion succeeds
            _this16.expected_outputs_current.splice(index, 1);
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
      window.location.reload();
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
      var _this17 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        var payload, response, _this17$expected_outc;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                payload = _this17.expected_outcomes_new.map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    activity_id: _this17.activity_id,
                    activity_project_id: _this17.activity_project_id,
                    project_id: _this17.project_id
                  });
                });
                _context7.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_6___default().post('/revision/streamlined/expected/outcomes', {
                  rows: payload
                });

              case 4:
                response = _context7.sent;

                if (response.data.success) {
                  // Push saved outcomes to current list
                  (_this17$expected_outc = _this17.expected_outcomes_current).push.apply(_this17$expected_outc, _toConsumableArray(_this17.expected_outcomes_new)); // Clear new outcomes


                  _this17.expected_outcomes_new = []; // this.hideExpectedOutcomeModal();
                } else {
                  alert('Failed to save expected outcomes');
                }

                _context7.next = 12;
                break;

              case 8:
                _context7.prev = 8;
                _context7.t0 = _context7["catch"](0);
                console.error(_context7.t0);
                alert('Error saving expected outcomes');

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 8]]);
      }))();
    },
    deleteExpectedOutcome: function deleteExpectedOutcome(id, table, title, index) {
      var _this18 = this;

      // this.deleteData(id,table,title)
      var text = "WARNING!\nAre you sure you want to delete a row from " + table + " with title " + title + "?";

      if (confirm(text) == true) {
        this.$inertia["delete"]("/revision/streamlined/".concat(id, "/").concat(table), {
          onSuccess: function onSuccess() {
            // Only runs if backend deletion succeeds
            _this18.expected_outcomes_current.splice(index, 1);
          },
          onError: function onError() {
            alert("Delete failed! Please try again.");
          }
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
    mun: Array // bar: Array,

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
  mounted: function mounted() {//this.bar=[];
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
    }); // Set initial content

    if (this.modelValue) {
      this.editor.root.innerHTML = this.modelValue;
    } // Sync changes


    this.editor.on('text-change', function () {
      _this.$emit('update:modelValue', _this.editor.root.innerHTML);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/ProjectProfile/Create copy.vue?vue&type=template&id=6b8e3943":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/ProjectProfile/Create copy.vue?vue&type=template&id=6b8e3943 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Edit Project Profile", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "relative row gap-20 masonry pos-r"
};
var _hoisted_3 = {
  "class": "peers fxw-nw jc-sb ai-c"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "25",
  height: "25",
  fill: "currentColor",
  "class": "bi bi-x-lg",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
})], -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "25",
  height: "25",
  fill: "currentColor",
  "class": "bi bi-x-lg",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
})], -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "col-md-12"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "hidden",
  required: ""
}, null, -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "d-none"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "ID", -1
/* HOISTED */
);

var _hoisted_10 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_11 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_12 = ["src"];

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" REPUBLIC OF THE PHILIPPINES "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" PROVINCE OF DAVAO DE ORO ")], -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_15 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_16 = {
  "class": "fw-bold"
};
var _hoisted_17 = {
  key: 0
};
var _hoisted_18 = {
  key: 1
};
var _hoisted_19 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_20 = {
  id: "revision_plans"
};
var _hoisted_21 = {
  name: "tabel",
  "class": "table table-sm table-borderless table-hover",
  style: {
    "border-color": "#000",
    "border-width": "2px"
  }
};
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

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white",
  colspan: "1"
}, "Implementation Schedule", -1
/* HOISTED */
);

var _hoisted_27 = {
  colspan: "1"
};
var _hoisted_28 = ["id"];
var _hoisted_29 = {
  colspan: "1"
};
var _hoisted_30 = ["id"];

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white",
  colspan: "1"
}, "Intended Beneficiaries", -1
/* HOISTED */
);

var _hoisted_32 = {
  colspan: "1"
};
var _hoisted_33 = ["id"];
var _hoisted_34 = {
  colspan: "1"
};
var _hoisted_35 = ["id"];

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Total", -1
/* HOISTED */
);

var _hoisted_37 = ["id"];

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white",
  colspan: "1"
}, "Baseline Disaggregated Data", -1
/* HOISTED */
);

var _hoisted_39 = {
  colspan: "1"
};
var _hoisted_40 = ["id"];
var _hoisted_41 = {
  colspan: "1"
};
var _hoisted_42 = ["id"];
var _hoisted_43 = {
  colspan: "1"
};
var _hoisted_44 = ["id"];

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white",
  colspan: "1"
}, "Cost of Program", -1
/* HOISTED */
);

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Amount (Php)", -1
/* HOISTED */
);

var _hoisted_47 = ["id"];

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Attributed GAD Budget (Php) ", -1
/* HOISTED */
);

var _hoisted_49 = ["id"];
var _hoisted_50 = {
  key: 0
};
var _hoisted_51 = {
  key: 1
};
var _hoisted_52 = {
  "class": "bg-secondary text-white",
  colspan: "1"
};
var _hoisted_53 = {
  key: 0
};
var _hoisted_54 = {
  key: 1
};
var _hoisted_55 = ["id"];
var _hoisted_56 = ["value"];
var _hoisted_57 = {
  "class": "bg-secondary text-white",
  colspan: "1"
};
var _hoisted_58 = ["id"];
var _hoisted_59 = {
  id: "rationale"
};

var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_61 = {
  "class": "bgc-white p-20 bd"
};

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_63 = {
  id: "objective"
};

var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_65 = {
  "class": "bgc-white p-20 bd"
};

var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_67 = {
  id: "beneficiaries"
};

var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_69 = {
  "class": "bgc-white p-20 bd"
};

var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_71 = {
  id: "implementation_workplan"
};
var _hoisted_72 = {
  "class": "table table-hover table-bordered border-dark"
};

var _hoisted_73 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "bg-secondary text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "12%",
    "text-align": "center"
  }
}, "Strategies/Activities"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "8%",
    "text-align": "center"
  }
}, "Performance Target Indicators"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "8%",
    "text-align": "center"
  }
}, "Gender Issues to be Addressed"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "8%",
    "text-align": "center"
  }
}, "Timeline"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "8%",
    "text-align": "center"
  }
}, "Expected Output"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "8%",
    "text-align": "center"
  }
}, "Personnel Services"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "8%",
    "text-align": "center"
  }
}, "MOOE"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "8%",
    "text-align": "center"
  }
}, "Financial Expenses"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "8%",
    "text-align": "center"
  }
}, "Capital Outlay"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "8%",
    "text-align": "center"
  }
}, "Budget"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "8%",
    "text-align": "center"
  }
}, "Climate Change Topology Code"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "8%",
    "text-align": "center"
  }
}, "Person Responsible"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Actions")])], -1
/* HOISTED */
);

var _hoisted_74 = {
  key: 0,
  style: {
    "background-color": "lightgrey",
    "font-weight": "bold"
  }
};
var _hoisted_75 = ["onClick"];
var _hoisted_76 = ["onClick"];
var _hoisted_77 = ["onUpdate:modelValue", "onChange"];
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
  key: 1
};
var _hoisted_83 = {
  key: 2
};
var _hoisted_84 = {
  key: 0
};

var _hoisted_85 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_86 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_87 = {
  key: 0
};
var _hoisted_88 = {
  key: 0
};
var _hoisted_89 = {
  key: 0
};
var _hoisted_90 = {
  key: 0
};
var _hoisted_91 = {
  "class": "text-end"
};
var _hoisted_92 = {
  key: 0
};
var _hoisted_93 = {
  key: 0
};
var _hoisted_94 = {
  key: 0
};
var _hoisted_95 = ["id"];
var _hoisted_96 = {
  "class": "d-flex justify-content-between align-items-center w-100"
};
var _hoisted_97 = ["onUpdate:modelValue", "onChange"];
var _hoisted_98 = ["onClick"];
var _hoisted_99 = ["onClick"];
var _hoisted_100 = ["onClick"];
var _hoisted_101 = ["onClick"];
var _hoisted_102 = ["id"];
var _hoisted_103 = ["onUpdate:modelValue", "onChange"];
var _hoisted_104 = ["onClick"];
var _hoisted_105 = ["onClick"];
var _hoisted_106 = {
  colspan: "4",
  style: {
    "width": "32%",
    "padding": "0",
    "border": "1px solid #000",
    "vertical-align": "top"
  }
};
var _hoisted_107 = {
  style: {
    "display": "flex",
    "flex-direction": "column",
    "height": "100%",
    "min-height": "100%"
  }
};
var _hoisted_108 = {
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
var _hoisted_109 = ["id"];
var _hoisted_110 = {
  key: 0
};
var _hoisted_111 = {
  key: 0
};

var _hoisted_112 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_113 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_114 = ["onClick"];
var _hoisted_115 = ["onClick"];
var _hoisted_116 = ["id", "rowspan"];
var _hoisted_117 = {
  key: 0
};
var _hoisted_118 = ["onUpdate:modelValue", "onChange"];
var _hoisted_119 = ["onClick"];
var _hoisted_120 = ["onClick"];
var _hoisted_121 = ["rowspan"];
var _hoisted_122 = {
  key: 0
};
var _hoisted_123 = {
  key: 0
};
var _hoisted_124 = ["onUpdate:modelValue", "id", "onChange"];
var _hoisted_125 = ["onClick"];
var _hoisted_126 = ["onClick"];
var _hoisted_127 = {
  key: 1
};
var _hoisted_128 = {
  key: 2
};
var _hoisted_129 = ["onUpdate:modelValue", "onChange", "id"];
var _hoisted_130 = ["onClick"];
var _hoisted_131 = ["onClick"];
var _hoisted_132 = {
  "class": "align-top",
  style: {
    "width": "25%",
    "border": "1px solid #000",
    "padding": "4px"
  }
};
var _hoisted_133 = ["id", "onUpdate:modelValue", "onChange"];
var _hoisted_134 = ["onClick"];
var _hoisted_135 = ["onClick"];
var _hoisted_136 = ["id"];
var _hoisted_137 = ["onUpdate:modelValue", "onChange"];
var _hoisted_138 = ["onClick"];
var _hoisted_139 = ["onClick"];
var _hoisted_140 = {
  "class": "m-0",
  style: {
    "border-collapse": "collapse",
    "width": "100%",
    "height": "100%",
    "table-layout": "fixed"
  }
};

var _hoisted_141 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_142 = ["id", "rowspan"];
var _hoisted_143 = {
  key: 0
};
var _hoisted_144 = ["onUpdate:modelValue", "onChange"];
var _hoisted_145 = ["onClick"];
var _hoisted_146 = ["onClick"];
var _hoisted_147 = ["rowspan"];
var _hoisted_148 = {
  key: 0
};
var _hoisted_149 = ["id"];
var _hoisted_150 = ["onUpdate:modelValue", "onChange"];
var _hoisted_151 = ["onClick"];
var _hoisted_152 = ["onClick"];
var _hoisted_153 = {
  key: 1
};
var _hoisted_154 = ["id"];
var _hoisted_155 = ["onUpdate:modelValue", "onChange"];
var _hoisted_156 = ["onClick"];
var _hoisted_157 = ["onClick"];

var _hoisted_158 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_159 = ["id"];
var _hoisted_160 = {
  key: 0
};
var _hoisted_161 = ["onUpdate:modelValue", "onChange"];
var _hoisted_162 = ["onUpdate:modelValue", "onChange"];
var _hoisted_163 = ["onUpdate:modelValue", "onChange"];
var _hoisted_164 = ["onUpdate:modelValue", "onChange"];
var _hoisted_165 = ["onClick"];
var _hoisted_166 = ["onClick"];
var _hoisted_167 = ["id"];
var _hoisted_168 = {
  key: 0
};
var _hoisted_169 = ["onUpdate:modelValue", "onChange"];
var _hoisted_170 = ["onUpdate:modelValue", "onChange"];
var _hoisted_171 = ["onUpdate:modelValue", "onChange"];
var _hoisted_172 = ["onUpdate:modelValue", "onChange"];
var _hoisted_173 = ["onClick"];
var _hoisted_174 = ["onClick"];
var _hoisted_175 = ["id"];
var _hoisted_176 = {
  key: 0
};
var _hoisted_177 = ["onUpdate:modelValue", "onChange"];
var _hoisted_178 = ["onUpdate:modelValue", "onChange"];
var _hoisted_179 = ["onUpdate:modelValue", "onChange"];
var _hoisted_180 = ["onUpdate:modelValue", "onChange"];
var _hoisted_181 = ["onClick"];
var _hoisted_182 = ["onClick"];
var _hoisted_183 = ["id"];
var _hoisted_184 = {
  key: 0
};
var _hoisted_185 = ["onUpdate:modelValue", "onChange"];
var _hoisted_186 = ["onUpdate:modelValue", "onChange"];
var _hoisted_187 = ["onUpdate:modelValue", "onChange"];
var _hoisted_188 = ["onUpdate:modelValue", "onChange"];
var _hoisted_189 = ["onClick"];
var _hoisted_190 = ["onClick"];
var _hoisted_191 = ["value"];
var _hoisted_192 = ["value"];
var _hoisted_193 = ["value"];
var _hoisted_194 = ["value"];
var _hoisted_195 = ["id"];
var _hoisted_196 = {
  key: 0
};
var _hoisted_197 = ["onUpdate:modelValue", "onChange"];
var _hoisted_198 = ["onClick"];
var _hoisted_199 = ["onClick"];
var _hoisted_200 = ["id"];
var _hoisted_201 = {
  key: 0
};
var _hoisted_202 = ["onUpdate:modelValue", "onChange"];
var _hoisted_203 = ["onClick"];
var _hoisted_204 = ["onClick"];
var _hoisted_205 = ["onClick"];

var _hoisted_206 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_207 = ["onClick"];

var _hoisted_208 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_209 = ["onClick"];

var _hoisted_210 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_211 = ["onClick"];

var _hoisted_212 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_213 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "5"
}, "TOTAL", -1
/* HOISTED */
);

var _hoisted_214 = ["id"];
var _hoisted_215 = ["id"];
var _hoisted_216 = ["id"];
var _hoisted_217 = ["id"];

var _hoisted_218 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_219 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_220 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_221 = {
  id: "budgetary_requirements"
};
var _hoisted_222 = {
  "class": "table table-bordered"
};

var _hoisted_223 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "3"
}, "Particulars", -1
/* HOISTED */
);

var _hoisted_224 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Account Code", -1
/* HOISTED */
);

var _hoisted_225 = {
  key: 0
};

var _hoisted_226 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Amount", -1
/* HOISTED */
);

var _hoisted_227 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Source", -1
/* HOISTED */
);

var _hoisted_228 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Delete", -1
/* HOISTED */
);

var _hoisted_229 = {
  "class": "table-primary"
};
var _hoisted_230 = {
  colspan: "8",
  "class": "fw-bold text-uppercase"
};
var _hoisted_231 = {
  "class": "table-secondary"
};

var _hoisted_232 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_233 = {
  colspan: "7",
  "class": "fw-bold"
};
var _hoisted_234 = {
  "class": "d-flex justify-content-between align-items-center w-100"
};
var _hoisted_235 = ["onClick"];

var _hoisted_236 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_237 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_238 = ["id"];
var _hoisted_239 = ["onUpdate:modelValue", "onChange"];
var _hoisted_240 = ["onClick"];
var _hoisted_241 = ["onClick"];
var _hoisted_242 = ["id"];
var _hoisted_243 = ["onUpdate:modelValue", "onChange"];
var _hoisted_244 = ["onClick"];
var _hoisted_245 = ["onClick"];
var _hoisted_246 = {
  key: 0
};
var _hoisted_247 = ["id"];
var _hoisted_248 = ["onUpdate:modelValue", "onChange"];
var _hoisted_249 = ["onClick"];
var _hoisted_250 = ["onClick"];
var _hoisted_251 = ["id"];
var _hoisted_252 = ["onUpdate:modelValue", "onChange"];
var _hoisted_253 = ["onClick"];
var _hoisted_254 = ["onClick"];
var _hoisted_255 = ["onClick"];
var _hoisted_256 = {
  key: 0
};
var _hoisted_257 = {
  colspan: "8",
  "class": "text-center text-muted"
};
var _hoisted_258 = {
  "class": "fw-bold bg-light"
};

var _hoisted_259 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_260 = {
  colspan: "2"
};

var _hoisted_261 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_262 = {
  key: 0
};

var _hoisted_263 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "3"
}, null, -1
/* HOISTED */
);

var _hoisted_264 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "GAD TOTAL")], -1
/* HOISTED */
);

var _hoisted_265 = {
  key: 0
};
var _hoisted_266 = ["id"];

var _hoisted_267 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "3"
}, null, -1
/* HOISTED */
);

var _hoisted_268 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "TOTAL")], -1
/* HOISTED */
);

var _hoisted_269 = {
  key: 0
};

var _hoisted_270 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "3"
}, null, -1
/* HOISTED */
);

var _hoisted_271 = {
  id: "implementing_team"
};
var _hoisted_272 = {
  align: "justify",
  style: {
    "white-space": "pre-line"
  }
};
var _hoisted_273 = {
  table: "",
  name: "tabel",
  "class": "table table-hover table-bordered border-dark"
};

var _hoisted_274 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "bg-secondary text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "No."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Gender"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Position"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Employment Status"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "GAD-related trainings"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Actions")])], -1
/* HOISTED */
);

var _hoisted_275 = ["id"];
var _hoisted_276 = ["onClick"];
var _hoisted_277 = ["onClick"];
var _hoisted_278 = ["id"];
var _hoisted_279 = ["onClick"];
var _hoisted_280 = ["onClick"];
var _hoisted_281 = ["id"];
var _hoisted_282 = {
  key: 0
};
var _hoisted_283 = {
  key: 1
};
var _hoisted_284 = ["onClick"];
var _hoisted_285 = ["onClick"];
var _hoisted_286 = ["id"];
var _hoisted_287 = ["onClick"];
var _hoisted_288 = ["onClick"];

var _hoisted_289 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-pencil-square",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
})], -1
/* HOISTED */
);

var _hoisted_290 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-trash-fill",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"
})], -1
/* HOISTED */
);

var _hoisted_291 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_292 = {
  id: "partnership_sustainability"
};
var _hoisted_293 = {
  align: "justify",
  style: {
    "white-space": "pre-line"
  }
};
var _hoisted_294 = {
  id: "monitoring_evaluation"
};
var _hoisted_295 = {
  align: "justify",
  style: {
    "white-space": "pre-line"
  }
};
var _hoisted_296 = {
  table: "",
  name: "tabel",
  "class": "table table-hover table-bordered border-dark"
};

var _hoisted_297 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "bg-secondary text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Evaluation Mechanism/Tools"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "OPR and their Roles"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Target Beneficiaries"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Need for External M&E Team or GAD Expert/Consultant"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Actions")])], -1
/* HOISTED */
);

var _hoisted_298 = ["id"];
var _hoisted_299 = ["onUpdate:modelValue", "onChange"];
var _hoisted_300 = ["onClick"];
var _hoisted_301 = ["onClick"];
var _hoisted_302 = ["id"];
var _hoisted_303 = ["onUpdate:modelValue", "onChange"];
var _hoisted_304 = ["onClick"];
var _hoisted_305 = ["onClick"];
var _hoisted_306 = ["id"];
var _hoisted_307 = ["onUpdate:modelValue", "onChange"];
var _hoisted_308 = ["onClick"];
var _hoisted_309 = ["onClick"];
var _hoisted_310 = ["id"];
var _hoisted_311 = ["onUpdate:modelValue", "onChange"];

var _hoisted_312 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Yes", -1
/* HOISTED */
);

var _hoisted_313 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "No", -1
/* HOISTED */
);

var _hoisted_314 = [_hoisted_312, _hoisted_313];
var _hoisted_315 = ["onClick"];
var _hoisted_316 = ["onClick"];
var _hoisted_317 = ["onClick"];

var _hoisted_318 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_319 = {
  id: "risk_management"
};
var _hoisted_320 = {
  align: "justify",
  style: {
    "white-space": "pre-line"
  }
};
var _hoisted_321 = {
  table: "",
  name: "tabel",
  "class": "table table-hover table-bordered border-dark"
};

var _hoisted_322 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "bg-secondary text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Prospective Possible Risks"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Preventive Measures"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Mechanisms to monitor"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Actions")])], -1
/* HOISTED */
);

var _hoisted_323 = ["id"];
var _hoisted_324 = ["onClick"];
var _hoisted_325 = ["onClick"];
var _hoisted_326 = ["id"];
var _hoisted_327 = ["onClick"];
var _hoisted_328 = ["onClick"];
var _hoisted_329 = ["id"];
var _hoisted_330 = ["onClick"];
var _hoisted_331 = ["onClick"];
var _hoisted_332 = ["onClick"];

var _hoisted_333 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_334 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_335 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_336 = {
  id: "signatories"
};
var _hoisted_337 = {
  id: "signatories",
  "class": "signatory-grid"
};
var _hoisted_338 = ["onUpdate:modelValue", "onChange", "id"];

var _hoisted_339 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Prepared", -1
/* HOISTED */
);

var _hoisted_340 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Reviewed", -1
/* HOISTED */
);

var _hoisted_341 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Noted", -1
/* HOISTED */
);

var _hoisted_342 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Approved", -1
/* HOISTED */
);

var _hoisted_343 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Recommending Approval", -1
/* HOISTED */
);

var _hoisted_344 = {
  key: 0
};
var _hoisted_345 = {
  key: 1
};
var _hoisted_346 = {
  key: 0
};
var _hoisted_347 = ["onClick"];
var _hoisted_348 = ["onClick"];

var _hoisted_349 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_350 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_351 = ["id"];
var _hoisted_352 = ["onUpdate:modelValue", "id", "onChange"];
var _hoisted_353 = ["onClick"];
var _hoisted_354 = ["onClick"];

var _hoisted_355 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_356 = ["id"];
var _hoisted_357 = ["onUpdate:modelValue", "onChange"];
var _hoisted_358 = ["onClick"];
var _hoisted_359 = ["onClick"];

var _hoisted_360 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_361 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_362 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_363 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_364 = ["onClick"];
var _hoisted_365 = {
  "class": "col-3"
};
var _hoisted_366 = {
  key: 0,
  "class": "sticky-comments"
};

var _hoisted_367 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor",
  "class": "bi bi-three-dots",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
})], -1
/* HOISTED */
);

var _hoisted_368 = {
  key: 0,
  style: {
    "color": "red"
  },
  "class": "blink"
};
var _hoisted_369 = {
  key: 1,
  "class": "p-20 bd sticky-comments",
  style: {
    "background": "rgba(255, 255, 255, 0.7)"
  }
};
var _hoisted_370 = {
  "class": "d-flex justify-content-end"
};

var _hoisted_371 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor",
  "class": "bi bi-x-lg",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
})], -1
/* HOISTED */
);

var _hoisted_372 = [_hoisted_371];
var _hoisted_373 = {
  "class": "tab"
};
var _hoisted_374 = {
  key: 0,
  style: {
    "color": "red"
  },
  "class": "blink"
};
var _hoisted_375 = {
  key: 0
};

var _hoisted_376 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "comments-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "COMMENTS ...")], -1
/* HOISTED */
);

var _hoisted_377 = {
  "class": "scrollable-text"
};
var _hoisted_378 = {
  "class": "list-unstyled"
};
var _hoisted_379 = ["onClick"];
var _hoisted_380 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-x-square-fill",
  viewBox: "0 0 16 16"
};

var _hoisted_381 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"
}, null, -1
/* HOISTED */
);

var _hoisted_382 = [_hoisted_381];
var _hoisted_383 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-check-square-fill",
  viewBox: "0 0 16 16"
};

var _hoisted_384 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"
}, null, -1
/* HOISTED */
);

var _hoisted_385 = [_hoisted_384];
var _hoisted_386 = ["innerHTML"];

var _hoisted_387 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_388 = {
  key: 1
};

var _hoisted_389 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "comments-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "NAVIGATION ...")], -1
/* HOISTED */
);

var _hoisted_390 = {
  "class": "scrollable-text",
  style: {
    "cursor": "pointer"
  }
};
var _hoisted_391 = {
  "class": "list-unstyled"
};
var _hoisted_392 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_393 = {
  "class": "list-unstyled"
};
var _hoisted_394 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_395 = {
  "class": "list-unstyled"
};
var _hoisted_396 = {
  "class": "mb-2",
  style: {
    "color": "blue"
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

var _hoisted_413 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex justify-content-center"
}, null, -1
/* HOISTED */
);

var _hoisted_414 = {
  key: 0
};

var _hoisted_415 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Section: ", -1
/* HOISTED */
);

var _hoisted_416 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Subtitle:", -1
/* HOISTED */
);

var _hoisted_417 = ["innerHTML"];

var _hoisted_418 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Data:", -1
/* HOISTED */
);

var _hoisted_419 = ["innerHTML"];

var _hoisted_420 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Column:", -1
/* HOISTED */
);

var _hoisted_421 = {
  key: 0
};
var _hoisted_422 = {
  key: 1
};
var _hoisted_423 = {
  key: 2
};

var _hoisted_424 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Table:", -1
/* HOISTED */
);

var _hoisted_425 = {
  "class": "col-9"
};
var _hoisted_426 = {
  "class": "table table-hover table-bordered border-dark"
};

var _hoisted_427 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white"
}, "Comment", -1
/* HOISTED */
);

var _hoisted_428 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white"
}, "Status  ", -1
/* HOISTED */
);

var _hoisted_429 = {
  key: 0,
  "class": "bg-secondary text-white"
};

var _hoisted_430 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white"
}, "Date", -1
/* HOISTED */
);

var _hoisted_431 = {
  key: 0
};
var _hoisted_432 = {
  "class": "bg-white p-3 rounded border"
};

var _hoisted_433 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_434 = ["innerHTML"];
var _hoisted_435 = ["onClick"];
var _hoisted_436 = ["disabled", "onClick"];
var _hoisted_437 = ["onClick"];
var _hoisted_438 = {
  key: 0
};
var _hoisted_439 = ["onClick"];

var _hoisted_440 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-check-circle",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"
})], -1
/* HOISTED */
);

var _hoisted_441 = [_hoisted_440];
var _hoisted_442 = ["onClick"];

var _hoisted_443 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-arrow-counterclockwise",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"
})], -1
/* HOISTED */
);

var _hoisted_444 = [_hoisted_443];
var _hoisted_445 = ["onClick"];

var _hoisted_446 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-trash-fill",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"
})], -1
/* HOISTED */
);

var _hoisted_447 = [_hoisted_446];

var _hoisted_448 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_449 = {
  "class": "p-3"
};
var _hoisted_450 = {
  "class": "mb-3"
};

var _hoisted_451 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "CHART OF ACCOUNTS ", -1
/* HOISTED */
);

var _hoisted_452 = {
  "class": "mb-3"
};

var _hoisted_453 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Particulars", -1
/* HOISTED */
);

var _hoisted_454 = {
  "class": "mb-3"
};

var _hoisted_455 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Account Code", -1
/* HOISTED */
);

var _hoisted_456 = {
  "class": "mb-3"
};

var _hoisted_457 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Amount", -1
/* HOISTED */
);

var _hoisted_458 = {
  "class": "mb-3"
};

var _hoisted_459 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Category", -1
/* HOISTED */
);

var _hoisted_460 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: ""
}, "Select category", -1
/* HOISTED */
);

var _hoisted_461 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Personnel Services", -1
/* HOISTED */
);

var _hoisted_462 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Maintenance, Operating, and Other Expenses", -1
/* HOISTED */
);

var _hoisted_463 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Financial Expenses", -1
/* HOISTED */
);

var _hoisted_464 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Capital Outlay", -1
/* HOISTED */
);

var _hoisted_465 = [_hoisted_460, _hoisted_461, _hoisted_462, _hoisted_463, _hoisted_464];
var _hoisted_466 = {
  "class": "mb-3"
};

var _hoisted_467 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "GAD Type", -1
/* HOISTED */
);

var _hoisted_468 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: ""
}, "Select type", -1
/* HOISTED */
);

var _hoisted_469 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "GAD"
}, "GAD", -1
/* HOISTED */
);

var _hoisted_470 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "NON-GAD"
}, "NON-GAD", -1
/* HOISTED */
);

var _hoisted_471 = [_hoisted_468, _hoisted_469, _hoisted_470];
var _hoisted_472 = {
  "class": "mb-3"
};

var _hoisted_473 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Source", -1
/* HOISTED */
);

var _hoisted_474 = {
  "class": "table table-sm table-borderless table-hover",
  style: {
    "border-color": "#000",
    "border-width": "2px"
  }
};
var _hoisted_475 = ["onUpdate:modelValue"];
var _hoisted_476 = ["onUpdate:modelValue"];
var _hoisted_477 = ["onClick"];
var _hoisted_478 = {
  "class": "table table-sm table-bordered table-hover"
};

var _hoisted_479 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Description"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Gender Issues"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Timeline"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Period"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PS "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center bg-light"
}, "PS"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center bg-light"
}, "MOOE"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CO "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center bg-light"
}, "CO"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FE "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center bg-light"
}, "FE"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "CCET"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Responsible"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th")])], -1
/* HOISTED */
);

var _hoisted_480 = ["onUpdate:modelValue"];
var _hoisted_481 = ["onUpdate:modelValue"];
var _hoisted_482 = ["onUpdate:modelValue"];

var _hoisted_483 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "to", -1
/* HOISTED */
);

var _hoisted_484 = ["onUpdate:modelValue"];

var _hoisted_485 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  value: "Q1",
  "class": "form-control",
  disabled: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  value: "Q2",
  "class": "form-control",
  disabled: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  value: "Q3",
  "class": "form-control",
  disabled: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  value: "Q4",
  "class": "form-control",
  disabled: ""
})])], -1
/* HOISTED */
);

var _hoisted_486 = ["onUpdate:modelValue"];
var _hoisted_487 = ["onUpdate:modelValue"];
var _hoisted_488 = ["onUpdate:modelValue"];
var _hoisted_489 = ["onUpdate:modelValue"];
var _hoisted_490 = ["onUpdate:modelValue"];
var _hoisted_491 = ["onUpdate:modelValue"];
var _hoisted_492 = ["onUpdate:modelValue"];
var _hoisted_493 = ["onUpdate:modelValue"];
var _hoisted_494 = ["onUpdate:modelValue"];
var _hoisted_495 = ["onUpdate:modelValue"];
var _hoisted_496 = ["onUpdate:modelValue"];
var _hoisted_497 = ["onUpdate:modelValue"];
var _hoisted_498 = ["onUpdate:modelValue"];
var _hoisted_499 = ["onUpdate:modelValue"];
var _hoisted_500 = ["onUpdate:modelValue"];
var _hoisted_501 = ["onUpdate:modelValue"];
var _hoisted_502 = ["onUpdate:modelValue"];
var _hoisted_503 = ["onUpdate:modelValue"];
var _hoisted_504 = ["onClick"];
var _hoisted_505 = {
  "class": "mt-3 d-flex justify-content-between"
};

var _hoisted_506 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "hidden",
  required: ""
}, null, -1
/* HOISTED */
);

var _hoisted_507 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "ASSIGN PERSON", -1
/* HOISTED */
);

var _hoisted_508 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "NAME", -1
/* HOISTED */
);

var _hoisted_509 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "GENDER", -1
/* HOISTED */
);

var _hoisted_510 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "M"
}, "Male", -1
/* HOISTED */
);

var _hoisted_511 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "F"
}, "Female", -1
/* HOISTED */
);

var _hoisted_512 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "ROLE IN THE PROJECT", -1
/* HOISTED */
);

var _hoisted_513 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "JOB STATUS", -1
/* HOISTED */
);

var _hoisted_514 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Job Order", -1
/* HOISTED */
);

var _hoisted_515 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Regular", -1
/* HOISTED */
);

var _hoisted_516 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Casual", -1
/* HOISTED */
);

var _hoisted_517 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_518 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Specify GAD Training", -1
/* HOISTED */
);

var _hoisted_519 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "POSITION", -1
/* HOISTED */
);

var _hoisted_520 = {
  "class": "table table-bordered"
};

var _hoisted_521 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Possible Risk"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Preventive Measures"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Mechanisms to monitor"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Actions")])], -1
/* HOISTED */
);

var _hoisted_522 = ["onUpdate:modelValue"];
var _hoisted_523 = ["onUpdate:modelValue"];
var _hoisted_524 = ["onUpdate:modelValue"];
var _hoisted_525 = {
  "class": "text-center"
};
var _hoisted_526 = ["onClick"];
var _hoisted_527 = {
  "class": "modal-title"
};
var _hoisted_528 = {
  "class": "table table-bordered"
};

var _hoisted_529 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Evaluation Mechanism/Tools"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "OPR and their Roles "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Target Beneficiaries"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Need for External M&E Team or GAD Expert/Consultant"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th")])], -1
/* HOISTED */
);

var _hoisted_530 = ["onUpdate:modelValue"];
var _hoisted_531 = ["onUpdate:modelValue"];
var _hoisted_532 = ["onUpdate:modelValue"];
var _hoisted_533 = ["onUpdate:modelValue"];

var _hoisted_534 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Yes", -1
/* HOISTED */
);

var _hoisted_535 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "No", -1
/* HOISTED */
);

var _hoisted_536 = [_hoisted_534, _hoisted_535];
var _hoisted_537 = {
  "class": "text-center"
};
var _hoisted_538 = ["onClick"];
var _hoisted_539 = {
  "class": "my-3"
};
var _hoisted_540 = {
  "class": "table table-bordered"
};

var _hoisted_541 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Position"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Acted"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Sequence"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Action")])], -1
/* HOISTED */
);

var _hoisted_542 = ["onUpdate:modelValue"];
var _hoisted_543 = ["onUpdate:modelValue"];
var _hoisted_544 = ["onUpdate:modelValue"];

var _hoisted_545 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Prepared", -1
/* HOISTED */
);

var _hoisted_546 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Reviewed", -1
/* HOISTED */
);

var _hoisted_547 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Noted", -1
/* HOISTED */
);

var _hoisted_548 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Approved", -1
/* HOISTED */
);

var _hoisted_549 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Recommending Approval", -1
/* HOISTED */
);

var _hoisted_550 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "As to AIP Inclusion", -1
/* HOISTED */
);

var _hoisted_551 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "As to AIP Appropriation", -1
/* HOISTED */
);

var _hoisted_552 = [_hoisted_545, _hoisted_546, _hoisted_547, _hoisted_548, _hoisted_549, _hoisted_550, _hoisted_551];
var _hoisted_553 = ["onUpdate:modelValue"];
var _hoisted_554 = ["onClick"];

var _hoisted_555 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Expected Outputs", -1
/* HOISTED */
);

var _hoisted_556 = {
  key: 0
};
var _hoisted_557 = {
  "class": "mb-3"
};
var _hoisted_558 = {
  "class": "table table-bordered"
};

var _hoisted_559 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "table table-secondary text-center align-middle"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "3"
}, "Description"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "3"
}, "Target/Indicator"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "4"
}, "Physical"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "3"
}, "Actions")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "table table-secondary text-center align-middle"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "4"
}, "Timeline/Duration")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "table table-secondary text-center align-middle"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "1st Quarter"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "2nd Quarter"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "3rd Quarter"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "4th Quarter")])], -1
/* HOISTED */
);

var _hoisted_560 = ["onUpdate:modelValue"];
var _hoisted_561 = ["onUpdate:modelValue"];
var _hoisted_562 = ["onUpdate:modelValue"];
var _hoisted_563 = ["onUpdate:modelValue"];
var _hoisted_564 = ["onUpdate:modelValue"];
var _hoisted_565 = ["onUpdate:modelValue"];
var _hoisted_566 = ["onClick"];
var _hoisted_567 = {
  "class": "mt-3"
};
var _hoisted_568 = {
  "class": "table table-bordered"
};

var _hoisted_569 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "table table-secondary text-center align-middle"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "3"
}, "Description"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "3"
}, "Target/Indicator"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "4"
}, "Physical"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "3"
}, "Actions")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "table table-secondary text-center align-middle"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "4"
}, "Timeline/Duration")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "table table-secondary text-center align-middle"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "1st Quarter"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "2nd Quarter"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "3rd Quarter"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "4th Quarter")])], -1
/* HOISTED */
);

var _hoisted_570 = ["onUpdate:modelValue", "onChange"];
var _hoisted_571 = ["onUpdate:modelValue", "onChange"];
var _hoisted_572 = ["onUpdate:modelValue", "onChange"];
var _hoisted_573 = ["onUpdate:modelValue", "onChange"];
var _hoisted_574 = ["onUpdate:modelValue", "onChange"];
var _hoisted_575 = ["onUpdate:modelValue", "onChange"];
var _hoisted_576 = ["onClick"];
var _hoisted_577 = {
  key: 0,
  "class": "table table-bordered w-100",
  style: {
    "width": "100%"
  }
};

var _hoisted_578 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Description"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Action")])], -1
/* HOISTED */
);

var _hoisted_579 = ["onUpdate:modelValue"];
var _hoisted_580 = ["onClick"];
var _hoisted_581 = {
  "class": "mt-2"
};
var _hoisted_582 = {
  "class": "table table-bordered w-100",
  style: {
    "width": "100%"
  }
};

var _hoisted_583 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "table thead-dark"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  rowspan: "2"
}, "Description"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Actions")])], -1
/* HOISTED */
);

var _hoisted_584 = ["onUpdate:modelValue", "onChange"];
var _hoisted_585 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_QuillEditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("QuillEditor");

  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");

  var _component_CommentModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CommentModal");

  var _component_multiselect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("multiselect");

  var _component_BudgetModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BudgetModal");

  var _component_StrategyModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("StrategyModal");

  var _component_ActivityModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ActivityModal");

  var _component_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("options");

  var _component_TeamModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TeamModal");

  var _component_RiskManagementModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RiskManagementModal");

  var _component_MonitoringModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MonitoringModal");

  var _component_SignatoryModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SignatoryModal");

  var _component_ExpectedOutputModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ExpectedOutputModal");

  var _component_ExpectedOutcomeModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ExpectedOutcomeModal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pageTitle) + " Profile/Design ", 1
  /* TEXT */
  ), $props.source == 'direct' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    href: "/revision/0?source=direct"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_4];
    }),
    _: 1
    /* STABLE */

  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 1,
    href: "/revision/".concat($props.idpaps)
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_5];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ form }}\n        {{ selPaps }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.form.id = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.id]]), $data.form.errors.id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.idooe), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _ctx.getImagePath('logo.png'),
    alt: "",
    "class": "img-fluid",
    style: {
      "width": "100px",
      "height": "100px"
    }
  }, null, 8
  /* PROPS */
  , _hoisted_12)]), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.office.office), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_16, [$props.editData.type === 'p' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, "PROJECT PROFILE")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, "PROJECT DESIGN"))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("I.    "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Title")];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" I. TITLE************************************************************* "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("TITLE*************************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Title "), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.handleClick('Title', $data.form.project_title, $data.form.project_title, 'project_title', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $data.form.project_title, $data.form.project_title, 'project_title', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[2] || (_cache[2] = function ($event) {
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
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.form.project_title = $event;
    }),
    type: "text",
    onInput: _cache[4] || (_cache[4] = function ($event) {
      return $options.setUnsaved(true);
    }),
    onChange: _cache[5] || (_cache[5] = function ($event) {
      return $options.updateRevisionPlans('revision_plans', 'project_title', $data.form.id, $data.form.project_title);
    })
  }, "\n                                            " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.project_title) + "\n                                    ", 545
  /* TEXT, HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.project_title]])], 10
  /* CLASS, PROPS */
  , _hoisted_23)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("PROJECT LOCATION*************************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Project Location "), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $options.handleClick('Title', $data.paps.project_location, $data.paps.project_location, 'project_location', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $data.paps.project_location, $data.paps.project_location, 'project_location', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[7] || (_cache[7] = function ($event) {
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
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.form.project_location = $event;
    }),
    type: "text",
    onInput: _cache[9] || (_cache[9] = function ($event) {
      return $options.setUnsaved(true);
    }),
    onChange: _cache[10] || (_cache[10] = function ($event) {
      return $options.updateRevisionPlans('revision_plans', 'project_location', $data.form.id, $data.form.project_location);
    })
  }, "\n                                            " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.project_location) + "\n                                    ", 545
  /* TEXT, HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.project_location]])], 10
  /* CLASS, PROPS */
  , _hoisted_25)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("IMPLEMENTATION SCHEDULE*************************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Start "), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[11] || (_cache[11] = function ($event) {
      return $options.handleClick('Title', $data.paps.date_start, $data.paps.date_start, 'date_start', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $data.paps.date_start, $data.paps.date_start, 'date_start', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[12] || (_cache[12] = function ($event) {
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
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $data.form.date_start = $event;
    }),
    onChange: _cache[14] || (_cache[14] = function ($event) {
      return $options.updateRevisionPlans('revision_plans', 'date_start', $data.form.id, $data.form.date_start);
    })
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.date_start]])], 10
  /* CLASS, PROPS */
  , _hoisted_28), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" End "), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[15] || (_cache[15] = function ($event) {
      return $options.handleClick('Title', $data.paps.date_end, $data.paps.date_end, 'date_end', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $data.paps.date_end, $data.paps.date_end, 'date_end', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[16] || (_cache[16] = function ($event) {
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
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return $data.form.date_end = $event;
    }),
    onChange: _cache[18] || (_cache[18] = function ($event) {
      return $options.updateRevisionPlans('revision_plans', 'date_end', $data.form.id, $data.form.date_end);
    })
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.date_end]])], 10
  /* CLASS, PROPS */
  , _hoisted_30)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("INTENDED BENEFICIARIES******************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Male "), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[19] || (_cache[19] = function ($event) {
      return $options.handleClick('Title', $data.paps.beneficiary_male, $data.paps.beneficiary_male, 'beneficiary_male', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $data.paps.beneficiary_male, $data.paps.beneficiary_male, 'beneficiary_male', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[20] || (_cache[20] = function ($event) {
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
    "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
      return $data.form.beneficiary_male = $event;
    }),
    type: "text",
    onInput: _cache[22] || (_cache[22] = function ($event) {
      return $options.setUnsaved(true);
    }),
    onChange: _cache[23] || (_cache[23] = function ($event) {
      return $options.updateRevisionPlans('revision_plans', 'beneficiary_male', $data.form.id, $data.form.beneficiary_male);
    })
  }, "\n                                            " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.beneficiary_male) + "\n                                    ", 545
  /* TEXT, HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.beneficiary_male]])], 10
  /* CLASS, PROPS */
  , _hoisted_33), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Female "), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[24] || (_cache[24] = function ($event) {
      return $options.handleClick('Title', $data.paps.beneficiary_female, $data.paps.beneficiary_female, 'beneficiary_female', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $data.paps.beneficiary_female, $data.paps.beneficiary_female, 'beneficiary_female', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[25] || (_cache[25] = function ($event) {
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
    "onUpdate:modelValue": _cache[26] || (_cache[26] = function ($event) {
      return $data.form.beneficiary_female = $event;
    }),
    type: "text",
    onInput: _cache[27] || (_cache[27] = function ($event) {
      return $options.setUnsaved(true);
    }),
    onChange: _cache[28] || (_cache[28] = function ($event) {
      return $options.updateRevisionPlans('revision_plans', 'beneficiary_female', $data.form.id, $data.form.beneficiary_female);
    })
  }, "\n                                            " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.beneficiary_female) + "\n                                    ", 545
  /* TEXT, HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.beneficiary_female]])], 10
  /* CLASS, PROPS */
  , _hoisted_35), _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    id: $data.paps.id + '_revision_plans_beneficiary_total',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', _ctx.format_number_conv($data.paps.beneficiary_male + $data.paps.beneficiary_female, 0, true), _ctx.format_number_conv($data.paps.beneficiary_male + $data.paps.beneficiary_female, 0, true), 'beneficiary_total', 'revision_plans', $data.paps, $data.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat($data.form.beneficiary_male) + parseFloat($data.form.beneficiary_female), 0, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[29] || (_cache[29] = function ($event) {
      return $options.handleClick('Title', _ctx.format_number_conv($data.paps.beneficiary_male + $data.paps.beneficiary_female, 0, true), _ctx.format_number_conv($data.paps.beneficiary_male + $data.paps.beneficiary_female, 0, true), 'beneficiary_total', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', _ctx.format_number_conv($data.paps.beneficiary_male + $data.paps.beneficiary_female, 0, true), _ctx.format_number_conv($data.paps.beneficiary_male + $data.paps.beneficiary_female, 0, true), 'beneficiary_total', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[30] || (_cache[30] = function ($event) {
      return $options.handleClick('Title', _ctx.format_number_conv($data.paps.beneficiary_male + $data.paps.beneficiary_female, 0, true), _ctx.format_number_conv($data.paps.beneficiary_male + $data.paps.beneficiary_female, 0, true), 'beneficiary_total', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_37)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("BASELINE DISAGGREGATED DATA******************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Male "), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[31] || (_cache[31] = function ($event) {
      return $options.handleClick('Title', $data.paps.baseline_male, $data.paps.baseline_male, 'baseline_male', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $data.paps.baseline_male, $data.paps.baseline_male, 'baseline_male', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[32] || (_cache[32] = function ($event) {
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
    "onUpdate:modelValue": _cache[33] || (_cache[33] = function ($event) {
      return $data.form.baseline_male = $event;
    }),
    type: "text",
    onInput: _cache[34] || (_cache[34] = function ($event) {
      return $options.setUnsaved(true);
    }),
    onChange: _cache[35] || (_cache[35] = function ($event) {
      return $options.updateRevisionPlans('revision_plans', 'baseline_male', $data.form.id, $data.form.baseline_male);
    })
  }, "\n                                            " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.baseline_male) + "\n                                    ", 545
  /* TEXT, HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.baseline_male]])], 10
  /* CLASS, PROPS */
  , _hoisted_40), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Female "), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[36] || (_cache[36] = function ($event) {
      return $options.handleClick('Title', $data.paps.baseline_female, $data.paps.baseline_female, 'baseline_female', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $data.paps.baseline_female, $data.paps.baseline_female, 'baseline_female', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[37] || (_cache[37] = function ($event) {
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
    "onUpdate:modelValue": _cache[38] || (_cache[38] = function ($event) {
      return $data.form.baseline_female = $event;
    }),
    type: "text",
    onInput: _cache[39] || (_cache[39] = function ($event) {
      return $options.setUnsaved(true);
    }),
    onChange: _cache[40] || (_cache[40] = function ($event) {
      return $options.updateRevisionPlans('revision_plans', 'baseline_female', $data.form.id, $data.form.baseline_female);
    })
  }, "\n                                            " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.baseline_female) + "\n                                    ", 545
  /* TEXT, HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.baseline_female]])], 10
  /* CLASS, PROPS */
  , _hoisted_42), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Data Source "), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[41] || (_cache[41] = function ($event) {
      return $options.handleClick('Title', $data.paps.data_source, $data.paps.data_source, 'data_source', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $data.paps.data_source, $data.paps.data_source, 'data_source', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[42] || (_cache[42] = function ($event) {
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
    "onUpdate:modelValue": _cache[43] || (_cache[43] = function ($event) {
      return $data.form.data_source = $event;
    }),
    type: "text",
    onInput: _cache[44] || (_cache[44] = function ($event) {
      return $options.setUnsaved(true);
    }),
    onChange: _cache[45] || (_cache[45] = function ($event) {
      return $options.updateRevisionPlans('revision_plans', 'data_source', $data.form.id, $data.form.data_source);
    })
  }, "\n                                            " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.data_source) + "\n                                    ", 545
  /* TEXT, HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.data_source]])], 10
  /* CLASS, PROPS */
  , _hoisted_44), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th colspan=\"1\">Total</th>\n                                <td colspan=\"1\" :class=\"{\n                                    'text-danger': has_comment('Title',(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),'baseline_total','revision_plans', paps, paps.comments)\n                                }\">{{ format_number_conv(paps.baseline_male + paps.baseline_female, 0, true) }}\n                                    <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                        @click=\"handleClick('Title',(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),'baseline_total','revision_plans', paps, paps.comments)\">*\n                                    </button>\n                                    <button v-if=\"has_comment('Title',(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),'baseline_total','revision_plans', paps, paps.comments)\" class=\"superscript-btn\"\n                                        @click=\"handleClick('Title',(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),'baseline_total','revision_plans', paps, paps.comments)\">*\n                                    </button>\n                                </td> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("PROJECT COST*******************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_45, _hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Title', 'Amount', _ctx.imp_amount, 'amount', 'revision_plans', $data.paps, $data.paps.comments)
    }]),
    id: $data.paps.id + '_revision_plans_amount'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ format_number_conv(imp_amount, 2, true) }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.overallBudget.toLocaleString()) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[46] || (_cache[46] = function ($event) {
      return $options.handleClick('Title', 'Amount', _ctx.imp_amount, 'amount', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', 'Amount', _ctx.imp_amount, 'amount', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[47] || (_cache[47] = function ($event) {
      return $options.handleClick('Title', 'Amount', _ctx.imp_amount, 'amount', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_47), _hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    id: $data.paps.id + '_revision_plans_attributed_amount',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Title', 'GAD Attributed Amount', _ctx.imp_amount, 'attributed_amount', 'revision_plans', $data.paps, $data.paps.comments)
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ format_number_conv((imp_amount * (paps.hgdg_score/20)), 2, true) }} "), parseFloat($data.paps.hgdg_score) > 4 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($options.overallBudget * ($data.paps.hgdg_score / 20), 2, true)), 1
  /* TEXT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_51, "0.00")), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 2,
    "class": "superscript-btn",
    onClick: _cache[48] || (_cache[48] = function ($event) {
      return $options.handleClick('Title', 'GAD Attributed Amount', _ctx.format_number_conv(_ctx.imp_amount * ($data.paps.hgdg_score / 20), 2, true), 'attributed_amount', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', 'GAD Attributed Amount', _ctx.format_number_conv(_ctx.imp_amount * ($data.paps.hgdg_score / 20), 2, true), 'attributed_amount', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 3,
    "class": "superscript-btn",
    onClick: _cache[49] || (_cache[49] = function ($event) {
      return $options.handleClick('Title', 'GAD Attributed Amount', _ctx.format_number_conv(_ctx.imp_amount * ($data.paps.hgdg_score / 20), 2, true), 'attributed_amount', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_49)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("HGDG*************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_52, [$data.paps.checklist ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', 'HGDG Checklist', $data.paps.checklist.box_number + ' ' + $data.paps.checklist.sector, 'HGDG Checklist', 'revision_plans', $data.paps, $data.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" HGDG Checklist "), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[50] || (_cache[50] = function ($event) {
      return $options.handleClick('Title', 'HGDG Checklist', $data.paps.checklist.box_number + ' ' + $data.paps.checklist.sector, 'HGDG Checklist', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', 'HGDG Checklist', $data.paps.checklist.box_number + ' ' + $data.paps.checklist.sector, 'HGDG Checklist', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[51] || (_cache[51] = function ($event) {
      return $options.handleClick('Title', 'HGDG Checklist', $data.paps.checklist.box_number + ' ' + $data.paps.checklist.sector, 'HGDG Checklist', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_54, " HGDG Checklist (No Checklist selected) "))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "3",
    id: $data.paps.id + '_revision_plans_HGDG Checklist'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    type: "number",
    "onUpdate:modelValue": _cache[52] || (_cache[52] = function ($event) {
      return $data.form.checklist_id = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off",
    onChange: _cache[53] || (_cache[53] = function ($event) {
      return $options.updateRevisionPlans('revision_plans', 'checklist_id', $data.form.id, $data.form.checklist_id);
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.hgdgs, function (hgdg) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: hgdg.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(hgdg.box_number) + ". " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(hgdg.sector), 9
    /* TEXT, PROPS */
    , _hoisted_56);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.checklist_id]])], 8
  /* PROPS */
  , _hoisted_55), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/HGDGScore/".concat($data.paps.id),
    style: {
      "color": "white"
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("HGDG Score ")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[54] || (_cache[54] = function ($event) {
      return $options.handleClick('Title', 'HGDG Score', $data.paps.hgdg_score, 'hgdg_score', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', 'HGDG Score', $data.paps.hgdg_score, 'hgdg_score', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[55] || (_cache[55] = function ($event) {
      return $options.handleClick('Title', 'HGDG Score', $data.paps.hgdg_score, 'hgdg_score', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    id: $data.paps.id + '_revision_plans_hgdg_score',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', 'HGDG Score', $data.paps.hgdg_score, 'hgdg_score', 'revision_plans', $data.paps, $data.paps.comments)
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.editData.hgdg_score), 11
  /* TEXT, CLASS, PROPS */
  , _hoisted_58)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" II. RATIONALE***************************************************************************************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Rationale', 'rationale', $data.paps.rationale, 'rationale', 'revision_plans', $data.paps, $data.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("II. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.department_code_user === '04' || _ctx.department_code_user === _ctx.department_code_project ? "/revision/edit/".concat($data.paps.id) : null,
    target: "_blank",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Rationale', 'rationale', $data.paps.rationale, 'rationale', 'revision_plans', $data.paps, $data.paps.comments)
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Rationale ")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href", "class"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[56] || (_cache[56] = function ($event) {
      return $options.handleClick('Rationale', 'rationale', $data.paps.rationale, 'rationale', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Rationale', 'rationale', $data.paps.rationale, 'rationale', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[57] || (_cache[57] = function ($event) {
      return $options.handleClick('Rationale', 'rationale', $data.paps.rationale, 'rationale', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )]), _hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuillEditor, {
    theme: "snow",
    content: $data.form.rationale,
    "onUpdate:content": [_cache[58] || (_cache[58] = function ($event) {
      return $data.form.rationale = $event;
    }), _cache[59] || (_cache[59] = function (val) {
      return $options.updateRevisionPlans('revision_plans', 'rationale', $data.form.id, val);
    })],
    contentType: "html",
    toolbar: "essential"
  }, null, 8
  /* PROPS */
  , ["content"])]), _hoisted_62]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("III. OBJECTIVES ****************************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Objectives', 'objective', $data.paps.objective, 'objective', 'revision_plans', $data.paps, $data.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("III. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.department_code_user === '04' || _ctx.department_code_user === _ctx.department_code_project ? "/revision/edit/".concat($data.paps.id) : null,
    target: "_blank",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Objectives', 'objective', $data.paps.objective, 'objective', 'revision_plans', $data.paps, $data.paps.comments)
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Objectives ")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href", "class"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[60] || (_cache[60] = function ($event) {
      return $options.handleClick('Objectives', 'objective', $data.paps.objective, 'objective', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Objectives', 'objective', $data.paps.objective, 'objective', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[61] || (_cache[61] = function ($event) {
      return $options.handleClick('Objectives', 'objective', $data.paps.objective, 'objective', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )]), _hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuillEditor, {
    theme: "snow",
    content: $data.form.objective,
    "onUpdate:content": [_cache[62] || (_cache[62] = function ($event) {
      return $data.form.objective = $event;
    }), _cache[63] || (_cache[63] = function (val) {
      return $options.updateRevisionPlans('revision_plans', 'objective', $data.form.id, val);
    })],
    contentType: "html",
    toolbar: "essential"
  }, null, 8
  /* PROPS */
  , ["content"])]), _hoisted_66]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("IV. TARGET BENEFICIARIES *******************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Beneficiaries', 'beneficiaries', $data.paps.beneficiaries, 'beneficiaries', 'revision_plans', $data.paps, $data.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("IV. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.department_code_user === '04' || _ctx.department_code_user === _ctx.department_code_project ? "/revision/edit/".concat($data.paps.id) : null,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Beneficiaries', 'beneficiaries', $data.paps.beneficiaries, 'beneficiaries', 'revision_plans', $data.paps, $data.paps.comments)
    }),
    target: "_blank"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Target Beneficiaries ")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href", "class"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[64] || (_cache[64] = function ($event) {
      return $options.handleClick('Beneficiaries', 'beneficiaries', $data.paps.beneficiaries, 'beneficiaries', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Beneficiaries', 'beneficiaries', $data.paps.beneficiaries, 'beneficiaries', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[65] || (_cache[65] = function ($event) {
      return $options.handleClick('Beneficiaries', 'beneficiaries', $data.paps.beneficiaries, 'beneficiaries', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )]), _hoisted_68, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuillEditor, {
    theme: "snow",
    content: $data.form.beneficiaries,
    "onUpdate:content": [_cache[66] || (_cache[66] = function ($event) {
      return $data.form.beneficiaries = $event;
    }), _cache[67] || (_cache[67] = function (val) {
      return $options.updateRevisionPlans('revision_plans', 'beneficiaries', $data.form.id, val);
    })],
    contentType: "html",
    toolbar: "essential"
  }, null, 8
  /* PROPS */
  , ["content"])]), _hoisted_70]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("V. IMPLEMENTATION SCHEDULE/WORKPLAN *******************************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /strategies-and-activities/${dat.id} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" V. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.department_code_user === '04' || _ctx.department_code_user === _ctx.department_code_project ? "/strategies-and-activities/".concat($data.paps.id) : null,
    target: "_blank"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Implementation Schedule/Workplan ")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm text-white",
    onClick: _cache[68] || (_cache[68] = function ($event) {
      return $options.showStrategyModal();
    })
  }, " Add Strategies ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" class=\"table-responsive\" style=\"max-height: 500px; overflow-y: auto;\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_72, [_hoisted_73, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.implementation, function (dat, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: dat.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" STRATEGIES***************************************************************************************************** "), $data.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(), 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_75)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_76)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
      "class": "form-control transparent-bg",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return dat.description = $event;
      },
      type: "text",
      onInput: _cache[69] || (_cache[69] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateRevisionPlans('strategies', 'description', dat.id, dat.description);
      }
    }, "\n                                                        " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.description) + "\n                                                ", 41
    /* TEXT, PROPS, HYDRATE_EVENTS */
    , _hoisted_77), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, dat.description]])], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Implementation Plan', 'strategies', dat.description, 'target_indicator', 'strategy_projects', dat, dat.comments)
      })
    }, [$data.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_78, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.target_indicator), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$data.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.gad_issue), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$data.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_80, [dat.date_from ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_81, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(dat.date_from)), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), dat.date_from && dat.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_82, " to ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), dat.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_83, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(dat.date_to)), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$data.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_84, [dat.strategyProject[0] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 0
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(dat.strategyProject[0].expected_output, function (eo) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(eo.description), 1
      /* TEXT */
      ), _hoisted_85]);
    }), 256
    /* UNKEYED_FRAGMENT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), dat.strategyProject[0] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 1
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(dat.strategyProject[0].expected_outcome, function (eo) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(eo.description), 1
      /* TEXT */
      ), _hoisted_86]);
    }), 256
    /* UNKEYED_FRAGMENT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$data.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_87, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total), 2, true)), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$data.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_88, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total), 2, true)), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$data.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_89, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total), 2, true)), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$data.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_90)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_91, [$data.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_92, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total) + parseFloat(dat.mooe_total) + parseFloat(dat.co_total), 2, true)), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$data.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_93, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.ccet_code), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$data.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_94, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.responsible), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: 1,
      id: dat.id + '_strategy_projects_strategy',
      style: {
        "background-color": "lightgrey",
        "font-weight": "bold"
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments)
      }),
      colspan: "12"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_96, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
      "class": "form-control transparent-bg",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return dat.description = $event;
      },
      type: "text",
      onInput: _cache[70] || (_cache[70] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateRevisionPlans('strategies', 'description', dat.id, dat.description);
      }
    }, "\n                                                            " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.description) + "\n                                                    ", 41
    /* TEXT, PROPS, HYDRATE_EVENTS */
    , _hoisted_97), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, dat.description]])])]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_98)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_99)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-primary btn-sm text-white",
      onClick: function onClick($event) {
        return $options.showActivityModal(dat.id);
      }
    }, " Add Activities ", 8
    /* PROPS */
    , _hoisted_100), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-danger btn-sm text-white",
      onClick: function onClick($event) {
        return $options.deleteData(dat.id, 'strategies', dat.description);
      }
    }, " 🗑 Delete Strategy ", 8
    /* PROPS */
    , _hoisted_101)])], 8
    /* PROPS */
    , _hoisted_95)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ACTIVITIES **************************************************************************************************** "), dat.activity && $data.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
        id: act.id + '_activity_projects_activities'
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        "class": "form-control transparent-bg",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.description = $event;
        },
        type: "text",
        onInput: _cache[71] || (_cache[71] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activities', 'description', act.id, act.description);
        }
      }, "\n                                                            " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.description) + "\n                                                    ", 41
      /* TEXT, PROPS, HYDRATE_EVENTS */
      , _hoisted_103), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.description]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_104)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_105)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
      /* CLASS, PROPS */
      , _hoisted_102), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TARGET/INDICATORs, EXPECTED OUTPUTS, GAD ISSUE, IMPLEMENTATION DATES"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_106, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_107, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" IF THE ACTIVITY HAS OUTCOMES OR OUTPUTS "), $options.getPairedOutputs(act.activityProject[0]) && $options.getPairedOutputs(act.activityProject[0]).length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", _hoisted_108, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.getPairedOutputs(act.activityProject[0]), function (pair, i) {
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
        }, [$data.paps.is_strategy_based == 0 && pair.target_indicator ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_110, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pair.target_indicator) + " ", 1
        /* TEXT */
        ), pair.quantity > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_111, " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pair.quantity), 1
        /* TEXT */
        )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_112, _hoisted_113, $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'Target/Indicator', pair.target_indicator, 'target_indicator', pair.table, pair, pair.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_114)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'Target/Indicator', pair.target_indicator, 'target_indicator', pair.table, pair, pair.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 2,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'Target/Indicator', pair.target_indicator, 'target_indicator', pair.table, pair, pair.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_115)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
        /* PROPS */
        , _hoisted_109), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GAD Issue "), i === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
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
        }, [$data.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_117, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.gad_issue = $event;
          },
          type: "text",
          onInput: _cache[72] || (_cache[72] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('activity_projects', 'gad_issue', act.activity_id, act.gad_issue);
          }
        }, "\n                                                                                    " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.gad_issue) + "\n                                                                            ", 41
        /* TEXT, PROPS, HYDRATE_EVENTS */
        , _hoisted_118), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.gad_issue]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_119)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_120)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
        /* CLASS, PROPS */
        , _hoisted_116)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Timeline "), i === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
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
        }, [$data.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_122, [act.date_from ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_123, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "class": "form-control",
          type: "date",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.date_from = $event;
          },
          id: act.activity_id + '_activity_projects_date_from',
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('activity_projects', 'date_from', act.activity_id, act.date_from);
          }
        }, null, 40
        /* PROPS, HYDRATE_EVENTS */
        , _hoisted_124), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.date_from]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_125)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_126)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), act.date_from && act.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_127, " to ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), act.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_128, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "class": "form-control",
          type: "date",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.date_to = $event;
          },
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('activity_projects', 'date_to', act.activity_id, act.date_to);
          },
          id: act.activity_id + '_activity_projects_date_to'
        }, null, 40
        /* PROPS, HYDRATE_EVENTS */
        , _hoisted_129), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.date_to]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_130)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_131)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
        /* CLASS, PROPS */
        , _hoisted_121)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Expected Outputs/Outcomes "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_132, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" OUTPUTS*********************************************************************** "), pair.output_description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
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
          onInput: _cache[73] || (_cache[73] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outputs', 'description', pair.id, pair.output_description);
          }
        }, "\n                                                                                ", 40
        /* PROPS, HYDRATE_EVENTS */
        , _hoisted_133), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, pair.output_description]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span v-if=\"pair.quantity>0\" > {{ pair.quantity }} </span> {{ pair.output_description }} gfhfghfghgfhgfh "), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_134)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_135)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
        /* CLASS */
        )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" OUTCOMES*********************************************************************** "), pair.outcome_description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
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
          onInput: _cache[74] || (_cache[74] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outcomes', 'description', pair.id, pair.outcome_description);
          }
        }, "\n                                                                            ", 40
        /* PROPS, HYDRATE_EVENTS */
        , _hoisted_137), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, pair.outcome_description]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_138)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_139)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
        /* CLASS, PROPS */
        , _hoisted_136)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 1
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" IF THE ACTIVITY HAS NO OUTCOMES OR OUTPUTS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_140, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <template > "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_141, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GAD Issue "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
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
      }, [$data.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_143, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        "class": "form-control transparent-bg",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.gad_issue = $event;
        },
        type: "text",
        onInput: _cache[75] || (_cache[75] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'gad_issue', act.activity_id, act.gad_issue);
        }
      }, "\n                                                                                        " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.gad_issue) + "\n                                                                                ", 41
      /* TEXT, PROPS, HYDRATE_EVENTS */
      , _hoisted_144), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.gad_issue]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_145)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_146)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
      /* CLASS, PROPS */
      , _hoisted_142), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Timeline "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        style: {
          "width": "25%",
          "border": "1px solid #000",
          "padding": "4px"
        },
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["align-top", {
          'text-danger': $options.has_comment('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments) || $options.has_comment('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments)
        }]),
        rowspan: $options.getPairedOutputs(act.activityProject[0]).length
      }, [$data.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_148, [act.date_from ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
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
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_150), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.date_from]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_151)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_152)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
      /* PROPS */
      , _hoisted_149)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), act.date_from && act.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_153, " to ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), act.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
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
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_155), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.date_to]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_156)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_157)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
      /* PROPS */
      , _hoisted_154)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
      /* CLASS, PROPS */
      , _hoisted_147), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Expected Outcome "), _hoisted_158]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </template> ")])], 2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PERSONNEL SERVICES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_ps_total'
      }, [$data.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_160, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q1:"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.ps_q1 = $event;
        },
        onInput: _cache[76] || (_cache[76] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'ps_q1', act.activity_id, act.ps_q1);
        }
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_161), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ps_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q2:"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.ps_q2 = $event;
        },
        onInput: _cache[77] || (_cache[77] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'ps_q2', act.activity_id, act.ps_q2);
        }
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_162), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ps_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q3:"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.ps_q3 = $event;
        },
        onInput: _cache[78] || (_cache[78] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'ps_q3', act.activity_id, act.ps_q3);
        }
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_163), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ps_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q4:"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.ps_q4 = $event;
        },
        onInput: _cache[79] || (_cache[79] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'ps_q4', act.activity_id, act.ps_q4);
        }
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_164), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ps_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.ps_q1) + parseFloat(act.ps_q2) + parseFloat(act.ps_q3) + parseFloat(act.ps_q4), 2, true)), 1
      /* TEXT */
      )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ dat.id + '_activity_projects_ps_total' }} "), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_165)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_166)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
      /* CLASS, PROPS */
      , _hoisted_159), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MAINTENANCE, OPERATING, AND OTHER EXPENSES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments)
        }),
        id: dat.id + '_activity_projects_mooe_total'
      }, [$data.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_168, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q1:"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.mooe_q1 = $event;
        },
        onInput: _cache[80] || (_cache[80] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'mooe_q1', act.activity_id, act.mooe_q1);
        }
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_169), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.mooe_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q2:"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.mooe_q2 = $event;
        },
        onInput: _cache[81] || (_cache[81] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'mooe_q2', act.activity_id, act.mooe_q2);
        }
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_170), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.mooe_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q3:"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.mooe_q3 = $event;
        },
        onInput: _cache[82] || (_cache[82] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'mooe_q3', act.activity_id, act.mooe_q3);
        }
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_171), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.mooe_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q4:"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.mooe_q4 = $event;
        },
        onInput: _cache[83] || (_cache[83] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'mooe_q4', act.activity_id, act.mooe_q4);
        }
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_172), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.mooe_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.mooe_q1) + parseFloat(act.mooe_q2) + parseFloat(act.mooe_q3) + parseFloat(act.mooe_q4), 2, true)), 1
      /* TEXT */
      )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_173)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_174)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
      /* CLASS, PROPS */
      , _hoisted_167), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FINANCIAL EXPENSES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments)
        }),
        id: dat.id + '_activity_projects_fe_total'
      }, [$data.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_176, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q1:"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.fe_q1 = $event;
        },
        onInput: _cache[84] || (_cache[84] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'fe_q1', act.activity_id, act.fe_q1);
        }
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_177), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.fe_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q2:"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.fe_q2 = $event;
        },
        onInput: _cache[85] || (_cache[85] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'fe_q2', act.activity_id, act.fe_q2);
        }
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_178), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.fe_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q3:"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.fe_q3 = $event;
        },
        onInput: _cache[86] || (_cache[86] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'fe_q3', act.activity_id, act.fe_q3);
        }
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_179), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.fe_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q4:"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.fe_q4 = $event;
        },
        onInput: _cache[87] || (_cache[87] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'fe_q4', act.activity_id, act.fe_q4);
        }
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_180), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.fe_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.fe_q1) + parseFloat(act.fe_q2) + parseFloat(act.fe_q3) + parseFloat(act.fe_q4), 2, true)), 1
      /* TEXT */
      )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_181)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_182)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
      /* CLASS, PROPS */
      , _hoisted_175), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CAPITAL OUTLAY "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_co_total'
      }, [$data.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_184, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q1:"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.co_q1 = $event;
        },
        onInput: _cache[88] || (_cache[88] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'co_q1', act.activity_id, act.co_q1);
        }
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_185), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.co_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q2:"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.co_q2 = $event;
        },
        onInput: _cache[89] || (_cache[89] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'co_q2', act.activity_id, act.co_q2);
        }
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_186), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.co_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q3:"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.co_q3 = $event;
        },
        onInput: _cache[90] || (_cache[90] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'co_q3', act.activity_id, act.co_q3);
        }
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_187), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.co_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q4:"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.co_q4 = $event;
        },
        onInput: _cache[91] || (_cache[91] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'co_q4', act.activity_id, act.co_q4);
        }
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_188), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.co_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.co_q1) + parseFloat(act.co_q2) + parseFloat(act.co_q3) + parseFloat(act.co_q4), 2, true)), 1
      /* TEXT */
      )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_189)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_190)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
      /* CLASS, PROPS */
      , _hoisted_183), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span v-if=\"paps.is_strategy_based==0\">{{ format_number_conv(parseFloat(act.ps_total) + parseFloat(act.mooe_total)+ parseFloat(act.co_total),2,true) }}</span> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q1: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        value: parseFloat(act.ps_q1) + parseFloat(act.mooe_q1) + parseFloat(act.fe_q1) + parseFloat(act.co_q1),
        disabled: ""
      }, null, 8
      /* PROPS */
      , _hoisted_191)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q2: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        value: parseFloat(act.ps_q2) + parseFloat(act.mooe_q2) + parseFloat(act.fe_q2) + parseFloat(act.co_q2),
        disabled: ""
      }, null, 8
      /* PROPS */
      , _hoisted_192)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q3: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        value: parseFloat(act.ps_q3) + parseFloat(act.mooe_q3) + parseFloat(act.fe_q3) + parseFloat(act.co_q3),
        disabled: ""
      }, null, 8
      /* PROPS */
      , _hoisted_193)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Q4: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "number",
        value: parseFloat(act.ps_q4) + parseFloat(act.mooe_q4) + parseFloat(act.fe_q4) + parseFloat(act.co_q4),
        disabled: ""
      }, null, 8
      /* PROPS */
      , _hoisted_194)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SUM OF ALL 16 VALUES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.ps_q1) + parseFloat(act.mooe_q1) + parseFloat(act.fe_q1) + parseFloat(act.co_q1) + parseFloat(act.ps_q2) + parseFloat(act.mooe_q2) + parseFloat(act.fe_q2) + parseFloat(act.co_q2) + parseFloat(act.ps_q3) + parseFloat(act.mooe_q3) + parseFloat(act.fe_q3) + parseFloat(act.co_q3) + parseFloat(act.ps_q4) + parseFloat(act.mooe_q4) + parseFloat(act.fe_q4) + parseFloat(act.co_q4), 2, true)), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CCET Code "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_ccet_code'
      }, [$data.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_196, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        "class": "form-control transparent-bg",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.ccet_code = $event;
        },
        type: "text",
        onInput: _cache[92] || (_cache[92] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'ccet_code', act.activity_id, act.ccet_code);
        }
      }, "\n                                                                " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.ccet_code) + "\n                                                        ", 41
      /* TEXT, PROPS, HYDRATE_EVENTS */
      , _hoisted_197), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ccet_code]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_198)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_199)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
      /* CLASS, PROPS */
      , _hoisted_195), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" RESPONSIBLE INDIVIDUAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_responsible'
      }, [$data.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_201, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        "class": "form-control transparent-bg",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return act.responsible = $event;
        },
        type: "text",
        onInput: _cache[93] || (_cache[93] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateRevisionPlans('activity_projects', 'responsible', act.activity_id, act.responsible);
        }
      }, "\n                                                                " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.ccet_code) + "\n                                                        ", 41
      /* TEXT, PROPS, HYDRATE_EVENTS */
      , _hoisted_202), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.responsible]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_203)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_204)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
      /* CLASS, PROPS */
      , _hoisted_200), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Actions"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" activity_id {{ act.activityProject[0].activity_id }}\n                                                    activity_project_id: {{ act.activityProject[0].id }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary btn-sm text-white",
        onClick: function onClick($event) {
          return $options.showExpectedOutputModal(act.activityProject[0].expected_output, act.activityProject[0].activity_id, act.activityProject[0].id);
        }
      }, " Expected Outputs ", 8
      /* PROPS */
      , _hoisted_205), _hoisted_206, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary btn-sm text-white",
        onClick: function onClick($event) {
          return $options.showExpectedOutcomeModal(act.activityProject[0].expected_outcome, act.activityProject[0].activity_id, act.activityProject[0].id);
        }
      }, " Expected Outcomes ", 8
      /* PROPS */
      , _hoisted_207), _hoisted_208, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary btn-sm text-white",
        onClick: function onClick($event) {
          return _ctx.showExpectedOutcomesModal(act.id);
        }
      }, " Edit Activity ", 8
      /* PROPS */
      , _hoisted_209), _hoisted_210, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-danger btn-sm text-white",
        onClick: function onClick($event) {
          return $options.deleteData(act.id, 'activities', dat.description);
        }
      }, " 🗑 Delete Activity ", 8
      /* PROPS */
      , _hoisted_211), _hoisted_212])]);
    }), 128
    /* KEYED_FRAGMENT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
    /* STABLE_FRAGMENT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TOTALS*********************************************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_213, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PS TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_ps, 2, true), _ctx.format_number_conv(_ctx.v_imp_ps, 2, true), 'imp_ps', 'revision_plans', $data.paps, $data.paps.comments)
    }),
    id: $data.paps.id + '_revision_plans_imp_ps'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ format_number_conv(v_imp_ps,2,true) }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ paps.id+'_revision_plans_imp_ps' }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.totalImplementationPS.toLocaleString()) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[94] || (_cache[94] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_ps, 2, true), _ctx.format_number_conv(_ctx.v_imp_ps, 2, true), 'imp_ps', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_ps, 2, true), _ctx.format_number_conv(_ctx.v_imp_ps, 2, true), 'imp_ps', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[95] || (_cache[95] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_ps, 2, true), _ctx.format_number_conv(_ctx.v_imp_ps, 2, true), 'imp_ps', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_214), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_mooe, 2, true), _ctx.format_number_conv(_ctx.v_imp_mooe, 2, true), 'imp_mooe', 'revision_plans', $data.paps, $data.paps.comments)
    }),
    id: $data.paps.id + '_revision_plans_imp_mooe'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ format_number_conv(v_imp_mooe,2,true) }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.totalImplementationMOOE.toLocaleString()) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[96] || (_cache[96] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_mooe, 2, true), _ctx.format_number_conv(_ctx.v_imp_mooe, 2, true), 'imp_mooe', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_mooe, 2, true), _ctx.format_number_conv(_ctx.v_imp_mooe, 2, true), 'imp_mooe', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[97] || (_cache[97] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_mooe, 2, true), _ctx.format_number_conv(_ctx.v_imp_mooe, 2, true), 'imp_mooe', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_215), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FE TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_fe, 2, true), _ctx.format_number_conv(_ctx.v_imp_fe, 2, true), 'imp_fe', 'revision_plans', $data.paps, $data.paps.comments)
    }),
    id: $data.paps.id + '_revision_plans_imp_fe'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ format_number_conv(v_imp_fe,2,true) }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.totalImplementationFE.toLocaleString()) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[98] || (_cache[98] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_fe, 2, true), _ctx.format_number_conv(_ctx.v_imp_fe, 2, true), 'imp_fe', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_fe, 2, true), _ctx.format_number_conv(_ctx.v_imp_fe, 2, true), 'imp_fe', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[99] || (_cache[99] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_fe, 2, true), _ctx.format_number_conv(_ctx.v_imp_fe, 2, true), 'imp_fe', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_216), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CO TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_co, 2, true), _ctx.format_number_conv(_ctx.v_imp_co, 2, true), 'imp_co', 'revision_plans', $data.paps, $data.paps.comments)
    }),
    id: $data.paps.id + '_revision_plans_imp_fe'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ format_number_conv(v_imp_co,2,true)}} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.totalImplementationCO.toLocaleString()) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[100] || (_cache[100] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_co, 2, true), _ctx.format_number_conv(_ctx.v_imp_co, 2, true), 'imp_co', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_co, 2, true), _ctx.format_number_conv(_ctx.v_imp_co, 2, true), 'imp_co', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[101] || (_cache[101] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv(_ctx.v_imp_co, 2, true), _ctx.format_number_conv(_ctx.v_imp_co, 2, true), 'imp_co', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_217), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv(_ctx.imp_amount, 2, true), _ctx.format_number_conv(_ctx.imp_amount, 2, true), 'total_imp_amount', 'revision_plans', $data.paps, $data.paps.comments)
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ format_number_conv(imp_amount,2,true) }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.totalImplementationAll.toLocaleString()) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[102] || (_cache[102] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv(_ctx.imp_amount, 2, true), _ctx.format_number_conv(_ctx.imp_amount, 2, true), 'total_imp_amount', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv(_ctx.imp_amount, 2, true), _ctx.format_number_conv(_ctx.imp_amount, 2, true), 'total_imp_amount', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[103] || (_cache[103] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv(_ctx.imp_amount, 2, true), _ctx.format_number_conv(_ctx.imp_amount, 2, true), 'total_imp_amount', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), _hoisted_218, _hoisted_219, _hoisted_220])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("VI. BUDGETARY REQUIREMENTS************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_221, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" VI. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.department_code_user === '04' || _ctx.department_code_user === _ctx.department_code_project ? "/budget/".concat($data.paps.id) : null
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Estimated Cost/Budgetary Requirements ")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_222, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_223, _hoisted_224, $props.source === 'sip' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", _hoisted_225, "SIP Number")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_226, _hoisted_227, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th>Edit</th> "), _hoisted_228])]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.groupedBudget, function (gadGroups, category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tbody", {
      key: category
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CATEGORY HEADER "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_229, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_230, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatCategory(category)), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GAD + NON-GAD GROUPS "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(gadGroups, function (rows, gadType) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: gadType
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SUB HEADER (GAD / NON-GAD) "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_231, [_hoisted_232, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_233, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_234, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(gadType) + " ", 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-success btn-sm text-white",
        onClick: function onClick($event) {
          return $options.showBudgetModal($data.paps.id, gadType, $options.formatCategory(category));
        }
      }, " ADD NEW ", 8
      /* PROPS */
      , _hoisted_235)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DATA ROWS "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(rows, function (row) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: row.id
        }, [_hoisted_236, _hoisted_237, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" BUDGET PARTICULARS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
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
          onInput: _cache[104] || (_cache[104] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('budget_requirements', 'particulars', row.id, row.particulars);
          }
        }, "\n                                                    " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.particulars) + "\n                                            ", 41
        /* TEXT, PROPS, HYDRATE_EVENTS */
        , _hoisted_239), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, row.particulars]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Budgetary Requirements', 'Particulars', row.particulars, 'particulars', 'budget_requirements', row, row.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_240)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Particulars', row.particulars, 'particulars', 'budget_requirements', row, row.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Budgetary Requirements', 'Particulars', row.particulars, 'particulars', 'budget_requirements', row, row.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_241)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
        /* CLASS, PROPS */
        , _hoisted_238), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ACCOUNT CODE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
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
          onInput: _cache[105] || (_cache[105] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('budget_requirements', 'account_code', row.id, row.account_code);
          },
          disabled: ""
        }, "\n                                                    " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.account_code) + "\n                                            ", 41
        /* TEXT, PROPS, HYDRATE_EVENTS */
        , _hoisted_243), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, row.account_code]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Budgetary Requirements', 'Account Code', row.account_code, 'account_code', 'budget_requirements', row, row.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_244)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Account Code', row.account_code, 'account_code', 'budget_requirements', row, row.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Budgetary Requirements', 'Account Code', row.account_code, 'account_code', 'budget_requirements', row, row.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_245)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
        /* CLASS, PROPS */
        , _hoisted_242), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SIP Number "), $props.source === 'sip' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_246, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.sip_number), 1
        /* TEXT */
        )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" AMOUNT "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
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
          onInput: _cache[106] || (_cache[106] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('budget_requirements', 'amount', row.id, row.amount);
          }
        }, "\n                                                    " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.amount) + "\n                                            ", 41
        /* TEXT, PROPS, HYDRATE_EVENTS */
        , _hoisted_248), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, row.amount]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Budgetary Requirements', 'Source', row.source, 'source', 'budget_requirements', row, row.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_249)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Source', row.source, 'source', 'budget_requirements', row, row.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Budgetary Requirements', 'Source', row.source, 'source', 'budget_requirements', row, row.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_250)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
        /* CLASS, PROPS */
        , _hoisted_247), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SOURCE OF FUND "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
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
          onInput: _cache[107] || (_cache[107] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('budget_requirements', 'source', row.id, row.source);
          }
        }, "\n                                                    " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.source) + "\n                                            ", 41
        /* TEXT, PROPS, HYDRATE_EVENTS */
        , _hoisted_252), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, row.source]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Budgetary Requirements', 'Source', row.source, 'source', 'budget_requirements', row, row.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_253)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Source', row.source, 'source', 'budget_requirements', row, row.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Budgetary Requirements', 'Source', row.source, 'source', 'budget_requirements', row, row.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_254)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
        /* CLASS, PROPS */
        , _hoisted_251), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" EDIT "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td>\n                                            <button class=\"btn btn-primary btn-sm text-white\"\n                                                @click=\"showBudgetModal(form.id,gadType,category)\">\n                                                ✏ Edit\n                                            </button>\n                                        </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DELETE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-danger btn-sm text-white",
          onClick: function onClick($event) {
            return $options.deleteData(row.id, 'budget_requirements', row.particulars);
          }
        }, " 🗑 Delete ", 8
        /* PROPS */
        , _hoisted_255)])]);
      }), 128
      /* KEYED_FRAGMENT */
      )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" NO DATA ROW "), rows.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_256, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_257, " No entries under " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(gadType) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatCategory(category)), 1
      /* TEXT */
      )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TOTAL ROW "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_258, [_hoisted_259, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_260, "TOTAL " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(gadType), 1
      /* TEXT */
      ), _hoisted_261, $props.source === 'sip' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_262)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " ₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.budgetSum(category, gadType).toLocaleString()), 1
      /* TEXT */
      ), _hoisted_263])], 64
      /* STABLE_FRAGMENT */
      );
    }), 128
    /* KEYED_FRAGMENT */
    ))]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_264, $props.source === 'sip' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_265)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Budgetary Requirements', 'GAD Grand Total', _ctx.format_number_conv(_ctx.tot_gad, 2, true), 'gad_total', 'revision_plans', $data.paps, $data.paps.comments)
    }),
    id: $data.paps.id + '_revision_plans_gad_total'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.gadBudgetTotal.toLocaleString()) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[108] || (_cache[108] = function ($event) {
      return $options.handleClick('Budgetary Requirements', 'GAD Grand Total', _ctx.format_number_conv(_ctx.tot_gad, 2, true), 'gad_total', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'GAD Grand Total', _ctx.format_number_conv(_ctx.tot_gad, 2, true), 'gad_total', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[109] || (_cache[109] = function ($event) {
      return $options.handleClick('Budgetary Requirements', 'GAD Grand Total', _ctx.format_number_conv(_ctx.tot_gad, 2, true), 'gad_total', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_266), _hoisted_267]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_268, $props.source === 'sip' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_269)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.overallBudget.toLocaleString()), 1
  /* TEXT */
  ), _hoisted_270])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("VI. IMPLEMENTING TEAM************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_271, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" VII. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.department_code_user === '04' || _ctx.department_code_user === _ctx.department_code_project ? "/team/".concat($data.paps.id, "/revision/plan/team") : null,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementing Team', 'implementing team', $data.paps.rationale, 'implementing_team', 'revision_plans', $data.paps, $data.paps.comments)
    }),
    id: $data.paps.id + '_revision_plans_implementing_team'
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Implementing Team")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href", "class", "id"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[110] || (_cache[110] = function ($event) {
      return $options.handleClick('Implementing Team', 'implementing team', $data.paps.implementing_team, 'implementing_team', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementing Team', 'implementing team', $data.paps.implementing_team, 'implementing_team', 'revision_plans', $data.paps, $data.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[111] || (_cache[111] = function ($event) {
      return $options.handleClick('Implementing Team', 'implementing team', $data.paps.implementing_team, 'implementing_team', 'revision_plans', $data.paps, $data.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm text-white",
    onClick: _cache[112] || (_cache[112] = function ($event) {
      return $options.showTeamModal();
    })
  }, " Add Team Members ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_272, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ paps.implementing_team }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuillEditor, {
    theme: "snow",
    content: $data.form.implementing_team,
    "onUpdate:content": [_cache[113] || (_cache[113] = function ($event) {
      return $data.form.implementing_team = $event;
    }), _cache[114] || (_cache[114] = function (val) {
      return $options.updateRevisionPlans('revision_plans', 'implementing_team', $data.form.id, val);
    })],
    contentType: "html",
    placeholder: "Introductory paragraph for the implementing team ...",
    toolbar: "essential"
  }, null, 8
  /* PROPS */
  , ["content"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_273, [_hoisted_274, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.implementing_team, function (team_member, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index + 1), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Team Members', 'Name', team_member.name, 'name', 'team_plans', team_member, team_member.comments)
      }),
      id: team_member.id + '_team_plans_name'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(team_member.name) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'Name', team_member.name, 'name', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_276)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Team Plan', 'Name', team_member.name, 'name', 'team_plans', team_member, team_member.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'Name', team_member.name, 'name', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_277)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_275), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Gender "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(team_member.gender), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Position "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      id: team_member.id + '_team_plans_position',
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Team Plan', 'Position', team_member.position, 'position', 'team_plans', team_member, team_member.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(team_member.position) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'Position', team_member.position, 'position', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_279)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Team Plan', 'Position', team_member.position, 'position', 'team_plans', team_member, team_member.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'Position', team_member.position, 'position', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_280)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_278), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Employment Status "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      id: team_member.id + '_team_plans_status',
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Team Plan', 'status', team_member.status, 'status', 'team_plans', team_member, team_member.comments)
      })
    }, [team_member.status === 'Regular' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_282, "Permanent")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_283, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(team_member.status), 1
    /* TEXT */
    )), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 2,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'status', team_member.status, 'status', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_284)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Team Plan', 'status', team_member.status, 'status', 'team_plans', team_member, team_member.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 3,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'status', team_member.status, 'status', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_285)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_281), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Competency "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Team Plan', 'with_gad_training', team_member.with_gad_training, 'with_gad_training', 'team_plans', team_member, team_member.comments)
      }),
      id: team_member.id + '_team_plans_with_gad_training'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(team_member.with_gad_training === '1' ? team_member.specify_GAD_training : 'No') + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'with_gad_training', team_member.with_gad_training, 'with_gad_training', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_287)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Team Plan', 'with_gad_training', team_member.with_gad_training, 'with_gad_training', 'team_plans', team_member, team_member.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'with_gad_training', team_member.with_gad_training, 'with_gad_training', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_288)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_286), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Actions"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
      "class": "btn btn-primary btn-sm text-white",
      onClick: function onClick($event) {
        return $options.showTeamModalEdit(team_member);
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_289];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
      "class": "btn btn-danger btn-sm text-white",
      onClick: function onClick($event) {
        return $options.deleteData(team_member.id, 'team_plans', team_member.name);
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_290];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["onClick"])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), _hoisted_291]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("VIII. PARTNERSHIP & SUSTAINABILITY"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_292, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" VIII. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Partnership and Sustainability")];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_293, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuillEditor, {
    theme: "snow",
    content: $data.form.partnership,
    "onUpdate:content": [_cache[115] || (_cache[115] = function ($event) {
      return $data.form.partnership = $event;
    }), _cache[116] || (_cache[116] = function (val) {
      return $options.updateRevisionPlans('revision_plans', 'partnership', $data.form.id, val);
    })],
    contentType: "html",
    placeholder: "Introductory paragraph for partnership and sustainability ...",
    toolbar: "essential"
  }, null, 8
  /* PROPS */
  , ["content"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("XI. MONITORING & EVALUATION"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_294, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" IX. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.department_code_user === '04' || _ctx.department_code_user === _ctx.department_code_project ? "/EvaluationMechanismTool/".concat($data.paps.id) : null
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Monitoring and Evaluation")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm text-white",
    onClick: _cache[117] || (_cache[117] = function ($event) {
      return $options.showMonitoringModal();
    })
  }, " Add Monitoring and Evaluation Details ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_295, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div v-html=\"paps.monitoring\"></div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuillEditor, {
    theme: "snow",
    content: $data.form.monitoring,
    "onUpdate:content": [_cache[118] || (_cache[118] = function ($event) {
      return $data.form.monitoring = $event;
    }), _cache[119] || (_cache[119] = function (val) {
      return $options.updateRevisionPlans('revision_plans', 'monitoring', $data.form.id, val);
    })],
    contentType: "html",
    placeholder: "Introductory paragraph for monitoring and evaluation ...",
    toolbar: "essential"
  }, null, 8
  /* PROPS */
  , ["content"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_296, [_hoisted_297, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.monitoring_and_avaluation, function (monitor) {
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
      onInput: _cache[120] || (_cache[120] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateRevisionPlans('monitoring_and_evaluations', 'evaluation_mechanism_tool', monitor.id, monitor.evaluation_mechanism_tool);
      }
    }, "\n                                                " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(monitor.evaluation_mechanism_tool) + "\n                                        ", 43
    /* TEXT, CLASS, PROPS, HYDRATE_EVENTS */
    , _hoisted_299), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, monitor.evaluation_mechanism_tool]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Evaluation Mechanism Tool', monitor.evaluation_mechanism_tool, 'evaluation_mechanism_tool', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_300)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Monitoring and Evaluation', 'Evaluation Mechanism Tool', monitor.evaluation_mechanism_tool, 'evaluation_mechanism_tool', 'monitoring_and_evaluations', monitor, monitor.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Evaluation Mechanism Tool', monitor.evaluation_mechanism_tool, 'evaluation_mechanism_tool', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_301)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
    /* PROPS */
    , _hoisted_298), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" M&E OPR and their roles "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      id: monitor.id + '_monitoring_and_evaluations_opr'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        'text-danger': $options.has_comment('Monitoring and Evaluation', 'OPCR & their roles', monitor.opr, 'opr', 'monitoring_and_evaluations', monitor, monitor.comments)
      }, "form-control transparent-bg"]),
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return monitor.opr = $event;
      },
      onInput: _cache[121] || (_cache[121] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateRevisionPlans('monitoring_and_evaluations', 'opr', monitor.id, monitor.opr);
      }
    }, "\n                                                " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(monitor.opr) + "\n                                        ", 43
    /* TEXT, CLASS, PROPS, HYDRATE_EVENTS */
    , _hoisted_303), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, monitor.opr]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'OPCR & their roles', monitor.opr, 'opr', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_304)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Monitoring and Evaluation', 'OPCR & their roles', monitor.opr, 'opr', 'monitoring_and_evaluations', monitor, monitor.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'OPCR & their roles', monitor.opr, 'opr', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_305)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
    /* PROPS */
    , _hoisted_302), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" M&E Target Beneficiaries "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
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
      onInput: _cache[122] || (_cache[122] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateRevisionPlans('monitoring_and_evaluations', 'target_beneficiaries', monitor.id, monitor.target_beneficiaries);
      }
    }, "\n                                                " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(monitor.target_beneficiaries) + "\n                                        ", 41
    /* TEXT, PROPS, HYDRATE_EVENTS */
    , _hoisted_307), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, monitor.target_beneficiaries]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Target Beneficiaries', monitor.target_beneficiaries, 'target_beneficiaries', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_308)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Monitoring and Evaluation', 'Target Beneficiaries', monitor.target_beneficiaries, 'target_beneficiaries', 'monitoring_and_evaluations', monitor, monitor.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Target Beneficiaries', monitor.target_beneficiaries, 'target_beneficiaries', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_309)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_306), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" M&E GAD Expert/Consultant "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
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
    }, _hoisted_314, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_311), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, monitor.gad]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Target Beneficiaries', monitor.gad, 'gad', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_315)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Monitoring and Evaluation', 'Target Beneficiaries', monitor.gad, 'gad', 'monitoring_and_evaluations', monitor, monitor.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Target Beneficiaries', monitor.gad, 'gad', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_316)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_310), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-danger btn-sm text-white",
      onClick: function onClick($event) {
        return $options.deleteData(monitor.id, 'monitoring_and_evaluations', monitor.evaluation_mechanism_tool);
      }
    }, " 🗑 Delete ", 8
    /* PROPS */
    , _hoisted_317)])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])]), _hoisted_318]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("RISK MANAGEMENT"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_319, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" X. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.department_code_user === '04' || _ctx.department_code_user === _ctx.department_code_project ? "/RiskManagement/".concat($data.paps.id) : null
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Risk Management")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm text-white",
    onClick: _cache[123] || (_cache[123] = function ($event) {
      return $options.showRiskManagementModal();
    })
  }, " Add Risk Management Details ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_320, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuillEditor, {
    theme: "snow",
    content: $data.form.risk_management,
    "onUpdate:content": [_cache[124] || (_cache[124] = function ($event) {
      return $data.form.risk_management = $event;
    }), _cache[125] || (_cache[125] = function (val) {
      return $options.updateRevisionPlans('revision_plans', 'risk_management', $data.form.id, val);
    })],
    contentType: "html",
    placeholder: "Introductory paragraph for risk management ...",
    toolbar: "essential"
  }, null, 8
  /* PROPS */
  , ["content"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_321, [_hoisted_322, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.risk_manangement, function (risk) {
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
    }, null, 8
    /* PROPS */
    , ["content", "onUpdate:content"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Possible Risks', risk.possible_risk, 'possible_risk', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_324)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Risk Management', 'Possible Risks', risk.possible_risk, 'possible_risk', 'risk_manangements', risk, risk.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Possible Risks', risk.possible_risk, 'possible_risk', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_325)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_323), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Risk Management -Person Affected "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
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
    }, null, 8
    /* PROPS */
    , ["content", "onUpdate:content"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Person Affected', risk.person_affected, 'person_affected', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_327)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Risk Management', 'Person Affected', risk.person_affected, 'person_affected', 'risk_manangements', risk, risk.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Person Affected', risk.person_affected, 'person_affected', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_328)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_326), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Risk Management -Management "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
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
    }, null, 8
    /* PROPS */
    , ["content", "onUpdate:content"]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Management', risk.management, 'management', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_330)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Risk Management', 'Management', risk.management, 'management', 'risk_manangements', risk, risk.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Management', risk.management, 'management', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_331)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_329), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Remove"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-danger btn-sm text-white",
      onClick: function onClick($event) {
        return $options.deleteData(risk.id, 'risk_manangements', risk.possible_risk);
      }
    }, " 🗑 Delete ", 8
    /* PROPS */
    , _hoisted_332)])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])]), _hoisted_333]), _hoisted_334, _hoisted_335, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("SIGNATORIES"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_336, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" XI. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.department_code_user === '04' || _ctx.department_code_user === _ctx.department_code_project ? "/RiskManagement/".concat($data.paps.id) : null
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Signatories")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm text-white",
    onClick: _cache[126] || (_cache[126] = function ($event) {
      return $options.showSignatoryModal();
    })
  }, " Add Signatories ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{signatoriesProps }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_337, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.signatoriesprops, function (signatory, index) {
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
    }, [_hoisted_339, _hoisted_340, _hoisted_341, _hoisted_342, _hoisted_343, $props.editData.type !== 'p' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", _hoisted_344, "As to AIP Inclusion")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.editData.type !== 'p' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", _hoisted_345, "As to AIP Appropriation")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 42
    /* CLASS, PROPS, HYDRATE_EVENTS */
    , _hoisted_338), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, signatory.acted]]), signatory.acted === 'Prepared' || signatory.acted === 'Reviewed' || signatory.acted === 'Noted' || signatory.acted === 'Approved' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_346, "by: ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Signatories', 'Acted', signatory.acted, 'acted', 'signatories', signatory, signatory.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_347)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Signatories', 'Acted', signatory.acted, 'acted', 'signatories', signatory, signatory.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 2,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Signatories', 'Acted', signatory.acted, 'acted', 'signatories', signatory, signatory.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_348)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_349, _hoisted_350, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SIGNATORY ACTED ************************************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
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
      onInput: _cache[127] || (_cache[127] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateRevisionPlans('signatories', 'name', signatory.id, signatory.name);
      }
    }, null, 42
    /* CLASS, PROPS, HYDRATE_EVENTS */
    , _hoisted_352), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, signatory.name]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Signatories', 'Name', signatory.name, 'name', 'signatories', signatory, signatory.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_353)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Signatories', 'Name', signatory.name, 'name', 'signatories', signatory, signatory.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Signatories', 'Name', signatory.name, 'name', 'signatories', signatory, signatory.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_354)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </input> ")])], 8
    /* PROPS */
    , _hoisted_351), _hoisted_355, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      id: signatory.id + '_signatories_position'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control transparent-bg", {
        'text-danger': $options.has_comment('Signatories', 'Position', signatory.position, 'position', 'signatories', signatory, signatory.comments)
      }]),
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return signatory.position = $event;
      },
      type: "text",
      onInput: _cache[128] || (_cache[128] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateRevisionPlans('signatories', 'position', signatory.id, signatory.position);
      }
    }, null, 42
    /* CLASS, PROPS, HYDRATE_EVENTS */
    , _hoisted_357), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, signatory.position]]), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Signatories', 'Position', signatory.position, 'position', 'signatories', signatory, signatory.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_358)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Signatories', 'Position', signatory.position, 'position', 'signatories', signatory, signatory.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Signatories', 'Position', signatory.position, 'position', 'signatories', signatory, signatory.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_359)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
    /* PROPS */
    , _hoisted_356), _hoisted_360, _hoisted_361, _hoisted_362, _hoisted_363, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-danger btn-sm text-white",
      onClick: function onClick($event) {
        return $options.deleteData(signatory.id, 'signatories', signatory.name);
      }
    }, " 🗑 Delete ", 8
    /* PROPS */
    , _hoisted_364)], 2
    /* CLASS */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_365, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ALL YOUR EXISTING COMMENT PANEL HTML HERE "), !$data.showComments ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_366, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "close-btn text-danger",
    onClick: _cache[129] || (_cache[129] = function () {
      return $options.toggleShowCommentPanel && $options.toggleShowCommentPanel.apply($options, arguments);
    })
  }, [_hoisted_367, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("   "), $options.countUnresolvedComments > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_368, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.countUnresolvedComments) + " unresolved " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.countUnresolvedComments > 1 ? 'updates' : 'update') + " — click to review ", 1
  /* TEXT */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.showComments ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_369, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_370, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "close-btn text-danger",
    onClick: _cache[130] || (_cache[130] = function () {
      return $options.toggleShowCommentPanel && $options.toggleShowCommentPanel.apply($options, arguments);
    })
  }, _hoisted_372)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_373, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    style: {
      "color": "red"
    },
    onClick: _cache[131] || (_cache[131] = function ($event) {
      return $options.openTab('Navigation');
    })
  }, "Navigation"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    style: {
      "color": "red"
    },
    onClick: _cache[132] || (_cache[132] = function ($event) {
      return $options.openTab('Comments');
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Comments "), $options.countUnresolvedComments > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_374, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.countUnresolvedComments) + " unresolved) ", 1
  /* TEXT */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), $data.open_tab === 'Comments' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_375, [_hoisted_376, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_377, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_378, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.all_comments, function (comment, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: index,
      "class": "mb-2"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["clickable-comment", comment.comment_status == 1 ? 'comment-approved' : 'comment-rejected']),
      onClick: function onClick($event) {
        return $options.scrollToSection(['beneficiaries', 'objective', 'rationale'].includes(comment.column_name) ? comment.column_name : ['expected_revised_outputs', 'expected_revised_outcomes'].includes(comment.table_name) ? "".concat(comment.table_row_id, "_").concat(comment.table_name) : "".concat(comment.table_row_id, "_").concat(comment.table_name, "_").concat(comment.column_name));
      },
      style: {
        "cursor": "pointer"
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" IF UNRESOLVED "), comment.comment_status == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_380, _hoisted_382)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" IF RESOLVED "), comment.comment_status == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_383, _hoisted_385)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.comment) + " ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{\n                                                ['beneficiaries', 'objective', 'rationale'].includes(comment.column_name)\n                                                    ? comment.column_name\n                                                        : (\n                                                        ['expected_revised_outputs', 'expected_revised_outcomes'].includes(comment.table_name)\n                                                            ? `${comment.table_row_id}_${comment.table_name}`\n                                                            : `${comment.table_row_id}_${comment.table_name}_${comment.column_name}`\n                                                    )\n                                            }} ")], 10
    /* CLASS, PROPS */
    , _hoisted_379), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      innerHTML: comment.reply
    }, null, 8
    /* PROPS */
    , _hoisted_386), _hoisted_387]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.open_tab === 'Navigation' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_388, [_hoisted_389, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_390, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_391, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_392, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[133] || (_cache[133] = function ($event) {
      return $options.scrollToSection('revision_plans');
    })
  }, " I. Title ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_393, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_394, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[134] || (_cache[134] = function ($event) {
      return $options.scrollToSection('rationale');
    })
  }, " II. Rationale ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_395, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_396, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[135] || (_cache[135] = function ($event) {
      return $options.scrollToSection('objective');
    })
  }, " III. Objectives ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_397, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_398, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[136] || (_cache[136] = function ($event) {
      return $options.scrollToSection('beneficiaries');
    })
  }, " IV. Target Beneficiaries ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_399, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_400, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[137] || (_cache[137] = function ($event) {
      return $options.scrollToSection('implementation_workplan');
    })
  }, " V. Implementation Schedule/Workplan ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_401, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_402, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[138] || (_cache[138] = function ($event) {
      return $options.scrollToSection('budgetary_requirements');
    })
  }, " VI. Estimated Cost/Budgetary Requirements ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_403, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_404, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[139] || (_cache[139] = function ($event) {
      return $options.scrollToSection('implementing_team');
    })
  }, " VII. Implementing Team ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" partnership_sustainability "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_405, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_406, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[140] || (_cache[140] = function ($event) {
      return $options.scrollToSection('partnership_sustainability');
    })
  }, " VIII. Partnership and Sustainability ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_407, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_408, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[141] || (_cache[141] = function ($event) {
      return $options.scrollToSection('monitoring_evaluation');
    })
  }, " IX. Monitoring and Evaluation ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_409, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_410, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[142] || (_cache[142] = function ($event) {
      return $options.scrollToSection('risk_management');
    })
  }, " X. Risk Management ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_411, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_412, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[143] || (_cache[143] = function ($event) {
      return $options.scrollToSection('signatories');
    })
  }, " XI. Signatories ")])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </div> ")]), $data.show_comment_modal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_CommentModal, {
    key: 0,
    onCloseModalEvent: $options.closeCommentModal,
    title: "COMMENTS"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_413, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [$props.auth.user.department_code === '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_414, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        "class": "form-control",
        rows: "5",
        "onUpdate:modelValue": _cache[144] || (_cache[144] = function ($event) {
          return $data.comment = $event;
        }),
        placeholder: "Write your comment here..."
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.comment]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary mt-2 text-white",
        onClick: _cache[145] || (_cache[145] = function ($event) {
          return $options.saveComment();
        })
      }, " Submit Comment ")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_415, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.comment_section), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_416, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        innerHTML: $data.comment_subtitle
      }, null, 8
      /* PROPS */
      , _hoisted_417)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_418, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        innerHTML: $data.comment_data
      }, null, 8
      /* PROPS */
      , _hoisted_419)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_420, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.comment_column) + " ", 1
      /* TEXT */
      ), $data.comment_column == 'Person Affected' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_421, "Preventive Measures")) : $data.comment_column == 'Management' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_422, "Mechanisms to monitor")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_423, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.comment_colun), 1
      /* TEXT */
      ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_424, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.comment_table), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div>Reference Object: {{ comment_reference_object.id }}</div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_425, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_426, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_427, _hoisted_428, $props.auth.user.department_code === '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", _hoisted_429, "Actions  ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th class=\"bg-secondary text-white\" v-if=\"auth.user.department_code==='04'\">Actions&nbsp;&nbsp;</th> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th class=\"bg-secondary text-white\">Comment by&nbsp;&nbsp;</th> "), _hoisted_430])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.comments, function (comment, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [comment.user ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h6", _hoisted_431, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.user.FullName) + " commented:  ", 1
        /* TEXT */
        )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_432, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.comment), 1
        /* TEXT */
        )]), _hoisted_433, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          innerHTML: comment.reply
        }, null, 8
        /* PROPS */
        , _hoisted_434), comment.show_comment_box == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "btn btn-link p-0",
          onClick: function onClick($event) {
            return $options.showCommentBox(index);
          }
        }, "reply", 8
        /* PROPS */
        , _hoisted_435)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), comment.show_comment_box ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
          key: 2,
          "class": "form-control",
          type: "text",
          "onUpdate:modelValue": _cache[146] || (_cache[146] = function ($event) {
            return $data.reply_concat = $event;
          })
        }, "\n                                    ", 512
        /* NEED_PATCH */
        )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.reply_concat]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), comment.show_comment_box ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 3,
          disabled: !$data.reply_concat || $data.reply_concat.trim() === '',
          "class": "btn btn-primary text-white",
          onClick: function onClick($event) {
            return $options.updateComment(comment.id, comment, index);
          }
        }, "Send", 8
        /* PROPS */
        , _hoisted_436)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), comment.show_comment_box ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 4,
          "class": "btn btn-danger text-white",
          onClick: function onClick($event) {
            return $options.showCommentBox(index);
          }
        }, "Cancel", 8
        /* PROPS */
        , _hoisted_437)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
            backgroundColor: comment.comment_status === '0' ? '#fecaca' : '#bbf7d0',
            color: comment.comment_status === '0' ? '#991b1b' : '#065f46'
          }),
          "class": "px-2 py-1 rounded"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.comment_status === '0' ? 'Unresolved' : 'OK'), 1
        /* TEXT */
        )], 4
        /* STYLE */
        ), $props.auth.user.department_code === '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_438, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-success text-white",
          onClick: function onClick($event) {
            return $options.submitAction('resolve', comment.id, index);
          },
          title: "Mark comment as Resolved"
        }, _hoisted_441, 8
        /* PROPS */
        , _hoisted_439), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-primary text-white",
          onClick: function onClick($event) {
            return $options.submitAction('reset', comment.id, index);
          },
          title: "Reset to Unresolved"
        }, _hoisted_444, 8
        /* PROPS */
        , _hoisted_442), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-danger text-white",
          onClick: function onClick($event) {
            return $options.submitAction('delete', comment.id, index);
          },
          title: "Delete this comment"
        }, _hoisted_447, 8
        /* PROPS */
        , _hoisted_445), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  ")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td>\n                                    <span v-if=\"comment.user\">{{ comment.user.FullName }}</span>\n                                    <span v-else>Not recorded</span>\n                                </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatDate(comment.created_at)), 1
        /* TEXT */
        )]);
      }), 256
      /* UNKEYED_FRAGMENT */
      ))])])])]), _hoisted_448];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $data.BudgetModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_BudgetModal, {
    key: 0,
    onCloseModalEvent: $options.closeBudgetModal,
    title: "BUDGETARY REQUIREMENTS"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_449, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_450, [_hoisted_451, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_multiselect, {
        ref: "AccountCodeInput",
        options: $options.chart_of_accounts,
        searchable: true,
        modelValue: $data.budget_new.selected_chart_of_account,
        "onUpdate:modelValue": _cache[147] || (_cache[147] = function ($event) {
          return $data.budget_new.selected_chart_of_account = $event;
        }),
        label: "label",
        "track-by": "label",
        onClose: $options.selectChartOfAccount
      }, null, 8
      /* PROPS */
      , ["options", "modelValue", "onClose"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_452, [_hoisted_453, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[148] || (_cache[148] = function ($event) {
          return $data.budget_new.particulars = $event;
        }),
        type: "text",
        "class": "form-control",
        placeholder: "Enter particulars"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.budget_new.particulars]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_454, [_hoisted_455, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[149] || (_cache[149] = function ($event) {
          return $data.budget_new.account_code = $event;
        }),
        type: "text",
        "class": "form-control",
        placeholder: "Enter account code"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.budget_new.account_code]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_456, [_hoisted_457, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[150] || (_cache[150] = function ($event) {
          return $data.budget_new.amount = $event;
        }),
        type: "number",
        "class": "form-control",
        placeholder: "Enter amount"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.budget_new.amount, void 0, {
        number: true
      }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_458, [_hoisted_459, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        "onUpdate:modelValue": _cache[151] || (_cache[151] = function ($event) {
          return $data.budget_new.category = $event;
        }),
        "class": "form-select",
        disabled: ""
      }, _hoisted_465, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.budget_new.category]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_466, [_hoisted_467, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        "onUpdate:modelValue": _cache[152] || (_cache[152] = function ($event) {
          return $data.budget_new.category_gad = $event;
        }),
        "class": "form-select",
        disabled: ""
      }, _hoisted_471, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.budget_new.category_gad]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_472, [_hoisted_473, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[153] || (_cache[153] = function ($event) {
          return $data.budget_new.source = $event;
        }),
        type: "text",
        "class": "form-control",
        placeholder: "Enter source"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.budget_new.source]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn btn-danger mt-3 text-white",
        onClick: _cache[154] || (_cache[154] = function () {
          return $options.closeBudgetModal && $options.closeBudgetModal.apply($options, arguments);
        })
      }, "Cancel"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn btn-primary mt-3 text-white",
        onClick: _cache[155] || (_cache[155] = function ($event) {
          return $options.saveBudgetRequirement();
        })
      }, "Save")])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.StrategyModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_StrategyModal, {
    key: 1,
    onCloseModalEvent: $options.closeStrategyModal,
    title: "STRATEGIES MODAL"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_474, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.strategies, function (strategy, index) {
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
        }, null, 8
        /* PROPS */
        , _hoisted_475), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return strategy.year_period = $event;
          },
          placeholder: "Year Period",
          type: "number",
          "class": "form-control mb-1"
        }, null, 8
        /* PROPS */
        , _hoisted_476), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.year_period]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          onClick: function onClick($event) {
            return $options.removeStrategy(index);
          },
          "class": "btn btn-danger btn-sm",
          style: {
            "background-color": "#dc3545",
            "color": "#fff",
            "border": "none"
          }
        }, " X", 8
        /* PROPS */
        , _hoisted_477)])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[156] || (_cache[156] = function () {
          return $options.addStrategy && $options.addStrategy.apply($options, arguments);
        }),
        "class": "btn btn-primary mt-2"
      }, "Add Strategy"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[157] || (_cache[157] = function () {
          return $options.saveStrategies && $options.saveStrategies.apply($options, arguments);
        }),
        "class": "btn btn-success mt-2"
      }, "Save"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.strategies), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.ActivityModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ActivityModal, {
    key: 2,
    onCloseModalEvent: $options.closeActivityModal,
    title: "ACTIVITIES MODAL"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_478, [_hoisted_479, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.activities, function (act, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.description = $event;
          },
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_480), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.gad_issue = $event;
          },
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_481), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.gad_issue]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.date_from = $event;
          },
          type: "date",
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_482), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.date_from]]), _hoisted_483, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.date_to = $event;
          },
          type: "date",
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_484), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.date_to]])])]), _hoisted_485, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.ps_q1 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_486), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ps_q1, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.ps_q2 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_487), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ps_q2, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.ps_q3 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_488), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ps_q3, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.ps_q4 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_489), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ps_q4, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Total (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.ps_q1) + parseFloat(act.ps_q2) + parseFloat(act.ps_q3) + parseFloat(act.ps_q4), 2, true)) + ")", 1
        /* TEXT */
        )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.mooe_q1 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_490), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.mooe_q1, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.mooe_q2 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_491), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.mooe_q2, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.mooe_q3 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_492), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.mooe_q3, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.mooe_q4 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_493), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.mooe_q4, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Total (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.mooe_q1) + parseFloat(act.mooe_q2) + parseFloat(act.mooe_q3) + parseFloat(act.mooe_q4), 2, true)) + ")", 1
        /* TEXT */
        )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CO "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.co_q1 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_494), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.co_q1, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.co_q2 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_495), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.co_q2, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.co_q3 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_496), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.co_q3, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.co_q4 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_497), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.co_q4, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Total (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.co_q1) + parseFloat(act.co_q2) + parseFloat(act.co_q3) + parseFloat(act.co_q4), 2, true)) + ")", 1
        /* TEXT */
        )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.fe_q1 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_498), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.fe_q1, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.fe_q2 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_499), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.fe_q2, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.fe_q3 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_500), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.fe_q3, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.fe_q4 = $event;
          },
          type: "number",
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_501), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.fe_q4, void 0, {
          number: true
        }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Total (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.fe_q1) + parseFloat(act.fe_q2) + parseFloat(act.fe_q3) + parseFloat(act.fe_q4), 2, true)) + ")", 1
        /* TEXT */
        )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CCET "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.ccet_code = $event;
          },
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_502), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.ccet_code]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PERSON RESPONSIBLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return act.responsible = $event;
          },
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_503), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, act.responsible]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-danger btn-sm",
          onClick: function onClick($event) {
            return $options.removeActivity(index);
          }
        }, " X ", 8
        /* PROPS */
        , _hoisted_504)])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_505, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary text-white",
        onClick: _cache[158] || (_cache[158] = function () {
          return $options.addActivity && $options.addActivity.apply($options, arguments);
        })
      }, "Add Row"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-success text-white",
        onClick: _cache[159] || (_cache[159] = function () {
          return $options.saveActivities && $options.saveActivities.apply($options, arguments);
        })
      }, "Save")])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.TeamModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_TeamModal, {
    key: 3,
    onCloseModalEvent: $options.closeTeamModal,
    title: "IMPLEMENTING TEAM"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ team_members }} "), _hoisted_506, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "hidden",
        "onUpdate:modelValue": _cache[160] || (_cache[160] = function ($event) {
          return $data.team_members.revision_plan_id = $event;
        }),
        "class": "form-control",
        autocomplete: "chrome-off"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.team_members.revision_plan_id]]), _hoisted_507, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" team_members.implementing_team_id: {{ team_members.implementing_team_id }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_multiselect, {
        options: $options.employees_computed,
        searchable: true,
        label: "label",
        "track-by": "label",
        reduce: function reduce(emp) {
          return emp.empl_id;
        },
        modelValue: $data.team_members.implementing_team_id,
        "onUpdate:modelValue": _cache[161] || (_cache[161] = function ($event) {
          return $data.team_members.implementing_team_id = $event;
        }),
        onInput: _cache[162] || (_cache[162] = function ($event) {
          return $options.updateEmployee($event);
        })
      }, null, 8
      /* PROPS */
      , ["options", "reduce", "modelValue"]), _hoisted_508, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "onUpdate:modelValue": _cache[163] || (_cache[163] = function ($event) {
          return $data.team_members.name = $event;
        }),
        "class": "form-control",
        autocomplete: "chrome-off"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.team_members.name]]), _hoisted_509, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        "class": "form-select",
        "onUpdate:modelValue": _cache[164] || (_cache[164] = function ($event) {
          return $data.team_members.gender = $event;
        }),
        autocomplete: "chrome-off"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_options, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_510, _hoisted_511];
        }),
        _: 1
        /* STABLE */

      })], 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.team_members.gender]]), _hoisted_512, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "onUpdate:modelValue": _cache[165] || (_cache[165] = function ($event) {
          return $data.team_members.role = $event;
        }),
        "class": "form-control",
        autocomplete: "chrome-off"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.team_members.role]]), _hoisted_513, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input type=\"text\" v-model=\"team_members.status\" class=\"form-control\" autocomplete=\"chrome-off\"> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        "onUpdate:modelValue": _cache[166] || (_cache[166] = function ($event) {
          return $data.team_members.status = $event;
        }),
        "class": "form-control",
        autocomplete: "chrome-off"
      }, [_hoisted_514, _hoisted_515, _hoisted_516, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <option>Regular</options>\n            <option>Job Order</option>\n            <option>Casual</option> ")], 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.team_members.status]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "checkbox",
        "onUpdate:modelValue": _cache[167] || (_cache[167] = function ($event) {
          return $data.team_members.with_gad_training = $event;
        }),
        "true-value": 1,
        "false-value": 0
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.team_members.with_gad_training]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  With GAD training "), _hoisted_517, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [_hoisted_518, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "onUpdate:modelValue": _cache[168] || (_cache[168] = function ($event) {
          return $data.team_members.specify_GAD_training = $event;
        }),
        "class": "form-control",
        autocomplete: "chrome-off"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.team_members.specify_GAD_training]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "hidden",
        "onUpdate:modelValue": _cache[169] || (_cache[169] = function ($event) {
          return $data.team_members.id = $event;
        }),
        "class": "form-control",
        autocomplete: "chrome-off"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.team_members.id]]), _hoisted_519, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "onUpdate:modelValue": _cache[170] || (_cache[170] = function ($event) {
          return $data.team_members.position = $event;
        }),
        "class": "form-control",
        autocomplete: "chrome-off"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.team_members.position]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary text-white",
        onClick: _cache[171] || (_cache[171] = function ($event) {
          return $options.saveTeamMembers();
        })
      }, "Save")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.RiskManagementModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_RiskManagementModal, {
    key: 4,
    onCloseModalEvent: $options.closeRiskManagementModal,
    title: "RISK MANAGEMENT"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TABLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_520, [_hoisted_521, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.risk_managements, function (row, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return row.possible_risk = $event;
          }
        }, "\n                        ", 8
        /* PROPS */
        , _hoisted_522), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, row.possible_risk]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "text",
          "class": "form-control",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return row.person_affected = $event;
          }
        }, null, 8
        /* PROPS */
        , _hoisted_523), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, row.person_affected]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return row.management = $event;
          }
        }, "\n                        ", 8
        /* PROPS */
        , _hoisted_524), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, row.management]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_525, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-danger",
          onClick: function onClick($event) {
            return $options.removeRiskManagementRow(index);
          }
        }, " Remove ", 8
        /* PROPS */
        , _hoisted_526)])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("ADD RISK MANAGEMENT ROW"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary mb-2 text-white",
        onClick: _cache[172] || (_cache[172] = function () {
          return $options.addRiskManagementRow && $options.addRiskManagementRow.apply($options, arguments);
        })
      }, " + Add Risk Management "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("    "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SAVE BUTTON "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-success mb-2 text-white",
        onClick: _cache[173] || (_cache[173] = function () {
          return $options.saveRiskManagements && $options.saveRiskManagements.apply($options, arguments);
        })
      }, " Save Risk Managements ")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.MonitoringModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MonitoringModal, {
    key: 5,
    onCloseModalEvent: $options.closeMonitoringModal,
    title: "MONITORING AND EVALUATION"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_527, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.title), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TABLE FOR INPUT "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_528, [_hoisted_529, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.monitoring_and_evaluations, function (item, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return item.evaluation_mechanism_tool = $event;
          }
        }, null, 8
        /* PROPS */
        , _hoisted_530), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, item.evaluation_mechanism_tool]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return item.opr = $event;
          }
        }, null, 8
        /* PROPS */
        , _hoisted_531), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, item.opr]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return item.target_beneficiaries = $event;
          }
        }, null, 8
        /* PROPS */
        , _hoisted_532), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, item.target_beneficiaries]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          type: "text",
          "class": "form-select",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return item.gad = $event;
          }
        }, _hoisted_536, 8
        /* PROPS */
        , _hoisted_533), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, item.gad]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_537, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-danger btn-sm",
          onClick: function onClick($event) {
            return $options.removeMonitoringAndEvaluationRow(index);
          }
        }, " Remove ", 8
        /* PROPS */
        , _hoisted_538)])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" BUTTONS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_539, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary text-white",
        onClick: _cache[174] || (_cache[174] = function ($event) {
          return $options.addMonitoringAndEvaluationRow();
        })
      }, "Add Row"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-success text-white float-end",
        onClick: _cache[175] || (_cache[175] = function ($event) {
          return $options.saveMonitoringAndEvaluation();
        })
      }, "Save")])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.SignatoryModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SignatoryModal, {
    key: 6,
    onCloseModalEvent: $options.closeSignatoryModal,
    title: "SIGNATORIES"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ADD SIGNATORY BUTTON "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[176] || (_cache[176] = function () {
          return $options.addSignatoryRow && $options.addSignatoryRow.apply($options, arguments);
        }),
        "class": "btn btn-primary mb-3"
      }, " + Add Signatory "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SIGNATORIES TABLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_540, [_hoisted_541, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.signatories, function (row, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "text",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return row.name = $event;
          },
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_542), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, row.name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "text",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return row.position = $event;
          },
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_543), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, row.position]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return row.acted = $event;
          },
          "class": "form-select",
          autocomplete: "chrome-off"
        }, _hoisted_552, 8
        /* PROPS */
        , _hoisted_544), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, row.acted]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "number",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return row.sequence = $event;
          },
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_553), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, row.sequence]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          onClick: function onClick($event) {
            return $options.removeSignatoryRow(index);
          },
          "class": "btn btn-danger btn-sm"
        }, " Remove ", 8
        /* PROPS */
        , _hoisted_554)])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[177] || (_cache[177] = function ($event) {
          return $options.saveSignatories();
        }),
        "class": "btn btn-success text-white"
      }, "Save")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.ExpectedOutputModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ExpectedOutputModal, {
    key: 7,
    onCloseModalEvent: $options.hideExpectedOutputModal,
    title: "EXPECTED OUTPUTS"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_555, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ expected_outputs_current }}\n        activity_id: {{ activity_id }}\n        activity_project_id: {{ activity_project_id }} "), $data.expected_outputs_new.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_556, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_557, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_558, [_hoisted_559, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.expected_outputs_new, function (output, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return output.description = $event;
          },
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_560), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, output.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "text",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return output.target_indicator = $event;
          },
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_561), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, output.target_indicator]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "number",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return output.physical_q1 = $event;
          },
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_562), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, output.physical_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "number",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return output.physical_q2 = $event;
          },
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_563), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, output.physical_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "number",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return output.physical_q3 = $event;
          },
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_564), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, output.physical_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "number",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return output.physical_q4 = $event;
          },
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_565), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, output.physical_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          onClick: function onClick($event) {
            return $options.removeExpectedOutput(index);
          },
          "class": "btn btn-danger btn-sm"
        }, "Remove", 8
        /* PROPS */
        , _hoisted_566)])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_567, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[178] || (_cache[178] = function () {
          return $options.addExpectedOutput && $options.addExpectedOutput.apply($options, arguments);
        }),
        "class": "btn btn-primary"
      }, "Add Row"), $data.expected_outputs_new.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        onClick: _cache[179] || (_cache[179] = function () {
          return $options.saveExpectedOutputs && $options.saveExpectedOutputs.apply($options, arguments);
        }),
        "class": "btn btn-success"
      }, "Save")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_568, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_569, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.expected_outputs_current, function (exp) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return exp.description = $event;
          },
          type: "text",
          onInput: _cache[180] || (_cache[180] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outputs', 'description', exp.id, exp.description);
          }
        }, "\n\n                            ", 40
        /* PROPS, HYDRATE_EVENTS */
        , _hoisted_570), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, exp.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return exp.target_indicator = $event;
          },
          type: "text",
          onInput: _cache[181] || (_cache[181] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outputs', 'target_indicator', exp.id, exp.target_indicator);
          }
        }, "\n\n                            ", 40
        /* PROPS, HYDRATE_EVENTS */
        , _hoisted_571), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, exp.target_indicator]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return exp.physical_q1 = $event;
          },
          type: "text",
          onInput: _cache[182] || (_cache[182] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outputs', 'physical_q1', exp.id, exp.physical_q1);
          }
        }, "\n                            ", 40
        /* PROPS, HYDRATE_EVENTS */
        , _hoisted_572), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, exp.physical_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return exp.physical_q2 = $event;
          },
          type: "text",
          onInput: _cache[183] || (_cache[183] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outputs', 'physical_q2', exp.id, exp.physical_q2);
          }
        }, "\n                            ", 40
        /* PROPS, HYDRATE_EVENTS */
        , _hoisted_573), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, exp.physical_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return exp.physical_q3 = $event;
          },
          type: "text",
          onInput: _cache[184] || (_cache[184] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outputs', 'physical_q3', exp.id, exp.physical_q3);
          }
        }, "\n                            ", 40
        /* PROPS, HYDRATE_EVENTS */
        , _hoisted_574), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, exp.physical_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return exp.physical_q4 = $event;
          },
          type: "text",
          onInput: _cache[185] || (_cache[185] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outputs', 'physical_q4', exp.id, exp.physical_q4);
          }
        }, "\n                            ", 40
        /* PROPS, HYDRATE_EVENTS */
        , _hoisted_575), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, exp.physical_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-danger btn-sm text-white",
          onClick: function onClick($event) {
            return $options.deleteExpectedOutput(exp.id, 'expected_revised_outputs', exp.description, _ctx.index);
          }
        }, " 🗑 Delete ", 8
        /* PROPS */
        , _hoisted_576)])]);
      }), 256
      /* UNKEYED_FRAGMENT */
      ))])])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.ExpectedOutcomeModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ExpectedOutcomeModal, {
    key: 8,
    onCloseModalEvent: $options.hideExpectedOutcomeModal,
    title: "EXPECTED OUTCOMES"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ expected_outputs_current }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Table for Expected Outcomes "), $data.expected_outcomes_new.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", _hoisted_577, [_hoisted_578, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.expected_outcomes_new, function (outcome, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return outcome.description = $event;
          },
          "class": "form-control"
        }, null, 8
        /* PROPS */
        , _hoisted_579), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, outcome.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          onClick: function onClick($event) {
            return $options.removeOutcome(index);
          },
          "class": "btn btn-danger btn-sm"
        }, "Remove", 8
        /* PROPS */
        , _hoisted_580)])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Add & Save Buttons "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_581, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[186] || (_cache[186] = function () {
          return $options.addOutcome && $options.addOutcome.apply($options, arguments);
        }),
        "class": "btn btn-primary"
      }, "Add Outcome"), $data.expected_outcomes_new.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        onClick: _cache[187] || (_cache[187] = function () {
          return $options.saveExpectedOutcomes && $options.saveExpectedOutcomes.apply($options, arguments);
        }),
        "class": "btn btn-success"
      }, "Save All")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_582, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_583, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.expected_outcomes_current, function (exp) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          "class": "form-control transparent-bg",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return exp.description = $event;
          },
          type: "text",
          onInput: _cache[188] || (_cache[188] = function ($event) {
            return $options.setUnsaved(true);
          }),
          onChange: function onChange($event) {
            return $options.updateRevisionPlans('expected_revised_outcomes', 'description', exp.id, exp.description);
          }
        }, "\n\n                            ", 40
        /* PROPS, HYDRATE_EVENTS */
        , _hoisted_584), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, exp.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-danger btn-sm text-white",
          onClick: function onClick($event) {
            return $options.deleteExpectedOutcome(exp.id, 'expected_revised_outcomes', exp.description, _ctx.index);
          }
        }, " 🗑 Delete ", 8
        /* PROPS */
        , _hoisted_585)])]);
      }), 256
      /* UNKEYED_FRAGMENT */
      ))])])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  );
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


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-0e4809fa"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

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
  "class": "modal-title",
  style: {
    "color": "#ffe819",
    "text-align": "center !important"
  }
};

var _hoisted_8 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "aria-hidden": "true"
  }, "×", -1
  /* HOISTED */
  );
});

var _hoisted_9 = [_hoisted_8];
var _hoisted_10 = {
  "class": "modal-body"
};

var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "modal-footer",
    style: {
      "background-color": "#090137"
    }
  }, null, -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
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
  }, _hoisted_9)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)]), _hoisted_11])])])])]);
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


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-5be881dd"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

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

var _hoisted_8 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "aria-hidden": "true"
  }, "×", -1
  /* HOISTED */
  );
});

var _hoisted_9 = [_hoisted_8];
var _hoisted_10 = {
  "class": "modal-body"
};

var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "modal-footer",
    style: {
      "background-color": "#090137"
    }
  }, null, -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
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
  }, _hoisted_9)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)]), _hoisted_11])])])])]);
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

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "peer peer-greed"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  id: "sparklinedash"
})], -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "layers bd bgc-white p-20"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "layer w-100 mB-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "lh-1"
}, "Barangay")], -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "layer w-100"
};
var _hoisted_13 = {
  "class": "peers ai-sb fxw-nw"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "peer peer-greed"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  id: "sparklinedash"
})], -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "form-control"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_6, "Municipalities " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.my_mun), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.munsel = $event;
    }),
    onChange: _cache[1] || (_cache[1] = function () {
      return $options.loadBar && $options.loadBar.apply($options, arguments);
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.mun, function (munn) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(munn.citymunDesc), 1
    /* TEXT */
    );
  }), 256
  /* UNKEYED_FRAGMENT */
  ))], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.munsel]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_15, [_hoisted_16, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.bar, function (barr) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(barr.brgyDesc), 1
    /* TEXT */
    );
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])])])])])]);
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


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-4d40f6aa"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  ref: "editorContainer"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, null, 512
  /* NEED_PATCH */
  )]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/ProjectProfile/Create copy.vue?vue&type=style&index=0&id=6b8e3943&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/ProjectProfile/Create copy.vue?vue&type=style&index=0&id=6b8e3943&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ntd, th {\n  border: 1px solid #000 !important;\n}\ntable {\n  border-collapse: collapse !important;\n}\n.th {\n    background-color: #929292 !important;\n}\n.superscript-btn {\n  /* font-size: 0.6em; */\n  /* vertical-align: super; */\n  border: none;\n  background: none;\n  padding: 0;\n  margin-left: 4px;\n  cursor: pointer;\n  color: #df280c;\n}\n.action-btn {\n  width: 100%;\n}\n.no-border-table td,\n.no-border-table th {\n  border: none !important;\n}\n.no-border-table {\n  border-collapse: collapse !important;\n}\n.signatory-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem; /* space between cards */\n}\n.signatory-card {\n  flex: 0 0 calc(50% - 0.5rem); /* 2 per row with spacing */\n  border: 0px solid #ccc;\n  padding: 1rem;\n  border-radius: 8px;\n}\n.signatory-card-full {\n  width: 100%; /* each card full width */\n  margin-bottom: 1rem;\n}\n.sticky-comments {\n    position: fixed;\n    top: 70px;\n    right: 20px;\n    width: 450px;\n    z-index: 10;\n}\n.scrollable-text {\n    height: 300px;           /*define the height you want*/\n    overflow-y: auto;        /*vertical scrollbar if content exceeds height*/\n    /*padding: 0px;           optional padding*/\n    /*border: 1px solid #ccc;  optional border*/\n    background-color: #fff;  /*optional background*/\n    /*line-height: 1.6;        improve readability*/\n}\n.sticky-comments .comments-header {\n    display: flex;\n    justify-content: space-between; /* Push h4 left and button right */\n    align-items: center;            /* Vertical alignment */\n    margin-bottom: 10px;            /* Space below the header */\n}\n.sticky-comments .close-btn {\n    background: transparent;\n    border: none;\n    font-size: 20px;\n    cursor: pointer;\n    line-height: 1;\n    padding: 0;\n    color: #333;\n}\n.highlight-target {\n    -webkit-animation: highlightFlash 2s ease-out;\n            animation: highlightFlash 2s ease-out;\n}\n@-webkit-keyframes highlightFlash {\n0% { background-color: #c1fb3a;\n}\n100% { background-color: transparent;\n}\n}\n@keyframes highlightFlash {\n0% { background-color: #c1fb3a;\n}\n100% { background-color: transparent;\n}\n}\n.comment-approved {\n    color: darkgreen;\n    padding: 3px 6px;\n    border-radius: 4px;\n    transition: color .2s;\n}\n.comment-approved:hover {\n    color: #00AEEF; /* sky blue */\n}\n.comment-rejected {\n    color: red;\n    padding: 3px 6px;\n    border-radius: 4px;\n    transition: color .2s;\n}\n.comment-rejected:hover {\n    color: #CC7722; /* golden ochre */\n}\n.transparent-bg {\n    background-color: transparent !important;\n}\n/* TAB DESIGN *******************************************************************************************************************/\n/* Style the tab */\n/* .tab {\n  overflow: hidden;\n  border: 1px solid #ccc;\n  background-color: #f1f1f1;\n  color: #000 !important\n} */\n\n/* Style the buttons that are used to open the tab content */\n/* .tab button {\n  background-color: inherit;\n  color: red;\n  float: left;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 14px 16px;\n  transition: 0.3s;\n}\n\n/* Change background color of buttons on hover */\n/* .tab button:hover {\n  background-color: #ddd;\n} */\n\n/* Create an active/current tablink class */\n/* .tab button.active {\n  background-color: #ccc;\n  color: #df280c\n} */\n\n/* Style the tab content */\n/*.tabcontent {\n  display: none;\n  padding: 6px 12px;\n  border: 1px solid #ccc;\n  border-top: none;\n}\n\n.tablinks {\n    color: red;\n\n} */\n.comment-rejected:hover {\n    color: #CC7722; /* golden ochre */\n}\n.blink {\n    color: red;\n    -webkit-animation: blinker 1s linear infinite;\n            animation: blinker 1s linear infinite;\n}\n@-webkit-keyframes blinker {\n0%, 100% { color: red;\n}\n50% { color: #f8d823;\n} /* paler red */\n}\n@keyframes blinker {\n0%, 100% { color: red;\n}\n50% { color: #f8d823;\n} /* paler red */\n}\n\n\n", ""]);
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n    /* Override default value of 'none' */\n.modal[data-v-0e4809fa] {\r\n      display: block;\n}\n.modal[data-v-0e4809fa] {\r\n        z-index: 9999 !important;\n}\r\n  ", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/ProjectProfile/Create copy.vue?vue&type=style&index=0&id=6b8e3943&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/ProjectProfile/Create copy.vue?vue&type=style&index=0&id=6b8e3943&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_copy_vue_vue_type_style_index_0_id_6b8e3943_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create copy.vue?vue&type=style&index=0&id=6b8e3943&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/ProjectProfile/Create copy.vue?vue&type=style&index=0&id=6b8e3943&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_copy_vue_vue_type_style_index_0_id_6b8e3943_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_copy_vue_vue_type_style_index_0_id_6b8e3943_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/Pages/RevisionPlans/ProjectProfile/Create copy.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/ProjectProfile/Create copy.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_copy_vue_vue_type_template_id_6b8e3943__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create copy.vue?vue&type=template&id=6b8e3943 */ "./resources/js/Pages/RevisionPlans/ProjectProfile/Create copy.vue?vue&type=template&id=6b8e3943");
/* harmony import */ var _Create_copy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create copy.vue?vue&type=script&lang=js */ "./resources/js/Pages/RevisionPlans/ProjectProfile/Create copy.vue?vue&type=script&lang=js");
/* harmony import */ var _Create_copy_vue_vue_type_style_index_0_id_6b8e3943_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create copy.vue?vue&type=style&index=0&id=6b8e3943&lang=css */ "./resources/js/Pages/RevisionPlans/ProjectProfile/Create copy.vue?vue&type=style&index=0&id=6b8e3943&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Create_copy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_copy_vue_vue_type_template_id_6b8e3943__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/RevisionPlans/ProjectProfile/Create copy.vue"]])
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
/* harmony import */ var C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ModalDynamicTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ModalDynamicTitle_vue_vue_type_template_id_0e4809fa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-0e4809fa"],['__file',"resources/js/Shared/ModalDynamicTitle.vue"]])
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
/* harmony import */ var C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ModalDynamicTitleSmall_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ModalDynamicTitleSmall_vue_vue_type_template_id_5be881dd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-5be881dd"],['__file',"resources/js/Shared/ModalDynamicTitleSmall.vue"]])
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
/* harmony import */ var C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PlacesShared_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PlacesShared_vue_vue_type_template_id_ee3222a6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/PlacesShared.vue"]])
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
/* harmony import */ var C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_QuillEditorShared_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_QuillEditorShared_vue_vue_type_template_id_4d40f6aa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-4d40f6aa"],['__file',"resources/js/Shared/QuillEditorShared.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/RevisionPlans/ProjectProfile/Create copy.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/ProjectProfile/Create copy.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_copy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_copy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create copy.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/ProjectProfile/Create copy.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Pages/RevisionPlans/ProjectProfile/Create copy.vue?vue&type=template&id=6b8e3943":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/ProjectProfile/Create copy.vue?vue&type=template&id=6b8e3943 ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_copy_vue_vue_type_template_id_6b8e3943__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_copy_vue_vue_type_template_id_6b8e3943__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create copy.vue?vue&type=template&id=6b8e3943 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/ProjectProfile/Create copy.vue?vue&type=template&id=6b8e3943");


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

/***/ "./resources/js/Pages/RevisionPlans/ProjectProfile/Create copy.vue?vue&type=style&index=0&id=6b8e3943&lang=css":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/ProjectProfile/Create copy.vue?vue&type=style&index=0&id=6b8e3943&lang=css ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_copy_vue_vue_type_style_index_0_id_6b8e3943_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create copy.vue?vue&type=style&index=0&id=6b8e3943&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/ProjectProfile/Create copy.vue?vue&type=style&index=0&id=6b8e3943&lang=css");


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


/***/ })

}]);