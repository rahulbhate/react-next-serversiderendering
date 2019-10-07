webpackHotUpdate("static/development/pages/products.js",{

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Button/Button */ "./src/components/Button/Button.js");
/* harmony import */ var _src_components_List_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/List/List */ "./src/components/List/List.js");
/* harmony import */ var _src_components_List_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/List/useInfiniteScroll */ "./src/components/List/useInfiniteScroll.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_withAuthInitial__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/withAuthInitial */ "./utils/withAuthInitial.js");
/* harmony import */ var _src_components_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/ProductCard/ProductCard */ "./src/components/ProductCard/ProductCard.js");



var _jsxFileName = "/Users/rahulbhate/projects/react-next-serversiderendering/pages/products.js";
// This is the Link API









function Products(_ref) {
  var storeProducts = _ref.storeProducts;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(3),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 1),
      start = _useState2[0];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(3),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 1),
      limit = _useState4[0];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      listItems = _useState6[0],
      setListItems = _useState6[1];

  var _useInfiniteScroll = Object(_src_components_List_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_7__["default"])(fetchMoreListItems),
      _useInfiniteScroll2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useInfiniteScroll, 2),
      isFetching = _useInfiniteScroll2[0],
      setIsFetching = _useInfiniteScroll2[1];

  function fetchMoreListItems() {
    alert('called');
    var respon = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:8000/products?start=".concat(start, "&limit=").concat(limit));
    console.log(respon);
    setTimeout(function () {
      setListItems(function (prevState) {
        return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(Array(20).keys(), function (n) {
          return n + prevState.length + 1;
        })));
      });
      setIsFetching(false);
    }, 2000);
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "card-deck",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, storeProducts.map(function (product, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "col-md-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_components_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
      product: product,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }));
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: "list-group mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, listItems.map(function (listItem, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      className: "list-group-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "List Item ", listItem);
  })), isFetching && 'Fetching more list items...'))));
}

Products.getInitialProps = function () {
  var start = 0;
  var limit = 3;
  var respon = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:8000/products?start=".concat(start, "&limit=").concat(limit)).then(function (data) {
    return {
      storeProducts: data
    };
  }).then(function (error) {});
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_withAuthInitial__WEBPACK_IMPORTED_MODULE_9__["default"])(Products));

/***/ })

})
//# sourceMappingURL=products.js.b47569fce2018bd8dc12.hot-update.js.map