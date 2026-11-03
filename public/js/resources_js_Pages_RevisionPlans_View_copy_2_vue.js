"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_RevisionPlans_View_copy_2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View copy 2.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View copy 2.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Filter */ "./resources/js/Shared/Filter.vue");
/* harmony import */ var _Shared_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Pagination */ "./resources/js/Shared/Pagination.vue");
/* harmony import */ var _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/ModalDynamicTitle */ "./resources/js/Shared/ModalDynamicTitle.vue");
var _components$props$com;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components$props$com = {
  components: {
    Filtering: _Shared_Filter__WEBPACK_IMPORTED_MODULE_1__["default"],
    Pagination: _Shared_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"],
    CommentModal: _Shared_ModalDynamicTitle__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    auth: Object,
    paps: Object,
    office: String,
    implementation: Object,
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
    }, 300)
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
  },
  beforeUnmount: function beforeUnmount() {
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
  }
}, _defineProperty(_components$props$com, "watch", {}), _defineProperty(_components$props$com, "methods", {
  openTab: function openTab(tab_name) {
    this.open_tab = tab_name;
  },
  isOne: function isOne() {// var mooe=this.b_mooe.length;
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
    var sb = false; // if (this.mooe_gad.length > 0 || this.mooe_non.length > 0 ||
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
    var _this2 = this;

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
      _this2.comment = "";
    }, 1000); // 1000 milliseconds = 1 second
  },
  submitAction: function submitAction(type, comment_id, index) {
    var _this3 = this;

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
          _this3.comments.splice(index, 1);

          alert("Comment deleted successfully.");
        } else if (type === 'reset') {
          _this3.comments[index].comment_status = '0';
          alert("Comment status reset to unresolved.");
        } else if (type === 'resolve') {
          _this3.comments[index].comment_status = '1';
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
  updateComment: function updateComment(id, comment, index) {
    var _this4 = this;

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

              if (_this4.reply_concat.trim()) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              try {
                _this4.$inertia.patch(myurl, {
                  params: {
                    reply: _this4.reply_concat,
                    id: id
                  }
                }, {
                  preserveScroll: true,
                  onSuccess: function onSuccess() {
                    // $uname . ' replied: ' . $reply . '<br>';
                    var comment_init = "";

                    if (_this4.comments[index].reply) {
                      comment_init = _this4.comments[index].reply;
                    }

                    _this4.comments[index].reply = comment_init + " <b>" + _this4.auth.user.FullName + "</b> replied: <i>" + _this4.reply_concat + "</i> <br><br>";
                    _this4.comments[index].show_comment_box = false; // Hide the comment box after replying

                    _this4.reply_concat = ""; // Clear the reply input after saving

                    _this4.is_replying = false; // Reset the replying state
                  }
                }); // console.log(payload);


                _this4.unsaved = false; // Reset unsaved flag after successful save
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
      return null;
    }

    var range = selection.getRangeAt(0);
    var selectedText = selection.toString();

    if (!selectedText) {
      return null;
    } // Get the full text (flattened) from the div


    var container = this.$refs.rationaleDiv;
    var fullText = container.innerText; // Build a Range to compute index relative to the container

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
  }
}), _components$props$com);

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View copy 2.vue?vue&type=template&id=3790c22e":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View copy 2.vue?vue&type=template&id=3790c22e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "View PAPS", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "row gap-10 masonry pos-r"
};
var _hoisted_3 = {
  "class": "row gap-5"
};
var _hoisted_4 = {
  key: 0,
  "class": "peers fxw-nw jc-sb ai-c justify-content-end"
};

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

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_9 = {
  key: 1,
  "class": "peers fxw-nw jc-sb ai-c justify-content-end"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_13 = {
  "class": "col-9"
};
var _hoisted_14 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_15 = ["src"];

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" REPUBLIC OF THE PHILIPPINES "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" PROVINCE OF DAVAO DE ORO ")], -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_18 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_19 = {
  "class": "fw-bold"
};
var _hoisted_20 = {
  key: 0
};
var _hoisted_21 = {
  key: 1
};
var _hoisted_22 = {
  "class": "col-9"
};
var _hoisted_23 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_24 = {
  "class": "table-responsive"
};
var _hoisted_25 = {
  id: "revision_plans"
};
var _hoisted_26 = {
  name: "tabel",
  "class": "table table-hover table-bordered border-dark"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white",
  colspan: "1"
}, "Title", -1
/* HOISTED */
);

var _hoisted_28 = ["id"];

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white",
  colspan: "1"
}, "Project Location", -1
/* HOISTED */
);

var _hoisted_30 = ["id"];

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white",
  colspan: "1"
}, "Implementation Schedule", -1
/* HOISTED */
);

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Start", -1
/* HOISTED */
);

var _hoisted_33 = ["id"];

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "End", -1
/* HOISTED */
);

var _hoisted_35 = ["id"];

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white",
  colspan: "1"
}, "Intended Beneficiaries", -1
/* HOISTED */
);

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Male", -1
/* HOISTED */
);

var _hoisted_38 = ["id"];

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Female", -1
/* HOISTED */
);

var _hoisted_40 = ["id"];

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Total", -1
/* HOISTED */
);

var _hoisted_42 = ["id"];

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white",
  colspan: "1"
}, "Baseline Disaggregated Data", -1
/* HOISTED */
);

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Male", -1
/* HOISTED */
);

var _hoisted_45 = ["id"];

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Female", -1
/* HOISTED */
);

var _hoisted_47 = ["id"];

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Data Source", -1
/* HOISTED */
);

var _hoisted_49 = ["id"];

var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white",
  colspan: "1"
}, "Cost of Program", -1
/* HOISTED */
);

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Amount (Php)", -1
/* HOISTED */
);

var _hoisted_52 = ["id"];

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "1"
}, "Attributed GAD Budget (Php) ", -1
/* HOISTED */
);

var _hoisted_54 = ["id"];
var _hoisted_55 = {
  key: 0
};
var _hoisted_56 = {
  key: 1
};

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white",
  colspan: "1"
}, "HGDG Checklist", -1
/* HOISTED */
);

var _hoisted_58 = ["id"];
var _hoisted_59 = {
  "class": "bg-secondary text-white",
  colspan: "1"
};
var _hoisted_60 = ["id"];
var _hoisted_61 = {
  key: 0
};
var _hoisted_62 = {
  id: "rationale"
};

var _hoisted_63 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_64 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_65 = ["innerHTML"];

var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_67 = {
  key: 1
};
var _hoisted_68 = {
  id: "objective"
};

var _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_70 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_71 = ["innerHTML"];

var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_73 = {
  key: 2
};
var _hoisted_74 = {
  id: "beneficiaries"
};

var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_76 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_77 = ["innerHTML"];

var _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_79 = {
  key: 3
};
var _hoisted_80 = {
  id: "implementation_workplan"
};
var _hoisted_81 = {
  "class": "table table-hover table-bordered border-dark"
};

var _hoisted_82 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
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
}, "Person Responsible")])], -1
/* HOISTED */
);

var _hoisted_83 = {
  key: 0,
  style: {
    "background-color": "lightgrey",
    "font-weight": "bold"
  }
};
var _hoisted_84 = ["onClick"];
var _hoisted_85 = ["onClick"];
var _hoisted_86 = {
  key: 0
};
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
  key: 1
};
var _hoisted_91 = {
  key: 2
};
var _hoisted_92 = {
  key: 0
};

var _hoisted_93 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_94 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_95 = {
  key: 0
};
var _hoisted_96 = {
  key: 0
};
var _hoisted_97 = {
  key: 0
};
var _hoisted_98 = {
  key: 0
};
var _hoisted_99 = {
  "class": "text-end"
};
var _hoisted_100 = {
  key: 0
};
var _hoisted_101 = {
  key: 0
};
var _hoisted_102 = {
  key: 0
};
var _hoisted_103 = ["id"];
var _hoisted_104 = ["onClick"];
var _hoisted_105 = ["onClick"];
var _hoisted_106 = ["id"];
var _hoisted_107 = ["onClick"];
var _hoisted_108 = ["onClick"];
var _hoisted_109 = {
  colspan: "4",
  style: {
    "width": "32%",
    "padding": "0",
    "border": "1px solid #000",
    "vertical-align": "top"
  }
};
var _hoisted_110 = {
  style: {
    "display": "flex",
    "flex-direction": "column",
    "height": "100%",
    "min-height": "100%"
  }
};
var _hoisted_111 = {
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
var _hoisted_112 = ["id"];
var _hoisted_113 = {
  key: 0
};

var _hoisted_114 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_115 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_116 = ["onClick"];
var _hoisted_117 = ["onClick"];
var _hoisted_118 = ["id", "rowspan"];
var _hoisted_119 = {
  key: 0
};
var _hoisted_120 = ["onClick"];
var _hoisted_121 = ["onClick"];
var _hoisted_122 = ["rowspan"];
var _hoisted_123 = {
  key: 0
};
var _hoisted_124 = ["id"];
var _hoisted_125 = ["onClick"];
var _hoisted_126 = ["onClick"];
var _hoisted_127 = {
  key: 1
};
var _hoisted_128 = ["id"];
var _hoisted_129 = ["onClick"];
var _hoisted_130 = ["onClick"];
var _hoisted_131 = {
  "class": "align-top",
  style: {
    "width": "25%",
    "border": "1px solid #000",
    "padding": "4px"
  }
};
var _hoisted_132 = ["id"];
var _hoisted_133 = {
  key: 0
};
var _hoisted_134 = ["onClick"];
var _hoisted_135 = ["onClick"];
var _hoisted_136 = ["id"];
var _hoisted_137 = ["onClick"];
var _hoisted_138 = ["onClick"];
var _hoisted_139 = {
  key: 1,
  "class": "m-0",
  style: {
    "border-collapse": "collapse",
    "width": "100%",
    "height": "100%",
    "table-layout": "fixed"
  }
};

var _hoisted_140 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_141 = ["id", "rowspan"];
var _hoisted_142 = {
  key: 0
};
var _hoisted_143 = ["onClick"];
var _hoisted_144 = ["onClick"];
var _hoisted_145 = ["rowspan"];
var _hoisted_146 = {
  key: 0
};
var _hoisted_147 = ["id"];
var _hoisted_148 = ["onClick"];
var _hoisted_149 = ["onClick"];
var _hoisted_150 = {
  key: 1
};
var _hoisted_151 = ["id"];
var _hoisted_152 = ["onClick"];
var _hoisted_153 = ["onClick"];

var _hoisted_154 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_155 = ["id"];
var _hoisted_156 = {
  key: 0
};
var _hoisted_157 = ["onClick"];
var _hoisted_158 = ["onClick"];
var _hoisted_159 = ["id"];
var _hoisted_160 = {
  key: 0
};
var _hoisted_161 = ["onClick"];
var _hoisted_162 = ["onClick"];
var _hoisted_163 = ["id"];
var _hoisted_164 = {
  key: 0
};
var _hoisted_165 = ["onClick"];
var _hoisted_166 = ["onClick"];
var _hoisted_167 = ["id"];
var _hoisted_168 = {
  key: 0
};
var _hoisted_169 = ["onClick"];
var _hoisted_170 = ["onClick"];
var _hoisted_171 = {
  key: 0
};
var _hoisted_172 = ["id"];
var _hoisted_173 = {
  key: 0
};
var _hoisted_174 = ["onClick"];
var _hoisted_175 = ["onClick"];
var _hoisted_176 = ["id"];
var _hoisted_177 = {
  key: 0
};
var _hoisted_178 = ["onClick"];
var _hoisted_179 = ["onClick"];

var _hoisted_180 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "5"
}, "TOTAL", -1
/* HOISTED */
);

var _hoisted_181 = ["id"];
var _hoisted_182 = ["id"];
var _hoisted_183 = ["id"];
var _hoisted_184 = ["id"];
var _hoisted_185 = ["id"];

var _hoisted_186 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_187 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_188 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_189 = {
  id: "budgetary_requirements"
};
var _hoisted_190 = {
  "class": "table table-bordered"
};

var _hoisted_191 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "3"
}, "Particulars"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Account Code"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Amount"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Source"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th>Edit</th> ")])], -1
/* HOISTED */
);

var _hoisted_192 = {
  key: 0,
  "class": "table-primary"
};
var _hoisted_193 = {
  colspan: "8",
  "class": "fw-bold text-uppercase"
};
var _hoisted_194 = {
  key: 0,
  "class": "table-secondary"
};

var _hoisted_195 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_196 = {
  colspan: "7",
  "class": "fw-bold"
};
var _hoisted_197 = {
  "class": "d-flex justify-content-between align-items-center w-100"
};

var _hoisted_198 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_199 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_200 = ["id"];
var _hoisted_201 = ["onClick"];
var _hoisted_202 = ["onClick"];
var _hoisted_203 = ["id"];
var _hoisted_204 = ["onClick"];
var _hoisted_205 = ["onClick"];
var _hoisted_206 = ["id"];
var _hoisted_207 = ["onClick"];
var _hoisted_208 = ["onClick"];
var _hoisted_209 = ["id"];
var _hoisted_210 = ["onClick"];
var _hoisted_211 = ["onClick"];
var _hoisted_212 = {
  key: 2,
  "class": "fw-bold bg-light"
};

var _hoisted_213 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_214 = {
  colspan: "2"
};

var _hoisted_215 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_216 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "3"
}, null, -1
/* HOISTED */
);

var _hoisted_217 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "GAD TOTAL")], -1
/* HOISTED */
);

var _hoisted_218 = ["id"];

var _hoisted_219 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "3"
}, null, -1
/* HOISTED */
);

var _hoisted_220 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "TOTAL")], -1
/* HOISTED */
);

var _hoisted_221 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "3"
}, null, -1
/* HOISTED */
);

var _hoisted_222 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_223 = {
  id: "implementing_team"
};
var _hoisted_224 = {
  align: "justify",
  style: {
    "white-space": "pre-line"
  }
};
var _hoisted_225 = ["innerHTML"];
var _hoisted_226 = {
  key: 4
};
var _hoisted_227 = {
  table: "",
  name: "tabel",
  "class": "table table-hover table-bordered border-dark"
};

var _hoisted_228 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "bg-secondary text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "No."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Gender"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Position"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Employment Status"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th>Role</th> "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "GAD-related trainings")])], -1
/* HOISTED */
);

var _hoisted_229 = ["id"];
var _hoisted_230 = ["onClick"];
var _hoisted_231 = ["onClick"];
var _hoisted_232 = ["id"];
var _hoisted_233 = ["onClick"];
var _hoisted_234 = ["onClick"];
var _hoisted_235 = ["id"];
var _hoisted_236 = {
  key: 0
};
var _hoisted_237 = {
  key: 1
};
var _hoisted_238 = ["onClick"];
var _hoisted_239 = ["onClick"];
var _hoisted_240 = ["id"];
var _hoisted_241 = ["onClick"];
var _hoisted_242 = ["onClick"];

var _hoisted_243 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_244 = {
  key: 5
};
var _hoisted_245 = {
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};

var _hoisted_246 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_247 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_248 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_249 = {
  key: 6,
  id: "partnership_sustainability"
};
var _hoisted_250 = {
  align: "justify",
  style: {
    "white-space": "pre-line"
  }
};
var _hoisted_251 = ["innerHTML"];

var _hoisted_252 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_253 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_254 = {
  key: 7,
  id: "monitoring_evaluation"
};
var _hoisted_255 = {
  align: "justify",
  style: {
    "white-space": "pre-line"
  }
};
var _hoisted_256 = ["innerHTML"];
var _hoisted_257 = {
  key: 8
};
var _hoisted_258 = {
  table: "",
  name: "tabel",
  "class": "table table-hover table-bordered border-dark"
};

var _hoisted_259 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "bg-secondary text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Evaluation Mechanism/Tools"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "OPR and their Roles"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Target Beneficiaries"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Need for External M&E Team or GAD Expert/Consultant")])], -1
/* HOISTED */
);

var _hoisted_260 = ["id"];
var _hoisted_261 = ["onClick"];
var _hoisted_262 = ["onClick"];
var _hoisted_263 = ["id"];
var _hoisted_264 = ["onClick"];
var _hoisted_265 = ["onClick"];
var _hoisted_266 = ["id"];
var _hoisted_267 = ["onClick"];
var _hoisted_268 = ["onClick"];
var _hoisted_269 = ["id"];
var _hoisted_270 = ["onClick"];
var _hoisted_271 = ["onClick"];

var _hoisted_272 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_273 = {
  key: 9
};
var _hoisted_274 = {
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};

var _hoisted_275 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_276 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_277 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_278 = {
  key: 10,
  id: "risk_management"
};
var _hoisted_279 = {
  align: "justify",
  style: {
    "white-space": "pre-line"
  }
};
var _hoisted_280 = ["innerHTML"];
var _hoisted_281 = {
  key: 11
};
var _hoisted_282 = {
  table: "",
  name: "tabel",
  "class": "table table-hover table-bordered border-dark"
};

var _hoisted_283 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "bg-secondary text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Prospective Possible Risks"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Preventive Measures"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Mechanisms to monitor")])], -1
/* HOISTED */
);

var _hoisted_284 = ["id"];
var _hoisted_285 = ["innerHTML"];
var _hoisted_286 = ["onClick"];
var _hoisted_287 = ["onClick"];
var _hoisted_288 = ["id"];
var _hoisted_289 = ["innerHTML"];
var _hoisted_290 = ["onClick"];
var _hoisted_291 = ["onClick"];
var _hoisted_292 = ["id"];
var _hoisted_293 = ["innerHTML"];
var _hoisted_294 = ["onClick"];
var _hoisted_295 = ["onClick"];

