webpackHotUpdate("static\\development\\pages\\signup.js",{

/***/ "./src/components/SignUpForm/useForm.js":
/*!**********************************************!*\
  !*** ./src/components/SignUpForm/useForm.js ***!
  \**********************************************/
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






var useForm = function useForm(callback) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(function (state, newState) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, newState);
  }, {}),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useReducer, 2),
      inputValues = _useReducer2[0],
      setInputValues = _useReducer2[1];

  var handleSubmit = function handleSubmit(event) {
    // Call SERVER USING FETCH METHOD and PASS STATE VALUES TO BACK END WITH POST METHOD..
    if (event) event.preventDefault();
    console.log(inputValues);
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("http://localhost:8080/signup", inputValues).then(function (res) {
      console.log(res);
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
//# sourceMappingURL=signup.js.bb34be7d405ae4904fa8.hot-update.js.map