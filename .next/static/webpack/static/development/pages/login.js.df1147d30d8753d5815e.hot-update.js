webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./src/components/LoginForm/useForm.js":
/*!*********************************************!*\
  !*** ./src/components/LoginForm/useForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);







var useForm = function useForm(callback) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      token = _useState2[0],
      setToken = _useState2[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(function (state, newState) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, newState);
  }, {}),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useReducer, 2),
      inputValues = _useReducer2[0],
      setInputValues = _useReducer2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    console.log('useEffect hook called');
  });

  var handleSubmit = function handleSubmit(event) {
    console.log('Handle Submit Called'); // Call SERVER USING FETCH METHOD and PASS STATE VALUES TO BACK END WITH POST METHOD..

    if (event) event.preventDefault();
    console.log(inputValues);
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("http://localhost:8080/login", inputValues).then(function (res) {
      console.log(res.data.token);
      var token = res.data.token;
      localStorage.setItem('rememberMe', token);
      setToken(token);
      console.log(token);
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/secret');
    });
    callback();
  };

  var handleChange = function handleChange(event) {
    event.persist();
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    setInputValues(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value));
  };

  return {
    handleChange: handleChange,
    handleSubmit: handleSubmit,
    inputValues: inputValues
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useForm);

/***/ })

})
//# sourceMappingURL=login.js.df1147d30d8753d5815e.hot-update.js.map