webpackHotUpdate("static\\development\\pages\\products.js",{

/***/ "./src/components/Button/Button.js":
/*!*****************************************!*\
  !*** ./src/components/Button/Button.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\rbhate\\projects\\react-next-serversiderendering\\src\\components\\Button\\Button.js";


var Button = function Button(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    style: props.style,
    className: props.type === 'primary' ? 'btn btn-danger' : 'btn btn-secondary'
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), props.title);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/ProductCard/ProductCard.js":
/*!***************************************************!*\
  !*** ./src/components/ProductCard/ProductCard.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Button/Button */ "./src/components/Button/Button.js");
var _jsxFileName = "C:\\Users\\rbhate\\projects\\react-next-serversiderendering\\src\\components\\ProductCard\\ProductCard.js";



var ProductCard = function ProductCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/products/product-".concat(props.product.id, ".png"),
    className: "card-img-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    key: props.product.id,
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.product.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: 'primary',
    title: 'Add To Cart',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.product.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, props.product.GST))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

/***/ })

})
//# sourceMappingURL=products.js.283a7f97ae84934b09b3.hot-update.js.map