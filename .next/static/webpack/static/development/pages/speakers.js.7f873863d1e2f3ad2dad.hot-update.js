webpackHotUpdate("static\\development\\pages\\speakers.js",{

/***/ "./src/components/SpeakerCard/SpeakerCard.js":
/*!***************************************************!*\
  !*** ./src/components/SpeakerCard/SpeakerCard.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\rbhate\\projects\\react-next-serversiderendering\\src\\components\\SpeakerCard\\SpeakerCard.js";


var SpeakerCard = function SpeakerCard(props) {
  console.log(props.speaker.firstName);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card col-4 cardmin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/speakers/Speaker-".concat(props.speaker.id, ".jpg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    key: props.speaker.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.speaker.firstName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.speaker.bioShort))));
};

/* harmony default export */ __webpack_exports__["default"] = (SpeakerCard);

/***/ })

})
//# sourceMappingURL=speakers.js.7f873863d1e2f3ad2dad.hot-update.js.map