webpackHotUpdate("static\\development\\pages\\products.js",{

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_components_Button_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/Button/Button */ "./src/components/Button/Button.js");
/* harmony import */ var _src_components_List_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/List/List */ "./src/components/List/List.js");
/* harmony import */ var _src_components_List_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/List/useInfiniteScroll */ "./src/components/List/useInfiniteScroll.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_withAuthInitial__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/withAuthInitial */ "./utils/withAuthInitial.js");
/* harmony import */ var _src_components_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/components/ProductCard/ProductCard */ "./src/components/ProductCard/ProductCard.js");






var _jsxFileName = "C:\\Users\\rbhate\\projects\\react-next-serversiderendering\\pages\\products.js";
// This is the Link API









function Products(_ref) {
  var storeProducts = _ref.storeProducts;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(4),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
      start = _useState2[0],
      setStart = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(6),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState3, 1),
      limit = _useState4[0];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(storeProducts),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState5, 2),
      listItems = _useState6[0],
      setListItems = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState7, 2),
      newProds = _useState8[0],
      setNewProds = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState9, 2),
      cart = _useState10[0],
      setCart = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({}),
      _useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState11, 2),
      cartItems = _useState12[0],
      setCartItems = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
    id: '',
    title: '',
    price: ''
  }),
      _useState14 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState13, 2),
      product = _useState14[0],
      setProduct = _useState14[1];

  var _useInfiniteScroll = Object(_src_components_List_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_10__["default"])(fetchMoreListItems),
      _useInfiniteScroll2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useInfiniteScroll, 2),
      isFetching = _useInfiniteScroll2[0],
      setIsFetching = _useInfiniteScroll2[1];

  var handleAddToCart = function handleAddToCart() {
    console.log('You clicked on me');
    setCart(function (curr) {
      return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(curr), [product]);
    });
    setCartItems(function (cartItems) {
      var _objectSpread2;

      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, cartItems, (_objectSpread2 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, 'id', props.product.SKU), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, 'title', props.product.title), _objectSpread2));
    });
    console.log(cartItems);
    console.log(cart);
  };

  function fetchMoreListItems() {
    return _fetchMoreListItems.apply(this, arguments);
  }

  function _fetchMoreListItems() {
    _fetchMoreListItems = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var newStart, respon, data, error;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              newStart = start + limit;
              setStart(newStart);
              _context.next = 4;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()("http://localhost:8000/products?start=".concat(start, "&limit=").concat(limit));

            case 4:
              respon = _context.sent;
              _context.next = 7;
              return respon.json();

            case 7:
              data = _context.sent;
              error = 'Module Not Found';

              if (!data) {
                _context.next = 14;
                break;
              }

              setListItems(function (prevState) {
                return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(prevState), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(data));
              });
              console.log(data, start, limit);
              _context.next = 15;
              break;

            case 14:
              return _context.abrupt("return", {
                storeProducts: error
              });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _fetchMoreListItems.apply(this, arguments);
  }

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "card-deck",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, listItems.map(function (product, index) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "col-md-4",
      style: {
        textAlign: 'center',
        backgroundColor: 'white',
        webkitboxshadow: '0px 4px 6px 0px rgba(0, 11, 40)',
        boxShadow: '0px 4px 6px 1px rgba(0, 11, 40, 0.3)',
        padding: '10px 10px 15px',
        border: '1px solid #fff',
        position: 'relative',
        overflow: 'hidden',
        webkittransition: 'all 0.2s linear',
        otransition: 'all 0.2s linear',
        transition: 'all 0.2s linear',
        cursor: 'pointer',
        marginRight: '-10px',
        marginBottom: '10px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_components_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_13__["default"], {
      product: product,
      onClick: handleAddToCart,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }));
  }), isFetching && 'Fetching more list items...'))));
}

Products.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
  var start, limit, respon, data, error;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          start = 0;
          limit = 6;
          _context2.next = 4;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()("http://localhost:8000/products?start=".concat(start, "&limit=").concat(limit));

        case 4:
          respon = _context2.sent;
          _context2.next = 7;
          return respon.json();

        case 7:
          data = _context2.sent;
          error = 'Module Not Found';

          if (!data) {
            _context2.next = 13;
            break;
          }

          return _context2.abrupt("return", {
            storeProducts: data
          });

        case 13:
          return _context2.abrupt("return", {
            storeProducts: error
          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}));
/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_withAuthInitial__WEBPACK_IMPORTED_MODULE_12__["default"])(Products));

/***/ })

})
//# sourceMappingURL=products.js.d1d1823922d021a93314.hot-update.js.map