webpackHotUpdate("static\\development\\pages\\secret.js",{

/***/ "./utils/withAuth.js":
/*!***************************!*\
  !*** ./utils/withAuth.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withAuth; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _AuthHelperMethods__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AuthHelperMethods */ "./utils/AuthHelperMethods.js");







var _jsxFileName = "C:\\Users\\rbhate\\projects\\react-next-serversiderendering\\utils\\withAuth.js";



/* A higher order component is frequently written as a function that returns a class. */

function withAuth(AuthComponent) {
  var _temp;

  var Auth = new _AuthHelperMethods__WEBPACK_IMPORTED_MODULE_9__["default"]();
  return _temp =
  /*#__PURE__*/
  function (_Component) {
    Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AuthWrapped, _Component);

    function AuthWrapped() {
      var _getPrototypeOf2;

      var _this;

      Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthWrapped);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AuthWrapped)).call.apply(_getPrototypeOf2, [this].concat(args)));

      Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
        confirm: null,
        loaded: false
      });

      return _this;
    }

    Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthWrapped, [{
      key: "componentDidMount",

      /* In the componentDid<ount, we would want to do a couple of important tasks in order to verify the current users authentication status
      prior to granting them enterance into the app. */
      value: function componentDidMount() {
        if (!Auth.loggedIn()) {
          next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/login');
        } else {
          /* Try to get confirmation message from the Auth helper. */
          try {
            var confirm = Auth.getConfirm();
            console.log('confirmation is:', confirm);
            this.setState({
              confirm: confirm,
              loaded: true
            });
          } catch (err) {
            /* Oh snap! Looks like there's an error so we'll print it out and log the user out for security reasons. */
            console.log(err);
            Auth.logout();
            this.props.history.replace('/login');
          }
        }
      }
    }, {
      key: "render",
      value: function render() {
        if (this.state.loaded == true) {
          if (this.state.confirm) {
            console.log('confirmed!');
            return (
              /* component that is currently being wrapper(App.js) */
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(AuthComponent, {
                history: this.props.history,
                confirm: this.state.confirm,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                },
                __self: this
              })
            );
          } else {
            console.log('not confirmed!');
            return null;
          }
        } else {
          return null;
        }
      }
    }]);

    return AuthWrapped;
  }(react__WEBPACK_IMPORTED_MODULE_7__["Component"]), _temp;
}

/***/ })

})
//# sourceMappingURL=secret.js.17b170801e8c1b47501c.hot-update.js.map