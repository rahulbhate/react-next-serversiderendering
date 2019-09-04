webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./utils/AuthHelperMethods.js":
/*!************************************!*\
  !*** ./utils/AuthHelperMethods.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthHelperMethods; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);








var AuthHelperMethods = // Initializing important variables
function AuthHelperMethods(domain) {
  var _this = this;

  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AuthHelperMethods);

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "login", function (inputValues) {
    // Get a token from api server using the fetch api
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("http://localhost:8080/login", inputValues).then(function (res) {
      console.log(res.data.token);
      var token = res.data.token;
      localStorage.setItem('rememberMe', token); //setToken(token);

      console.log(token);
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/secret');
    });
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "loggedIn", function () {
    // Checks if there is a saved token and it's still valid
    var token = _this.getToken(); // Getting token from localstorage


    console.log(token);
    return !!token && !_this.isTokenExpired(token); // handwaiving here
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "isTokenExpired", function (token) {
    try {
      var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);

      if (decoded.exp < _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()() / 1000) {
        // Checking if token is expired.
        console.log('isToken Expired function called');
        return true;
      } else return false;
    } catch (err) {
      console.log('expired check failed! Line 42: AuthService.js');
      return false;
    }
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "setToken", function (idToken) {
    // Saves user token to localStorage
    localStorage.setItem('rememberMe', idToken);
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "getToken", function () {
    // Retrieves the user token from localStorage
    return localStorage.getItem('rememberMe');
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "logout", function () {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "getConfirm", function () {
    // Using jwt-decode npm package to decode the token
    var answer = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(_this.getToken());
    console.log('Recieved answer!');
    return answer;
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "fetch", function (url, options) {
    // performs api calls sending the required authentication headers
    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }; // Setting Authorization header
    // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx

    if (_this.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + _this.getToken();
    }

    return fetch(url, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      headers: headers
    }, options)).then(_this._checkStatus).then(function (response) {
      return response.data.json();
    }).then(error);
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "_checkStatus", function (response) {
    // raises an error in case response status is not a success
    if (response.status == 200) {
      // Success status lies between 200 to 300
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  });

  //THIS LINE IS ONLY USED WHEN YOU'RE IN PRODUCTION MODE!
  this.domain = domain || 'http://localhost:3000'; // API server domain
};



/***/ })

})
//# sourceMappingURL=login.js.4a781884a1a163a6e22f.hot-update.js.map