webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./src/components/Form/Form.js":
/*!*************************************!*\
  !*** ./src/components/Form/Form.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Input/Input */ "./src/components/Input/Input.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button */ "./src/components/Button/Button.js");
/* harmony import */ var _useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useForm */ "./src/components/Form/useForm.js");
var _jsxFileName = "C:\\Users\\rbhate\\projects\\react-next-serversiderendering\\src\\components\\Form\\Form.js";





var Form = function Form() {
  var _useForm = Object(_useForm__WEBPACK_IMPORTED_MODULE_3__["default"])(login),
      values = _useForm.values,
      handleChange = _useForm.handleChange,
      handleSubmit = _useForm.handleSubmit;

  function login() {
    console.log(values);
    alert('Called Login');
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "container",
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "class": "account-wall",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    inputType: 'email',
    title: 'Email',
    id: 'email',
    name: 'email',
    value: values.email,
    placeholder: 'Enter your email',
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    inputType: 'password',
    title: 'Password',
    id: 'password',
    name: 'password',
    value: values.password,
    placeholder: 'Enter your password',
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: 'primary',
    title: 'Login',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=login.js.b55fc30bb0adacf16ae2.hot-update.js.map