var _hoisted_296 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_297 = {
  key: 12
};
var _hoisted_298 = {
  style: {
    "color": "red",
    "font-weight": "bold"
  }
};

var _hoisted_299 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_300 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_301 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_302 = {
  id: "signatories",
  "class": "signatory-grid"
};
var _hoisted_303 = ["id"];
var _hoisted_304 = {
  key: 0
};
var _hoisted_305 = ["onClick"];
var _hoisted_306 = ["onClick"];

var _hoisted_307 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_308 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_309 = ["id"];
var _hoisted_310 = ["onClick"];
var _hoisted_311 = ["onClick"];

var _hoisted_312 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_313 = ["id"];
var _hoisted_314 = ["onClick"];
var _hoisted_315 = ["onClick"];

var _hoisted_316 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_317 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_318 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_319 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_320 = {
  "class": "col-3"
};
var _hoisted_321 = {
  key: 0,
  "class": "sticky-comments"
};

var _hoisted_322 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_323 = {
  key: 0,
  style: {
    "color": "red"
  },
  "class": "blink"
};
var _hoisted_324 = {
  key: 1,
  "class": "p-20 bd sticky-comments",
  style: {
    "background": "rgba(255, 255, 255, 0.7)"
  }
};
var _hoisted_325 = {
  "class": "d-flex justify-content-end"
};

var _hoisted_326 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_327 = [_hoisted_326];
var _hoisted_328 = {
  "class": "tab"
};
var _hoisted_329 = {
  key: 0,
  style: {
    "color": "red"
  },
  "class": "blink"
};
var _hoisted_330 = {
  key: 0
};

var _hoisted_331 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "comments-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "COMMENTS ... ")], -1
/* HOISTED */
);

var _hoisted_332 = {
  "class": "scrollable-text",
  style: {
    "background": "rgba(255, 255, 255, 0.7)"
  }
};
var _hoisted_333 = {
  key: 0
};

var _hoisted_334 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "p-2 mb-2",
  style: {
    "background": "#ffe5e5",
    "border-radius": "4px"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Unresolved Comments")], -1
/* HOISTED */
);

var _hoisted_335 = {
  "class": "list-unstyled"
};
var _hoisted_336 = {
  style: {
    "border-collapse": "collapse",
    "border": "none !important"
  }
};
var _hoisted_337 = {
  style: {
    "border": "none !important",
    "vertical-align": "top"
  }
};
var _hoisted_338 = {
  style: {
    "border": "none !important",
    "vertical-align": "top",
    "text-align": "left"
  }
};
var _hoisted_339 = ["onClick"];

var _hoisted_340 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "red",
  "class": "bi bi-x-square-fill",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"
})], -1
/* HOISTED */
);

var _hoisted_341 = {
  style: {
    "border": "none !important",
    "vertical-align": "top",
    "text-align": "left"
  }
};
var _hoisted_342 = ["onClick"];
var _hoisted_343 = ["innerHTML"];
var _hoisted_344 = {
  key: 0,
  "class": "text-end"
};
var _hoisted_345 = ["onClick"];
var _hoisted_346 = ["onClick"];
var _hoisted_347 = {
  key: 1
};

var _hoisted_348 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "p-2 mt-4 mb-2",
  style: {
    "background": "#e8ffe8",
    "border-radius": "4px"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Resolved Comments")], -1
/* HOISTED */
);

var _hoisted_349 = {
  "class": "list-unstyled"
};
var _hoisted_350 = ["onClick"];
var _hoisted_351 = {
  style: {
    "border-collapse": "collapse",
    "border": "none !important"
  }
};
var _hoisted_352 = {
  style: {
    "border": "none !important",
    "vertical-align": "top"
  }
};

var _hoisted_353 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "border": "none !important",
    "vertical-align": "top",
    "text-align": "left"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" RESOLVED ICON "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-check-square-fill",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("    ")], -1
/* HOISTED */
);

var _hoisted_354 = {
  style: {
    "border": "none !important",
    "vertical-align": "top",
    "text-align": "left"
  }
};
var _hoisted_355 = {
  key: 0,
  "class": "text-end"
};
var _hoisted_356 = ["onClick"];

var _hoisted_357 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-arrow-counterclockwise"
}, null, -1
/* HOISTED */
);

var _hoisted_358 = ["onClick"];
var _hoisted_359 = {
  key: 1
};

var _hoisted_360 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "comments-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "NAVIGATION ...")], -1
/* HOISTED */
);

var _hoisted_361 = {
  "class": "scrollable-text",
  style: {
    "background": "rgba(255, 255, 255, 0.7)",
    "cursor": "pointer"
  }
};
var _hoisted_362 = {
  "class": "list-unstyled"
};
var _hoisted_363 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_364 = {
  "class": "list-unstyled"
};
var _hoisted_365 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_366 = {
  "class": "list-unstyled"
};
var _hoisted_367 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_368 = {
  "class": "list-unstyled"
};
var _hoisted_369 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_370 = {
  "class": "list-unstyled"
};
var _hoisted_371 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_372 = {
  "class": "list-unstyled"
};
var _hoisted_373 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_374 = {
  "class": "list-unstyled"
};
var _hoisted_375 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_376 = {
  "class": "list-unstyled"
};
var _hoisted_377 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_378 = {
  "class": "list-unstyled"
};
var _hoisted_379 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_380 = {
  "class": "list-unstyled"
};
var _hoisted_381 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};
var _hoisted_382 = {
  "class": "list-unstyled"
};
var _hoisted_383 = {
  "class": "mb-2",
  style: {
    "color": "blue"
  }
};

var _hoisted_384 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ comment_reference_object }} ")], -1
/* HOISTED */
);

var _hoisted_385 = {
  key: 0
};

var _hoisted_386 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Section: ", -1
/* HOISTED */
);

var _hoisted_387 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Subtitle:", -1
/* HOISTED */
);

var _hoisted_388 = ["innerHTML"];

var _hoisted_389 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Data:", -1
/* HOISTED */
);

var _hoisted_390 = ["innerHTML"];

var _hoisted_391 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Column:", -1
/* HOISTED */
);

var _hoisted_392 = {
  key: 0
};
var _hoisted_393 = {
  key: 1
};
var _hoisted_394 = {
  key: 2
};

var _hoisted_395 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Table:", -1
/* HOISTED */
);

var _hoisted_396 = {
  "class": "col-9"
};
var _hoisted_397 = {
  "class": "table table-hover table-bordered border-dark"
};

var _hoisted_398 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white"
}, "Comment", -1
/* HOISTED */
);

var _hoisted_399 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white"
}, "Status  ", -1
/* HOISTED */
);

var _hoisted_400 = {
  key: 0,
  "class": "bg-secondary text-white"
};

var _hoisted_401 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "bg-secondary text-white"
}, "Date", -1
/* HOISTED */
);

var _hoisted_402 = {
  key: 0
};
var _hoisted_403 = {
  "class": "bg-white p-3 rounded border"
};

var _hoisted_404 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_405 = ["innerHTML"];
var _hoisted_406 = ["onClick"];
var _hoisted_407 = ["disabled", "onClick"];
var _hoisted_408 = ["onClick"];
var _hoisted_409 = {
  key: 0
};
var _hoisted_410 = ["onClick"];

var _hoisted_411 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_412 = [_hoisted_411];
var _hoisted_413 = ["onClick"];

var _hoisted_414 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_415 = [_hoisted_414];
var _hoisted_416 = ["onClick"];

var _hoisted_417 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_418 = [_hoisted_417];

