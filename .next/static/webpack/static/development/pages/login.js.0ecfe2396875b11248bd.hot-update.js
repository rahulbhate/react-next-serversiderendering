webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./src/components/LoginForm/LoginForm.js":
/*!***********************************************!*\
  !*** ./src/components/LoginForm/LoginForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Input/Input */ "./src/components/Input/Input.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button */ "./src/components/Button/Button.js");
/* harmony import */ var _useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useForm */ "./src/components/LoginForm/useForm.js");
var _jsxFileName = "C:\\Users\\rbhate\\projects\\react-next-serversiderendering\\src\\components\\LoginForm\\LoginForm.js";





var LgoinForm = function LgoinForm() {
  var _useForm = Object(_useForm__WEBPACK_IMPORTED_MODULE_3__["default"])(login),
      inputValues = _useForm.inputValues,
      handleChange = _useForm.handleChange,
      handleSubmit = _useForm.handleSubmit;

  function login() {
    console.log(inputValues);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    className: "form-horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: 'email',
    title: 'Email',
    id: 'email',
    name: 'email',
    value: inputValues.email || '',
    placeholder: 'Enter your email',
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: 'password',
    title: 'Password',
    id: 'password',
    name: 'password',
    value: inputValues.password || '',
    placeholder: 'Enter your password',
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-offset-2 col-sm-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: 'danger',
    title: 'Login',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LgoinForm);

/***/ })

})
//# sourceMappingURL=login.js.0ecfe2396875b11248bd.hot-update.js.map