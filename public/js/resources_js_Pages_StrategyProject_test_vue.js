"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_StrategyProject_test_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/test.vue?vue&type=template&id=62fff6f8":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/test.vue?vue&type=template&id=62fff6f8 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["checked"];
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  key: 0
};
var _hoisted_4 = {
  key: 0
};
var _hoisted_5 = {
  key: 0
};
var _hoisted_6 = {
  "class": "dropdown dropstart"
};
var _hoisted_7 = {
  "class": "dropdown-menu action-dropdown",
  "aria-labelledby": "dropdownMenuButton1"
};
var _hoisted_8 = {
  key: 0
};
var _hoisted_9 = {
  key: 1
};
var _hoisted_10 = ["href"];
var _hoisted_11 = {
  key: 0
};
var _hoisted_12 = {
  colspan: "13"
};
var _hoisted_13 = {
  "class": "peers"
};
var _hoisted_14 = {
  "class": "table table-sm table-bordered table-hover",
  style: {
    "border-color": "#000",
    "border-width": "2px"
  }
};
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.setVisibility(_ctx.strategy.finance_visible, _ctx.index);
    }),
    style: {
      "cursor": "pointer"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    checked: Array.isArray(_ctx.strategy.strategyProject) && _ctx.strategy.strategyProject.length > 0 && _ctx.strategy.is_active === '1',
    onChange: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.toggleStrategy(_ctx.strategy.id, $event.target.checked, _ctx.index);
    })
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_1)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.setVisibility(_ctx.strategy.finance_visible, _ctx.index);
    }),
    style: {
      "cursor": "pointer"
    }
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.strategy.description), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [_ctx.strategy.is_active == 1 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 0,
    "class": "form-control",
    type: "text",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return _ctx.strategy.target_indicator = $event;
    }),
    onInput: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.setUnsaved(true);
    }),
    onChange: _cache[5] || (_cache[5] = function ($event) {
      return _ctx.updateStrategy(_ctx.strategy);
    })
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.strategy.target_indicator]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [_ctx.strategy.is_active == 1 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 0,
    "class": "form-control",
    type: "date",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return _ctx.strategy.date_from = $event;
    }),
    onInput: _cache[7] || (_cache[7] = function ($event) {
      return _ctx.setUnsaved(true);
    }),
    onChange: _cache[8] || (_cache[8] = function ($event) {
      return _ctx.updateStrategy(_ctx.strategy);
    })
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.strategy.date_from]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _cache[59] || (_cache[59] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [_ctx.strategy.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(_ctx.strategy.ps_total, 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [_ctx.strategy.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(_ctx.strategy.mooe_total, 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [_ctx.strategy.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(_ctx.strategy.co_total, 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [_ctx.strategy.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.format_number_conv(_ctx.strategy.ps_total + _ctx.strategy.mooe_total + _ctx.strategy.co_total, 2, true)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [_ctx.strategy.is_active == 1 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 0,
    "class": "form-control",
    type: "text",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return _ctx.strategy.gad_issue = $event;
    }),
    onInput: _cache[10] || (_cache[10] = function ($event) {
      return _ctx.setUnsaved(true);
    }),
    onChange: _cache[11] || (_cache[11] = function ($event) {
      return _ctx.updateStrategy(_ctx.strategy);
    })
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.strategy.gad_issue]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [_ctx.strategy.is_active == 1 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 0,
    "class": "form-control",
    type: "text",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return _ctx.strategy.ccet_code = $event;
    }),
    onInput: _cache[13] || (_cache[13] = function ($event) {
      return _ctx.setUnsaved(true);
    }),
    onChange: _cache[14] || (_cache[14] = function ($event) {
      return _ctx.updateStrategy(_ctx.strategy);
    })
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.strategy.ccet_code]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [_ctx.strategy.is_active == 1 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 0,
    "class": "form-control",
    type: "text",
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return _ctx.strategy.responsible = $event;
    }),
    onInput: _cache[16] || (_cache[16] = function ($event) {
      return _ctx.setUnsaved(true);
    }),
    onChange: _cache[17] || (_cache[17] = function ($event) {
      return _ctx.updateStrategy(_ctx.strategy);
    })
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.strategy.responsible]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_cache[58] || (_cache[58] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
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
  })])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "dropdown-item",
    onClick: _cache[18] || (_cache[18] = function ($event) {
      return _ctx.setVisibility(_ctx.strategy.finance_visible, _ctx.index);
    })
  }, [parseFloat(_ctx.strategy.finance_visible) < 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_8, "Set Cost/Budget")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_9, "Hide Cost/Budget"))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-item",
    href: "/activities/".concat(_ctx.strategy.id)
  }, "Activities", 8 /* PROPS */, _hoisted_10)])])])])]), _ctx.strategy.finance_visible && _ctx.strategy.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_11, [_cache[67] || (_cache[67] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_12, [_cache[66] || (_cache[66] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("     ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_14, [_cache[65] || (_cache[65] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    "class": "bg-primary text-white"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Quarter/Period    "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "1"
  }, "Personnel Services"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "1"
  }, "MOOE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "1"
  }, "Capital Outlay")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[60] || (_cache[60] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Q1:  ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
      return _ctx.strategy.ps_q1 = $event;
    }),
    onInput: _cache[20] || (_cache[20] = function ($event) {
      return _ctx.setUnsaved(true);
    }),
    onChange: _cache[21] || (_cache[21] = function ($event) {
      return _ctx.calculateTotalStrategy(_ctx.index, 'ps');
    }),
    "class": "form-control"
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.strategy.ps_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[22] || (_cache[22] = function ($event) {
      return _ctx.strategy.mooe_q1 = $event;
    }),
    onInput: _cache[23] || (_cache[23] = function ($event) {
      return _ctx.setUnsaved(true);
    }),
    onChange: _cache[24] || (_cache[24] = function ($event) {
      return _ctx.calculateTotalStrategy(_ctx.index, 'mooe');
    }),
    "class": "form-control"
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.strategy.mooe_q1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[25] || (_cache[25] = function ($event) {
      return _ctx.strategy.co_q1 = $event;
    }),
    onInput: _cache[26] || (_cache[26] = function ($event) {
      return _ctx.setUnsaved(true);
    }),
    onChange: _cache[27] || (_cache[27] = function ($event) {
      return _ctx.calculateTotalStrategy(_ctx.index, 'co');
    }),
    "class": "form-control"
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.strategy.co_q1]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[61] || (_cache[61] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Q2:  ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[28] || (_cache[28] = function ($event) {
      return _ctx.strategy.ps_q2 = $event;
    }),
    onInput: _cache[29] || (_cache[29] = function ($event) {
      return _ctx.setUnsaved(true);
    }),
    onChange: _cache[30] || (_cache[30] = function ($event) {
      return _ctx.calculateTotalStrategy(_ctx.index, 'ps');
    }),
    "class": "form-control"
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.strategy.ps_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[31] || (_cache[31] = function ($event) {
      return _ctx.strategy.mooe_q2 = $event;
    }),
    onInput: _cache[32] || (_cache[32] = function ($event) {
      return _ctx.setUnsaved(true);
    }),
    onChange: _cache[33] || (_cache[33] = function ($event) {
      return _ctx.calculateTotalStrategy(_ctx.index, 'mooe');
    }),
    "class": "form-control"
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.strategy.mooe_q2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[34] || (_cache[34] = function ($event) {
      return _ctx.strategy.co_q2 = $event;
    }),
    onInput: _cache[35] || (_cache[35] = function ($event) {
      return _ctx.setUnsaved(true);
    }),
    onChange: _cache[36] || (_cache[36] = function ($event) {
      return _ctx.calculateTotalStrategy(_ctx.index, 'co');
    }),
    "class": "form-control"
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.strategy.co_q2]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[62] || (_cache[62] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Q3:  ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[37] || (_cache[37] = function ($event) {
      return _ctx.strategy.ps_q3 = $event;
    }),
    onInput: _cache[38] || (_cache[38] = function ($event) {
      return _ctx.setUnsaved(true);
    }),
    onChange: _cache[39] || (_cache[39] = function ($event) {
      return _ctx.calculateTotalStrategy(_ctx.index, 'ps');
    }),
    "class": "form-control"
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.strategy.ps_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[40] || (_cache[40] = function ($event) {
      return _ctx.strategy.mooe_q3 = $event;
    }),
    onInput: _cache[41] || (_cache[41] = function ($event) {
      return _ctx.setUnsaved(true);
    }),
    onChange: _cache[42] || (_cache[42] = function ($event) {
      return _ctx.calculateTotalStrategy(_ctx.index, 'mooe');
    }),
    "class": "form-control"
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.strategy.mooe_q3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[43] || (_cache[43] = function ($event) {
      return _ctx.strategy.co_q3 = $event;
    }),
    onInput: _cache[44] || (_cache[44] = function ($event) {
      return _ctx.setUnsaved(true);
    }),
    onChange: _cache[45] || (_cache[45] = function ($event) {
      return _ctx.calculateTotalStrategy(_ctx.index, 'co');
    }),
    "class": "form-control"
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.strategy.co_q3]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[63] || (_cache[63] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Q4:  ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[46] || (_cache[46] = function ($event) {
      return _ctx.strategy.ps_q4 = $event;
    }),
    onInput: _cache[47] || (_cache[47] = function ($event) {
      return _ctx.setUnsaved(true);
    }),
    onChange: _cache[48] || (_cache[48] = function ($event) {
      return _ctx.calculateTotalStrategy(_ctx.index, 'ps');
    }),
    "class": "form-control"
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.strategy.ps_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[49] || (_cache[49] = function ($event) {
      return _ctx.strategy.mooe_q4 = $event;
    }),
    onInput: _cache[50] || (_cache[50] = function ($event) {
      return _ctx.setUnsaved(true);
    }),
    onChange: _cache[51] || (_cache[51] = function ($event) {
      return _ctx.calculateTotalStrategy(_ctx.index, 'mooe');
    }),
    "class": "form-control"
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.strategy.mooe_q4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[52] || (_cache[52] = function ($event) {
      return _ctx.strategy.co_q4 = $event;
    }),
    onInput: _cache[53] || (_cache[53] = function ($event) {
      return _ctx.setUnsaved(true);
    }),
    onChange: _cache[54] || (_cache[54] = function ($event) {
      return _ctx.calculateTotalStrategy(_ctx.index, 'co');
    }),
    "class": "form-control"
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.strategy.co_q4]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[64] || (_cache[64] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Total:  ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[55] || (_cache[55] = function ($event) {
      return _ctx.strategy.ps_total = $event;
    }),
    "class": "form-control"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.strategy.ps_total]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[56] || (_cache[56] = function ($event) {
      return _ctx.strategy.mooe_total = $event;
    }),
    "class": "form-control"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.strategy.mooe_total]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[57] || (_cache[57] = function ($event) {
      return _ctx.strategy.co_total = $event;
    }),
    "class": "form-control"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.strategy.co_total]])])])])])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/Pages/StrategyProject/test.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/StrategyProject/test.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _test_vue_vue_type_template_id_62fff6f8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.vue?vue&type=template&id=62fff6f8 */ "./resources/js/Pages/StrategyProject/test.vue?vue&type=template&id=62fff6f8");
/* harmony import */ var C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel13_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_test_vue_vue_type_template_id_62fff6f8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/StrategyProject/test.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/StrategyProject/test.vue?vue&type=template&id=62fff6f8":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/StrategyProject/test.vue?vue&type=template&id=62fff6f8 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_test_vue_vue_type_template_id_62fff6f8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_test_vue_vue_type_template_id_62fff6f8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./test.vue?vue&type=template&id=62fff6f8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/StrategyProject/test.vue?vue&type=template&id=62fff6f8");


/***/ })

}]);