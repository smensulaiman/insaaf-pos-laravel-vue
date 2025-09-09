"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["customizer"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/common/customizer.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/common/customizer.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isOpen: false,
      languages: []
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["getThemeMode", "getcompactLeftSideBarBgColor", "getAvailableLanguages"])),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["changeThemeRtl", "changeThemeLayout", "changeThemeMode", "changecompactLeftSideBarBgColor"])), {}, {
    SetLocal: function SetLocal(locale) {
      this.$i18n.locale = locale;
      this.$store.dispatch("language/setLanguage", locale);
      Fire.$emit("ChangeLanguage");
      window.location.reload();
    } // async fetchLanguages() {
    //   try {
    //     const response = await axios.get("/languages");
    //     this.languages = response.data;
    //   } catch (error) {
    //     console.warn("Failed to load languages");
    //   }
    // },
  }),
  created: function created() {
    this.$store.dispatch("loadAvailableLanguages");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/common/customizer.vue?vue&type=template&id=525a0006&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/common/customizer.vue?vue&type=template&id=525a0006&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "customizer",
    "class": {
      open: _vm.isOpen
    }
  }, [_c("div", {
    staticClass: "handle",
    on: {
      click: function click($event) {
        _vm.isOpen = !_vm.isOpen;
      }
    }
  }, [_c("i", {
    staticClass: "i-Gear spin"
  })]), _vm._v(" "), _c("vue-perfect-scrollbar", {
    staticClass: "customizer-body ps rtl-ps-none",
    attrs: {
      settings: {
        suppressScrollX: true,
        wheelPropagation: false
      }
    }
  }, [_vm.getThemeMode.layout != "vertical-sidebar" && _vm.getThemeMode.layout != "vertical-sidebar-two" ? _c("div", {}, [_c("div", {
    staticClass: "card-header",
    attrs: {
      id: "headingOne"
    }
  }, [_c("p", {
    staticClass: "mb-0"
  }, [_vm._v("RTL")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("label", {
    staticClass: "checkbox checkbox-primary"
  }, [_c("input", {
    attrs: {
      type: "checkbox",
      id: "rtl-checkbox"
    },
    on: {
      change: _vm.changeThemeRtl
    }
  }), _vm._v(" "), _c("span", [_vm._v("Enable RTL")]), _vm._v(" "), _c("span", {
    staticClass: "checkmark"
  })])])]) : _vm._e(), _vm._v(" "), _c("div", {}, [_c("div", {
    staticClass: "card-header"
  }, [_c("p", {
    staticClass: "mb-0"
  }, [_vm._v("Dark Mode")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("label", {
    directives: [{
      name: "b-popover",
      rawName: "v-b-popover.hover.left",
      value: "Dark Mode",
      expression: "'Dark Mode'",
      modifiers: {
        hover: true,
        left: true
      }
    }],
    staticClass: "switch switch-primary mr-3 mt-2"
  }, [_c("input", {
    attrs: {
      type: "checkbox"
    },
    on: {
      click: _vm.changeThemeMode
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "slider"
  })])])]), _vm._v(" "), _c("div", {}, [_c("div", {
    staticClass: "card-header"
  }, [_c("p", {
    staticClass: "mb-0"
  }, [_vm._v("Language")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "menu-icon-language"
  }, _vm._l(_vm.getAvailableLanguages, function (lang) {
    return _c("a", {
      key: lang.locale,
      on: {
        click: function click($event) {
          return _vm.SetLocal(lang.locale);
        }
      }
    }, [_c("img", {
      staticClass: "flag-icon flag-icon-squared",
      staticStyle: {
        width: "20px",
        "margin-right": "8px"
      },
      attrs: {
        src: "/flags/".concat(lang.flag),
        alt: lang.name
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "title-lang"
    }, [_vm._v(_vm._s(lang.name))])]);
  }), 0)])])])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/src/components/common/customizer.vue":
/*!********************************************************!*\
  !*** ./resources/src/components/common/customizer.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _customizer_vue_vue_type_template_id_525a0006_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customizer.vue?vue&type=template&id=525a0006&scoped=true */ "./resources/src/components/common/customizer.vue?vue&type=template&id=525a0006&scoped=true");
/* harmony import */ var _customizer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customizer.vue?vue&type=script&lang=js */ "./resources/src/components/common/customizer.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _customizer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _customizer_vue_vue_type_template_id_525a0006_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _customizer_vue_vue_type_template_id_525a0006_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "525a0006",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/components/common/customizer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/components/common/customizer.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/src/components/common/customizer.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customizer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./customizer.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/common/customizer.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customizer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/common/customizer.vue?vue&type=template&id=525a0006&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./resources/src/components/common/customizer.vue?vue&type=template&id=525a0006&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_customizer_vue_vue_type_template_id_525a0006_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_customizer_vue_vue_type_template_id_525a0006_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_customizer_vue_vue_type_template_id_525a0006_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./customizer.vue?vue&type=template&id=525a0006&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/common/customizer.vue?vue&type=template&id=525a0006&scoped=true");


/***/ })

}]);