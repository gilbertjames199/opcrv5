"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_OpcrTracking_Targets_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OpcrTracking/Targets.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OpcrTracking/Targets.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    groupedData: Object
  },
  data: function data() {
    return {
      openYear: null,
      openSemesters: {} // { year: semester }
    };
  },
  methods: {
    // Toggle Year (only one open at a time)
    toggleYear: function toggleYear(year) {
      this.openYear = this.openYear === year ? null : year;

      // reset semesters when switching year
      if (this.openYear !== year) {
        this.openSemesters = {};
      }
    },
    // Toggle Semester per Year
    toggleSemester: function toggleSemester(year, semester) {
      if (!this.openSemesters[year]) {
        this.openSemesters[year] = null;
      }
      this.openSemesters[year] = this.openSemesters[year] === semester ? null : semester;
    },
    // Check if semester is open
    isSemesterOpen: function isSemesterOpen(year, semester) {
      return this.openSemesters[year] === semester;
    }
  },
  components: {
    ChevronIcon: {
      props: ['open'],
      template: "\n        <svg xmlns=\"http://www.w3.org/2000/svg\"\n             width=\"16\" height=\"16\"\n             fill=\"currentColor\"\n             viewBox=\"0 0 16 16\">\n\n          <path v-if=\"!open\"\n            fill-rule=\"evenodd\"\n            d=\"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708\"\n          />\n\n          <path v-else\n            fill-rule=\"evenodd\"\n            d=\"M1.646 11.354a.5.5 0 0 0 .708 0L8 5.707l5.646 5.647a.5.5 0 0 0 .708-.708l-6-6a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 0 .708\"\n          />\n\n        </svg>\n      "
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OpcrTracking/Targets.vue?vue&type=template&id=beffc03a&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OpcrTracking/Targets.vue?vue&type=template&id=beffc03a&scoped=true ***!
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
  "class": "w-100 p-4"
};
var _hoisted_2 = {
  "class": "table w-100 bg-white shadow border-0",
  style: {
    "border-radius": "8px",
    "overflow": "hidden"
  }
};
var _hoisted_3 = {
  "class": "fw-bold",
  style: {
    "color": "#2c3e50",
    "padding": "1rem"
  }
};
var _hoisted_4 = {
  "class": "text-end",
  style: {
    "padding": "1rem"
  }
};
var _hoisted_5 = {
  "class": "d-flex justify-content-end w-100"
};
var _hoisted_6 = ["onClick"];
var _hoisted_7 = {
  key: 0
};
var _hoisted_8 = {
  colspan: "2",
  "class": "p-0"
};
var _hoisted_9 = {
  "class": "table w-100 mb-0 bg-white border-0"
};
var _hoisted_10 = {
  "class": "fw-semibold",
  style: {
    "color": "#34495e",
    "padding": "0.875rem 1rem 0.875rem 1.5rem"
  }
};
var _hoisted_11 = {
  "class": "text-end",
  style: {
    "padding": "0.875rem 1rem"
  }
};
var _hoisted_12 = ["onClick"];
var _hoisted_13 = {
  key: 0
};
var _hoisted_14 = {
  colspan: "2",
  "class": "p-0"
};
var _hoisted_15 = {
  "class": "table w-100 mb-0 border-0"
};
var _hoisted_16 = {
  style: {
    "padding": "0.875rem 1rem 0.875rem 2rem",
    "color": "#7f8c8d"
  }
};
var _hoisted_17 = {
  style: {
    "padding": "0.875rem 1rem",
    "color": "#2c3e50"
  }
};
var _hoisted_18 = {
  style: {
    "padding": "0.875rem 1rem"
  }
};
var _hoisted_19 = {
  "class": "badge status-badge",
  style: {
    "background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "font-weight": "600"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_ChevronIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ChevronIcon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[0] || (_cache[0] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "OPCR Targets", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "mb-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    "class": "mb-1 fw-bold",
    style: {
      "color": "#2c3e50"
    }
  }, "OPCR Targets"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-muted",
    style: {
      "font-size": "0.95rem"
    }
  }, "View and manage targets by year and semester")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ================= YEAR TABLE ================= "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_2, [_cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
    style: {
      "background-color": "#f8f9fa",
      "border-bottom": "2px solid #dee2e6"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "font-weight": "600",
      "color": "#2c3e50",
      "padding": "1rem"
    }
  }, "Year"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "text-end",
    style: {
      "font-weight": "600",
      "color": "#2c3e50",
      "padding": "1rem"
    }
  }, "Action")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.groupedData, function (semesters, year) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: year
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" YEAR ROW "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["align-middle year-row", {
        'year-glow': $data.openYear === year
      }])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(year), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td class=\"text-end\">\r\n              <button\r\n                class=\"btn btn-sm btn-light border-0\"\r\n                @click=\"toggleYear(year)\"\r\n              >\r\n                <ChevronIcon :open=\"openYear === year\" />\r\n              </button>\r\n            </td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-sm btn-light border-0 p-2 year-toggle",
      onClick: function onClick($event) {
        return $options.toggleYear(year);
      },
      title: "Expand/Collapse"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ChevronIcon, {
      open: $data.openYear === year
    }, null, 8 /* PROPS */, ["open"])], 8 /* PROPS */, _hoisted_6)])])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ================= SEMESTER TABLE ================= "), $data.openYear === year ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(semesters, function (offices, semester) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: semester
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SEMESTER ROW "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["semester-row", {
          'semester-glow': $options.isSemesterOpen(year, semester)
        }]),
        style: {
          "background-color": "#f8f9fa",
          "border-bottom": "1px solid #dee2e6"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(semester), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-sm btn-light border-0 p-2 semester-toggle",
        onClick: function onClick($event) {
          return $options.toggleSemester(year, semester);
        },
        title: "Expand/Collapse"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ChevronIcon, {
        open: $options.isSemesterOpen(year, semester)
      }, null, 8 /* PROPS */, ["open"])], 8 /* PROPS */, _hoisted_12)])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ================= OFFICES TABLE ================= "), $options.isSemesterOpen(year, semester) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_15, [_cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
        style: {
          "background-color": "#ecf0f1",
          "border-bottom": "1px solid #bdc3c7"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "font-weight": "600",
          "color": "#34495e",
          "padding": "0.75rem 1rem 0.75rem 2rem",
          "width": "50px"
        }
      }, "#"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "font-weight": "600",
          "color": "#34495e",
          "padding": "0.75rem 1rem"
        }
      }, "Office"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "font-weight": "600",
          "color": "#34495e",
          "padding": "0.75rem 1rem"
        }
      }, "Status")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(offices, function (item, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: item.id,
          "class": "office-row",
          style: {
            "border-bottom": "1px solid #ecf0f1"
          }
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index + 1), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.office_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.target_status), 1 /* TEXT */)])]);
      }), 128 /* KEYED_FRAGMENT */))])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
    }), 128 /* KEYED_FRAGMENT */))])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */))])])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OpcrTracking/Targets.vue?vue&type=style&index=0&id=beffc03a&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OpcrTracking/Targets.vue?vue&type=style&index=0&id=beffc03a&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.table td[data-v-beffc03a] {\r\n  vertical-align: middle;\n}\nbutton[data-v-beffc03a] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\n}row[data-v-beffc03a] {\r\n  transition: all 0.2s ease;\n}\n.year-row[data-v-beffc03a]:hover:not(.year-glow) {\r\n  background-color: #f0f6ff;\n}\n.year-glow[data-v-beffc03a] {\r\n  background-color: rgba(0, 150, 255, 0.15);\r\n  box-shadow: inset 0 0 10px rgba(0, 150, 255, 0.4), 0 0 8px rgba(0, 150, 255, 0.3);\r\n  transition: all 0.2s ease;\n}\n.semester-row[data-v-beffc03a] {\r\n  transition: all 0.2s ease;\n}\n.semester-row[data-v-beffc03a]:hover:not(.semester-glow) {\r\n  background-color: #f5f7fa;\n}\n.semester-glow[data-v-beffc03a] {\r\n  background-color: rgba(0, 255, 100, 0.15);\r\n  box-shadow: inset 0 0 10px rgba(0, 255, 100, 0.4), 0 0 8px rgba(0, 255, 100, 0.3);\r\n  transition: all 0.2s ease;\n}\n.office-row[data-v-beffc03a] {\r\n  transition: background-color 0.2s ease;\n}\n.office-row[data-v-beffc03a]:hover {\r\n  background-color: #f9f9f9;\n}\n.year-toggle[data-v-beffc03a]:hover,\r\n.semester-toggle[data-v-beffc03a]:hover {\r\n  background-color: #e9ecef !important;\r\n  border-radius: 4px;\n}\n.status-badge[data-v-beffc03a] {\r\n  padding: 0.5rem 0.875rem !important;\r\n  border-radius: 20px;\r\n  font-size: 0.85rem 255, 100, 0.15);\r\n  box-shadow: inset 0 0 10px rgba(0, 255, 100, 0.4), 0 0 8px rgba(0, 255, 100, 0.3);\r\n  transition: all 0.2s ease;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OpcrTracking/Targets.vue?vue&type=style&index=0&id=beffc03a&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OpcrTracking/Targets.vue?vue&type=style&index=0&id=beffc03a&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Targets_vue_vue_type_style_index_0_id_beffc03a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Targets.vue?vue&type=style&index=0&id=beffc03a&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OpcrTracking/Targets.vue?vue&type=style&index=0&id=beffc03a&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Targets_vue_vue_type_style_index_0_id_beffc03a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Targets_vue_vue_type_style_index_0_id_beffc03a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/OpcrTracking/Targets.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/OpcrTracking/Targets.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Targets_vue_vue_type_template_id_beffc03a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Targets.vue?vue&type=template&id=beffc03a&scoped=true */ "./resources/js/Pages/OpcrTracking/Targets.vue?vue&type=template&id=beffc03a&scoped=true");
/* harmony import */ var _Targets_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Targets.vue?vue&type=script&lang=js */ "./resources/js/Pages/OpcrTracking/Targets.vue?vue&type=script&lang=js");
/* harmony import */ var _Targets_vue_vue_type_style_index_0_id_beffc03a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Targets.vue?vue&type=style&index=0&id=beffc03a&scoped=true&lang=css */ "./resources/js/Pages/OpcrTracking/Targets.vue?vue&type=style&index=0&id=beffc03a&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel12_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_opcr_upgrade_roadmap_opcr_revised_laravel12_opcr_revised_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Targets_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Targets_vue_vue_type_template_id_beffc03a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-beffc03a"],['__file',"resources/js/Pages/OpcrTracking/Targets.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/OpcrTracking/Targets.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/OpcrTracking/Targets.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Targets_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Targets_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Targets.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OpcrTracking/Targets.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/OpcrTracking/Targets.vue?vue&type=template&id=beffc03a&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/OpcrTracking/Targets.vue?vue&type=template&id=beffc03a&scoped=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Targets_vue_vue_type_template_id_beffc03a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Targets_vue_vue_type_template_id_beffc03a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Targets.vue?vue&type=template&id=beffc03a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OpcrTracking/Targets.vue?vue&type=template&id=beffc03a&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/OpcrTracking/Targets.vue?vue&type=style&index=0&id=beffc03a&scoped=true&lang=css":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/Pages/OpcrTracking/Targets.vue?vue&type=style&index=0&id=beffc03a&scoped=true&lang=css ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Targets_vue_vue_type_style_index_0_id_beffc03a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Targets.vue?vue&type=style&index=0&id=beffc03a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/OpcrTracking/Targets.vue?vue&type=style&index=0&id=beffc03a&scoped=true&lang=css");


/***/ })

}]);