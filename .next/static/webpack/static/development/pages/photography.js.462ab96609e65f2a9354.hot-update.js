webpackHotUpdate("static/development/pages/photography.js",{

/***/ "./components/Gallery/index.js":
/*!*************************************!*\
  !*** ./components/Gallery/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gallery; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);










var Gallery =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Gallery, _React$Component);

  function Gallery(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Gallery);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Gallery).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "handleExtend", function (index) {
      _this.setState({
        extend: true,
        index: index
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "handleCollapse", function () {
      _this.setState({
        extend: false,
        index: 0
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "handleNextImage", function () {
      _this.setState(function (state) {
        return {
          index: _this.state.index + 1
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "handleLastImage", function () {
      _this.setState(function (state) {
        return {
          index: _this.state.index - 1
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "componentDidUpdate", function () {});

    _this.state = {
      extend: false,
      index: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Gallery, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-724879564"
      }, this.state.extend ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-724879564" + " " + "slideshow-container"
      }, this.state.index > 0 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.handleLastImage,
        className: "jsx-724879564"
      }, "Last") : null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-724879564" + " " + "img-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/gallery/" + this.props.images[this.state.index],
        className: "jsx-724879564" + " " + "large"
      })), this.state.index < this.props.images.length ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.handleNextImage,
        className: "jsx-724879564"
      }, "Next") : null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.handleCollapse,
        className: "jsx-724879564"
      }, "X")) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-724879564" + " " + "masonry"
      }, this.props.images.map(function (image, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          onClick: function onClick() {
            return _this2.handleExtend(index);
          },
          key: index,
          src: "/static/gallery/" + image,
          className: "jsx-724879564" + " " + "item"
        });
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "724879564"
      }, ".img-container.jsx-724879564{height:80vh;text-align:center;}.slideshow-container.jsx-724879564{display:grid;grid-template-columns:1fr 20fr 1fr;width:100%;height:80vh;}.masonry.jsx-724879564{-webkit-column-count:4;column-count:4;-webkit-column-gap:0.5em;column-gap:0.5em;}.item.jsx-724879564{display:inline-block;background-color:#eee;margin:0 0 0.5em;width:100%;}.large.jsx-724879564{max-height:100%;max-width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25yaW4vcHJvamVjdHMvcG9ydGZvbGlvLXBhZ2UvY29tcG9uZW50cy9HYWxsZXJ5L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEb0IsQUFHeUIsQUFJQyxBQU1FLEFBSU0sQUFNTCxZQW5CRSxDQUlpQixHQWdCcEIsS0FOTyxTQWJ4QixDQW9CQSxPQVhtQixLQUtBLEtBVk4sV0FDQyxDQVVELFdBVGIsQUFVQSxTQU5BIiwiZmlsZSI6Ii9ob21lL25yaW4vcHJvamVjdHMvcG9ydGZvbGlvLXBhZ2UvY29tcG9uZW50cy9HYWxsZXJ5L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGV4dGVuZDogZmFsc2UsXG4gICAgICBpbmRleDogMFxuICAgIH07XG4gIH1cbiAgaGFuZGxlRXh0ZW5kID0gaW5kZXggPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBleHRlbmQ6IHRydWUsIGluZGV4IH0pO1xuICB9O1xuICBoYW5kbGVDb2xsYXBzZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXh0ZW5kOiBmYWxzZSwgaW5kZXg6IDAgfSk7XG4gIH07XG4gIGhhbmRsZU5leHRJbWFnZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7IGluZGV4OiB0aGlzLnN0YXRlLmluZGV4ICsgMSB9KSk7XG4gIH07XG4gIGhhbmRsZUxhc3RJbWFnZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7IGluZGV4OiB0aGlzLnN0YXRlLmluZGV4IC0gMSB9KSk7XG4gIH07XG4gIGNvbXBvbmVudERpZFVwZGF0ZSA9ICgpID0+IHt9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLmV4dGVuZCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlc2hvdy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmluZGV4ID4gMCA/IChcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUxhc3RJbWFnZX0+TGFzdDwvYnV0dG9uPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICBzcmM9e1wiL3N0YXRpYy9nYWxsZXJ5L1wiICsgdGhpcy5wcm9wcy5pbWFnZXNbdGhpcy5zdGF0ZS5pbmRleF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmluZGV4IDwgdGhpcy5wcm9wcy5pbWFnZXMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTmV4dEltYWdlfT5OZXh0PC9idXR0b24+XG4gICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNvbGxhcHNlfT5YPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXNvbnJ5XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5pbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRXh0ZW5kKGluZGV4KX1cbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1cIlxuICAgICAgICAgICAgICAgIHNyYz17XCIvc3RhdGljL2dhbGxlcnkvXCIgKyBpbWFnZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaW1nLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zbGlkZXNob3ctY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyMGZyIDFmcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWFzb25yeSB7XG4gICAgICAgICAgICBjb2x1bW4tY291bnQ6IDQ7XG4gICAgICAgICAgICBjb2x1bW4tZ2FwOiAwLjVlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW0ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAuNWVtO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYXJnZSB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/home/nrin/projects/portfolio-page/components/Gallery/index.js */"));
    }
  }]);

  return Gallery;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=photography.js.462ab96609e65f2a9354.hot-update.js.map