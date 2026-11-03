"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_StrategyProject_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/Index.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/Index.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    data: Object,
    revision_plan: Object
  },
  data: function data() {
    return {
      form: (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
        localData: JSON.parse(JSON.stringify(this.data))
      }),
      timeouts: {},
      // Store timeouts for activities
      show_inactive: true,
      unsaved: false
    };
  },
  watch: {
    data: function data(newValue) {
      this.form.localData = JSON.parse(JSON.stringify(newValue)); // Keep local copy in sync
    }
  },
  mounted: function mounted() {
    window.addEventListener('beforeunload', this.handleBeforeUnload);
  },
  beforeUnmount: function beforeUnmount() {
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
  },
  methods: {
    calculateTotalStrategy: function calculateTotalStrategy(index, allocation_type) {
      clearTimeout(this.timeouts["strategy_".concat(index, "_").concat(allocation_type)]);
      this.form.localData[index]["".concat(allocation_type, "_total")] = (parseFloat(this.form.localData[index]["".concat(allocation_type, "_q1")]) || 0) + (parseFloat(this.form.localData[index]["".concat(allocation_type, "_q2")]) || 0) + (parseFloat(this.form.localData[index]["".concat(allocation_type, "_q3")]) || 0) + (parseFloat(this.form.localData[index]["".concat(allocation_type, "_q4")]) || 0);
      this.updateStrategy(this.form.localData[index]);
    },
    calculateTotalActivity: function calculateTotalActivity(activity, strategyIndex, activityIndex, type) {
      var _this = this;
      clearTimeout(this.timeouts["activity_".concat(strategyIndex, "_").concat(activityIndex, "_").concat(type)]);
      this.timeouts["activity_".concat(strategyIndex, "_").concat(activityIndex, "_").concat(type)] = setTimeout(function () {
        _this.form.localData[strategyIndex].activity[activityIndex]["".concat(type, "_total")] = (parseFloat(_this.form.localData[strategyIndex].activity[activityIndex]["".concat(type, "_q1")]) || 0) + (parseFloat(_this.form.localData[strategyIndex].activity[activityIndex]["".concat(type, "_q2")]) || 0) + (parseFloat(_this.form.localData[strategyIndex].activity[activityIndex]["".concat(type, "_q3")]) || 0) + (parseFloat(_this.form.localData[strategyIndex].activity[activityIndex]["".concat(type, "_q4")]) || 0);
        console.log("Activity Total updated for ".concat(type, ":"), _this.form.localData[strategyIndex].activity[activityIndex]["".concat(type, "_total")]);
        _this.updateActivity(activity, activityIndex, strategyIndex);
      }, 1000);
    },
    setVisibility: function setVisibility(is_visible, index) {
      // this.$set(this.form.monthly_ratings, index, { ...this.form.monthly_ratings[index], visible: !is_visible });
      // alert("is_visible: "+is_visible + " index: "+index)
      var act = is_visible;
      if (act < 1) {
        act = 1;
      } else {
        act = 0;
      }
      this.form.localData[index].finance_visible = !is_visible;
    },
    setStrategyActivityVisibility: function setStrategyActivityVisibility(activity_visible, index) {
      // alert("activity_visible: "+activity_visible + " index: "+index)
      var act = activity_visible;
      if (act < 1) {
        act = 1;
      } else {
        act = 0;
      }
      this.form.localData[index].activity_visible = act;
    },
    setActivityVisibility: function setActivityVisibility(is_visible, strategyIndex, activityIndex) {
      // Toggle the visibility for the specific activity
      this.form.localData[strategyIndex].activity[activityIndex].finance_visible = !is_visible;
    },
    toggleStrategy: function toggleStrategy(strategyId, status, index) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var payload, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              payload = {
                id: strategyId,
                type: "add or remove",
                idrevplan: _this2.revision_plan.id
              };
              _context.p = 1;
              if (!status) {
                _context.n = 3;
                break;
              }
              _this2.form.localData[index].is_active = '1';
              _context.n = 2;
              return _this2.createStrategy(payload);
            case 2:
              _this2.refreshData();
              _context.n = 5;
              break;
            case 3:
              _this2.form.localData[index].is_active = '0';
              _context.n = 4;
              return _this2.deleteStrategy(payload);
            case 4:
              _this2.refreshData();
            case 5:
              _context.n = 7;
              break;
            case 6:
              _context.p = 6;
              _t = _context.v;
              console.log(_t);
            case 7:
              return _context.a(2);
          }
        }, _callee, null, [[1, 6]]);
      }))();
    },
    updateStrategy: function updateStrategy(strategy) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var payload;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              if (strategy.is_active) {
                payload = {
                  id: strategy.id,
                  idrevplan: _this3.revision_plan.id,
                  // strategy_id: strategy.strategy_id,
                  project_id: strategy.project_id,
                  target_indicator: strategy.target_indicator,
                  date_from: strategy.date_from,
                  date_to: strategy.date_to,
                  ps_q1: strategy.ps_q1,
                  ps_q2: strategy.ps_q2,
                  ps_q3: strategy.ps_q3,
                  ps_q4: strategy.ps_q4,
                  mooe_q1: strategy.mooe_q1,
                  mooe_q2: strategy.mooe_q2,
                  mooe_q3: strategy.mooe_q3,
                  mooe_q4: strategy.mooe_q4,
                  co_q1: strategy.co_q1,
                  co_q2: strategy.co_q2,
                  co_q3: strategy.co_q3,
                  co_q4: strategy.co_q4,
                  fe_q1: strategy.fe_q1,
                  fe_q2: strategy.fe_q2,
                  fe_q3: strategy.fe_q3,
                  fe_q4: strategy.fe_q4,
                  gad_issue: strategy.gad_issue,
                  ccet_code: strategy.ccet_code,
                  responsible: strategy.responsible,
                  is_active: strategy.is_active,
                  type: "update"
                };
                clearTimeout(_this3.timeout);
                setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
                  return _regenerator().w(function (_context2) {
                    while (1) switch (_context2.n) {
                      case 0:
                        _context2.n = 1;
                        return _this3.createStrategy(payload);
                      case 1:
                        _this3.unsaved = false;
                      case 2:
                        return _context2.a(2);
                    }
                  }, _callee2);
                })), 2000);
              } else {
                _this3.unsaved = false;
                alert("Strategy is inactive");
              }
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    updateActivity: function updateActivity(activity, activityIndex, strategyIndex) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var payload;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              if (activity.is_active) {
                // const activity = this.form.localData[strategyIndex].activity[activityIndex];
                payload = {
                  id: activity.id,
                  // strategy_id: this.form.localData[strategyIndex].id,
                  idrevplan: _this4.revision_plan.id,
                  project_id: activity.project_id,
                  target_indicator: activity.target_indicator,
                  date_from: activity.date_from,
                  date_to: activity.date_to,
                  ps_q1: activity.ps_q1,
                  ps_q2: activity.ps_q2,
                  ps_q3: activity.ps_q3,
                  ps_q4: activity.ps_q4,
                  mooe_q1: activity.mooe_q1,
                  mooe_q2: activity.mooe_q2,
                  mooe_q3: activity.mooe_q3,
                  mooe_q4: activity.mooe_q4,
                  co_q1: activity.co_q1,
                  co_q2: activity.co_q2,
                  co_q3: activity.co_q3,
                  co_q4: activity.co_q4,
                  fe_q1: activity.fe_q1,
                  fe_q2: activity.fe_q2,
                  fe_q3: activity.fe_q3,
                  fe_q4: activity.fe_q4,
                  gad_issue: activity.gad_issue,
                  ccet_code: activity.ccet_code,
                  responsible: activity.responsible,
                  is_active: activity.is_active,
                  type: "update"
                }; // Clear existing timeout to prevent multiple calls
                clearTimeout(_this4.timeouts["activity_".concat(strategyIndex, "_").concat(activityIndex)]);
                _this4.timeouts["activity_".concat(strategyIndex, "_").concat(activityIndex)] = setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
                  var _t2;
                  return _regenerator().w(function (_context4) {
                    while (1) switch (_context4.p = _context4.n) {
                      case 0:
                        _context4.p = 0;
                        _context4.n = 1;
                        return _this4.createActivity(payload);
                      case 1:
                        console.log("Activity updated: ".concat(activity.id));
                        _this4.unsaved = false; // Reset unsaved flag after successful save
                        _context4.n = 3;
                        break;
                      case 2:
                        _context4.p = 2;
                        _t2 = _context4.v;
                        console.error('Error updating activity:', _t2);
                      case 3:
                        return _context4.a(2);
                    }
                  }, _callee4, null, [[0, 2]]);
                })), 2000); // Wait 2 seconds before saving
              } else {
                _this4.unsaved = false;
                alert("Activity is inactive");
              }
            case 1:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    toggleActivity: function toggleActivity(activityId, status, activity_index, strat_index) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var payload;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              payload = {
                id: activityId,
                idrevplan: _this5.revision_plan.id
              };
              if (!status) {
                _context6.n = 2;
                break;
              }
              _this5.form.localData[strat_index].activity[activity_index].is_active = '1';
              _context6.n = 1;
              return _this5.createActivity(payload);
            case 1:
              _this5.refreshData();
              _context6.n = 4;
              break;
            case 2:
              _this5.form.localData[strat_index].activity[activity_index].is_active = '0';
              _context6.n = 3;
              return _this5.deleteActivity(payload);
            case 3:
              _this5.refreshData();
            case 4:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    },
    createStrategy: function createStrategy(payload) {
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var response, _t3;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              _context7.p = 0;
              _context7.n = 1;
              return axios.post("/strategies-project/r/create", payload);
            case 1:
              response = _context7.v;
              console.log(response.data);
              // this.refreshData();
              _context7.n = 3;
              break;
            case 2:
              _context7.p = 2;
              _t3 = _context7.v;
              console.error('Error creating strategy:', _t3);
            case 3:
              return _context7.a(2);
          }
        }, _callee7, null, [[0, 2]]);
      }))();
    },
    deleteStrategy: function deleteStrategy(payload) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var response, _t4;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              _context8.p = 0;
              _context8.n = 1;
              return axios["delete"]("/strategies-project/r/delete", {
                data: payload
              });
            case 1:
              response = _context8.v;
              console.log(response.data);
              _this6.refreshData();
              _context8.n = 3;
              break;
            case 2:
              _context8.p = 2;
              _t4 = _context8.v;
              console.error('Error deleting strategy:', _t4);
            case 3:
              return _context8.a(2);
          }
        }, _callee8, null, [[0, 2]]);
      }))();
    },
    createActivity: function createActivity(payload) {
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var response, _t5;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.p = _context9.n) {
            case 0:
              _context9.p = 0;
              _context9.n = 1;
              return axios.post("/activities-project/r/create", payload);
            case 1:
              response = _context9.v;
              console.log(response.data);
              // this.refreshData();
              _context9.n = 3;
              break;
            case 2:
              _context9.p = 2;
              _t5 = _context9.v;
              console.error('Error creating activity:', _t5);
            case 3:
              return _context9.a(2);
          }
        }, _callee9, null, [[0, 2]]);
      }))();
    },
    deleteActivity: function deleteActivity(payload) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
        var response, _t6;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.p = _context0.n) {
            case 0:
              _context0.p = 0;
              _context0.n = 1;
              return axios["delete"]("/activities-project/r/delete", {
                data: payload
              });
            case 1:
              response = _context0.v;
              console.log(response.data);
              _this7.refreshData();
              _context0.n = 3;
              break;
            case 2:
              _context0.p = 2;
              _t6 = _context0.v;
              console.error('Error deleting activity:', _t6);
            case 3:
              return _context0.a(2);
          }
        }, _callee0, null, [[0, 2]]);
      }))();
    },
    refreshData: function refreshData() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
        var response, _t7;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.p = _context1.n) {
            case 0:
              _context1.p = 0;
              _context1.n = 1;
              return axios.get("/strategies-and-activities/refresh/data/now/".concat(_this8.revision_plan.id));
            case 1:
              response = _context1.v;
              // this.data = response.data;
              _this8.form.localData = response.data;
              _context1.n = 3;
              break;
            case 2:
              _context1.p = 2;
              _t7 = _context1.v;
              console.error('Error refreshing data:', _t7);
            case 3:
              return _context1.a(2);
          }
        }, _callee1, null, [[0, 2]]);
      }))();
    },
    setUnsaved: function setUnsaved(status) {
      this.unsaved = status;
    },
    handleBeforeUnload: function handleBeforeUnload(event) {
      if (this.unsaved) {
        event.preventDefault();
        event.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/Index.vue?vue&type=template&id=dc6f31a0":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/Index.vue?vue&type=template&id=dc6f31a0 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "peers fxw-nw jc-sb ai-c"
};
var _hoisted_3 = {
  "class": "peers"
};
var _hoisted_4 = {
  "class": "masonry-item w-100"
};
var _hoisted_5 = {
  "class": "bgc-white p-20 bd"
};
var _hoisted_6 = {
  "class": "table-responsive"
};
var _hoisted_7 = {
  "class": "table table-hover"
};
var _hoisted_8 = {
  style: {
    "cursor": "pointer"
  }
};
var _hoisted_9 = ["checked", "onChange"];
var _hoisted_10 = ["onClick"];
var _hoisted_11 = ["onUpdate:modelValue", "onChange"];
var _hoisted_12 = {
  key: 0,
  style: {}
};
var _hoisted_13 = ["onUpdate:modelValue", "onChange"];
var _hoisted_14 = {
  key: 1
};
var _hoisted_15 = ["onUpdate:modelValue", "onChange"];
var _hoisted_16 = {
  key: 0
};
var _hoisted_17 = {
  key: 1
};
var _hoisted_18 = ["onClick"];
var _hoisted_19 = {
  key: 0
};
var _hoisted_20 = ["onClick"];
var _hoisted_21 = {
  key: 0
};
var _hoisted_22 = ["onClick"];
var _hoisted_23 = {
  key: 0
};
var _hoisted_24 = ["onClick"];
var _hoisted_25 = {
  key: 0
};
var _hoisted_26 = ["onClick"];
var _hoisted_27 = {
  key: 0
};
var _hoisted_28 = ["onUpdate:modelValue", "onChange"];
var _hoisted_29 = ["onUpdate:modelValue", "onChange"];
var _hoisted_30 = ["onUpdate:modelValue", "onChange"];
var _hoisted_31 = {
  "class": "dropdown dropstart"
};
var _hoisted_32 = {
  "class": "dropdown-menu action-dropdown",
  "aria-labelledby": "dropdownMenuButton1"
};
var _hoisted_33 = {
  key: 0
};
var _hoisted_34 = ["onClick"];
var _hoisted_35 = {
  key: 0
};
var _hoisted_36 = {
  key: 1
};
var _hoisted_37 = {
  key: 1
};
var _hoisted_38 = {
  key: 2
};
var _hoisted_39 = {
  key: 3
};
var _hoisted_40 = ["onClick"];
var _hoisted_41 = {
  key: 0
};
var _hoisted_42 = {
  key: 1
};
var _hoisted_43 = {
  key: 0
};
var _hoisted_44 = {
  colspan: "13"
};
var _hoisted_45 = {
  "class": "peers"
};
var _hoisted_46 = {
  "class": "table table-sm table-bordered table-hover",
  style: {
    "border-color": "#000",
    "border-width": "2px"
  }
};
var _hoisted_47 = ["onUpdate:modelValue", "onChange"];
var _hoisted_48 = ["onUpdate:modelValue", "onChange"];
var _hoisted_49 = ["onUpdate:modelValue", "onChange"];
var _hoisted_50 = ["onUpdate:modelValue", "onChange"];
var _hoisted_51 = ["onUpdate:modelValue", "onChange"];
var _hoisted_52 = ["onUpdate:modelValue", "onChange"];
var _hoisted_53 = ["onUpdate:modelValue", "onChange"];
var _hoisted_54 = ["onUpdate:modelValue", "onChange"];
var _hoisted_55 = ["onUpdate:modelValue", "onChange"];
var _hoisted_56 = ["onUpdate:modelValue", "onChange"];
var _hoisted_57 = ["onUpdate:modelValue", "onChange"];
var _hoisted_58 = ["onUpdate:modelValue", "onChange"];
var _hoisted_59 = ["onUpdate:modelValue", "onChange"];
var _hoisted_60 = ["onUpdate:modelValue", "onChange"];
var _hoisted_61 = ["onUpdate:modelValue", "onChange"];
var _hoisted_62 = ["onUpdate:modelValue", "onChange"];
var _hoisted_63 = {
  colspan: "13"
};
var _hoisted_64 = {
  "class": "table table-sm table-borderless table-striped table-hover",
  style: {
    "border-color": "#000",
    "border-width": "2px"
  }
};
var _hoisted_65 = ["onClick"];
var _hoisted_66 = ["checked", "onChange"];
var _hoisted_67 = ["onClick"];
var _hoisted_68 = {
  key: 0
};
var _hoisted_69 = ["onUpdate:modelValue", "onChange"];
var _hoisted_70 = ["onUpdate:modelValue", "onChange"];
var _hoisted_71 = ["onClick"];
var _hoisted_72 = {
  key: 0
};
var _hoisted_73 = ["onClick"];
var _hoisted_74 = {
  key: 0
};
var _hoisted_75 = ["onClick"];
var _hoisted_76 = {
  key: 0
};
var _hoisted_77 = ["onClick"];
var _hoisted_78 = {
  key: 0
};
var _hoisted_79 = {
  key: 0
};
var _hoisted_80 = ["onUpdate:modelValue", "onChange"];
var _hoisted_81 = ["onUpdate:modelValue", "onChange"];
var _hoisted_82 = ["onUpdate:modelValue", "onChange"];
var _hoisted_83 = {
  "class": "dropdown dropstart"
};
var _hoisted_84 = {
  "class": "dropdown-menu action-dropdown",
  "aria-labelledby": "dropdownMenuButton1"
};
var _hoisted_85 = ["onClick"];
var _hoisted_86 = {
  key: 0
};
var _hoisted_87 = {
  key: 1
};
var _hoisted_88 = {
  key: 0
};
var _hoisted_89 = {
  colspan: "14"
};
var _hoisted_90 = {
  "class": "peers"
};
var _hoisted_91 = {
  "class": "table table-sm table-bordered table-hover",
  style: {
    "border-color": "#000",
    "border-width": "2px"
  }
};
var _hoisted_92 = ["onUpdate:modelValue", "onChange"];
var _hoisted_93 = ["onUpdate:modelValue", "onChange"];
var _hoisted_94 = ["onUpdate:modelValue", "onChange"];
var _hoisted_95 = ["onUpdate:modelValue", "onChange"];
var _hoisted_96 = ["onUpdate:modelValue", "onChange"];
var _hoisted_97 = ["onUpdate:modelValue", "onChange"];
var _hoisted_98 = ["onUpdate:modelValue", "onChange"];
var _hoisted_99 = ["onUpdate:modelValue", "onChange"];
var _hoisted_100 = ["onUpdate:modelValue", "onChange"];
var _hoisted_101 = ["onUpdate:modelValue", "onChange"];
var _hoisted_102 = ["onUpdate:modelValue", "onChange"];
var _hoisted_103 = ["onUpdate:modelValue", "onChange"];
var _hoisted_104 = ["onUpdate:modelValue", "onChange"];
var _hoisted_105 = ["onUpdate:modelValue", "onChange"];
var _hoisted_106 = ["onUpdate:modelValue", "onChange"];
var _hoisted_107 = ["onUpdate:modelValue", "onChange"];
var _hoisted_108 = {
  style: {
    "font-weight": "bold"
  }
};
var _hoisted_109 = {
  style: {
    "font-weight": "bold"
  }
};
var _hoisted_110 = {
  style: {
    "font-weight": "bold"
  }
};
var _hoisted_111 = {
  style: {
    "font-weight": "bold"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[44] || (_cache[44] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Home", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_cache[46] || (_cache[46] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Implementation Schedule/ Work Plan", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Link :href=\"`/revision/${revision_plan.idpaps}`\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"currentColor\" class=\"bi bi-x-lg\"\r\n                    viewBox=\"0 0 16 16\">\r\n                    <path fill-rule=\"evenodd\"\r\n                        d=\"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z\" />\r\n                    <path fill-rule=\"evenodd\"\r\n                        d=\"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z\" />\r\n                </svg>\r\n            </Link> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return _ctx.goBack && _ctx.goBack.apply(_ctx, arguments);
    }, ["prevent"])),
    href: "#"
  }, _toConsumableArray(_cache[45] || (_cache[45] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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
  })], -1 /* CACHED */)])))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_cache[47] || (_cache[47] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "PROJECT TITLE: ", -1 /* CACHED */)), _cache[48] || (_cache[48] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ unsaved }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.revision_plan.project_title), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(new Date($props.revision_plan.date_start).getFullYear()), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"peers\">\r\n            <input type=checkbox v-model=\"show_inactive\">&nbsp;Show Inactive\r\n        </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ revision_plan }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_cache[86] || (_cache[86] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row gap-20"
  }, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" style=\"border-color: #000; border-width: 2px;\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" table-sm  table-bordered "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_7, [_cache[85] || (_cache[85] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    "class": "bg-primary text-white"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    rowspan: "2",
    style: {
      "width": "3%"
    }
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    rowspan: "2",
    style: {
      "width": "10%"
    }
  }, "Strategy"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    rowspan: "2 text-center",
    style: {
      "width": "10%"
    }
  }, "Performance Target/Indicator"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    rowspan: "2",
    style: {
      "width": "10%"
    }
  }, "Timeline"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    rowspan: "2",
    style: {
      "width": "15%"
    }
  }, "Expected Output/ Outcome"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "5",
    "class": "text-center",
    style: {
      "width": "20%"
    }
  }, "Cost/Budget"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    rowspan: "2",
    style: {
      "width": "12%"
    }
  }, "GAD Issue"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    rowspan: "2",
    style: {
      "width": "8%"
    }
  }, "CCET"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    rowspan: "2",
    style: {
      "width": "10%"
    }
  }, "Office Responsible"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    rowspan: "2",
    style: {
      "width": "2%"
    }
  }, "Actions")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    "class": "bg-primary text-white"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "width": "5%"
    }
  }, "PS"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "width": "5%"
    }
  }, "MOOE"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "width": "5%"
    }
  }, "FE"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "width": "5%"
    }
  }, "Capital Outlay"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "width": "5%"
    }
  }, "Total")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.form.localData, function (strategy, index) {
    var _strategy$strategyPro, _strategy$strategyPro2;
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" v-if=\"strategy.is_active === '1' || (strategy.is_active === '0' && show_inactive)\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "checkbox",
      checked: Array.isArray(strategy.strategyProject) && strategy.strategyProject.length > 0 && strategy.is_active === '1',
      onChange: function onChange($event) {
        return $options.toggleStrategy(strategy.id, $event.target.checked, index);
      }
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_9), _cache[49] || (_cache[49] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), _cache[50] || (_cache[50] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ strategy.activity }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ strategy.activity.length }}\r\n                                        {{ strategy.activity_visible }}\r\n                                        {{ revision_plan.is_strategy_based }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" strategy.activity && strategy.activity.length > 0 && strategy.activity_visible && revision_plan.is_strategy_based "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button v-if=\"revision_plan.is_strategy_based==0\" class=\"btn btn-primary text-white\" @click=\"setStrategyActivityVisibility(strategy.activity_visible, index)\">\r\n                                            Activities\r\n                                        </button><br><br> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button class=\"dropdown-item\" @click=\"setVisibility(strategy.finance_visible, index)\">\r\n                                            <span v-if=\"parseFloat(strategy.finance_visible)<1\">Set Cost/Budget</span>\r\n                                            <span v-else>Hide Cost/Budget</span>\r\n\r\n                                            @click=\"setVisibility(strategy.finance_visible, index)\"\r\n                                        </button> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
      onClick: function onClick($event) {
        return $options.setStrategyActivityVisibility(strategy.activity_visible, index);
      },
      style: {
        "cursor": "pointer"
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, null, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(strategy.description), 1 /* TEXT */)];
      }),
      _: 2 /* DYNAMIC */
    }, 1024 /* DYNAMIC_SLOTS */)], 8 /* PROPS */, _hoisted_10), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [strategy.is_active == 1 && $props.revision_plan.is_strategy_based == 1 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
      key: 0,
      "class": "form-control",
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.target_indicator = $event;
      },
      onInput: _cache[1] || (_cache[1] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateStrategy(strategy);
      }
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_11)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.target_indicator]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [strategy.is_active == 1 && $props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_12, [_cache[51] || (_cache[51] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Date from:")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "class": "form-control",
      type: "date",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.date_from = $event;
      },
      onInput: _cache[2] || (_cache[2] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateStrategy(strategy);
      }
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_13), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.date_from]])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), strategy.is_active == 1 && $props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_14, [_cache[53] || (_cache[53] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Date to:")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "class": "form-control",
      type: "date",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.date_to = $event;
      },
      onInput: _cache[3] || (_cache[3] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateStrategy(strategy);
      }
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_15), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.date_to]]), _cache[52] || (_cache[52] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), strategy.strategyProject[0] && $props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_16, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(((_strategy$strategyPro = strategy.strategyProject[0]) === null || _strategy$strategyPro === void 0 ? void 0 : _strategy$strategyPro.expected_output) || [], function (outcome) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(outcome.description), 1 /* TEXT */), _cache[54] || (_cache[54] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */))]);
    }), 256 /* UNKEYED_FRAGMENT */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(((_strategy$strategyPro2 = strategy.strategyProject[0]) === null || _strategy$strategyPro2 === void 0 ? void 0 : _strategy$strategyPro2.expected_outcome) || [], function (outcome) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(outcome.description), 1 /* TEXT */), _cache[55] || (_cache[55] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */))]);
    }), 256 /* UNKEYED_FRAGMENT */))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_17, [$props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 0
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(strategy.expected_output || [], function (outcome) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(outcome.description), 1 /* TEXT */), _cache[56] || (_cache[56] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */))]);
    }), 256 /* UNKEYED_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 1
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(strategy.expected_outcome || [], function (outcome) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(outcome.description), 1 /* TEXT */), _cache[57] || (_cache[57] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */))]);
    }), 256 /* UNKEYED_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      onClick: function onClick($event) {
        return $options.setVisibility(strategy.finance_visible, index);
      },
      style: {
        "cursor": "pointer"
      }
    }, [strategy.is_active == 1 && $props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(strategy.ps_total, 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_18), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      onClick: function onClick($event) {
        return $options.setVisibility(strategy.finance_visible, index);
      },
      style: {
        "cursor": "pointer"
      }
    }, [strategy.is_active == 1 && $props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(strategy.mooe_total, 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_20), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      onClick: function onClick($event) {
        return $options.setVisibility(strategy.finance_visible, index);
      },
      style: {
        "cursor": "pointer"
      }
    }, [strategy.is_active == 1 && $props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(strategy.co_total, 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_22), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      onClick: function onClick($event) {
        return $options.setVisibility(strategy.finance_visible, index);
      },
      style: {
        "cursor": "pointer"
      }
    }, [strategy.is_active == 1 && $props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(strategy.fe_total, 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_24), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      onClick: function onClick($event) {
        return $options.setVisibility(strategy.finance_visible, index);
      },
      style: {
        "cursor": "pointer"
      }
    }, [strategy.is_active == 1 && $props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(strategy.ps_total + strategy.mooe_total + strategy.co_total, 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_26), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [strategy.is_active == 1 && $props.revision_plan.is_strategy_based == 1 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
      key: 0,
      "class": "form-control",
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.gad_issue = $event;
      },
      onInput: _cache[4] || (_cache[4] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateStrategy(strategy);
      }
    }, "                                        ", 40 /* PROPS, NEED_HYDRATION */, _hoisted_28)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.gad_issue]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [strategy.is_active == 1 && $props.revision_plan.is_strategy_based == 1 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
      key: 0,
      "class": "form-control",
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.ccet_code = $event;
      },
      onInput: _cache[5] || (_cache[5] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateStrategy(strategy);
      }
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_29)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.ccet_code]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [strategy.is_active == 1 && $props.revision_plan.is_strategy_based == 1 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
      key: 0,
      "class": "form-control",
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.responsible = $event;
      },
      onInput: _cache[6] || (_cache[6] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.updateStrategy(strategy);
      }
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_30)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.responsible]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [_cache[60] || (_cache[60] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
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
    })])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_32, [$props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "dropdown-item",
      onClick: function onClick($event) {
        return $options.setVisibility(strategy.finance_visible, index);
      }
    }, [parseFloat(strategy.finance_visible) < 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_35, "Set Cost/Budget")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_36, "Hide Cost/Budget"))], 8 /* PROPS */, _hoisted_34)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_37, [strategy.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
      key: 0,
      "class": "dropdown-item",
      href: "/expected-outcomes-revised/".concat(strategy.strategy_id, "/strategy")
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return _toConsumableArray(_cache[58] || (_cache[58] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Expected Outcome id ", -1 /* CACHED */)]));
      }),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" : {{strategy.id}} ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_38, [strategy.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
      key: 0,
      "class": "dropdown-item",
      href: "/expected-outputs-revised/".concat(strategy.strategy_id, "/strategy")
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return _toConsumableArray(_cache[59] || (_cache[59] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Expected Outputs id ", -1 /* CACHED */)]));
      }),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.revision_plan.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "dropdown-item",
      onClick: function onClick($event) {
        return $options.setStrategyActivityVisibility(strategy.activity_visible, index);
      }
    }, [parseFloat(strategy.activity_visible) < 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_41, "Activities")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_42, "Hide Activities"))], 8 /* PROPS */, _hoisted_40)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li>\r\n                                                    <a class=\"dropdown-item\" :href=\"`/activities/${strategy.id}`\">Activities</a>\r\n                                                </li> ")])])])]), strategy.finance_visible && strategy.is_active == 1 && $props.revision_plan.is_strategy_based == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_43, [_cache[68] || (_cache[68] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_44, [_cache[67] || (_cache[67] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("     ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_46, [_cache[66] || (_cache[66] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
      "class": "bg-primary text-white"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Quarter/Period    "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
      colspan: "1"
    }, "Personnel Services"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
      colspan: "1"
    }, "MOOE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
      colspan: "1"
    }, "Financial Expenses"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
      colspan: "1"
    }, "Capital Outlay")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[61] || (_cache[61] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Q1:  ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.ps_q1 = $event;
      },
      onInput: _cache[7] || (_cache[7] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'ps');
      },
      "class": "form-control"
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_47), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.ps_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.mooe_q1 = $event;
      },
      onInput: _cache[8] || (_cache[8] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'mooe');
      },
      "class": "form-control"
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_48), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.mooe_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.fe_q1 = $event;
      },
      onInput: _cache[9] || (_cache[9] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'fe');
      },
      "class": "form-control"
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_49), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.fe_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.co_q1 = $event;
      },
      onInput: _cache[10] || (_cache[10] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'co');
      },
      "class": "form-control"
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_50), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.co_q1]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[62] || (_cache[62] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Q2:  ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.ps_q2 = $event;
      },
      onInput: _cache[11] || (_cache[11] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'ps');
      },
      "class": "form-control"
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_51), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.ps_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.mooe_q2 = $event;
      },
      onInput: _cache[12] || (_cache[12] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'mooe');
      },
      "class": "form-control"
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_52), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.mooe_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.fe_q2 = $event;
      },
      onInput: _cache[13] || (_cache[13] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'fe');
      },
      "class": "form-control"
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_53), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.fe_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.co_q2 = $event;
      },
      onInput: _cache[14] || (_cache[14] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'co');
      },
      "class": "form-control"
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_54), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.co_q2]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[63] || (_cache[63] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Q3:  ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.ps_q3 = $event;
      },
      onInput: _cache[15] || (_cache[15] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'ps');
      },
      "class": "form-control"
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_55), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.ps_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.mooe_q3 = $event;
      },
      onInput: _cache[16] || (_cache[16] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'mooe');
      },
      "class": "form-control"
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_56), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.mooe_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.fe_q3 = $event;
      },
      onInput: _cache[17] || (_cache[17] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'fe');
      },
      "class": "form-control"
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_57), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.fe_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.co_q3 = $event;
      },
      onInput: _cache[18] || (_cache[18] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'co');
      },
      "class": "form-control"
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_58), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.co_q3]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[64] || (_cache[64] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Q4:  ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.ps_q4 = $event;
      },
      onInput: _cache[19] || (_cache[19] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'ps');
      },
      "class": "form-control"
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_59), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.ps_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.mooe_q4 = $event;
      },
      onInput: _cache[20] || (_cache[20] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'mooe');
      },
      "class": "form-control"
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_60), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.mooe_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.fe_q4 = $event;
      },
      onInput: _cache[21] || (_cache[21] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'fe');
      },
      "class": "form-control"
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_61), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.fe_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return strategy.co_q4 = $event;
      },
      onInput: _cache[22] || (_cache[22] = function ($event) {
        return $options.setUnsaved(true);
      }),
      onChange: function onChange($event) {
        return $options.calculateTotalStrategy(index, 'co');
      },
      "class": "form-control"
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_62), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, strategy.co_q4]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[65] || (_cache[65] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Total:  ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(strategy.ps_total), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(strategy.mooe_total), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(strategy.fe_total), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(strategy.co_total), 1 /* TEXT */)])])])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), strategy.activity && strategy.activity.length > 0 && strategy.activity_visible && $props.revision_plan.is_strategy_based == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 1
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" v-if=\"strategy.is_active === '1' || (strategy.is_active === '0' && show_inactive)\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[84] || (_cache[84] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_64, [_cache[83] || (_cache[83] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
      "class": "bg-secondary text-white"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
      rowspan: "2",
      style: {
        "width": "3%"
      }
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
      rowspan: "2",
      style: {
        "width": "10%"
      }
    }, "Activity"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
      rowspan: "2 text-center",
      style: {
        "width": "10%"
      }
    }, "Performance Target/Indicator"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
      rowspan: "2",
      style: {
        "width": "10%"
      }
    }, "Timeline"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
      rowspan: "2",
      style: {
        "width": "15%"
      }
    }, "Expected Output/ Outcome"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
      colspan: "5",
      "class": "text-center",
      style: {
        "width": "20%"
      }
    }, "Cost/Budget"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
      rowspan: "2",
      style: {
        "width": "12%"
      }
    }, "GAD Issue"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
      rowspan: "2",
      style: {
        "width": "8%"
      }
    }, "CCET"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
      rowspan: "2",
      style: {
        "width": "10%"
      }
    }, "Office Responsible"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
      rowspan: "2",
      style: {
        "width": "2%"
      }
    }, "Actions")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
      "class": "bg-secondary text-white"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
      style: {
        "width": "5%"
      }
    }, "PS"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
      style: {
        "width": "5%"
      }
    }, "MOOE"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
      style: {
        "width": "5%"
      }
    }, "FE"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
      style: {
        "width": "5%"
      }
    }, "Capital Outlay"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
      style: {
        "width": "5%"
      }
    }, "Total")])], -1 /* CACHED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(strategy.activity, function (activity, activity_index) {
      var _activity$activityPro, _activity$activityPro2, _activity$activityPro3;
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: activity_index
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" v-if=\"activity.is_active === '1' || (activity.is_active === '0' && show_inactive)\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        onClick: function onClick($event) {
          return $options.setActivityVisibility(activity.finance_visible, index, activity_index);
        },
        style: {
          "cursor": "pointer"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "checkbox",
        checked: Array.isArray(activity.activityProject) && activity.activityProject.length > 0 && activity.is_active === '1',
        onChange: function onChange($event) {
          return $options.toggleActivity(activity.id, $event.target.checked, activity_index, index);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_66), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ activity }} ")], 8 /* PROPS */, _hoisted_65), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        onClick: function onClick($event) {
          return $options.setActivityVisibility(activity.finance_visible, index, activity_index);
        },
        style: {
          "cursor": "pointer"
        }
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(activity.description), 9 /* TEXT, PROPS */, _hoisted_67), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(((_activity$activityPro = activity.activityProject[0]) === null || _activity$activityPro === void 0 ? void 0 : _activity$activityPro.expected_output) || [], function (outcome) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(outcome.target_indicator), 1 /* TEXT */), _cache[69] || (_cache[69] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */))]);
      }), 256 /* UNKEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [activity.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[70] || (_cache[70] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Date from:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "date",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.date_from = $event;
        },
        onInput: _cache[23] || (_cache[23] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateActivity(activity, activity_index, index);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_69), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.date_from]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[71] || (_cache[71] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Date to:", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        type: "date",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.date_to = $event;
        },
        onInput: _cache[24] || (_cache[24] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateActivity(activity, activity_index, index);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_70), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.date_to]])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(((_activity$activityPro2 = activity.activityProject[0]) === null || _activity$activityPro2 === void 0 ? void 0 : _activity$activityPro2.expected_output) || [], function (outcome) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(outcome.description), 1 /* TEXT */), _cache[72] || (_cache[72] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */))]);
      }), 256 /* UNKEYED_FRAGMENT */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(((_activity$activityPro3 = activity.activityProject[0]) === null || _activity$activityPro3 === void 0 ? void 0 : _activity$activityPro3.expected_outcome) || [], function (outcome) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(outcome.description), 1 /* TEXT */), _cache[73] || (_cache[73] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* CACHED */))]);
      }), 256 /* UNKEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ activity.activityProject[0].expected_output }} ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        onClick: function onClick($event) {
          return $options.setActivityVisibility(activity.finance_visible, index, activity_index);
        }
      }, [activity.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_72, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(activity.ps_total, 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_71), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        onClick: function onClick($event) {
          return $options.setActivityVisibility(activity.finance_visible, index, activity_index);
        }
      }, [activity.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_74, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(activity.mooe_total, 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_73), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        onClick: function onClick($event) {
          return $options.setActivityVisibility(activity.finance_visible, index, activity_index);
        }
      }, [activity.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_76, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(activity.fe_total, 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_75), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
        onClick: function onClick($event) {
          return $options.setActivityVisibility(activity.finance_visible, index, activity_index);
        }
      }, [activity.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_78, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(activity.co_total, 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_77), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [activity.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(activity.ps_total + activity.mooe_total + activity.fe_total + activity.co_total, 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [activity.is_active == 1 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
        key: 0,
        "class": "form-control",
        type: "text",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.gad_issue = $event;
        },
        onInput: _cache[25] || (_cache[25] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateActivity(activity, activity_index, index);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_80)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.gad_issue]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [activity.is_active == 1 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
        key: 0,
        "class": "form-control",
        type: "text",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.ccet_code = $event;
        },
        onInput: _cache[26] || (_cache[26] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateActivity(activity, activity_index, index);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_81)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.ccet_code]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [activity.is_active == 1 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
        key: 0,
        "class": "form-control",
        type: "text",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.responsible = $event;
        },
        onInput: _cache[27] || (_cache[27] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.updateActivity(activity, activity_index, index);
        }
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_82)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.responsible]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_83, [_cache[74] || (_cache[74] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
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
      })])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "dropdown-item",
        onClick: function onClick($event) {
          return $options.setActivityVisibility(activity.finance_visible, index, activity_index);
        }
      }, [parseFloat(activity.finance_visible) < 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_86, "Set Cost/Budget")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_87, "Hide Cost/Budget"))], 8 /* PROPS */, _hoisted_85)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [activity.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
        key: 0,
        "class": "dropdown-item",
        href: "/expected-outputs-revised/".concat(activity.activity_id, "/activity")
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Expected Output " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(activity.activity_id), 1 /* TEXT */)];
        }),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [activity.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
        key: 0,
        "class": "dropdown-item",
        href: "/expected-outcomes-revised/".concat(activity.activity_id, "/activity")
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Expected Outcome " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(activity.activity_id), 1 /* TEXT */)];
        }),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), activity.finance_visible && activity.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_88, [_cache[82] || (_cache[82] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_89, [_cache[81] || (_cache[81] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("     ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_90, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_91, [_cache[80] || (_cache[80] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
        "class": "bg-primary text-white"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Quarter/Period    "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        colspan: "1"
      }, "Personnel Services"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        colspan: "1"
      }, "MOOE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        colspan: "1"
      }, "FE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        colspan: "1"
      }, "Capital Outlay")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[75] || (_cache[75] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Q1:  ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.ps_q1 = $event;
        },
        onInput: _cache[28] || (_cache[28] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'ps');
        },
        "class": "form-control"
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_92), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.ps_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.mooe_q1 = $event;
        },
        onInput: _cache[29] || (_cache[29] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'mooe');
        },
        "class": "form-control"
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_93), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.mooe_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.fe_q1 = $event;
        },
        onInput: _cache[30] || (_cache[30] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'fe');
        },
        "class": "form-control"
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_94), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.fe_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.co_q1 = $event;
        },
        onInput: _cache[31] || (_cache[31] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'co');
        },
        "class": "form-control"
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_95), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.co_q1]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[76] || (_cache[76] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Q2:  ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.ps_q2 = $event;
        },
        onInput: _cache[32] || (_cache[32] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'ps');
        },
        "class": "form-control"
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_96), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.ps_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.mooe_q2 = $event;
        },
        onInput: _cache[33] || (_cache[33] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'mooe');
        },
        "class": "form-control"
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_97), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.mooe_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.fe_q2 = $event;
        },
        onInput: _cache[34] || (_cache[34] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'fe');
        },
        "class": "form-control"
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_98), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.fe_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.co_q2 = $event;
        },
        onInput: _cache[35] || (_cache[35] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'co');
        },
        "class": "form-control"
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_99), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.co_q2]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[77] || (_cache[77] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Q3:  ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.ps_q3 = $event;
        },
        onInput: _cache[36] || (_cache[36] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'ps');
        },
        "class": "form-control"
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_100), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.ps_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.mooe_q3 = $event;
        },
        onInput: _cache[37] || (_cache[37] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'mooe');
        },
        "class": "form-control"
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_101), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.mooe_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.fe_q3 = $event;
        },
        onInput: _cache[38] || (_cache[38] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'fe');
        },
        "class": "form-control"
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_102), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.fe_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.co_q3 = $event;
        },
        onInput: _cache[39] || (_cache[39] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'co');
        },
        "class": "form-control"
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_103), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.co_q3]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[78] || (_cache[78] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Q4:  ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.ps_q4 = $event;
        },
        onInput: _cache[40] || (_cache[40] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'ps');
        },
        "class": "form-control"
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_104), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.ps_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.mooe_q4 = $event;
        },
        onInput: _cache[41] || (_cache[41] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'mooe');
        },
        "class": "form-control"
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_105), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.mooe_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.fe_q4 = $event;
        },
        onInput: _cache[42] || (_cache[42] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'fe');
        },
        "class": "form-control"
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_106), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.fe_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return activity.co_q4 = $event;
        },
        onInput: _cache[43] || (_cache[43] = function ($event) {
          return $options.setUnsaved(true);
        }),
        onChange: function onChange($event) {
          return $options.calculateTotalActivity(activity, index, activity_index, 'co');
        },
        "class": "form-control"
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_107), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, activity.co_q4]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[79] || (_cache[79] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Total:  ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_108, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(activity.ps_total, 2, true)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_109, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(activity.mooe_total, 2, true)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_110, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(activity.fe_total, 2, true)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_111, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(activity.co_total, 2, true)), 1 /* TEXT */)])])])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
    }), 128 /* KEYED_FRAGMENT */))])])])], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ form.localData[0] }} ")])])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/Index.vue?vue&type=style&index=0&id=dc6f31a0&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/Index.vue?vue&type=style&index=0&id=dc6f31a0&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ntextarea {\r\n\t/* width: 100%;\r\n    top: 0; left: 0; right: 0; bottom: 0;\r\n    position: absolute;\r\n\tresize: none;\r\n\t-webkit-box-sizing: border-box; /* <=iOS4, <= Android  2.3 */\r\n      /* -moz-box-sizing: border-box; /* FF1+ */\r\n           /* box-sizing: border-box; Chrome, IE8, Opera, Safari 5.1 */\r\n\r\n    width: 100%;\r\n    top: 0; left: 0; right: 0; bottom: 0;\r\n    position: absolute;\r\n    resize: none;\r\n    box-sizing: border-box;\r\n\r\n    /* Hide scrollbar */\r\n    overflow: hidden; /* Hides the scrollbar visually */\r\n    scrollbar-width: none; /* For Firefox */\r\n    -ms-overflow-style: none;\r\n\r\n    /* Auto-resize height */\r\n    height: auto;\r\n    overflow: hidden;\r\n    white-space: pre-wrap;\n}\ntable {\r\n    border-collapse: collapse;\n}\ntable, th, td {\r\n    position: relative;\r\n    border: 1px solid black;\n}\r\n\r\n/* Adjust cell height based on content */\r\n/* td { */\r\n    /* padding: 0px;\r\n    vertical-align: top; */\r\n/* } */\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/Index.vue?vue&type=style&index=0&id=dc6f31a0&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/Index.vue?vue&type=style&index=0&id=dc6f31a0&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_dc6f31a0_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=dc6f31a0&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/Index.vue?vue&type=style&index=0&id=dc6f31a0&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_dc6f31a0_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_dc6f31a0_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/StrategyProject/Index.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/StrategyProject/Index.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_dc6f31a0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=dc6f31a0 */ "./resources/js/Pages/StrategyProject/Index.vue?vue&type=template&id=dc6f31a0");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/Pages/StrategyProject/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_dc6f31a0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=dc6f31a0&lang=css */ "./resources/js/Pages/StrategyProject/Index.vue?vue&type=style&index=0&id=dc6f31a0&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel12_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel12_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_dc6f31a0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/StrategyProject/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/StrategyProject/Index.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/StrategyProject/Index.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/StrategyProject/Index.vue?vue&type=template&id=dc6f31a0":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/StrategyProject/Index.vue?vue&type=template&id=dc6f31a0 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_dc6f31a0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_dc6f31a0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=dc6f31a0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/Index.vue?vue&type=template&id=dc6f31a0");


/***/ }),

/***/ "./resources/js/Pages/StrategyProject/Index.vue?vue&type=style&index=0&id=dc6f31a0&lang=css":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/StrategyProject/Index.vue?vue&type=style&index=0&id=dc6f31a0&lang=css ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_dc6f31a0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=dc6f31a0&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/Index.vue?vue&type=style&index=0&id=dc6f31a0&lang=css");


/***/ })

}]);