var _hoisted_419 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_420 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex justify-content-center"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$props$paps$checklis, _$props$paps$checklis2;

  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_CommentModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CommentModal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("class=\"peers fxw-nw jc-sb ai-c\""), $props.src !== 'budget' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [$props.paps.scope === 'GAS' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    href: $props.src !== 'direct' || $props.department_code_user === $props.department_code_project ? "/revision/general/administration/services/".concat($props.paps.FFUNCCOD, "/plan") : "/revision_plans"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_5];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.paps.idmfo == 0 && $props.paps.scope !== 'GAS' && $props.src !== 'rev_app' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 1,
    href: $props.src !== 'direct' || $props.department_code_user === $props.department_code_project ? "/revision/".concat($props.paps.idpaps) : "/revision_plans"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_6];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.paps.idpaps == 0 && $props.paps.scope !== 'GAS' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 2,
    href: $props.src !== 'direct' || $props.department_code_user === $props.department_code_project ? "/mforevision/".concat($props.paps.idmfo) : "/revision_plans"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_7];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("REVApp"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ paps }} "), $props.paps.scope !== 'GAS' && $props.src === 'rev_app' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 3,
    href: "/revision_plans?source=rev_app"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.src === 'budget' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [$props.paps.scope === 'GAS' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    href: "/revision_plans?source=budget"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_10];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.paps.idmfo == 0 && $props.paps.scope !== 'GAS' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 1,
    href: "/revision_plans?source=budget"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_11];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.paps.idpaps == 0 && $props.paps.scope !== 'GAS' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 2,
    href: "/revision_plans?source=budget"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_12];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _ctx.getImagePath('logo.png'),
    alt: "",
    "class": "img-fluid",
    style: {
      "width": "100px",
      "height": "100px"
    }
  }, null, 8
  /* PROPS */
  , _hoisted_15)]), _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.office), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_19, [$props.paps.type === 'p' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_20, "PROJECT PROFILE")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_21, "PROJECT DESIGN"))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("MAIN TABLE"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("I.    "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/revision/edit/".concat($props.paps.id) : null,
    target: "_blank"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Title")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TITLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "6",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.project_title, $props.paps.project_title, 'project_title', 'revision_plans', $props.paps, $props.paps.comments)
    }),
    id: $props.paps.id + '_revision_plans_project_title'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.paps.project_title) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
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
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_28)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PROJECT LOCATION "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "6",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.project_location, $props.paps.project_location, 'project_location', 'revision_plans', $props.paps, $props.paps.comments)
    }),
    id: $props.paps.id + '_revision_plans_project_location'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.paps.project_location) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
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
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_30)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" IMPLEMENTATION SCHEDULE -FROM-TO "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_31, _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    id: $props.paps.id + '_revision_plans_date_start',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.date_start, $props.paps.date_start, 'date_start', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear($props.paps.date_start)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.handleClick('Title', $props.paps.date_start, $props.paps.date_start, 'date_start', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.date_start, $props.paps.date_start, 'date_start', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.handleClick('Title', $props.paps.date_start, $props.paps.date_start, 'date_start', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_33), _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    id: $props.paps.id + '_revision_plans_date_end',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.date_end, $props.paps.date_end, 'date_end', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear($props.paps.date_end)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $options.handleClick('Title', $props.paps.date_end, $props.paps.date_end, 'date_end', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.date_end, $props.paps.date_end, 'date_end', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $options.handleClick('Title', $props.paps.date_end, $props.paps.date_end, 'date_end', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_35)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" INTENDED BENEFICIARIES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_36, _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    id: $props.paps.id + '_revision_plans_beneficiary_male',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.beneficiary_male, $props.paps.beneficiary_male, 'beneficiary_male', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.paps.beneficiary_male, 0, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $options.handleClick('Title', $props.paps.beneficiary_male, $props.paps.beneficiary_male, 'beneficiary_male', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.beneficiary_male, $props.paps.beneficiary_male, 'beneficiary_male', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return $options.handleClick('Title', $props.paps.beneficiary_male, $props.paps.beneficiary_male, 'beneficiary_male', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_38), _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    id: $props.paps.id + '_revision_plans_beneficiary_female',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.beneficiary_female, $props.paps.beneficiary_female, 'beneficiary_female', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.paps.beneficiary_female, 0, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[10] || (_cache[10] = function ($event) {
      return $options.handleClick('Title', $props.paps.beneficiary_female, $props.paps.beneficiary_female, 'beneficiary_female', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.beneficiary_female, $props.paps.beneficiary_female, 'beneficiary_female', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[11] || (_cache[11] = function ($event) {
      return $options.handleClick('Title', $props.paps.beneficiary_female, $props.paps.beneficiary_female, 'beneficiary_female', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_40), _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    id: $props.paps.id + '_revision_plans_beneficiary_total',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', _ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true), _ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true), 'beneficiary_total', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[12] || (_cache[12] = function ($event) {
      return $options.handleClick('Title', _ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true), _ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true), 'beneficiary_total', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', _ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true), _ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true), 'beneficiary_total', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[13] || (_cache[13] = function ($event) {
      return $options.handleClick('Title', _ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true), _ctx.format_number_conv($props.paps.beneficiary_male + $props.paps.beneficiary_female, 0, true), 'beneficiary_total', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_42)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" BASELINE DISAGGREGATED DATA "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_43, _hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    id: $props.paps.id + '_revision_plans_baseline_male',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.baseline_male, $props.paps.baseline_male, 'baseline_male', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.paps.baseline_male, 0, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[14] || (_cache[14] = function ($event) {
      return $options.handleClick('Title', $props.paps.baseline_male, $props.paps.baseline_male, 'baseline_male', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.baseline_male, $props.paps.baseline_male, 'baseline_male', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[15] || (_cache[15] = function ($event) {
      return $options.handleClick('Title', $props.paps.baseline_male, $props.paps.baseline_male, 'baseline_male', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_45), _hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    id: $props.paps.id + '_revision_plans_baseline_female',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.baseline_female, $props.paps.baseline_female, 'baseline_female', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.paps.baseline_female, 0, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[16] || (_cache[16] = function ($event) {
      return $options.handleClick('Title', $props.paps.baseline_female, $props.paps.baseline_female, 'baseline_female', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.baseline_female, $props.paps.baseline_female, 'baseline_female', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[17] || (_cache[17] = function ($event) {
      return $options.handleClick('Title', $props.paps.baseline_female, $props.paps.baseline_female, 'baseline_female', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_47), _hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "1",
    id: $props.paps.id + '_revision_plans_data_source',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', $props.paps.data_source, $props.paps.data_source, 'data_source', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.paps.data_source) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[18] || (_cache[18] = function ($event) {
      return $options.handleClick('Title', $props.paps.data_source, $props.paps.data_source, 'data_source', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', $props.paps.data_source, $props.paps.data_source, 'data_source', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[19] || (_cache[19] = function ($event) {
      return $options.handleClick('Title', $props.paps.data_source, $props.paps.data_source, 'data_source', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_49), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th colspan=\"1\">Total</th>\n                                <td colspan=\"1\" :class=\"{\n                                    'text-danger': has_comment('Title',(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),'baseline_total','revision_plans', paps, paps.comments)\n                                }\">{{ format_number_conv(paps.baseline_male + paps.baseline_female, 0, true) }}\n                                    <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                        @click=\"handleClick('Title',(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),'baseline_total','revision_plans', paps, paps.comments)\">*\n                                    </button>\n                                    <button v-if=\"has_comment('Title',(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),'baseline_total','revision_plans', paps, paps.comments)\" class=\"superscript-btn\"\n                                        @click=\"handleClick('Title',(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),(format_number_conv(paps.baseline_male + paps.baseline_female, 0, true)),'baseline_total','revision_plans', paps, paps.comments)\">*\n                                    </button>\n                                </td> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" COST OF PROGRAM "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_50, _hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Title', 'Amount', $props.imp_amount, 'amount', 'revision_plans', $props.paps, $props.paps.comments)
    }]),
    id: $props.paps.id + '_revision_plans_amount'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.imp_amount, 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[20] || (_cache[20] = function ($event) {
      return $options.handleClick('Title', 'Amount', $props.imp_amount, 'amount', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', 'Amount', $props.imp_amount, 'amount', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[21] || (_cache[21] = function ($event) {
      return $options.handleClick('Title', 'Amount', $props.imp_amount, 'amount', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_52), _hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    id: $props.paps.id + '_revision_plans_attributed_amount',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Title', 'GAD Attributed Amount', $props.imp_amount, 'attributed_amount', 'revision_plans', $props.paps, $props.paps.comments)
    }])
  }, [parseFloat($props.paps.hgdg_score) > 4 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.imp_amount * ($props.paps.hgdg_score / 20), 2, true)), 1
  /* TEXT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_56, "0.00")), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 2,
    "class": "superscript-btn",
    onClick: _cache[22] || (_cache[22] = function ($event) {
      return $options.handleClick('Title', 'GAD Attributed Amount', _ctx.format_number_conv($props.imp_amount * ($props.paps.hgdg_score / 20), 2, true), 'attributed_amount', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', 'GAD Attributed Amount', _ctx.format_number_conv($props.imp_amount * ($props.paps.hgdg_score / 20), 2, true), 'attributed_amount', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 3,
    "class": "superscript-btn",
    onClick: _cache[23] || (_cache[23] = function ($event) {
      return $options.handleClick('Title', 'GAD Attributed Amount', _ctx.format_number_conv($props.imp_amount * ($props.paps.hgdg_score / 20), 2, true), 'attributed_amount', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_54)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" HGDG CHECKLIST "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "3",
    id: $props.paps.id + '_revision_plans_HGDG Checklist'
  }, [$props.paps.checklist ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 0,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', 'HGDG Checklist', $props.paps.checklist.box_number + ' ' + $props.paps.checklist.sector, 'HGDG Checklist', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" GAD " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$paps$checklis = $props.paps.checklist) === null || _$props$paps$checklis === void 0 ? void 0 : _$props$paps$checklis.box_number) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$paps$checklis2 = $props.paps.checklist) === null || _$props$paps$checklis2 === void 0 ? void 0 : _$props$paps$checklis2.sector) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[24] || (_cache[24] = function ($event) {
      return $options.handleClick('Title', 'HGDG Checklist', $props.paps.checklist.box_number + ' ' + $props.paps.checklist.sector, 'HGDG Checklist', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', 'HGDG Checklist', $props.paps.checklist.box_number + ' ' + $props.paps.checklist.sector, 'HGDG Checklist', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[25] || (_cache[25] = function ($event) {
      return $options.handleClick('Title', 'HGDG Checklist', $props.paps.checklist.box_number + ' ' + $props.paps.checklist.sector, 'HGDG Checklist', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
  /* PROPS */
  , _hoisted_58), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/HGDGScore/".concat($props.paps.id),
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
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    id: $props.paps.id + '_revision_plans_hgdg_score',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Title', 'HGDG Score', $props.paps.hgdg_score, 'hgdg_score', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.paps.hgdg_score) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[26] || (_cache[26] = function ($event) {
      return $options.handleClick('Title', 'HGDG Score', $props.paps.hgdg_score, 'hgdg_score', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Title', 'HGDG Score', $props.paps.hgdg_score, 'hgdg_score', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[27] || (_cache[27] = function ($event) {
      return $options.handleClick('Title', 'HGDG Score', $props.paps.hgdg_score, 'hgdg_score', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_60)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" RATIONALE "), $props.paps.rationale ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Rationale', 'rationale', $props.paps.rationale, 'rationale', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("II. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/revision/edit/".concat($props.paps.id) : null,
    target: "_blank",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Rationale', 'rationale', $props.paps.rationale, 'rationale', 'revision_plans', $props.paps, $props.paps.comments)
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
    onClick: _cache[28] || (_cache[28] = function ($event) {
      return $options.handleClick('Rationale', 'rationale', $props.paps.rationale, 'rationale', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Rationale', 'rationale', $props.paps.rationale, 'rationale', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[29] || (_cache[29] = function ($event) {
      return $options.handleClick('Rationale', 'rationale', $props.paps.rationale, 'rationale', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )]), _hoisted_63, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $props.paps.rationale,
    style: {
      "white-space": "pre-line"
    },
    ref: "rationaleDiv",
    onMouseup: _cache[30] || (_cache[30] = function () {
      return $options.onHighlight && $options.onHighlight.apply($options, arguments);
    })
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_65)]), _hoisted_66])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" OBJECTIVES "), $props.paps.objective ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Objectives', 'objective', $props.paps.objective, 'objective', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("III. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/revision/edit/".concat($props.paps.id) : null,
    target: "_blank",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Objectives', 'objective', $props.paps.objective, 'objective', 'revision_plans', $props.paps, $props.paps.comments)
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
    onClick: _cache[31] || (_cache[31] = function ($event) {
      return $options.handleClick('Objectives', 'objective', $props.paps.objective, 'objective', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Objectives', 'objective', $props.paps.objective, 'objective', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[32] || (_cache[32] = function ($event) {
      return $options.handleClick('Objectives', 'objective', $props.paps.objective, 'objective', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )]), _hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $props.paps.objective,
    style: {
      "white-space": "pre-line"
    }
  }, null, 8
  /* PROPS */
  , _hoisted_71)]), _hoisted_72])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Target Beneficiaries "), $props.paps.beneficiaries ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Beneficiaries', 'beneficiaries', $props.paps.beneficiaries, 'beneficiaries', 'revision_plans', $props.paps, $props.paps.comments)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("IV. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/revision/edit/".concat($props.paps.id) : null,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Beneficiaries', 'beneficiaries', $props.paps.beneficiaries, 'beneficiaries', 'revision_plans', $props.paps, $props.paps.comments)
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
    onClick: _cache[33] || (_cache[33] = function ($event) {
      return $options.handleClick('Beneficiaries', 'beneficiaries', $props.paps.beneficiaries, 'beneficiaries', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Beneficiaries', 'beneficiaries', $props.paps.beneficiaries, 'beneficiaries', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[34] || (_cache[34] = function ($event) {
      return $options.handleClick('Beneficiaries', 'beneficiaries', $props.paps.beneficiaries, 'beneficiaries', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )]), _hoisted_75, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $props.paps.beneficiaries,
    style: {
      "white-space": "pre-line"
    }
  }, null, 8
  /* PROPS */
  , _hoisted_77)]), _hoisted_78])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("IMPLEMENTATION PLAN"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div v-if=\"implementation\">\n\n                        <table class=\"table table-hover table-bordered border-dark\">\n                            <thead>\n                                <tr class=\"bg-secondary text-white\">\n                                    <th>Strategies/Activities</th>\n                                    <th>Performance Target Indicators</th>\n                                    <th>Gender Issues to be Addressed</th>\n                                    <th>Timeline</th>\n                                    <th>Expected Output</th>\n                                    <th>Budget</th>\n                                    <th>Climate Change Topology Code</th>\n                                    <th>Person Responsible</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <template v-for=\"(dat, index) in implementation\" :key=\"dat.id\">\n                                    <tr style=\"background-color:lightgrey; font-weight: bold;\">\n\n                                        <td><b>{{ dat.strategy }}</b></td>\n                                        <td>\n                                            <div v-for=\"target in dat.targets.data\">\n                                                {{ target.indicator_description }}\n                                            </div>\n                                        </td>\n                                        <td>{{ dat.issue }}</td>\n                                        <td>\n\n                                        </td>\n                                        <td></td>\n                                        <td></td>\n                                        <td>{{ dat.cc_topology }}</td>\n                                        <td>{{ dat.person_responsible }}</td>\n\n                                    </tr>\n                                    <template v-if=\"dat.activity_implementation\">\n                                        <tr v-for=\"(act, subIndex) in dat.activity_implementation\" :key=\"act.id\">\n\n                                            <td>{{ act.activity }}</td>\n                                            <td>\n\n                                            </td>\n                                            <td>{{ act.issue }}</td>\n                                            <td>\n                                                <div v-if=\"act.date_from\">\n                                                    {{ act.date_from }} - {{ act.date_to }}\n                                                </div>\n                                            </td>\n                                            <td>\n\n                                            </td>\n                                            <td>\n\n                                            </td>\n                                            <td>{{ act.cc_topology }}</td>\n                                            <td>{{ act.person_responsible }}</td>\n\n                                        </tr>\n                                    </template>\n\n                                </template>\n                                <tr>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                    <td colspan=\"2\"><b>TOTAL BUDGET/COST</b> (Php)</td>\n                                    <td>{{ format_number_conv(imp_amount, 2, true) }}</td>\n                                    <td></td>\n                                    <td></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div> "), $props.implementation ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_80, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /strategies-and-activities/${dat.id} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" V. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/strategies-and-activities/".concat($props.paps.id) : null,
    target: "_blank"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Implementation Plan ")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_81, [_hoisted_82, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.implementation, function (dat, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: dat.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" STRATEGIES***************************************************************************************************** "), $props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_83, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.description), 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_84)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_85)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Implementation Plan', 'strategies', dat.description, 'target_indicator', 'strategy_projects', dat, dat.comments)
      })
    }, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_86, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.target_indicator), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_87, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.gad_issue), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_88, [dat.date_from ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_89, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(dat.date_from)), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), dat.date_from && dat.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_90, " to ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), dat.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_91, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(dat.date_to)), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_92, [dat.strategyProject[0] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 0
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(dat.strategyProject[0].expected_output, function (eo) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(eo.description), 1
      /* TEXT */
      ), _hoisted_93]);
    }), 256
    /* UNKEYED_FRAGMENT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), dat.strategyProject[0] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 1
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(dat.strategyProject[0].expected_outcome, function (eo) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(eo.description), 1
      /* TEXT */
      ), _hoisted_94]);
    }), 256
    /* UNKEYED_FRAGMENT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_95, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total), 2, true)), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_96, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total), 2, true)), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_97, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total), 2, true)), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_98)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_99, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_100, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(dat.ps_total) + parseFloat(dat.mooe_total) + parseFloat(dat.co_total), 2, true)), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_101, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.ccet_code), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_102, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.responsible), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
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
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dat.description), 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_104)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Implementation Plan', 'strategies', dat.description, 'strategy', 'strategy_projects', dat, dat.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_105)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    )], 8
    /* PROPS */
    , _hoisted_103)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ACTIVITIES **************************************************************************************************** "), dat.activity && $props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.description), 1
      /* TEXT */
      ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_107)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activities', act.description, 'activities', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_108)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
      /* CLASS, PROPS */
      , _hoisted_106), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TARGET INDICATOR "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td :class=\"{\n                                                'text-danger': has_comment('Implementation Plan','activity target indicator',act.target_indicator,'activity target indicator','activity_projects', act, act.comments)\n                                            }\">\n                                                    <div v-if=\"act.activityProject[0]\" v-for=\"(eo,index) in act.activityProject[0].expected_output\" :key=\"index\">\n                                                        <div>{{ eo.target_indicator }}\n                                                            <span v-if=\"paps.is_strategy_based==0\">{{ act.target_indicator }}\n                                                                <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                                                    @click=\"handleClick('Implementation Plan','activity target indicator',eo.target_indicator,'activity target indicator','expected_revised_outputs', eo, eo.comments)\">*\n                                                                </button>\n                                                                <button v-if=\"has_comment('Implementation Plan','activity target indicator',eo.target_indicator,'activity target indicator','expected_revised_outputs', eo, eo.comments)\" class=\"superscript-btn\"\n                                                                    @click=\"handleClick('Implementation Plan','activity target indicator',eo.target_indicator,'activity target indicator','expected_revised_outputs', eo, eo.comments)\">*\n                                                                </button>\n                                                                <hr>\n                                                            </span>\n                                                        </div>\n                                                        <hr>\n                                                    </div>\n                                                    <tr v-if=\"act.activityProject[0]\" v-for=\"eo in act.activityProject[0].expected_outcome\">\n                                                        <div>{{ eo.description }} </div>\n                                                        <hr>\n                                                    </tr>\n                                            </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GAD ISSUE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MERGED "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TARGET/INDICATORs, EXPECTED OUTPUTS, GAD ISSUE, IMPLEMENTATION DATES"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_109, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_110, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" style=\"border-collapse: collapse; width: 100%; height: 100%; table-layout: fixed;\" "), $options.getPairedOutputs(act.activityProject[0]) && $options.getPairedOutputs(act.activityProject[0]).length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", _hoisted_111, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.getPairedOutputs(act.activityProject[0]), function (pair, i) {
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
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pair.target_indicator) + " ", 1
        /* TEXT */
        ), pair.quantity > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_113, " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pair.quantity), 1
        /* TEXT */
        )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
        /* CLASS */
        )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_114, _hoisted_115, $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'Target/Indicator', pair.target_indicator, 'target_indicator', pair.table, pair, pair.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_116)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'Target/Indicator', pair.target_indicator, 'target_indicator', pair.table, pair, pair.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 2,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'Target/Indicator', pair.target_indicator, 'target_indicator', pair.table, pair, pair.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_117)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
        /* PROPS */
        , _hoisted_112), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GAD Issue "), i === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
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
        }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_119, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.gad_issue) + " ", 1
        /* TEXT */
        ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_120)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_121)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
        /* CLASS, PROPS */
        , _hoisted_118)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Timeline "), i === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
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
        }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_123, [act.date_from ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
          key: 0,
          id: act.activity_id + '_activity_projects_date_from'
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(act.date_from)) + " ", 1
        /* TEXT */
        ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
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
        , _hoisted_126)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
        /* PROPS */
        , _hoisted_124)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), act.date_from && act.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_127, " to ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), act.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
          key: 2,
          id: act.activity_id + '_activity_projects_date_to'
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(act.date_to)) + " ", 1
        /* TEXT */
        ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_129)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_130)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
        /* PROPS */
        , _hoisted_128)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
        /* CLASS, PROPS */
        , _hoisted_122)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Expected Outputs/Outcomes "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_131, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" OUTPUTS*********************************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'text-danger': $options.has_comment('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments) || $options.has_comment('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments)
          }),
          id: pair.id + '_expected_revised_outputs_output_description'
        }, [pair.quantity > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_133, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pair.quantity), 1
        /* TEXT */
        )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pair.output_description) + " ", 1
        /* TEXT */
        ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_134)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 2,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'output_description', pair.output_description, 'output_description', 'expected_revised_outputs', pair, pair.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_135)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
        /* CLASS, PROPS */
        , _hoisted_132), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" OUTCOMES*********************************************************************** "), pair.outcome_description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: 0,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'text-danger': $options.has_comment('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments) || $options.has_comment('Implementation Plan', 'outcome_description', pair.output_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments)
          }),
          id: pair.id + '_expected_revised_outcomes'
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pair.outcome_description) + " ", 1
        /* TEXT */
        ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_137)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Implementation Plan', 'outcome_description', pair.outcome_description, 'outcome_description', 'expected_revised_outcomes', pair, pair.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_138)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
        /* CLASS, PROPS */
        , _hoisted_136)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", _hoisted_139, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("template", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_140, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GAD Issue "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
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
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_142, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.gad_issue) + " ", 1
      /* TEXT */
      ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_143)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity GAD issue', act.gad_issue, 'gad_issue', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_144)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
      /* CLASS, PROPS */
      , _hoisted_141), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Timeline "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        style: {
          "width": "25%",
          "border": "1px solid #000",
          "padding": "4px"
        },
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["align-top", {
          'text-danger': $options.has_comment('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments) || $options.has_comment('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments)
        }]),
        rowspan: $options.getPairedOutputs(act.activityProject[0]).length
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_146, [act.date_from ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
        key: 0,
        id: act.activity_id + '_activity_projects_date_from'
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(act.date_from)) + " ", 1
      /* TEXT */
      ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_148)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date From', act.date_from, 'date_from', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_149)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
      /* PROPS */
      , _hoisted_147)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), act.date_from && act.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_150, " to ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), act.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
        key: 2,
        id: act.activity_id + '_activity_projects_date_to'
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatMonthYear(act.date_to)) + " ", 1
      /* TEXT */
      ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_152)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Date To', act.date_to, 'date_to', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_153)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
      /* PROPS */
      , _hoisted_151)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
      /* CLASS, PROPS */
      , _hoisted_145), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Expected Outcome "), _hoisted_154])])]))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PERSONNEL SERVICES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_ps_total'
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_156, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.ps_total), 2, true)), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_157)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Personnel Services', act.ps_total, 'ps_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_158)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
      /* CLASS, PROPS */
      , _hoisted_155), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MAINTENANCE, OPERATING, AND OTHER EXPENSES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_mooe_total'
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_160, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.mooe_total), 2, true)), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_161)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity MOOE', act.mooe_total, 'mooe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_162)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
      /* CLASS, PROPS */
      , _hoisted_159), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FINANCIAL EXPENSES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_fe_total'
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_164, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.fe_total), 2, true)), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_165)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Financial Expenses', act.fe_total, 'fe_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_166)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
      /* CLASS, PROPS */
      , _hoisted_163), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CAPITAL OUTLAY "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_co_total'
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_168, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.co_total), 2, true)), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_169)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Capital Outlay', act.co_total, 'co_total', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_170)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
      /* CLASS, PROPS */
      , _hoisted_167), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_171, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(parseFloat(act.ps_total) + parseFloat(act.mooe_total) + parseFloat(act.co_total), 2, true)), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CCET Code "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_ccet_code'
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_173, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.ccet_code), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_174)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity CCET Code', act.ccet_code, 'ccet_code', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_175)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
      /* CLASS, PROPS */
      , _hoisted_172), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" RESPONSIBLE INDIVIDUAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'text-danger': $options.has_comment('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments)
        }),
        id: act.activity_id + '_activity_projects_responsible'
      }, [$props.paps.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_177, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(act.responsible), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 1,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_178)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 2,
        "class": "superscript-btn",
        onClick: function onClick($event) {
          return $options.handleClick('Implementation Plan', 'activity Person Responsible', act.responsible, 'responsible', 'activity_projects', act, act.comments);
        }
      }, "* ", 8
      /* PROPS */
      , _hoisted_179)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
      /* CLASS, PROPS */
      , _hoisted_176)]);
    }), 128
    /* KEYED_FRAGMENT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
    /* STABLE_FRAGMENT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TOTALS*********************************************************************************** "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_180, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PS TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_ps, 2, true), _ctx.format_number_conv($data.v_imp_ps, 2, true), 'imp_ps', 'revision_plans', $props.paps, $props.paps.comments)
    }),
    id: $props.paps.id + '_revision_plans_imp_ps'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($data.v_imp_ps, 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[35] || (_cache[35] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_ps, 2, true), _ctx.format_number_conv($data.v_imp_ps, 2, true), 'imp_ps', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_ps, 2, true), _ctx.format_number_conv($data.v_imp_ps, 2, true), 'imp_ps', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[36] || (_cache[36] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_ps, 2, true), _ctx.format_number_conv($data.v_imp_ps, 2, true), 'imp_ps', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_181), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_mooe, 2, true), _ctx.format_number_conv($data.v_imp_mooe, 2, true), 'imp_mooe', 'revision_plans', $props.paps, $props.paps.comments)
    }),
    id: $props.paps.id + '_revision_plans_imp_mooe'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($data.v_imp_mooe, 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[37] || (_cache[37] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_mooe, 2, true), _ctx.format_number_conv($data.v_imp_mooe, 2, true), 'imp_mooe', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_mooe, 2, true), _ctx.format_number_conv($data.v_imp_mooe, 2, true), 'imp_mooe', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[38] || (_cache[38] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_mooe, 2, true), _ctx.format_number_conv($data.v_imp_mooe, 2, true), 'imp_mooe', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_182), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FE TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_fe, 2, true), _ctx.format_number_conv($data.v_imp_fe, 2, true), 'imp_fe', 'revision_plans', $props.paps, $props.paps.comments)
    }),
    id: $props.paps.id + '_revision_plans_imp_fe'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($data.v_imp_fe, 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[39] || (_cache[39] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_fe, 2, true), _ctx.format_number_conv($data.v_imp_fe, 2, true), 'imp_fe', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_fe, 2, true), _ctx.format_number_conv($data.v_imp_fe, 2, true), 'imp_fe', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[40] || (_cache[40] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_fe, 2, true), _ctx.format_number_conv($data.v_imp_fe, 2, true), 'imp_fe', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_183), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CO TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_co, 2, true), _ctx.format_number_conv($data.v_imp_co, 2, true), 'imp_co', 'revision_plans', $props.paps, $props.paps.comments)
    }),
    id: $props.paps.id + '_revision_plans_imp_co'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($data.v_imp_co, 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[41] || (_cache[41] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_co, 2, true), _ctx.format_number_conv($data.v_imp_co, 2, true), 'imp_co', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv($data.v_imp_co, 2, true), _ctx.format_number_conv($data.v_imp_co, 2, true), 'imp_co', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[42] || (_cache[42] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($data.v_imp_co, 2, true), _ctx.format_number_conv($data.v_imp_co, 2, true), 'imp_co', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_184), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-end", {
      'text-danger': $options.has_comment('Implementation Plan', _ctx.format_number_conv($props.imp_amount, 2, true), _ctx.format_number_conv($props.imp_amount, 2, true), 'total_imp_amount', 'revision_plans', $props.paps, $props.paps.comments)
    }]),
    id: $props.paps.id + '_revision_plans_total_imp_amount'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv($props.imp_amount, 2, true)) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[43] || (_cache[43] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($props.imp_amount, 2, true), _ctx.format_number_conv($props.imp_amount, 2, true), 'total_imp_amount', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementation Plan', _ctx.format_number_conv($props.imp_amount, 2, true), _ctx.format_number_conv($props.imp_amount, 2, true), 'total_imp_amount', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[44] || (_cache[44] = function ($event) {
      return $options.handleClick('Implementation Plan', _ctx.format_number_conv($props.imp_amount, 2, true), _ctx.format_number_conv($props.imp_amount, 2, true), 'total_imp_amount', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_185), _hoisted_186, _hoisted_187])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ implementation }} ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_188, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("BUDGETARY REQUIREMENTS"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" v-if=\"b_mooe.length>0 || b_capital.length>0 || b_ps.length>0\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_189, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" VI. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/budget/".concat($props.paps.id) : null
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Estimated Cost/Budgetary Requirements ")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ capitalOutlay }}\n                        showBudgetTable: {{ showBudgetTable() }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <table v-if=\"showBudgetTable()\" class=\"table table-hover table-bordered border-dark\">\n                            <thead>\n                                <tr class=\"bg-secondary text-white\">\n                                    <th colspan=\"3\">Particular</th>\n                                    <th>Account Code</th>\n                                    <th>GAD Amount (Php)</th>\n                                    <th>Non-GAD Amount (Php)</th>\n                                    <th>Amount (Php)</th>\n                                    <th>Source</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr v-if=\"(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non))>0\"\n\n                                >\n                                    <td colspan=\"8\"><b>MAINTENANCE, OPERATING, AND OTHER EXPENSES</b></td>\n                                </tr>\n                                <tr v-if=\"(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non))>0\" v-for=\"mooe in maintenanceOperating\">\n                                    <td ></td>\n                                    MOOE -PARTICULARS\n                                    <td colspan=\"2\"\n                                    :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements','MOOE',mooe.particulars,'particulars','budget_requirements', mooe, mooe.comments)\n                                            }\" :id=\"mooe.id + '_budget_requirements_particulars'\"\n                                    >{{ mooe.particulars }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','MOOE',mooe.particulars,'particulars','budget_requirements', mooe, mooe.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements','MOOE',mooe.particulars,'particulars','budget_requirements', mooe, mooe.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','MOOE',mooe.particulars,'particulars','budget_requirements', mooe, mooe.comments)\">*\n                                        </button>\n                                    </td>\n                                    MOOE -ACCOUNT CODE\n                                    <td :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements','MOOE',mooe.account_code,'account_code','budget_requirements', mooe, mooe.comments)\n                                            }\" :id=\"mooe.id + '_budget_requirements_account_code'\"\n                                    >{{ mooe.account_code }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','MOOE',mooe.account_code,'account_code','budget_requirements', mooe, mooe.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements','MOOE',mooe.account_code,'account_code','budget_requirements', mooe, mooe.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','MOOE',mooe.account_code,'account_code','budget_requirements', mooe, mooe.comments)\">*\n                                        </button>\n                                    </td>\n                                    MOOE GAD Attirbuted\n                                    <td class=\"text-end\" :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements','MOOE',mooe.GAD_amount,'GAD_amount','budget_requirements', mooe, mooe.comments)\n                                            }\" :id=\"mooe.id + '_budget_requirements_GAD_amount'\">{{ format_number_conv(mooe.GAD_amount,2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','MOOE',mooe.GAD_amount,'GAD_amount','budget_requirements', mooe, mooe.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements','MOOE',mooe.GAD_amount,'GAD_amount','budget_requirements', mooe, mooe.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','MOOE',mooe.GAD_amount,'GAD_amount','budget_requirements', mooe, mooe.comments)\">*\n                                        </button>\n                                    </td>\n                                     MOOE NON-GAD\n                                    <td class=\"text-end\" :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements','MOOE',mooe.NONGAD_amount,'NONGAD_amount','budget_requirements', mooe, mooe.comments)\n                                            }\" :id=\"mooe.id + '_budget_requirements_NONGAD_amount'\">\n                                        {{ format_number_conv(mooe.NONGAD_amount,2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','MOOE',mooe.NONGAD_amount,'NONGAD_amount','budget_requirements', mooe, mooe.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements','MOOE',mooe.NONGAD_amount,'NONGAD_amount','budget_requirements', mooe, mooe.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','MOOE',mooe.NONGAD_amount,'NONGAD_amount','budget_requirements', mooe, mooe.comments)\">*\n                                        </button>\n                                    </td>\n                                     MOOE Total\n                                    <td class=\"text-end\" :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements','MOOE',mooe.Total,'Total','budget_requirements', mooe, mooe.comments)\n                                            }\" :id=\"mooe.id + '_budget_requirements_Total'\">{{ format_number_conv(mooe.Total,2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','MOOE',mooe.Total,'Total','budget_requirements', mooe, mooe.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements','MOOE',mooe.Total,'Total','budget_requirements', mooe, mooe.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','MOOE',mooe.Total,'Total','budget_requirements', mooe, mooe.comments)\">*\n                                        </button>\n                                    </td>\n                                    MOOE Source\n                                    <td :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements','MOOE',mooe.Source,'Source','budget_requirements', mooe, mooe.comments)\n                                            }\" :id=\"mooe.id + '_budget_requirements_Source'\">{{ mooe.Source }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','MOOE',mooe.Source,'Source','budget_requirements', mooe, mooe.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements','MOOE',mooe.Source,'Source','budget_requirements', mooe, mooe.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','MOOE',mooe.Source,'Source','budget_requirements', mooe, mooe.comments)\">*\n                                        </button>\n                                    </td>\n                                </tr>\n                                <tr v-if=\"(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non))>0\">\n                                    <td ></td>\n                                    <td colspan=\"3\">\n                                        SUB-TOTAL (MOOE)\n                                    </td>\n                                    MOOE GAD ******************************************************************************************************************\n                                    <td class=\"text-end\" :class=\"{\n                                        'text-danger': has_comment('Budgetary Requirements', format_number_conv(s_mooe_gad,2,true), format_number_conv(s_mooe_gad,2,true), 'budgetary_mooe_gad', 'revision_plans', paps, paps.comments)\n                                    }\">\n                                        {{ format_number_conv(s_mooe_gad,2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',format_number_conv(s_mooe_gad,2,true),format_number_conv(s_mooe_gad,2,true),'budgetary_mooe_gad','revision_plans', paps, paps.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements',format_number_conv(s_mooe_gad,2,true),format_number_conv(s_mooe_gad,2,true),'budgetary_mooe_gad','revision_plans', paps, paps.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',format_number_conv(s_mooe_gad,2,true),format_number_conv(s_mooe_gad,2,true),'budgetary_mooe_gad','revision_plans', paps, paps.comments)\">*\n                                        </button>\n                                    </td>\n                                    MOOE NON-GAD ******************************************************************************************************************\n                                    <td class=\"text-end\" :class=\"{\n                                        'text-danger': has_comment('Budgetary Requirements', format_number_conv(s_mooe_non,2,true), format_number_conv(s_mooe_non,2,true), 'budgetary_mooe_non', 'revision_plans', paps, paps.comments)\n                                    }\">\n                                        {{ format_number_conv(s_mooe_non,2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements', format_number_conv(s_mooe_non,2,true), format_number_conv(s_mooe_non,2,true), 'budgetary_mooe_non', 'revision_plans', paps, paps.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements', format_number_conv(s_mooe_non,2,true), format_number_conv(s_mooe_non,2,true), 'budgetary_mooe_non', 'revision_plans', paps, paps.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements', format_number_conv(s_mooe_non,2,true), format_number_conv(s_mooe_non,2,true), 'budgetary_mooe_non', 'revision_plans', paps, paps.comments)\">*\n                                        </button>\n                                    </td>\n                                    MOOE TOTAL ******************************************************************************************************************\n                                    <td class=\"text-end\" :class=\"{\n                                        'text-danger': has_comment('Budgetary Requirements', format_number_conv(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non), 2,true), format_number_conv(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non), 2,true),\n                                        'budgetary_mooe_total', 'revision_plans', paps, paps.comments)\n                                    }\">\n                                        {{ format_number_conv(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non), 2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements', format_number_conv(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non), 2,true), format_number_conv(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non), 2,true),\n                                        'budgetary_mooe_total', 'revision_plans', paps, paps.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements', format_number_conv(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non), 2,true), format_number_conv(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non), 2,true),\n                                        'budgetary_mooe_total', 'revision_plans', paps, paps.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements', format_number_conv(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non), 2,true), format_number_conv(parseFloat(s_mooe_gad) + parseFloat(s_mooe_non), 2,true),\n                                        'budgetary_mooe_total', 'revision_plans', paps, paps.comments)\">*\n                                        </button>\n                                    </td>\n                                    <td></td>\n                                </tr>\n                                 <tr v-if=\"(parseFloat(s_ps_gad) + parseFloat(s_ps_non))>0\">\n                                    <td colspan=\"8\"><b>PERSONNEL SERVICES</b></td>\n                                </tr>\n                                <tr  v-if=\"(parseFloat(s_ps_gad) + parseFloat(s_ps_non))>0\" v-for=\"ps in personnelServices\">\n                                    <td :id=\"ps.id + '_budget_requirements'\"></td>\n                                    PS Particular\n                                    <td colspan=\"2\" :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements','Personnel Services',ps.particulars,'particulars','budget_requirements', ps, ps.comments)\n                                            }\" :id=\"ps.id + '_budget_requirements_particulars'\">{{ ps.particulars }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Personnel Services',ps.particulars,'particulars','budget_requirements', ps, ps.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements','Personnel Services',ps.particulars,'particulars','budget_requirements', ps, ps.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Personnel Services',ps.particulars,'particulars','budget_requirements', ps, ps.comments)\">*\n                                        </button>\n                                    </td>\n                                    PS Account Code\n                                    <td :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements','Personnel Services',ps.account_code,'account_code','budget_requirements', ps, ps.comments)\n                                            }\" :id=\"ps.id + '_budget_requirements_account_code'\">{{ ps.account_code }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Personnel Services',ps.account_code,'account_code','budget_requirements', ps, ps.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements','Personnel Services',ps.account_code,'account_code','budget_requirements', ps, ps.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Personnel Services',ps.account_code,'account_code','budget_requirements', ps, ps.comments)\">*\n                                        </button>\n                                    </td>\n                                     PS GAD Amount\n                                    <td class=\"text-end\" :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements','Personnel Services',ps.GAD_amount,'GAD_amount','budget_requirements', ps, ps.comments)\n                                            }\" :id=\"ps.id + '_budget_requirements_GAD_amount'\">{{ format_number_conv(ps.GAD_amount,2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Personnel Services',ps.GAD_amount,'GAD_amount','budget_requirements', ps, ps.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements','Personnel Services',ps.GAD_amount,'GAD_amount','budget_requirements', ps, ps.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Personnel Services',ps.GAD_amount,'GAD_amount','budget_requirements', ps, ps.comments)\">*\n                                        </button>\n                                    </td>\n                                    PS NONGAD Amount\n                                    <td class=\"text-end\" :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements','Personnel Services',ps.NONGAD_amount,'NONGAD_amount','budget_requirements', ps, ps.comments)\n                                            }\" :id=\"ps.id + '_budget_requirements_NONGAD_amount'\">\n                                        {{ format_number_conv(ps.NONGAD_amount,2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Personnel Services',ps.NONGAD_amount,'NONGAD_amount','budget_requirements', ps, ps.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements','Personnel Services',ps.NONGAD_amount,'NONGAD_amount','budget_requirements', ps, ps.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Personnel Services',ps.NONGAD_amount,'NONGAD_amount','budget_requirements', ps, ps.comments)\">*\n                                        </button>\n                                    </td>\n                                     PS Total\n                                    <td class=\"text-end\" :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements','Personnel Services',ps.Total,'Total','budget_requirements', ps, ps.comments)\n                                            }\" :id=\"ps.id + '_budget_requirements_Total'\">{{ format_number_conv(ps.Total,2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Personnel Services',ps.Total,'Total','budget_requirements', ps, ps.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements','Personnel Services',ps.Total,'Total','budget_requirements', ps, ps.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Personnel Services',ps.Total,'Total','budget_requirements', ps, ps.comments)\">*\n                                        </button>\n                                    </td>\n                                     PS Source\n                                    <td :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements','Personnel Services',ps.Source,'Source','budget_requirements', ps, ps.comments)\n                                            }\" :id=\"ps.id + '_budget_requirements_Source'\">{{ ps.Source }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Personnel Services',ps.Source,'Source','budget_requirements', ps, ps.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements','Personnel Services',ps.Source,'Source','budget_requirements', ps, ps.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Personnel Services',ps.Source,'Source','budget_requirements', ps, ps.comments)\">*\n                                        </button>\n                                    </td>\n                                </tr>\n                                <tr v-if=\"(parseFloat(s_ps_gad) + parseFloat(s_ps_non))>0\">\n                                    <td ></td>\n                                    <td colspan=\"3\">SUB-TOTAL (PS)</td>\n                                     PS GAD ******************************************************************************************************************\n                                    <td class=\"text-end\" :class=\"{\n                                        'text-danger': has_comment('Budgetary Requirements',\n                                        format_number_conv(s_ps_gad,2,true),\n                                        format_number_conv(s_ps_gad,2,true),\n                                        'budgetary_ps_gad', 'revision_plans',\n                                        paps, paps.comments)\n                                    }\">{{ format_number_conv(s_ps_gad,2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',\n                                            format_number_conv(s_ps_gad,2,true),\n                                            format_number_conv(s_ps_gad,2,true),\n                                            'budgetary_ps_gad', 'revision_plans',\n                                        paps, paps.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements',\n                                            format_number_conv(s_ps_gad,2,true),\n                                            format_number_conv(s_ps_gad,2,true),\n                                            'budgetary_ps_gad', 'revision_plans',\n                                            paps, paps.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',\n                                            format_number_conv(s_ps_gad,2,true),\n                                            format_number_conv(s_ps_gad,2,true),\n                                            'budgetary_ps_gad', 'revision_plans',\n                                            paps, paps.comments)\">*\n                                        </button>\n                                    </td>\n                                    PS NON-GAD ******************************************************************************************************************\n                                    <td class=\"text-end\" :class=\"{\n                                        'text-danger': has_comment('Budgetary Requirements',\n                                        format_number_conv(s_ps_non,2,true),\n                                        format_number_conv(s_ps_non,2,true),\n                                        'budgetary_ps_non', 'revision_plans',\n                                        paps, paps.comments)\n                                    }\">{{ format_number_conv(s_ps_non,2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',\n                                            format_number_conv(s_ps_non,2,true),\n                                            format_number_conv(s_ps_non,2,true),\n                                            'budgetary_ps_non', 'revision_plans',\n                                            paps, paps.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements',\n                                            format_number_conv(s_ps_non,2,true),\n                                            format_number_conv(s_ps_non,2,true),\n                                            'budgetary_ps_non', 'revision_plans',\n                                            paps, paps.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',\n                                            format_number_conv(s_ps_non,2,true),\n                                            format_number_conv(s_ps_non,2,true),\n                                            'budgetary_ps_non', 'revision_plans',\n                                            paps, paps.comments)\">*\n                                        </button>\n                                    </td>\n                                    PS TOTAL ******************************************************************************************************************\n                                    <td class=\"text-end\" :class=\"{\n                                        'text-danger': has_comment('Budgetary Requirements',\n                                        format_number_conv(parseFloat(s_ps_gad) + parseFloat(s_ps_non), 2,true),\n                                        format_number_conv(parseFloat(s_ps_gad) + parseFloat(s_ps_non), 2,true),\n                                        'budgetary_ps_total', 'revision_plans',\n                                        paps, paps.comments)\n                                    }\"\n                                    >{{ format_number_conv(parseFloat(s_ps_gad) + parseFloat(s_ps_non), 2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',\n                                            format_number_conv(parseFloat(s_ps_gad) + parseFloat(s_ps_non), 2,true),\n                                            format_number_conv(parseFloat(s_ps_gad) + parseFloat(s_ps_non), 2,true),\n                                            'budgetary_ps_total', 'revision_plans',\n                                            paps, paps.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements',\n                                            format_number_conv(parseFloat(s_ps_gad) + parseFloat(s_ps_non), 2,true),\n                                            format_number_conv(parseFloat(s_ps_gad) + parseFloat(s_ps_non), 2,true),\n                                            'budgetary_ps_total', 'revision_plans',\n                                            paps, paps.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',\n                                            format_number_conv(parseFloat(s_ps_gad) + parseFloat(s_ps_non), 2,true),\n                                            format_number_conv(parseFloat(s_ps_gad) + parseFloat(s_ps_non), 2,true),\n                                            'budgetary_ps_total', 'revision_plans',\n                                            paps, paps.comments)\">*\n                                        </button>\n                                    </td>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"(parseFloat(s_fe_gad) + parseFloat(s_fe_non))>0\">\n                                    <td colspan=\"8\"><b>FINANCIAL EXPENSES</b></td>\n                                </tr>\n                                <tr v-if=\"(parseFloat(s_fe_gad) + parseFloat(s_fe_non))>0\" v-for=\"fe in financialExpenses\">\n                                    <td :id=\"fe.id + '_budget_requirements'\"></td>\n                                    Financial Expenses Particulars\n\n                                    <td colspan=\"2\" :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements','Financial Expenses',fe.particulars,'particulars','budget_requirements', fe, fe.comments)\n                                            }\" :id=\"fe.id + '_budget_requirements_particulars'\">{{ fe.particulars }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Financial Expenses',fe.particulars,'particulars','budget_requirements', fe, fe.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements','Financial Expenses',fe.particulars,'particulars','budget_requirements', fe, fe.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Financial Expenses',fe.particulars,'particulars','budget_requirements', fe, fe.comments)\">*\n                                        </button>\n                                    </td>\n                                     Financial Expenses Account Code\n                                    <td :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements','Financial Expenses',fe.account_code,'account_code','budget_requirements', fe, fe.comments)\n                                            }\" :id=\"fe.id + '_budget_requirements_account_code'\">{{ fe.account_code }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Financial Expenses',fe.account_code,'account_code','budget_requirements', fe, fe.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements','Financial Expenses',fe.account_code,'account_code','budget_requirements', fe, fe.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Financial Expenses',fe.account_code,'account_code','budget_requirements', fe, fe.comments)\">*\n                                        </button>\n                                    </td>\n                                     Financial Expenses GAD Attributed\n                                    <td class=\"text-end\" :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements','Financial Expenses',fe.GAD_amount,'GAD_amount','budget_requirements', fe, fe.comments)\n                                            }\" :id=\"fe.id + '_budget_requirements_GAD_amount'\">{{ format_number_conv(fe.GAD_amount,2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Financial Expenses',fe.GAD_amount,'GAD_amount','budget_requirements', fe, fe.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements','Financial Expenses',fe.GAD_amount,'GAD_amount','budget_requirements', fe, fe.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Financial Expenses',fe.GAD_amount,'GAD_amount','budget_requirements', fe, fe.comments)\">*\n                                        </button>\n                                    </td>\n                                     Financial Expenses NON-GAD Amount\n                                    <td class=\"text-end\" :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements','Financial Expenses',fe.NONGAD_amount,'NONGAD_amount','budget_requirements', fe, fe.comments)\n                                            }\" :id=\"fe.id + '_budget_requirements_NONGAD_amount'\">{{ format_number_conv(fe.NONGAD_amount,2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Financial Expenses',fe.NONGAD_amount,'NONGAD_amount','budget_requirements', fe, fe.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements','Financial Expenses',fe.NONGAD_amount,'NONGAD_amount','budget_requirements', fe, fe.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Financial Expenses',fe.NONGAD_amount,'NONGAD_amount','budget_requirements', fe, fe.comments)\">*\n                                        </button>\n                                    </td>\n                                    Financial Expenses Total\n                                    <td class=\"text-end\" :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements','Financial Expenses',fe.Total,'Total','budget_requirements', fe, fe.comments)\n                                            }\" :id=\"fe.id + '_budget_requirements_Total'\">{{ format_number_conv(fe.Total,2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Financial Expenses',fe.Total,'Total','budget_requirements', fe, fe.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements','Financial Expenses',fe.Total,'Total','budget_requirements', fe, fe.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Financial Expenses',fe.Total,'Total','budget_requirements', fe, fe.comments)\">*\n                                        </button>\n                                    </td>\n                                    Financial Expenses Source\n                                    <td class=\"text-end\" :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements','Financial Expenses',fe.Source,'Source','budget_requirements', fe, fe.comments)\n                                            }\" :id=\"fe.id + '_budget_requirements_Source'\">{{ fe.Source }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Financial Expenses',fe.Source,'Source','budget_requirements', fe, fe.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements','Financial Expenses',fe.Source,'Source','budget_requirements', fe, fe.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Financial Expenses',fe.Source,'Source','budget_requirements', fe, fe.comments)\">*\n                                        </button>\n                                    </td>\n                                </tr>\n                                <tr v-if=\"(parseFloat(s_fe_gad) + parseFloat(s_fe_non))>0\">\n                                    <td ></td>\n                                    <td colspan=\"3\">SUB-TOTAL (Financial Expenses)</td>\n                                     FE GAD ******************************************************************************************************************\n                                    <td class=\"text-end\" :class=\"{\n                                        'text-danger': has_comment('Budgetary Requirements',\n                                        format_number_conv(s_fe_gad,2,true),\n                                        format_number_conv(s_fe_gad,2,true),\n                                        'budgetary_fe_gad', 'revision_plans',\n                                        paps, paps.comments)\n                                    }\">\n                                        {{ format_number_conv(s_fe_gad,2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',\n                                            format_number_conv(s_fe_gad,2,true),\n                                            format_number_conv(s_fe_gad,2,true),\n                                            'budgetary_fe_gad', 'revision_plans',\n                                            paps, paps.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements',\n                                            format_number_conv(s_fe_gad,2,true),\n                                            format_number_conv(s_fe_gad,2,true),\n                                            'budgetary_fe_gad', 'revision_plans',\n                                            paps, paps.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',\n                                            format_number_conv(s_fe_gad,2,true),\n                                            format_number_conv(s_fe_gad,2,true),\n                                            'budgetary_fe_gad', 'revision_plans',\n                                            paps, paps.comments)\">*\n                                        </button>\n                                    </td>\n                                    FE NON-GAD ******************************************************************************************************************\n                                    <td class=\"text-end\" :class=\"{\n                                        'text-danger': has_comment('Budgetary Requirements',\n                                        format_number_conv(s_fe_non,2,true),\n                                        format_number_conv(s_fe_non,2,true),\n                                        'budgetary_fe_non', 'revision_plans',\n                                        paps, paps.comments)\n                                    }\">{{ format_number_conv(s_fe_non,2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',\n                                            format_number_conv(s_fe_non,2,true),\n                                            format_number_conv(s_fe_non,2,true),\n                                            'budgetary_fe_non', 'revision_plans',\n                                            paps, paps.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements',\n                                            format_number_conv(s_fe_non,2,true),\n                                            format_number_conv(s_fe_non,2,true),\n                                            'budgetary_fe_non', 'revision_plans',\n                                            paps, paps.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',\n                                            format_number_conv(s_fe_non,2,true),\n                                            format_number_conv(s_fe_non,2,true),\n                                            'budgetary_fe_non', 'revision_plans',\n                                            paps, paps.comments)\">*\n                                        </button>\n                                    </td>\n                                     FE TOTAL ******************************************************************************************************************\n                                    <td class=\"text-end\" :class=\"{\n                                        'text-danger': has_comment('Budgetary Requirements',\n                                            'TOTAL FINANCIAL EXPENSES',\n                                            format_number_conv(parseFloat(s_fe_gad) + parseFloat(s_fe_non), 2,true),\n                                            'budgetary_fe_totl', 'revision_plans',\n                                            paps, paps.comments)\n                                        }\">{{ format_number_conv(parseFloat(s_fe_gad) + parseFloat(s_fe_non), 2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',\n                                            'TOTAL FINANCIAL EXPENSES',\n                                            format_number_conv(parseFloat(s_fe_gad) + parseFloat(s_fe_non), 2,true),\n                                            'budgetary_fe_totl', 'revision_plans',\n                                            paps, paps.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements',\n                                            'TOTAL FINANCIAL EXPENSES',\n                                            format_number_conv(parseFloat(s_fe_gad) + parseFloat(s_fe_non), 2,true),\n                                            'budgetary_fe_totl', 'revision_plans',\n                                        paps, paps.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',\n                                            'TOTAL FINANCIAL EXPENSES',\n                                            format_number_conv(parseFloat(s_fe_gad) + parseFloat(s_fe_non), 2,true),\n                                            'budgetary_fe_totl', 'revision_plans',\n                                            paps, paps.comments)\">*\n                                        </button>\n                                    </td>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"(parseFloat(s_cap_gad) + parseFloat(s_cap_non))>0\">\n                                    <td colspan=\"8\"><b>CAPITAL OUTLAY</b></td>\n                                </tr>\n                                <tr v-if=\"(parseFloat(s_cap_gad) + parseFloat(s_cap_non))>0\" v-for=\"cap in capitalOutlay\">\n                                    <td ></td>\n                                     Capital Outlay Particulars\n                                    <td colspan=\"2\" :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements','Capital Outlay',cap.particulars,'particulars','budget_requirements', cap, cap.comments)\n                                            }\" :id=\"cap.id + '_budget_requirements_particulars'\">{{ cap.particulars }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Capital Outlay',cap.particulars,'particulars','budget_requirements', cap, cap.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements','Capital Outlay',cap.particulars,'particulars','budget_requirements', cap, cap.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Capital Outlay',cap.particulars,'particulars','budget_requirements', cap, cap.comments)\">*\n                                        </button>\n                                    </td>\n                                     Capital Outlay Account Code\n                                    <td :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements','Capital Outlay',cap.account_code,'account_code','budget_requirements', cap, cap.comments)\n                                            }\" :id=\"cap.id + '_budget_requirements_account_code'\">{{ cap.account_code }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Capital Outlay',cap.account_code,'account_code','budget_requirements', cap, cap.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements','Capital Outlay',cap.account_code,'account_code','budget_requirements', cap, cap.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Capital Outlay',cap.account_code,'account_code','budget_requirements', cap, cap.comments)\">*\n                                        </button>\n                                    </td>\n                                     Capital Outlay GAD Attributed\n                                    <td class=\"text-end\" :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements','Capital Outlay',cap.GAD_amount,'GAD_amount','budget_requirements', cap, cap.comments)\n                                            }\" :id=\"cap.id + '_budget_requirements_GAD_amount'\">{{ format_number_conv(cap.GAD_amount,2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Capital Outlay',cap.GAD_amount,'GAD_amount','budget_requirements', cap, cap.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements','Capital Outlay',cap.GAD_amount,'GAD_amount','budget_requirements', cap, cap.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Capital Outlay',cap.GAD_amount,'GAD_amount','budget_requirements', cap, cap.comments)\">*\n                                        </button>\n                                    </td>\n                                     Capital Outlay NON-GAD Amount\n                                    <td class=\"text-end\" :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements','Capital Outlay',cap.NONGAD_amount,'NONGAD_amount','budget_requirements', cap, cap.comments)\n                                            }\" :id=\"cap.id + '_budget_requirements_NONGAD_amount'\">{{ format_number_conv(cap.NONGAD_amount,2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Capital Outlay',cap.NONGAD_amount,'NONGAD_amount','budget_requirements', cap, cap.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements','Capital Outlay',cap.NONGAD_amount,'NONGAD_amount','budget_requirements', cap, cap.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Capital Outlay',cap.NONGAD_amount,'NONGAD_amount','budget_requirements', cap, cap.comments)\">*\n                                        </button>\n                                    </td>\n                                    Capital Outlay Total\n                                    <td class=\"text-end\" :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements','Capital Outlay',cap.Total,'Total','budget_requirements', cap, cap.comments)\n                                            }\" :id=\"cap.id + '_budget_requirements_Total'\">{{ format_number_conv(cap.Total,2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Capital Outlay',cap.Total,'Total','budget_requirements', cap, cap.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements','Capital Outlay',cap.Total,'Total','budget_requirements', cap, cap.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Capital Outlay',cap.Total,'Total','budget_requirements', cap, cap.comments)\">*\n                                        </button>\n                                    </td>\n                                     Capital Outlay Source\n                                    <td :class=\"{\n                                                'text-danger': has_comment('Budgetary Requirements','Capital Outlay',cap.Source,'Source','budget_requirements', cap, cap.comments)\n                                            }\" :id=\"cap.id + '_budget_requirements_Source'\">{{ cap.Source }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Capital Outlay',cap.Source,'Source','budget_requirements', cap, cap.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements','Capital Outlay',cap.Source,'Source','budget_requirements', cap, cap.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements','Capital Outlay',cap.Source,'Source','budget_requirements', cap, cap.comments)\">*\n                                        </button>\n                                    </td>\n                                </tr>\n                                <tr v-if=\"(parseFloat(s_cap_gad) + parseFloat(s_cap_non))>0\">\n                                    <td ></td>\n                                    <td colspan=\"3\">SUB-TOTAL (Capital Outlay)</td>\n                                    CAPITAL OUTLAY GAD ******************************************************************************************************************--\n                                    <td class=\"text-end\" :class=\"{\n                                        'text-danger': has_comment('Budgetary Requirements',\n                                        'Capital Outlay GAD -Total',\n                                        format_number_conv(s_cap_gad,2,true),\n                                        'budgetary_cap_gad', 'revision_plans',\n                                        paps, paps.comments)\n                                    }\">{{ format_number_conv(s_cap_gad,2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',\n                                            'Capital Outlay GAD -Total',\n                                            format_number_conv(s_cap_gad,2,true),\n                                            'budgetary_cap_gad', 'revision_plans',\n                                            paps, paps.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements',\n                                            'Capital Outlay GAD -Total',\n                                            format_number_conv(s_cap_gad,2,true),\n                                            'budgetary_cap_gad', 'revision_plans',\n                                            paps, paps.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',\n                                            'Capital Outlay GAD -Total',\n                                            format_number_conv(s_cap_gad,2,true),\n                                            'budgetary_cap_gad', 'revision_plans',\n                                            paps, paps.comments)\">*\n                                        </button>\n                                    </td>\n                                    -- CAPITAL OUTLAY NON-GAD ******************************************************************************************************************--\n                                     <td class=\"text-end\" :class=\"{\n                                        'text-danger': has_comment('Budgetary Requirements',\n                                        'Capital Outlay Non-GAD -Total',\n                                        format_number_conv(s_cap_non,2,true),\n                                        'budgetary_cap_non', 'revision_plans',\n                                        paps, paps.comments)\n                                    }\">{{ format_number_conv(s_cap_non,2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',\n                                            'Capital Outlay Non-GAD -Total',\n                                            format_number_conv(s_cap_non,2,true),\n                                            'budgetary_cap_non', 'revision_plans',\n                                            paps, paps.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements',\n                                            'Capital Outlay Non-GAD -Total',\n                                            format_number_conv(s_cap_non,2,true),\n                                            'budgetary_cap_non', 'revision_plans',\n                                            paps, paps.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',\n                                            'Capital Outlay Non-GAD -Total',\n                                            format_number_conv(s_cap_non,2,true),\n                                            'budgetary_cap_non', 'revision_plans',\n                                            paps, paps.comments)\">*\n                                        </button>\n                                    </td>\n                                     -- CAPITAL OUTLAY TOTAL ******************************************************************************************************************-\n                                    <td class=\"text-end\" :class=\"{\n                                            'text-danger': has_comment('Budgetary Requirements',\n                                            'Capital Outlay -Total',\n                                            format_number_conv(parseFloat(s_cap_gad) + parseFloat(s_cap_non), 2,true),\n                                            'budgetary_cap_total', 'revision_plans',\n                                            paps, paps.comments)\n                                        }\">{{ format_number_conv(parseFloat(s_cap_gad) + parseFloat(s_cap_non), 2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',\n                                            'Capital Outlay -Total',\n                                            format_number_conv(parseFloat(s_cap_gad) + parseFloat(s_cap_non), 2,true),\n                                            'budgetary_cap_total', 'revision_plans',\n                                            paps, paps.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements',\n                                            'Capital Outlay -Total',\n                                            format_number_conv(parseFloat(s_cap_gad) + parseFloat(s_cap_non), 2,true),\n                                            'budgetary_cap_total', 'revision_plans',\n                                            paps, paps.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',\n                                            'Capital Outlay -Total',\n                                            format_number_conv(parseFloat(s_cap_gad) + parseFloat(s_cap_non), 2,true),\n                                            'budgetary_cap_total', 'revision_plans',\n                                            paps, paps.comments)\">*\n                                        </button>\n                                    </td>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                    <td colspan=\"4\">TOTAL</td>\n                                    <td class=\"text-end\"\n                                        :class=\"{\n                                            'text-danger': has_comment('Budgetary Requirements',\n                                            'GAD Grand Total',\n                                            format_number_conv(tot_gad,2,true),\n                                            'gad_total', 'revision_plans',\n                                            paps, paps.comments)\n                                        }\"\n                                        :id=\"paps.id + '_revision_plans_gad_total'\"\n                                    >{{  format_number_conv(tot_gad,2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',\n                                            'GAD Grand Total',\n                                            format_number_conv(tot_gad,2,true),\n                                            'gad_total', 'revision_plans',\n                                            paps, paps.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements',\n                                            'GAD Grand Total',\n                                            format_number_conv(tot_gad,2,true),\n                                            'gad_total', 'revision_plans',\n                                            paps, paps.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',\n                                            'GAD Grand Total',\n                                            format_number_conv(tot_gad,2,true),\n                                            'gad_total', 'revision_plans',\n                                            paps, paps.comments)\">*\n                                        </button>\n                                    </td>\n                                    <td class=\"text-end\"\n                                        :class=\"{\n                                            'text-danger': has_comment('Budgetary Requirements',\n                                            'Non-GAD Grand Total',\n                                            format_number_conv(tot_non,2,true),\n                                            'non_total', 'revision_plans',\n                                            paps, paps.comments)\n                                        }\"\n                                        :id=\"paps.id + '_revision_plans_non_total'\"\n                                    >{{ format_number_conv(tot_non,2,true) }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',\n                                            'Non-GAD Grand Total',\n                                            format_number_conv(tot_non,2,true),\n                                            'non_total', 'revision_plans',\n                                            paps, paps.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements',\n                                            'Non-GAD Grand Total',\n                                            format_number_conv(tot_non,2,true),\n                                            'non_total', 'revision_plans',\n                                            paps, paps.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',\n                                            'Non-GAD Grand Total',\n                                            format_number_conv(tot_non,2,true),\n                                            'non_total', 'revision_plans',\n                                            paps, paps.comments)\">*\n                                        </button>\n                                    </td>\n                                    <td class=\"text-end\"\n                                        :class=\"{\n                                            'text-danger': has_comment('Budgetary Requirements',\n                                            'Overall Grand Total',\n                                            format_number_conv(grand_total,2,true),\n                                            'grand_total', 'revision_plans',\n                                            paps, paps.comments)\n                                        }\"\n                                        :id=\"paps.id + '_revision_plans_grand_total'\"\n                                    >{{ format_number_conv((parseFloat(s_cap_gad) + parseFloat(s_cap_non) + parseFloat(s_ps_gad)\n                                    + parseFloat(s_ps_non) + parseFloat(s_mooe_gad) + parseFloat(s_mooe_non) + parseFloat(s_fe_gad) + parseFloat(s_fe_non))\n                                    , 2,true)\n                                    }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',\n                                            'Overall Grand Total',\n                                            format_number_conv(grand_total,2,true),\n                                            'grand_total', 'revision_plans',\n                                            paps, paps.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Budgetary Requirements',\n                                            'Overall Grand Total',\n                                            format_number_conv(grand_total,2,true),\n                                            'grand_total', 'revision_plans',\n                                            paps, paps.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Budgetary Requirements',\n                                            'Overall Grand Total',\n                                            format_number_conv(grand_total,2,true),\n                                            'grand_total', 'revision_plans',\n                                            paps, paps.comments)\">*\n                                        </button>\n                                    </td>\n                                    <td></td>\n                                </tr>\n                            </tbody>\n                        </table> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_190, [_hoisted_191, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.groupedBudget, function (gadGroups, category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tbody", {
      key: category
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CATEGORY HEADER "), $options.hasAnyRows(gadGroups) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_192, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_193, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatCategory(category)), 1
    /* TEXT */
    )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GAD + NON-GAD GROUPS "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(gadGroups, function (rows, gadType) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: gadType
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SUB HEADER (GAD / NON-GAD) "), $options.hasRows(rows) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_194, [_hoisted_195, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_196, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_197, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(gadType), 1
      /* TEXT */
      )])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DATA ROWS "), $options.hasRows(rows) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 1
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(rows, function (row) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: row.id
        }, [_hoisted_198, _hoisted_199, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PARTICULARS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'text-danger': $options.has_comment('Budgetary Requirements', 'Particulars', row.particulars, 'particulars', 'budget_requirements', row, row.comments)
          }),
          id: row.id + '_budget_requirements_particulars'
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.particulars) + " ", 1
        /* TEXT */
        ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Budgetary Requirements', 'Particulars', row.particulars, 'particulars', 'budget_requirements', row, row.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_201)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Particulars', row.particulars, 'particulars', 'budget_requirements', row, row.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Budgetary Requirements', 'Particulars', row.particulars, 'particulars', 'budget_requirements', row, row.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_202)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
        /* CLASS, PROPS */
        , _hoisted_200), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ACCOUNT CODE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'text-danger': $options.has_comment('Budgetary Requirements', 'Account Code', row.account_code, 'account_code', 'budget_requirements', row, row.comments)
          }),
          id: row.id + '_budget_requirements_account_code'
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <textarea\n                                                class=\"form-control transparent-bg \"\n                                                type=\"text\"\n                                                v-model=\"row.account_code\"\n                                                @input=\"setUnsaved(true)\"\n                                                @change=\"updateRevisionPlans('budget_requirements', 'account_code', row.id, row.account_code)\" disabled>\n                                                    {{ row.account_code }}\n                                            </textarea> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.account_code) + " ", 1
        /* TEXT */
        ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Budgetary Requirements', 'Account Code', row.account_code, 'account_code', 'budget_requirements', row, row.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_204)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Account Code', row.account_code, 'account_code', 'budget_requirements', row, row.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Budgetary Requirements', 'Account Code', row.account_code, 'account_code', 'budget_requirements', row, row.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_205)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
        /* CLASS, PROPS */
        , _hoisted_203), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" AMOUNT "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'text-danger': $options.has_comment('Budgetary Requirements', 'Amount', row.amount, 'amount', 'budget_requirements', row, row.comments)
          }),
          id: row.id + '_budget_requirements_amount'
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(row.amount, 2, true)) + " ", 1
        /* TEXT */
        ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Budgetary Requirements', 'Amount', row.amount, 'amount', 'budget_requirements', row, row.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_207)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Amount', row.amount, 'amount', 'budget_requirements', row, row.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Budgetary Requirements', 'Amount', row.amount, 'amount', 'budget_requirements', row, row.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_208)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
        /* CLASS, PROPS */
        , _hoisted_206), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SOURCE OF FUND "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'text-danger': $options.has_comment('Budgetary Requirements', 'Source', row.source, 'source', 'budget_requirements', row, row.comments)
          }),
          id: row.id + '_budget_requirements_source'
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <textarea\n                                                class=\"form-control transparent-bg \"\n                                                type=\"text\"\n                                                v-model=\"row.source\"\n                                                @input=\"setUnsaved(true)\"\n                                                @change=\"updateRevisionPlans('budget_requirements', 'source', row.id, row.source)\">\n                                                    {{ row.source }}\n                                            </textarea> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.source) + " ", 1
        /* TEXT */
        ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Budgetary Requirements', 'Source', row.source, 'source', 'budget_requirements', row, row.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_210)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'Source', row.source, 'source', 'budget_requirements', row, row.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "superscript-btn",
          onClick: function onClick($event) {
            return $options.handleClick('Budgetary Requirements', 'Source', row.source, 'source', 'budget_requirements', row, row.comments);
          }
        }, "* ", 8
        /* PROPS */
        , _hoisted_211)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
        /* CLASS, PROPS */
        , _hoisted_209), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" EDIT "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td>\n                                            <button class=\"btn btn-primary btn-sm text-white\"\n                                                @click=\"showBudgetModal(form.id,gadType,category)\">\n                                                ✏ Edit\n                                            </button>\n                                        </td> ")]);
      }), 128
      /* KEYED_FRAGMENT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" NO DATA ROW "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <tr v-if=\"rows.length === 0\">\n                                        <td colspan=\"8\" class=\"text-center text-muted\">\n                                            No entries under {{ gadType }} {{ formatCategory(category)  }}\n                                        </td>\n                                    </tr> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TOTAL ROW "), $options.hasRows(rows) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_212, [_hoisted_213, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_214, "TOTAL " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(gadType), 1
      /* TEXT */
      ), _hoisted_215, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " ₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.budgetSum(category, gadType).toLocaleString()), 1
      /* TEXT */
      ), _hoisted_216])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
      /* STABLE_FRAGMENT */
      );
    }), 128
    /* KEYED_FRAGMENT */
    ))]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_217, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Budgetary Requirements', 'GAD Grand Total', _ctx.format_number_conv($data.tot_gad, 2, true), 'gad_total', 'revision_plans', $props.paps, $props.paps.comments)
    }),
    id: $props.paps.id + '_revision_plans_gad_total'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.gadBudgetTotal.toLocaleString()) + " ", 1
  /* TEXT */
  ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "superscript-btn",
    onClick: _cache[45] || (_cache[45] = function ($event) {
      return $options.handleClick('Budgetary Requirements', 'GAD Grand Total', _ctx.format_number_conv($data.tot_gad, 2, true), 'gad_total', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Budgetary Requirements', 'GAD Grand Total', _ctx.format_number_conv($data.tot_gad, 2, true), 'gad_total', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[46] || (_cache[46] = function ($event) {
      return $options.handleClick('Budgetary Requirements', 'GAD Grand Total', _ctx.format_number_conv($data.tot_gad, 2, true), 'gad_total', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , _hoisted_218), _hoisted_219]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_220, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.overallBudget.toLocaleString()), 1
  /* TEXT */
  ), _hoisted_221]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <tr>\n                                    <td colspan=\"4\"><h4>TOTAL</h4></td>\n                                    <td>₱ {{ overallBudget.toLocaleString() }}</td>\n                                    <td colspan=\"3\"></td>\n                                </tr> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <table v-if=\"showBudgetTable()\" class=\"table table-hover table-bordered border-dark\">\n                            <thead>\n                                <tr class=\"bg-secondary text-white\">\n                                    <th colspan=\"3\">Particular</th>\n                                    <th>Account Code</th>\n                                    <th>Amount (Php)</th>\n                                    <th>Source</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr v-if=\"mooe_gad.length > 0 || mooe_non.length > 0\">\n                                    <th colspan=\"3\">Maintenance, Operating, and Other Expenses</th>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"mooe_gad.length > 0\">\n                                    <td></td>\n                                    <th colspan=\"2\">GAD </th>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"mooe_gad.length > 0\" v-for=\"dat in mooe_gad\">\n                                    <td></td>\n                                    <td></td>\n                                    <td>{{ dat.particulars }}</td>\n                                    <td>{{ dat.account_code }}</td>\n                                    <td class=\"text-end\">{{ format_number_conv(dat.amount, 2, true) }}</td>\n                                    <td>{{ dat.source }}</td>\n                                </tr>\n                                <tr v-if=\"mooe_gad.length > 0\">\n                                    <td></td>\n                                    <td></td>\n                                    <th colspan=\"2\">SUB TOTAL (GAD) </th>\n                                    <th class=\"text-end\">{{ format_number_conv(s_mooe_gad, 2, true) }}</th>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"mooe_non.length > 0\">\n                                    <td></td>\n                                    <th colspan=\"2\">NON-GAD </th>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"mooe_non.length > 0\" v-for=\"dat in mooe_non\">\n                                    <td></td>\n                                    <td></td>\n                                    <td>{{ dat.particulars }}</td>\n                                    <td>{{ dat.account_code }}</td>\n                                    <td class=\"text-end\">{{ format_number_conv(dat.amount, 2, true) }}</td>\n                                    <td>{{ dat.source }}</td>\n                                </tr>\n                                <tr v-if=\"mooe_non.length > 0\" class=\"text-bg-dark\">\n                                    <td></td>\n                                    <td></td>\n                                    <th colspan=\"2\">SUB TOTAL (NON-GAD) </th>\n                                    <th class=\"text-end\">{{ format_number_conv(s_mooe_non, 2, true) }}</th>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"mooe_gad.length > 0 || mooe_non.length > 0\">\n                                    <td></td>\n                                    <th colspan=\"3\">SUB TOTAL (MOOE) </th>\n                                    <th class=\"text-end\">{{ getSum(s_mooe_gad, s_mooe_non) }}</th>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"cap_gad.length > 0 || cap_non.length > 0\">\n                                    <th colspan=\"3\">Capital Outlay</th>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"cap_gad.length > 0\">\n                                    <td></td>\n                                    <th colspan=\"2\">GAD </th>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"cap_gad.length > 0\" v-for=\"dat in cap_gad\">\n                                    <td></td>\n                                    <td></td>\n                                    <td>{{ dat.particulars }}</td>\n                                    <td>{{ dat.account_code }}</td>\n                                    <td class=\"text-end\">{{ format_number_conv(dat.amount, 2, true) }}</td>\n                                    <td>{{ dat.source }}</td>\n                                </tr>\n                                <tr v-if=\"cap_gad.length > 0\" class=\"text-bg-dark\">\n                                    <td></td>\n                                    <td></td>\n                                    <th colspan=\"2\">SUB TOTAL (GAD) </th>\n                                    <th class=\"text-end\">{{ format_number_conv(s_cap_gad, 2, true) }}</th>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"cap_non.length > 0\">\n                                    <td></td>\n                                    <th colspan=\"2\">NON-GAD </th>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"cap_non.length > 0\" v-for=\"dat in cap_non\">\n                                    <td></td>\n                                    <td></td>\n                                    <td>{{ dat.particulars }}</td>\n                                    <td>{{ dat.account_code }}</td>\n                                    <td class=\"text-end\">{{ format_number_conv(dat.amount, 2, true) }}</td>\n                                    <td>{{ dat.source }}</td>\n                                </tr>\n                                <tr v-if=\"cap_non.length > 0\" class=\"text-bg-dark\">\n                                    <td></td>\n                                    <td></td>\n                                    <th colspan=\"2\">SUB TOTAL (NON-GAD) </th>\n                                    <th class=\"text-end\">{{ format_number_conv(s_cap_non, 2, true) }}</th>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"cap_gad.length > 0 || cap_non.length > 0\">\n                                    <td></td>\n                                    <th colspan=\"3\">SUB TOTAL (Capital Outlay) </th>\n                                    <th class=\"text-end\">{{ getSum(s_cap_gad, s_cap_non) }}</th>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"ps_gad.length > 0 || ps_non.length > 0\">\n                                    <th colspan=\"3\">Personnel Services</th>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"ps_gad.length > 0\">\n                                    <td></td>\n                                    <th colspan=\"2\">GAD </th>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"ps_gad.length > 0\" v-for=\"dat in ps_gad\">\n                                    <td></td>\n                                    <td></td>\n                                    <td>{{ dat.particulars }}</td>\n                                    <td>{{ dat.account_code }}</td>\n                                    <td class=\"text-end\">{{ format_number_conv(dat.amount, 2, true) }}</td>\n                                    <td>{{ dat.source }}</td>\n                                </tr>\n                                <tr v-if=\"ps_gad.length > 0\" class=\"text-bg-dark\">\n                                    <td></td>\n                                    <td></td>\n                                    <th colspan=\"2\">SUB TOTAL (GAD) </th>\n                                    <th class=\"text-end\">{{ format_number_conv(s_ps_gad, 2, true) }}</th>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"ps_non.length > 0\">\n                                    <td></td>\n                                    <th colspan=\"2\">NON-GAD</th>\n                                    <td></td>\n                                    <td></td>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"ps_non.length > 0\" v-for=\"dat in ps_non\">\n                                    <td></td>\n                                    <td></td>\n                                    <td>{{ dat.particulars }}</td>\n                                    <td>{{ dat.account_code }}</td>\n                                    <td class=\"text-end\">{{ format_number_conv(dat.amount, 2, true) }}</td>\n                                    <td>{{ dat.source }}</td>\n                                </tr>\n                                <tr v-if=\"ps_non.length > 0\" class=\"text-bg-dark\">\n                                    <td></td>\n                                    <td></td>\n                                    <th colspan=\"2\">SUB TOTAL (NON-GAD) </th>\n                                    <th class=\"text-end\">{{ format_number_conv(s_ps_non, 2, true) }}</th>\n                                    <td></td>\n                                </tr>\n                                <tr v-if=\"ps_gad.length > 0 || ps_non.length > 0\">\n                                    <td></td>\n                                    <th colspan=\"3\">SUB TOTAL (Personnel Services) </th>\n                                    <th class=\"text-end\">{{ getSum(s_ps_gad, s_ps_non) }}</th>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                    <th colspan=\"4\">GRAND TOTAL</th>\n                                    <th class=\"text-end\">{{ getBudgetTotal() }}</th>\n                                    <th></th>\n                                </tr>\n                            </tbody>\n                        </table> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div v-else>\n                            <span style=\"color:red; font-weight: bold;\">\n                                This Project has no budgetary requirements! <br>\n                                Click\n                                <Link :href=\"`/budget/${paps.id}`\">here</Link> to edit budgetary requirements.\n                            </span>\n                        </div> "), _hoisted_222]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("IMPLEMENTING TEAM v-if=\"team_members.length > 0 || paps.implementing_team !== null\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_223, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" VII. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/team/".concat($props.paps.id, "/revision/plan/team") : null,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-danger': $options.has_comment('Implementing Team', 'implementing team', $props.paps.rationale, 'implementing_team', 'revision_plans', $props.paps, $props.paps.comments)
    }),
    id: $props.paps.id + '_revision_plans_implementing_team'
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
    onClick: _cache[47] || (_cache[47] = function ($event) {
      return $options.handleClick('Implementing Team', 'implementing team', $props.paps.implementing_team, 'implementing_team', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Implementing Team', 'implementing team', $props.paps.implementing_team, 'implementing_team', 'revision_plans', $props.paps, $props.paps.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "superscript-btn",
    onClick: _cache[48] || (_cache[48] = function ($event) {
      return $options.handleClick('Implementing Team', 'implementing team', $props.paps.implementing_team, 'implementing_team', 'revision_plans', $props.paps, $props.paps.comments);
    })
  }, "* ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_224, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ paps.implementing_team }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $props.paps.implementing_team
  }, null, 8
  /* PROPS */
  , _hoisted_225), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td colspan=\"6\" :class=\"{\n                            'text-danger': has_comment('Title', paps.project_title, paps.project_title, 'project_title', 'revision_plans', paps, paps.comments)\n                        }\">\n                            {{ paps.project_title }}\n                            <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                @click=\"handleClick('Title',paps.project_title,paps.project_title,'project_title','revision_plans', paps, paps.comments)\">*\n                            </button>\n                            <button v-if=\"has_comment('Title',paps.project_title,paps.project_title,'project_title','revision_plans', paps, paps.comments)\" class=\"superscript-btn\"\n                                @click=\"handleClick('Title',paps.project_title,paps.project_title,'project_title','revision_plans', paps, paps.comments)\">*\n                            </button>\n                        </td> ")]), $props.team_members.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_226, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_227, [_hoisted_228, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.team_members, function (team_member, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index + 1), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Name "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
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
    , _hoisted_230)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Team Plan', 'Name', team_member.name, 'name', 'team_plans', team_member, team_member.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'Name', team_member.name, 'name', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_231)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_229), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Gender "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(team_member.gender), 1
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
    , _hoisted_233)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Team Plan', 'Position', team_member.position, 'position', 'team_plans', team_member, team_member.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'Position', team_member.position, 'position', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_234)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_232), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Employment Status "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      id: team_member.id + '_team_plans_status',
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Team Plan', 'status', team_member.status, 'status', 'team_plans', team_member, team_member.comments)
      })
    }, [team_member.status === 'Regular' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_236, "Permanent")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_237, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(team_member.status), 1
    /* TEXT */
    )), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 2,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'status', team_member.status, 'status', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_238)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Team Plan', 'status', team_member.status, 'status', 'team_plans', team_member, team_member.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 3,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'status', team_member.status, 'status', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_239)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_235), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Competency "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td :class=\"{\n                                                'text-danger': has_comment('Team Plan','competency',team_member.competency,'competency','team_plans', team_member, team_member.comments)\n                                            }\">{{ team_member.competency }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Team Plan','competency',team_member.competency,'competency','team_plans', team_member, team_member.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Team Plan','competency',team_member.competency,'competency','team_plans', team_member, team_member.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Team Plan','competency',team_member.competency,'competency','team_plans', team_member, team_member.comments)\">*\n                                        </button>\n                                    </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td :class=\"{\n                                                'text-danger': has_comment('Team Plan','role',team_member.role,'role','team_plans', team_member, team_member.comments)\n                                            }\">{{ team_member.role }}\n                                        <button v-if=\"can_view_comment()\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Team Plan','role',team_member.role,'role','team_plans', team_member, team_member.comments)\">*\n                                        </button>\n                                        <button v-if=\"has_comment('Team Plan','role',team_member.role,'role','team_plans', team_member, team_member.comments)\" class=\"superscript-btn\"\n                                            @click=\"handleClick('Team Plan','role',team_member.role,'role','team_plans', team_member, team_member.comments)\">*\n                                        </button>\n                                    </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
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
    , _hoisted_241)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Team Plan', 'with_gad_training', team_member.with_gad_training, 'with_gad_training', 'team_plans', team_member, team_member.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Team Plan', 'with_gad_training', team_member.with_gad_training, 'with_gad_training', 'team_plans', team_member, team_member.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_242)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_240)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), _hoisted_243])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_244, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_245, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" This Project has no recorded members of the implementation team! "), _hoisted_246, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Click "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/team/".concat($props.paps.id, "/revision/plan/team")
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("here")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" to edit implementation team. ")]), _hoisted_247])), _hoisted_248, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("PARTNERSHIP & SUSTAINABILITY"), $props.paps.partnership !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h3", _hoisted_249, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" VIII. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Partnership and Sustainability")];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_250, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $props.paps.partnership
  }, null, 8
  /* PROPS */
  , _hoisted_251)]), _hoisted_252, _hoisted_253, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("MONITORING & EVALUATION"), $props.monitors.length > 0 || $props.paps.monitoring !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h3", _hoisted_254, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" IX. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/EvaluationMechanismTool/".concat($props.paps.id) : null
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Monitoring and Evaluation")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_255, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $props.paps.monitoring
  }, null, 8
  /* PROPS */
  , _hoisted_256)]), $props.monitors.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_257, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_258, [_hoisted_259, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.monitors, function (monitor) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" M&E Evaluation Mechanism Tool "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Monitoring and Evaluation', 'Evaluation Mechanism Tool', monitor.evaluation_mechanism_tool, 'evaluation_mechanism_tool', 'monitoring_and_evaluations', monitor, monitor.comments)
      }),
      id: monitor.id + '_monitoring_and_evaluations_evaluation_mechanism_tool'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(monitor.evaluation_mechanism_tool) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Evaluation Mechanism Tool', monitor.evaluation_mechanism_tool, 'evaluation_mechanism_tool', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_261)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Monitoring and Evaluation', 'Evaluation Mechanism Tool', monitor.evaluation_mechanism_tool, 'evaluation_mechanism_tool', 'monitoring_and_evaluations', monitor, monitor.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Evaluation Mechanism Tool', monitor.evaluation_mechanism_tool, 'evaluation_mechanism_tool', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_262)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_260), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" M&E OPR and their roles "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Monitoring and Evaluation', 'OPCR & their roles', monitor.opr, 'opr', 'monitoring_and_evaluations', monitor, monitor.comments)
      }),
      id: monitor.id + '_monitoring_and_evaluations_opr'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(monitor.opr) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'OPCR & their roles', monitor.opr, 'opr', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_264)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Monitoring and Evaluation', 'OPCR & their roles', monitor.opr, 'opr', 'monitoring_and_evaluations', monitor, monitor.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'OPCR & their roles', monitor.opr, 'opr', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_265)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_263), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" M&E Target Beneficiaries "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Monitoring and Evaluation', 'Target Beneficiaries', monitor.target_beneficiaries, 'target_beneficiaries', 'monitoring_and_evaluations', monitor, monitor.comments)
      }),
      id: monitor.id + '_monitoring_and_evaluations_target_beneficiaries'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(monitor.target_beneficiaries) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Target Beneficiaries', monitor.target_beneficiaries, 'target_beneficiaries', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_267)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Monitoring and Evaluation', 'Target Beneficiaries', monitor.target_beneficiaries, 'target_beneficiaries', 'monitoring_and_evaluations', monitor, monitor.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Target Beneficiaries', monitor.target_beneficiaries, 'target_beneficiaries', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_268)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_266), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" M&E GAD Expert/Consultant "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Monitoring and Evaluation', 'Target Beneficiaries', monitor.gad, 'gad', 'monitoring_and_evaluations', monitor, monitor.comments)
      }),
      id: monitor.id + '_monitoring_and_evaluations_gad'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(monitor.gad) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Target Beneficiaries', monitor.gad, 'gad', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_270)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Monitoring and Evaluation', 'Target Beneficiaries', monitor.gad, 'gad', 'monitoring_and_evaluations', monitor, monitor.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Monitoring and Evaluation', 'Target Beneficiaries', monitor.gad, 'gad', 'monitoring_and_evaluations', monitor, monitor.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_271)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_269)]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])]), _hoisted_272])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_273, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_274, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" The project has no recorded data for monitoring and evaluation! "), _hoisted_275, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Click "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/EvaluationMechanismTool/".concat($props.paps.id)
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("here")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" to edit monitoring and evaluation. ")]), _hoisted_276, _hoisted_277])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("RISK MANAGEMENT"), $props.risks.length > 0 || $props.paps.risk_management !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h3", _hoisted_278, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" X. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $props.department_code_user === '04' || $props.department_code_user === $props.department_code_project ? "/RiskManagement/".concat($props.paps.id) : null
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Risk Management")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_279, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $props.paps.risk_management
  }, null, 8
  /* PROPS */
  , _hoisted_280)]), $props.risks.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_281, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_282, [_hoisted_283, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.risks, function (risk) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Risk Management -Possible Risks "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Risk Management', 'Possible Risks', risk.possible_risk, 'possible_risk', 'risk_manangements', risk, risk.comments)
      }),
      id: risk.id + '_risk_manangements_possible_risk'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ has_comment('Risk Management','Possible Risks',risk.possible_risk,'possible_risk','risk_manangements', risk, risk.comments) }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span v-html=\"risk.possible_risk\"></span> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      innerHTML: risk.possible_risk,
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.has_comment('Risk Management', 'Possible Risks', risk.possible_risk, 'possible_risk', 'risk_manangements', risk, risk.comments) ? 'color:red !important;' : '')
    }, null, 12
    /* STYLE, PROPS */
    , _hoisted_285), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Possible Risks', risk.possible_risk, 'possible_risk', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_286)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Risk Management', 'Possible Risks', risk.possible_risk, 'possible_risk', 'risk_manangements', risk, risk.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Possible Risks', risk.possible_risk, 'possible_risk', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_287)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_284), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Risk Management -Person Affected "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Risk Management', 'Person Affected', risk.person_affected, 'person_affected', 'risk_manangements', risk, risk.comments)
      }),
      id: risk.id + '_risk_manangements_person_affected'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      innerHTML: risk.person_affected
    }, null, 8
    /* PROPS */
    , _hoisted_289), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Person Affected', risk.person_affected, 'person_affected', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_290)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Risk Management', 'Person Affected', risk.person_affected, 'person_affected', 'risk_manangements', risk, risk.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Person Affected', risk.person_affected, 'person_affected', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_291)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_288), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Risk Management -Management "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Risk Management', 'Management', risk.management, 'management', 'risk_manangements', risk, risk.comments)
      }),
      id: risk.id + '_risk_manangements_management'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      innerHTML: risk.management
    }, null, 8
    /* PROPS */
    , _hoisted_293), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Management', risk.management, 'management', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_294)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Risk Management', 'Management', risk.management, 'management', 'risk_manangements', risk, risk.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Risk Management', 'Management', risk.management, 'management', 'risk_manangements', risk, risk.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_295)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_292)]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])]), _hoisted_296])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_297, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_298, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" The project has no recorded data for risk management! "), _hoisted_299, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Click "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/RiskManagement/".concat($props.paps.id)
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("here")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" to edit risk management. ")]), _hoisted_300, _hoisted_301])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("SIGNATORIES class=\"signatory-card\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_302, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.signatories, function (signatory, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['signatory-card', signatory.acted !== 'Prepared' && signatory.acted !== 'Reviewed' ? 'signatory-card-full' : 'signatory-card'])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div v-if=\"signatory.acted !== 'Prepared' && signatory.acted !== 'Reviewed'\"></div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Signatories', 'Acted', signatory.acted, 'acted', 'signatories', signatory, signatory.comments)
      }),
      id: signatory.id + '_signatories_acted'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(signatory.acted) + " ", 1
    /* TEXT */
    ), signatory.acted === 'Prepared' || signatory.acted === 'Reviewed' || signatory.acted === 'Noted' || signatory.acted === 'Approved' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_304, "by: ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Signatories', 'Acted', signatory.acted, 'acted', 'signatories', signatory, signatory.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_305)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Signatories', 'Acted', signatory.acted, 'acted', 'signatories', signatory, signatory.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 2,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Signatories', 'Acted', signatory.acted, 'acted', 'signatories', signatory, signatory.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_306)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_307, _hoisted_308], 10
    /* CLASS, PROPS */
    , _hoisted_303), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-decoration-underline", {
        'text-danger': $options.has_comment('Signatories', 'Name', signatory.name, 'name', 'signatories', signatory, signatory.comments)
      }]),
      id: signatory.id + '_signatories_name'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(signatory.name), 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Signatories', 'Name', signatory.name, 'name', 'signatories', signatory, signatory.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_310)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Signatories', 'Name', signatory.name, 'name', 'signatories', signatory, signatory.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Signatories', 'Name', signatory.name, 'name', 'signatories', signatory, signatory.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_311)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_309), _hoisted_312, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'text-danger': $options.has_comment('Signatories', 'Position', signatory.position, 'position', 'signatories', signatory, signatory.comments)
      }),
      id: signatory.id + '_signatories_position'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(signatory.position) + " ", 1
    /* TEXT */
    ), $options.can_view_comment() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Signatories', 'Position', signatory.position, 'position', 'signatories', signatory, signatory.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_314)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.has_comment('Signatories', 'Position', signatory.position, 'position', 'signatories', signatory, signatory.comments) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "superscript-btn",
      onClick: function onClick($event) {
        return $options.handleClick('Signatories', 'Position', signatory.position, 'position', 'signatories', signatory, signatory.comments);
      }
    }, "* ", 8
    /* PROPS */
    , _hoisted_315)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_313), _hoisted_316, _hoisted_317, _hoisted_318, _hoisted_319], 2
    /* CLASS */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div v-if=\"paps.type === 'p'\">\n                        <table class=\"table table-borderless no-border-table\">\n                            <tbody>\n                                <tr>\n                                    <td>\n                                        <span v-if=\"sig_prep\">\n                                            Prepared by:<br><br>\n                                            <span v-if=\"sig_prep\" class=\"text-decoration-underline\"><b>{{ sig_prep.name\n                                            }}</b></span>\n                                            <br>{{ sig_prep.position }}\n                                        </span>\n                                    </td>\n                                    <td>\n                                        <span v-if=\"sig_rev\">\n                                            Reviewed by:<br><br>\n                                            <span v-if=\"sig_rev\" class=\"text-decoration-underline\"><b>{{ sig_rev.name\n                                            }}</b></span>\n                                            <br>{{ sig_rev.position }}\n                                        </span>\n                                    </td>\n                                </tr>\n\n\n                                <tr>\n                                    <td>\n                                        <span v-if=\"Object.keys(sig_app).length > 0\">\n                                            <br><br>\n                                            Approved by:<br><br>\n                                            <span v-if=\"sig_app\" class=\"text-decoration-underline\"><b>{{ sig_app[0].name\n                                            }}</b>\n                                            </span>\n                                            <br>{{ sig_app[0].position }}\n                                        </span>\n                                    </td>\n                                    <td>\n                                        <span v-if=\"Object.keys(sig_app).length > 1\">\n                                            <br><br>\n                                            <span v-if=\"Object.keys(sig_app).length > 1\">\n                                                Approved by:<br><br>\n                                                <span v-if=\"sig_app\" class=\"text-decoration-underline\"><b>{{ sig_app[1].name\n                                                }}</b></span>\n                                                <br>{{ sig_app[1].position }}\n                                            </span>\n                                        </span>\n                                    </td>\n                                </tr>\n\n                            </tbody>\n                        </table>\n                    </div> ")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_320, [!$data.showComments ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_321, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "close-btn text-danger",
    onClick: _cache[49] || (_cache[49] = function () {
      return $options.toggleShowCommentPanel && $options.toggleShowCommentPanel.apply($options, arguments);
    })
  }, [_hoisted_322, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), $options.countUnresolvedComments > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_323, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.countUnresolvedComments) + " unresolved " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.countUnresolvedComments > 1 ? 'updates' : 'update') + " — click to review ", 1
  /* TEXT */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" p-20  "), $data.showComments ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_324, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_325, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "close-btn text-danger",
    onClick: _cache[50] || (_cache[50] = function () {
      return $options.toggleShowCommentPanel && $options.toggleShowCommentPanel.apply($options, arguments);
    })
  }, _hoisted_327)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_328, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    style: {
      "color": "red"
    },
    onClick: _cache[51] || (_cache[51] = function ($event) {
      return $options.openTab('Navigation');
    })
  }, "Navigation"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    style: {
      "color": "red"
    },
    onClick: _cache[52] || (_cache[52] = function ($event) {
      return $options.openTab('Comments');
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Comments "), $options.countUnresolvedComments > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_329, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.countUnresolvedComments) + " unresolved) ", 1
  /* TEXT */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), $data.open_tab === 'Comments' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_330, [_hoisted_331, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_332, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("********************************************************************************************************"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" 🔴 UNRESOLVED COMMENTS "), $options.unresolvedComments.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_333, [_hoisted_334, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_335, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.unresolvedComments, function (comment, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: 'r-' + index,
      "class": "mb-2",
      style: {
        "cursor": "pointer"
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_336, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_337, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_338, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn p-0 border-0 bg-transparent",
      onClick: function onClick($event) {
        return $options.submitAction('delete', comment.id, index);
      },
      title: "Delete this comment"
    }, [_hoisted_340, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("    ")], 8
    /* PROPS */
    , _hoisted_339)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_341, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["clickable-comment", 'comment-rejected']),
      onClick: function onClick($event) {
        return $options.scrollToSection(['beneficiaries', 'objective', 'rationale'].includes(comment.column_name) ? comment.column_name : "".concat(comment.table_row_id, "_").concat(comment.table_name, "_").concat(comment.column_name));
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.comment) + " ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{\n                                                                        ['beneficiaries', 'objective', 'rationale'].includes(comment.column_name)\n                                                                            ? comment.column_name\n                                                                            : (comment.table_row_id + '_' + comment.table_name + '_' + comment.column_name)\n                                                                    }} ")], 8
    /* PROPS */
    , _hoisted_342), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      innerHTML: comment.reply
    }, null, 8
    /* PROPS */
    , _hoisted_343)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Action Buttons "), $props.auth.user.department_code === '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_344, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-success btn-sm text-white",
      onClick: function onClick($event) {
        return $options.submitAction('resolve', comment.id, index);
      },
      title: "Mark comment as Resolved"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <i class=\"bi bi-check-circle\"></i> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" resolve ")], 8
    /* PROPS */
    , _hoisted_345), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button class=\"btn btn-primary btn-sm text-white\"\n                                                @click=\"submitAction('reset', comment.id, index)\"\n                                                title=\"Reset to Unresolved\">\n                                                <i class=\"bi bi-arrow-counterclockwise\"></i>\n                                                 reset\n                                            </button> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-danger btn-sm text-white",
      onClick: function onClick($event) {
        return $options.submitAction('delete', comment.id, index);
      },
      title: "Delete this comment"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <i class=\"bi bi-trash-fill\"></i>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" delete ")], 8
    /* PROPS */
    , _hoisted_346)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("END OF UNRESOLVED"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" 🟢 RESOLVED COMMENTS "), $options.resolvedComments.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_347, [_hoisted_348, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_349, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.resolvedComments, function (comment, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: 'r-' + index,
      "class": "mb-2",
      style: {
        "cursor": "pointer"
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["clickable-comment", 'comment-approved']),
      onClick: function onClick($event) {
        return $options.scrollToSection(['beneficiaries', 'objective', 'rationale'].includes(comment.column_name) ? comment.column_name : "".concat(comment.table_row_id, "_").concat(comment.table_name, "_").concat(comment.column_name));
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_351, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_352, [_hoisted_353, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_354, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.comment), 1
    /* TEXT */
    )])])], 8
    /* PROPS */
    , _hoisted_350), $props.auth.user.department_code === '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_355, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button class=\"btn btn-success btn-sm text-white\"\n                                                @click=\"submitAction('resolve', comment.id, index)\"\n                                                title=\"Mark comment as Resolved\">\n                                                <i class=\"bi bi-check-circle\"></i>\n                                                 resolve\n                                            </button> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-primary btn-sm text-white",
      onClick: function onClick($event) {
        return $options.submitAction('reset', comment.id, index);
      },
      title: "Reset to Unresolved"
    }, [_hoisted_357, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" reset ")], 8
    /* PROPS */
    , _hoisted_356), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-danger btn-sm text-white",
      onClick: function onClick($event) {
        return $options.submitAction('delete', comment.id, index);
      },
      title: "Delete this comment"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <i class=\"bi bi-trash-fill\"></i>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" delete ")], 8
    /* PROPS */
    , _hoisted_358)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("END OF RESOLVED"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ ['beneficiaries', 'objective', 'rationale'].includes(comment.column_name)\n                                        ? comment.column_name\n                                            : (\n                                            ['expected_revised_outputs', 'expected_revised_outcomes'].includes(comment.table_name)\n                                                ? `${comment.table_row_id}_${comment.table_name}_${comment.column_name}`\n                                                : `${comment.table_row_id}_${comment.table_name}_${comment.column_name}`\n                                        )  }} ")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.open_tab === 'Navigation' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_359, [_hoisted_360, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_361, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_362, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_363, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[53] || (_cache[53] = function ($event) {
      return $options.scrollToSection('revision_plans');
    })
  }, " I. Title ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_364, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_365, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[54] || (_cache[54] = function ($event) {
      return $options.scrollToSection('rationale');
    })
  }, " II. Rationale ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_366, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_367, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[55] || (_cache[55] = function ($event) {
      return $options.scrollToSection('objective');
    })
  }, " III. Objectives ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_368, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_369, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[56] || (_cache[56] = function ($event) {
      return $options.scrollToSection('beneficiaries');
    })
  }, " IV. Target Beneficiaries ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_370, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_371, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[57] || (_cache[57] = function ($event) {
      return $options.scrollToSection('implementation_workplan');
    })
  }, " V. Implementation Schedule/Workplan ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_372, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_373, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[58] || (_cache[58] = function ($event) {
      return $options.scrollToSection('budgetary_requirements');
    })
  }, " VI. Estimated Cost/Budgetary Requirements ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_374, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_375, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[59] || (_cache[59] = function ($event) {
      return $options.scrollToSection('implementing_team');
    })
  }, " VII. Implementing Team ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" partnership_sustainability "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_376, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_377, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[60] || (_cache[60] = function ($event) {
      return $options.scrollToSection('partnership_sustainability');
    })
  }, " VIII. Partnership and Sustainability ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_378, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_379, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[61] || (_cache[61] = function ($event) {
      return $options.scrollToSection('monitoring_evaluation');
    })
  }, " XI. Monitoring and Evaluation ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_380, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_381, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[62] || (_cache[62] = function ($event) {
      return $options.scrollToSection('risk_management');
    })
  }, " X. Risk Management ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_382, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_383, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "clickable-comment",
    onClick: _cache[63] || (_cache[63] = function ($event) {
      return $options.scrollToSection('signatories');
    })
  }, " XI. Signatories ")])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $data.show_comment_modal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_CommentModal, {
    key: 2,
    onCloseModalEvent: $options.closeCommentModal,
    title: "COMMENTS"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_384, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [$props.auth.user.department_code === '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_385, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        "class": "form-control",
        rows: "5",
        "onUpdate:modelValue": _cache[64] || (_cache[64] = function ($event) {
          return $data.comment = $event;
        }),
        placeholder: "Write your comment here..."
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.comment]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary mt-2 text-white",
        onClick: _cache[65] || (_cache[65] = function ($event) {
          return $options.saveComment();
        })
      }, " Submit Comment ")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_386, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.comment_section), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_387, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        innerHTML: $data.comment_subtitle
      }, null, 8
      /* PROPS */
      , _hoisted_388)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_389, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        innerHTML: $data.comment_data
      }, null, 8
      /* PROPS */
      , _hoisted_390)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_391, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.comment_column) + " ", 1
      /* TEXT */
      ), $data.comment_column == 'Person Affected' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_392, "Preventive Measures")) : $data.comment_column == 'Management' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_393, "Mechanisms to monitor")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_394, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.comment_colun), 1
      /* TEXT */
      ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_395, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.comment_table), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div>Reference Object: {{ comment_reference_object.id }}</div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_396, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_397, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_398, _hoisted_399, $props.auth.user.department_code === '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", _hoisted_400, "Actions  ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th class=\"bg-secondary text-white\" v-if=\"auth.user.department_code==='04'\">Actions&nbsp;&nbsp;</th> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th class=\"bg-secondary text-white\">Comment by&nbsp;&nbsp;</th> "), _hoisted_401])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.comments, function (comment, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [comment.user ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h6", _hoisted_402, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.user.FullName) + " commented:  ", 1
        /* TEXT */
        )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_403, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.comment), 1
        /* TEXT */
        )]), _hoisted_404, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          innerHTML: comment.reply
        }, null, 8
        /* PROPS */
        , _hoisted_405), comment.show_comment_box == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 1,
          "class": "btn btn-link p-0",
          onClick: function onClick($event) {
            return $options.showCommentBox(index);
          }
        }, "reply", 8
        /* PROPS */
        , _hoisted_406)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), comment.show_comment_box ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
          key: 2,
          "class": "form-control",
          type: "text",
          "onUpdate:modelValue": _cache[66] || (_cache[66] = function ($event) {
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
        , _hoisted_407)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), comment.show_comment_box ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 4,
          "class": "btn btn-danger text-white",
          onClick: function onClick($event) {
            return $options.showCommentBox(index);
          }
        }, "Cancel", 8
        /* PROPS */
        , _hoisted_408)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
            backgroundColor: comment.comment_status === '0' ? '#fecaca' : '#bbf7d0',
            color: comment.comment_status === '0' ? '#991b1b' : '#065f46'
          }),
          "class": "px-2 py-1 rounded"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.comment_status === '0' ? 'Unresolved' : 'OK'), 1
        /* TEXT */
        )], 4
        /* STYLE */
        ), $props.auth.user.department_code === '04' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_409, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-success text-white",
          onClick: function onClick($event) {
            return $options.submitAction('resolve', comment.id, index);
          },
          title: "Mark comment as Resolved"
        }, _hoisted_412, 8
        /* PROPS */
        , _hoisted_410), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-primary text-white",
          onClick: function onClick($event) {
            return $options.submitAction('reset', comment.id, index);
          },
          title: "Reset to Unresolved"
        }, _hoisted_415, 8
        /* PROPS */
        , _hoisted_413), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-danger text-white",
          onClick: function onClick($event) {
            return $options.submitAction('delete', comment.id, index);
          },
          title: "Delete this comment"
        }, _hoisted_418, 8
        /* PROPS */
        , _hoisted_416), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  ")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td>\n                                    <span v-if=\"comment.user\">{{ comment.user.FullName }}</span>\n                                    <span v-else>Not recorded</span>\n                                </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formatDate(comment.created_at)), 1
        /* TEXT */
        )]);
      }), 256
      /* UNKEYED_FRAGMENT */
      ))])])])]), _hoisted_419];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onCloseModalEvent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_420, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{paps}} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ department_code_project }}\n        {{ department_code_user }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ auth.user }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ auth.user }}\n        {{ paps.is_strategy_based }} ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Sa class=\"row gap-10\" ni")])], 64
  /* STABLE_FRAGMENT */
  );
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

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "modal-title",
  id: "exampleModalLiveLabel"
}, "Filtering", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "modal-body"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-close",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('closeFilter');
    })
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])])])]);
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
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Previous")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 1,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-link", {
      'text-muted': !$props.prev
    }])
  }, "Previous", 2
  /* CLASS */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_3, [$props.next ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    "class": "page-link",
    href: $props.next,
    "preserve-scroll": ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Next")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 1,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-link", {
      'text-muted': !$props.next
    }])
  }, "Next", 2
  /* CLASS */
  ))])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View copy 2.vue?vue&type=style&index=0&id=3790c22e&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View copy 2.vue?vue&type=style&index=0&id=3790c22e&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ntd, th {\n  border: 1px solid #000 !important;\n}\ntable {\n  border-collapse: collapse !important;\n}\n.th {\n    background-color: #929292 !important;\n}\n.superscript-btn {\n  /* font-size: 0.6em; */\n  /* vertical-align: super; */\n  border: none;\n  background: none;\n  padding: 0;\n  margin-left: 4px;\n  cursor: pointer;\n  color: #df280c;\n}\n.action-btn {\n  width: 100%;\n}\n.no-border-table td,\n.no-border-table th {\n  border: none !important;\n}\n.no-border-table {\n  border-collapse: collapse !important;\n}\n.signatory-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem; /* space between cards */\n}\n.signatory-card {\n  flex: 0 0 calc(50% - 0.5rem); /* 2 per row with spacing */\n  border: 0px solid #ccc;\n  padding: 1rem;\n  border-radius: 8px;\n}\n.signatory-card-full {\n  width: 100%; /* each card full width */\n  margin-bottom: 1rem;\n}\n.sticky-comments {\n    position: fixed;\n    top: 70px;\n    right: 20px;\n    width: 450px;\n    z-index: 10;\n}\n.scrollable-text {\n    height: 400px;           /*define the height you want*/\n    overflow-y: auto;        /*vertical scrollbar if content exceeds height*/\n    /*padding: 0px;           optional padding*/\n    /*border: 1px solid #ccc;  optional border*/\n    background-color: #fff;  /*optional background*/\n    /*line-height: 1.6;        improve readability*/\n}\n.sticky-comments .comments-header {\n    display: flex;\n    justify-content: space-between; /* Push h4 left and button right */\n    align-items: center;            /* Vertical alignment */\n    margin-bottom: 10px;            /* Space below the header */\n}\n.sticky-comments .close-btn {\n    background: transparent;\n    border: none;\n    font-size: 20px;\n    cursor: pointer;\n    line-height: 1;\n    padding: 0;\n    color: #333;\n}\n.highlight-target {\n    -webkit-animation: highlightFlash 2s ease-out;\n            animation: highlightFlash 2s ease-out;\n}\n@-webkit-keyframes highlightFlash {\n0% { background-color: #c1fb3a;\n}\n100% { background-color: transparent;\n}\n}\n@keyframes highlightFlash {\n0% { background-color: #c1fb3a;\n}\n100% { background-color: transparent;\n}\n}\n.comment-approved {\n    color: darkgreen;\n    padding: 3px 6px;\n    border-radius: 4px;\n    transition: color .2s;\n}\n.comment-approved:hover {\n    color: #00AEEF; /* sky blue */\n}\n.comment-rejected {\n    color: red;\n    padding: 3px 6px;\n    border-radius: 4px;\n    transition: color .2s;\n}\n.comment-rejected:hover {\n    color: #CC7722; /* golden ochre */\n}\n.blink {\n    color: red;\n    -webkit-animation: blinker 1s linear infinite;\n            animation: blinker 1s linear infinite;\n}\n@-webkit-keyframes blinker {\n0%, 100% { color: red;\n}\n50% { color: #f8d823;\n} /* paler red */\n}\n@keyframes blinker {\n0%, 100% { color: red;\n}\n50% { color: #f8d823;\n} /* paler red */\n}\n", ""]);
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n    /* Override default value of 'none' */\n.modal[data-v-0e4809fa] {\r\n      display: block;\n}\n.modal[data-v-0e4809fa] {\r\n        z-index: 9999 !important;\n}\r\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View copy 2.vue?vue&type=style&index=0&id=3790c22e&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View copy 2.vue?vue&type=style&index=0&id=3790c22e&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View_copy_2_vue_vue_type_style_index_0_id_3790c22e_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./View copy 2.vue?vue&type=style&index=0&id=3790c22e&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View copy 2.vue?vue&type=style&index=0&id=3790c22e&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View_copy_2_vue_vue_type_style_index_0_id_3790c22e_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View_copy_2_vue_vue_type_style_index_0_id_3790c22e_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/Pages/RevisionPlans/View copy 2.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/View copy 2.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _View_copy_2_vue_vue_type_template_id_3790c22e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View copy 2.vue?vue&type=template&id=3790c22e */ "./resources/js/Pages/RevisionPlans/View copy 2.vue?vue&type=template&id=3790c22e");
/* harmony import */ var _View_copy_2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View copy 2.vue?vue&type=script&lang=js */ "./resources/js/Pages/RevisionPlans/View copy 2.vue?vue&type=script&lang=js");
/* harmony import */ var _View_copy_2_vue_vue_type_style_index_0_id_3790c22e_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View copy 2.vue?vue&type=style&index=0&id=3790c22e&lang=css */ "./resources/js/Pages/RevisionPlans/View copy 2.vue?vue&type=style&index=0&id=3790c22e&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_View_copy_2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_View_copy_2_vue_vue_type_template_id_3790c22e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/RevisionPlans/View copy 2.vue"]])
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
/* harmony import */ var C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Filter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Filter_vue_vue_type_template_id_09f80c58__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Filter.vue"]])
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
/* harmony import */ var C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Pagination.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/RevisionPlans/View copy 2.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/View copy 2.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View_copy_2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View_copy_2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./View copy 2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View copy 2.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Pages/RevisionPlans/View copy 2.vue?vue&type=template&id=3790c22e":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/View copy 2.vue?vue&type=template&id=3790c22e ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View_copy_2_vue_vue_type_template_id_3790c22e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View_copy_2_vue_vue_type_template_id_3790c22e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./View copy 2.vue?vue&type=template&id=3790c22e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View copy 2.vue?vue&type=template&id=3790c22e");


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

/***/ "./resources/js/Pages/RevisionPlans/View copy 2.vue?vue&type=style&index=0&id=3790c22e&lang=css":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Pages/RevisionPlans/View copy 2.vue?vue&type=style&index=0&id=3790c22e&lang=css ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View_copy_2_vue_vue_type_style_index_0_id_3790c22e_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./View copy 2.vue?vue&type=style&index=0&id=3790c22e&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RevisionPlans/View copy 2.vue?vue&type=style&index=0&id=3790c22e&lang=css");


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