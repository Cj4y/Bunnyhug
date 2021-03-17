(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable.js ***!
  \**************************************************************************/
/*! exports provided: getConsumer, setConsumer, subscribeTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConsumer", function() { return getConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setConsumer", function() { return setConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeTo", function() { return subscribeTo; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var consumer;
function getConsumer() {
  return _getConsumer.apply(this, arguments);
}

function _getConsumer() {
  _getConsumer = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var _yield$import, createConsumer;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!consumer) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", consumer);

          case 2:
            _context.next = 4;
            return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @rails/actioncable/src */ "./node_modules/@rails/actioncable/src/index.js"));

          case 4:
            _yield$import = _context.sent;
            createConsumer = _yield$import.createConsumer;
            return _context.abrupt("return", setConsumer(createConsumer()));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getConsumer.apply(this, arguments);
}

function setConsumer(newConsumer) {
  return consumer = newConsumer;
}
function subscribeTo(_x, _x2) {
  return _subscribeTo.apply(this, arguments);
}

function _subscribeTo() {
  _subscribeTo = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(channel, mixin) {
    var _yield$getConsumer, subscriptions;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getConsumer();

          case 2:
            _yield$getConsumer = _context2.sent;
            subscriptions = _yield$getConsumer.subscriptions;
            return _context2.abrupt("return", subscriptions.create(channel, mixin));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _subscribeTo.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable_stream_source_element.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable_stream_source_element.js ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
/* harmony import */ var _cable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cable */ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var TurboCableStreamSourceElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(TurboCableStreamSourceElement, _HTMLElement);

  var _super = _createSuper(TurboCableStreamSourceElement);

  function TurboCableStreamSourceElement() {
    _classCallCheck(this, TurboCableStreamSourceElement);

    return _super.apply(this, arguments);
  }

  _createClass(TurboCableStreamSourceElement, [{
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Object(_hotwired_turbo__WEBPACK_IMPORTED_MODULE_1__["connectStreamSource"])(this);
                _context.next = 3;
                return Object(_cable__WEBPACK_IMPORTED_MODULE_2__["subscribeTo"])(this.channel, {
                  received: this.dispatchMessageEvent.bind(this)
                });

              case 3:
                this.subscription = _context.sent;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }

      return connectedCallback;
    }()
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      Object(_hotwired_turbo__WEBPACK_IMPORTED_MODULE_1__["disconnectStreamSource"])(this);
      if (this.subscription) this.subscription.unsubscribe();
    }
  }, {
    key: "dispatchMessageEvent",
    value: function dispatchMessageEvent(data) {
      var event = new MessageEvent("message", {
        data: data
      });
      return this.dispatchEvent(event);
    }
  }, {
    key: "channel",
    get: function get() {
      var channel = this.getAttribute("channel");
      var signed_stream_name = this.getAttribute("signed-stream-name");
      return {
        channel: channel,
        signed_stream_name: signed_stream_name
      };
    }
  }]);

  return TurboCableStreamSourceElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define("turbo-cable-stream-source", TurboCableStreamSourceElement);

/***/ }),

/***/ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@hotwired/turbo-rails/app/javascript/turbo/index.js ***!
  \**************************************************************************/
/*! exports provided: Turbo, cable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cable_stream_source_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cable_stream_source_element */ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable_stream_source_element.js");
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Turbo", function() { return _hotwired_turbo__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _cable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cable */ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "cable", function() { return _cable__WEBPACK_IMPORTED_MODULE_2__; });






/***/ }),

/***/ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js ***!
  \***************************************************************/
/*! exports provided: clearCache, connectStreamSource, disconnectStreamSource, navigator, registerAdapter, renderStreamMessage, setProgressBarDelay, start, visit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCache", function() { return clearCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectStreamSource", function() { return connectStreamSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disconnectStreamSource", function() { return disconnectStreamSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigator", function() { return navigator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerAdapter", function() { return registerAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderStreamMessage", function() { return renderStreamMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProgressBarDelay", function() { return setProgressBarDelay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return visit; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
var _templateObject, _templateObject2;

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
Turbo 7.0.0-beta.4
Copyright © 2021 Basecamp, LLC
 */
(function () {
  if (window.Reflect === undefined || window.customElements === undefined || window.customElements.polyfillWrapFlushCallback) {
    return;
  }

  var BuiltInHTMLElement = HTMLElement;
  var wrapperForTheName = {
    'HTMLElement': function HTMLElement() {
      return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
    }
  };
  window.HTMLElement = wrapperForTheName['HTMLElement'];
  HTMLElement.prototype = BuiltInHTMLElement.prototype;
  HTMLElement.prototype.constructor = HTMLElement;
  Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();

var submittersByForm = new WeakMap();

function findSubmitterFromClickTarget(target) {
  var element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
  var candidate = element ? element.closest("input, button") : null;
  return (candidate === null || candidate === void 0 ? void 0 : candidate.type) == "submit" ? candidate : null;
}

function clickCaptured(event) {
  var submitter = findSubmitterFromClickTarget(event.target);

  if (submitter && submitter.form) {
    submittersByForm.set(submitter.form, submitter);
  }
}

(function () {
  if ("SubmitEvent" in window) return;
  addEventListener("click", clickCaptured, true);
  Object.defineProperty(Event.prototype, "submitter", {
    get: function get() {
      if (this.type == "submit" && this.target instanceof HTMLFormElement) {
        return submittersByForm.get(this.target);
      }
    }
  });
})();

var FrameLoadingStyle;

(function (FrameLoadingStyle) {
  FrameLoadingStyle["eager"] = "eager";
  FrameLoadingStyle["lazy"] = "lazy";
})(FrameLoadingStyle || (FrameLoadingStyle = {}));

var FrameElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(FrameElement, _HTMLElement);

  var _super = _createSuper(FrameElement);

  function FrameElement() {
    var _this;

    _classCallCheck(this, FrameElement);

    _this = _super.call(this);
    _this.loaded = Promise.resolve();
    _this.delegate = new FrameElement.delegateConstructor(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FrameElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.delegate.connect();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.delegate.disconnect();
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name) {
      if (name == "loading") {
        this.delegate.loadingStyleChanged();
      } else if (name == "src") {
        this.delegate.sourceURLChanged();
      }
    }
  }, {
    key: "src",
    get: function get() {
      return this.getAttribute("src");
    },
    set: function set(value) {
      if (value) {
        this.setAttribute("src", value);
      } else {
        this.removeAttribute("src");
      }
    }
  }, {
    key: "loading",
    get: function get() {
      return frameLoadingStyleFromString(this.getAttribute("loading") || "");
    },
    set: function set(value) {
      if (value) {
        this.setAttribute("loading", value);
      } else {
        this.removeAttribute("loading");
      }
    }
  }, {
    key: "disabled",
    get: function get() {
      return this.hasAttribute("disabled");
    },
    set: function set(value) {
      if (value) {
        this.setAttribute("disabled", "");
      } else {
        this.removeAttribute("disabled");
      }
    }
  }, {
    key: "autoscroll",
    get: function get() {
      return this.hasAttribute("autoscroll");
    },
    set: function set(value) {
      if (value) {
        this.setAttribute("autoscroll", "");
      } else {
        this.removeAttribute("autoscroll");
      }
    }
  }, {
    key: "complete",
    get: function get() {
      return !this.delegate.isLoading;
    }
  }, {
    key: "isActive",
    get: function get() {
      return this.ownerDocument === document && !this.isPreview;
    }
  }, {
    key: "isPreview",
    get: function get() {
      var _a, _b;

      return (_b = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.documentElement) === null || _b === void 0 ? void 0 : _b.hasAttribute("data-turbo-preview");
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["loading", "src"];
    }
  }]);

  return FrameElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

function frameLoadingStyleFromString(style) {
  switch (style.toLowerCase()) {
    case "lazy":
      return FrameLoadingStyle.lazy;

    default:
      return FrameLoadingStyle.eager;
  }
}

function expandURL(locatable) {
  var anchor = document.createElement("a");
  anchor.href = locatable.toString();
  return new URL(anchor.href);
}

function getAnchor(url) {
  var anchorMatch;

  if (url.hash) {
    return url.hash.slice(1);
  } else if (anchorMatch = url.href.match(/#(.*)$/)) {
    return anchorMatch[1];
  } else {
    return "";
  }
}

function getExtension(url) {
  return (getLastPathComponent(url).match(/\.[^.]*$/) || [])[0] || "";
}

function isHTML(url) {
  return !!getExtension(url).match(/^(?:|\.(?:htm|html|xhtml))$/);
}

function isPrefixedBy(baseURL, url) {
  var prefix = getPrefix(url);
  return baseURL.href === expandURL(prefix).href || baseURL.href.startsWith(prefix);
}

function toCacheKey(url) {
  var anchorLength = url.hash.length;

  if (anchorLength < 2) {
    return url.href;
  } else {
    return url.href.slice(0, -anchorLength);
  }
}

function getPathComponents(url) {
  return url.pathname.split("/").slice(1);
}

function getLastPathComponent(url) {
  return getPathComponents(url).slice(-1)[0];
}

function getPrefix(url) {
  return addTrailingSlash(url.origin + url.pathname);
}

function addTrailingSlash(value) {
  return value.endsWith("/") ? value : value + "/";
}

var FetchResponse = /*#__PURE__*/function () {
  function FetchResponse(response) {
    _classCallCheck(this, FetchResponse);

    this.response = response;
  }

  _createClass(FetchResponse, [{
    key: "succeeded",
    get: function get() {
      return this.response.ok;
    }
  }, {
    key: "failed",
    get: function get() {
      return !this.succeeded;
    }
  }, {
    key: "clientError",
    get: function get() {
      return this.statusCode >= 400 && this.statusCode <= 499;
    }
  }, {
    key: "serverError",
    get: function get() {
      return this.statusCode >= 500 && this.statusCode <= 599;
    }
  }, {
    key: "redirected",
    get: function get() {
      return this.response.redirected;
    }
  }, {
    key: "location",
    get: function get() {
      return expandURL(this.response.url);
    }
  }, {
    key: "isHTML",
    get: function get() {
      return this.contentType && this.contentType.match(/^(?:text\/([^\s;,]+\b)?html|application\/xhtml\+xml)\b/);
    }
  }, {
    key: "statusCode",
    get: function get() {
      return this.response.status;
    }
  }, {
    key: "contentType",
    get: function get() {
      return this.header("Content-Type");
    }
  }, {
    key: "responseText",
    get: function get() {
      return this.response.text();
    }
  }, {
    key: "responseHTML",
    get: function get() {
      if (this.isHTML) {
        return this.response.text();
      } else {
        return Promise.resolve(undefined);
      }
    }
  }, {
    key: "header",
    value: function header(name) {
      return this.response.headers.get(name);
    }
  }]);

  return FetchResponse;
}();

function dispatch(eventName) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      target = _ref.target,
      cancelable = _ref.cancelable,
      detail = _ref.detail;

  var event = new CustomEvent(eventName, {
    cancelable: cancelable,
    bubbles: true,
    detail: detail
  });
  void (target || document.documentElement).dispatchEvent(event);
  return event;
}

function nextAnimationFrame() {
  return new Promise(function (resolve) {
    return requestAnimationFrame(function () {
      return resolve();
    });
  });
}

function nextEventLoopTick() {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve();
    }, 0);
  });
}

function nextMicrotask() {
  return Promise.resolve();
}

function parseHTMLDocument() {
  var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return new DOMParser().parseFromString(html, "text/html");
}

function unindent(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  var lines = interpolate(strings, values).replace(/^\n/, "").split("\n");
  var match = lines[0].match(/^\s+/);
  var indent = match ? match[0].length : 0;
  return lines.map(function (line) {
    return line.slice(indent);
  }).join("\n");
}

function interpolate(strings, values) {
  return strings.reduce(function (result, string, i) {
    var value = values[i] == undefined ? "" : values[i];
    return result + string + value;
  }, "");
}

function uuid() {
  return Array.apply(null, {
    length: 36
  }).map(function (_, i) {
    if (i == 8 || i == 13 || i == 18 || i == 23) {
      return "-";
    } else if (i == 14) {
      return "4";
    } else if (i == 19) {
      return (Math.floor(Math.random() * 4) + 8).toString(16);
    } else {
      return Math.floor(Math.random() * 15).toString(16);
    }
  }).join("");
}

var FetchMethod;

(function (FetchMethod) {
  FetchMethod[FetchMethod["get"] = 0] = "get";
  FetchMethod[FetchMethod["post"] = 1] = "post";
  FetchMethod[FetchMethod["put"] = 2] = "put";
  FetchMethod[FetchMethod["patch"] = 3] = "patch";
  FetchMethod[FetchMethod["delete"] = 4] = "delete";
})(FetchMethod || (FetchMethod = {}));

function fetchMethodFromString(method) {
  switch (method.toLowerCase()) {
    case "get":
      return FetchMethod.get;

    case "post":
      return FetchMethod.post;

    case "put":
      return FetchMethod.put;

    case "patch":
      return FetchMethod.patch;

    case "delete":
      return FetchMethod.delete;
  }
}

var FetchRequest = /*#__PURE__*/function () {
  function FetchRequest(delegate, method, location) {
    var body = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new URLSearchParams();

    _classCallCheck(this, FetchRequest);

    this.abortController = new AbortController();
    this.delegate = delegate;
    this.method = method;

    if (this.isIdempotent) {
      this.url = mergeFormDataEntries(location, _toConsumableArray(body.entries()));
    } else {
      this.body = body;
      this.url = location;
    }
  }

  _createClass(FetchRequest, [{
    key: "location",
    get: function get() {
      return this.url;
    }
  }, {
    key: "params",
    get: function get() {
      return this.url.searchParams;
    }
  }, {
    key: "entries",
    get: function get() {
      return this.body ? Array.from(this.body.entries()) : [];
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.abortController.abort();
    }
  }, {
    key: "perform",
    value: function () {
      var _perform = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var fetchOptions, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fetchOptions = this.fetchOptions;
                dispatch("turbo:before-fetch-request", {
                  detail: {
                    fetchOptions: fetchOptions
                  }
                });
                _context.prev = 2;
                this.delegate.requestStarted(this);
                _context.next = 6;
                return fetch(this.url.href, fetchOptions);

              case 6:
                response = _context.sent;
                _context.next = 9;
                return this.receive(response);

              case 9:
                return _context.abrupt("return", _context.sent);

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);
                this.delegate.requestErrored(this, _context.t0);
                throw _context.t0;

              case 16:
                _context.prev = 16;
                this.delegate.requestFinished(this);
                return _context.finish(16);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 12, 16, 19]]);
      }));

      function perform() {
        return _perform.apply(this, arguments);
      }

      return perform;
    }()
  }, {
    key: "receive",
    value: function () {
      var _receive = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(response) {
        var fetchResponse, event;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                fetchResponse = new FetchResponse(response);
                event = dispatch("turbo:before-fetch-response", {
                  cancelable: true,
                  detail: {
                    fetchResponse: fetchResponse
                  }
                });

                if (event.defaultPrevented) {
                  this.delegate.requestPreventedHandlingResponse(this, fetchResponse);
                } else if (fetchResponse.succeeded) {
                  this.delegate.requestSucceededWithResponse(this, fetchResponse);
                } else {
                  this.delegate.requestFailedWithResponse(this, fetchResponse);
                }

                return _context2.abrupt("return", fetchResponse);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function receive(_x) {
        return _receive.apply(this, arguments);
      }

      return receive;
    }()
  }, {
    key: "fetchOptions",
    get: function get() {
      return {
        method: FetchMethod[this.method].toUpperCase(),
        credentials: "same-origin",
        headers: this.headers,
        redirect: "follow",
        body: this.body,
        signal: this.abortSignal
      };
    }
  }, {
    key: "isIdempotent",
    get: function get() {
      return this.method == FetchMethod.get;
    }
  }, {
    key: "headers",
    get: function get() {
      var headers = Object.assign({}, this.defaultHeaders);

      if (typeof this.delegate.prepareHeadersForRequest == "function") {
        this.delegate.prepareHeadersForRequest(headers, this);
      }

      return headers;
    }
  }, {
    key: "abortSignal",
    get: function get() {
      return this.abortController.signal;
    }
  }, {
    key: "defaultHeaders",
    get: function get() {
      return {
        "Accept": "text/html, application/xhtml+xml"
      };
    }
  }]);

  return FetchRequest;
}();

function mergeFormDataEntries(url, entries) {
  var currentSearchParams = new URLSearchParams(url.search);

  var _iterator = _createForOfIteratorHelper(entries),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _ref4 = _step.value;

      var _ref3 = _slicedToArray(_ref4, 2);

      var name = _ref3[0];
      var value = _ref3[1];
      if (value instanceof File) continue;

      if (currentSearchParams.has(name)) {
        currentSearchParams.delete(name);
        url.searchParams.set(name, value);
      } else {
        url.searchParams.append(name, value);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return url;
}

var AppearanceObserver = /*#__PURE__*/function () {
  function AppearanceObserver(delegate, element) {
    var _this2 = this;

    _classCallCheck(this, AppearanceObserver);

    this.started = false;

    this.intersect = function (entries) {
      var lastEntry = entries.slice(-1)[0];

      if (lastEntry === null || lastEntry === void 0 ? void 0 : lastEntry.isIntersecting) {
        _this2.delegate.elementAppearedInViewport(_this2.element);
      }
    };

    this.delegate = delegate;
    this.element = element;
    this.intersectionObserver = new IntersectionObserver(this.intersect);
  }

  _createClass(AppearanceObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        this.intersectionObserver.observe(this.element);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.started = false;
        this.intersectionObserver.unobserve(this.element);
      }
    }
  }]);

  return AppearanceObserver;
}();

var StreamMessage = /*#__PURE__*/function () {
  function StreamMessage(html) {
    _classCallCheck(this, StreamMessage);

    this.templateElement = document.createElement("template");
    this.templateElement.innerHTML = html;
  }

  _createClass(StreamMessage, [{
    key: "fragment",
    get: function get() {
      var fragment = document.createDocumentFragment();

      var _iterator2 = _createForOfIteratorHelper(this.foreignElements),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var element = _step2.value;
          fragment.appendChild(document.importNode(element, true));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return fragment;
    }
  }, {
    key: "foreignElements",
    get: function get() {
      return this.templateChildren.reduce(function (streamElements, child) {
        if (child.tagName.toLowerCase() == "turbo-stream") {
          return [].concat(_toConsumableArray(streamElements), [child]);
        } else {
          return streamElements;
        }
      }, []);
    }
  }, {
    key: "templateChildren",
    get: function get() {
      return Array.from(this.templateElement.content.children);
    }
  }], [{
    key: "wrap",
    value: function wrap(message) {
      if (typeof message == "string") {
        return new this(message);
      } else {
        return message;
      }
    }
  }]);

  return StreamMessage;
}();

StreamMessage.contentType = "text/vnd.turbo-stream.html";
var FormSubmissionState;

(function (FormSubmissionState) {
  FormSubmissionState[FormSubmissionState["initialized"] = 0] = "initialized";
  FormSubmissionState[FormSubmissionState["requesting"] = 1] = "requesting";
  FormSubmissionState[FormSubmissionState["waiting"] = 2] = "waiting";
  FormSubmissionState[FormSubmissionState["receiving"] = 3] = "receiving";
  FormSubmissionState[FormSubmissionState["stopping"] = 4] = "stopping";
  FormSubmissionState[FormSubmissionState["stopped"] = 5] = "stopped";
})(FormSubmissionState || (FormSubmissionState = {}));

var FormEnctype;

(function (FormEnctype) {
  FormEnctype["urlEncoded"] = "application/x-www-form-urlencoded";
  FormEnctype["multipart"] = "multipart/form-data";
  FormEnctype["plain"] = "text/plain";
})(FormEnctype || (FormEnctype = {}));

function formEnctypeFromString(encoding) {
  switch (encoding.toLowerCase()) {
    case FormEnctype.multipart:
      return FormEnctype.multipart;

    case FormEnctype.plain:
      return FormEnctype.plain;

    default:
      return FormEnctype.urlEncoded;
  }
}

var FormSubmission = /*#__PURE__*/function () {
  function FormSubmission(delegate, formElement, submitter) {
    var mustRedirect = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, FormSubmission);

    this.state = FormSubmissionState.initialized;
    this.delegate = delegate;
    this.formElement = formElement;
    this.submitter = submitter;
    this.formData = buildFormData(formElement, submitter);
    this.fetchRequest = new FetchRequest(this, this.method, this.location, this.body);
    this.mustRedirect = mustRedirect;
  }

  _createClass(FormSubmission, [{
    key: "method",
    get: function get() {
      var _a;

      var method = ((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formmethod")) || this.formElement.getAttribute("method") || "";
      return fetchMethodFromString(method.toLowerCase()) || FetchMethod.get;
    }
  }, {
    key: "action",
    get: function get() {
      var _a;

      return ((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formaction")) || this.formElement.action;
    }
  }, {
    key: "location",
    get: function get() {
      return expandURL(this.action);
    }
  }, {
    key: "body",
    get: function get() {
      if (this.enctype == FormEnctype.urlEncoded || this.method == FetchMethod.get) {
        return new URLSearchParams(this.stringFormData);
      } else {
        return this.formData;
      }
    }
  }, {
    key: "enctype",
    get: function get() {
      var _a;

      return formEnctypeFromString(((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formenctype")) || this.formElement.enctype);
    }
  }, {
    key: "stringFormData",
    get: function get() {
      return _toConsumableArray(this.formData).reduce(function (entries, _ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            name = _ref6[0],
            value = _ref6[1];

        return entries.concat(typeof value == "string" ? [[name, value]] : []);
      }, []);
    }
  }, {
    key: "start",
    value: function () {
      var _start = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _FormSubmissionState, initialized, requesting;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _FormSubmissionState = FormSubmissionState, initialized = _FormSubmissionState.initialized, requesting = _FormSubmissionState.requesting;

                if (!(this.state == initialized)) {
                  _context3.next = 4;
                  break;
                }

                this.state = requesting;
                return _context3.abrupt("return", this.fetchRequest.perform());

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function start() {
        return _start.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "stop",
    value: function stop() {
      var _FormSubmissionState2 = FormSubmissionState,
          stopping = _FormSubmissionState2.stopping,
          stopped = _FormSubmissionState2.stopped;

      if (this.state != stopping && this.state != stopped) {
        this.state = stopping;
        this.fetchRequest.cancel();
        return true;
      }
    }
  }, {
    key: "prepareHeadersForRequest",
    value: function prepareHeadersForRequest(headers, request) {
      if (!request.isIdempotent) {
        var token = getCookieValue(getMetaContent("csrf-param")) || getMetaContent("csrf-token");

        if (token) {
          headers["X-CSRF-Token"] = token;
        }

        headers["Accept"] = [StreamMessage.contentType, headers["Accept"]].join(", ");
      }
    }
  }, {
    key: "requestStarted",
    value: function requestStarted(request) {
      this.state = FormSubmissionState.waiting;
      dispatch("turbo:submit-start", {
        target: this.formElement,
        detail: {
          formSubmission: this
        }
      });
      this.delegate.formSubmissionStarted(this);
    }
  }, {
    key: "requestPreventedHandlingResponse",
    value: function requestPreventedHandlingResponse(request, response) {
      this.result = {
        success: response.succeeded,
        fetchResponse: response
      };
    }
  }, {
    key: "requestSucceededWithResponse",
    value: function requestSucceededWithResponse(request, response) {
      if (response.clientError || response.serverError) {
        this.delegate.formSubmissionFailedWithResponse(this, response);
      } else if (this.requestMustRedirect(request) && responseSucceededWithoutRedirect(response)) {
        var error = new Error("Form responses must redirect to another location");
        this.delegate.formSubmissionErrored(this, error);
      } else {
        this.state = FormSubmissionState.receiving;
        this.result = {
          success: true,
          fetchResponse: response
        };
        this.delegate.formSubmissionSucceededWithResponse(this, response);
      }
    }
  }, {
    key: "requestFailedWithResponse",
    value: function requestFailedWithResponse(request, response) {
      this.result = {
        success: false,
        fetchResponse: response
      };
      this.delegate.formSubmissionFailedWithResponse(this, response);
    }
  }, {
    key: "requestErrored",
    value: function requestErrored(request, error) {
      this.result = {
        success: false,
        error: error
      };
      this.delegate.formSubmissionErrored(this, error);
    }
  }, {
    key: "requestFinished",
    value: function requestFinished(request) {
      this.state = FormSubmissionState.stopped;
      dispatch("turbo:submit-end", {
        target: this.formElement,
        detail: Object.assign({
          formSubmission: this
        }, this.result)
      });
      this.delegate.formSubmissionFinished(this);
    }
  }, {
    key: "requestMustRedirect",
    value: function requestMustRedirect(request) {
      return !request.isIdempotent && this.mustRedirect;
    }
  }]);

  return FormSubmission;
}();

function buildFormData(formElement, submitter) {
  var formData = new FormData(formElement);
  var name = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("name");
  var value = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("value");

  if (name && formData.get(name) != value) {
    formData.append(name, value || "");
  }

  return formData;
}

function getCookieValue(cookieName) {
  if (cookieName != null) {
    var cookies = document.cookie ? document.cookie.split("; ") : [];
    var cookie = cookies.find(function (cookie) {
      return cookie.startsWith(cookieName);
    });

    if (cookie) {
      var value = cookie.split("=").slice(1).join("=");
      return value ? decodeURIComponent(value) : undefined;
    }
  }
}

function getMetaContent(name) {
  var element = document.querySelector("meta[name=\"".concat(name, "\"]"));
  return element && element.content;
}

function responseSucceededWithoutRedirect(response) {
  return response.statusCode == 200 && !response.redirected;
}

var Snapshot = /*#__PURE__*/function () {
  function Snapshot(element) {
    _classCallCheck(this, Snapshot);

    this.element = element;
  }

  _createClass(Snapshot, [{
    key: "children",
    get: function get() {
      return _toConsumableArray(this.element.children);
    }
  }, {
    key: "hasAnchor",
    value: function hasAnchor(anchor) {
      return this.getElementForAnchor(anchor) != null;
    }
  }, {
    key: "getElementForAnchor",
    value: function getElementForAnchor(anchor) {
      try {
        return this.element.querySelector("[id='".concat(anchor, "'], a[name='").concat(anchor, "']"));
      } catch (_a) {
        return null;
      }
    }
  }, {
    key: "firstAutofocusableElement",
    get: function get() {
      return this.element.querySelector("[autofocus]");
    }
  }, {
    key: "permanentElements",
    get: function get() {
      return _toConsumableArray(this.element.querySelectorAll("[id][data-turbo-permanent]"));
    }
  }, {
    key: "getPermanentElementById",
    value: function getPermanentElementById(id) {
      return this.element.querySelector("#".concat(id, "[data-turbo-permanent]"));
    }
  }, {
    key: "getPermanentElementsPresentInSnapshot",
    value: function getPermanentElementsPresentInSnapshot(snapshot) {
      return this.permanentElements.filter(function (_ref7) {
        var id = _ref7.id;
        return snapshot.getPermanentElementById(id);
      });
    }
  }]);

  return Snapshot;
}();

var FormInterceptor = /*#__PURE__*/function () {
  function FormInterceptor(delegate, element) {
    var _this3 = this;

    _classCallCheck(this, FormInterceptor);

    this.submitBubbled = function (event) {
      if (event.target instanceof HTMLFormElement) {
        var form = event.target;
        var submitter = event.submitter || undefined;

        if (_this3.delegate.shouldInterceptFormSubmission(form, submitter)) {
          event.preventDefault();
          event.stopImmediatePropagation();

          _this3.delegate.formSubmissionIntercepted(form, submitter);
        }
      }
    };

    this.delegate = delegate;
    this.element = element;
  }

  _createClass(FormInterceptor, [{
    key: "start",
    value: function start() {
      this.element.addEventListener("submit", this.submitBubbled);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.element.removeEventListener("submit", this.submitBubbled);
    }
  }]);

  return FormInterceptor;
}();

var View = /*#__PURE__*/function () {
  function View(delegate, element) {
    _classCallCheck(this, View);

    this.delegate = delegate;
    this.element = element;
  }

  _createClass(View, [{
    key: "scrollToAnchor",
    value: function scrollToAnchor(anchor) {
      var element = this.snapshot.getElementForAnchor(anchor);

      if (element) {
        this.scrollToElement(element);
      } else {
        this.scrollToPosition({
          x: 0,
          y: 0
        });
      }
    }
  }, {
    key: "scrollToElement",
    value: function scrollToElement(element) {
      element.scrollIntoView();
    }
  }, {
    key: "scrollToPosition",
    value: function scrollToPosition(_ref8) {
      var x = _ref8.x,
          y = _ref8.y;
      this.scrollRoot.scrollTo(x, y);
    }
  }, {
    key: "scrollRoot",
    get: function get() {
      return window;
    }
  }, {
    key: "render",
    value: function () {
      var _render = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(renderer) {
        var isPreview, shouldRender, snapshot;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!this.renderer) {
                  _context4.next = 2;
                  break;
                }

                throw new Error("rendering is already in progress");

              case 2:
                isPreview = renderer.isPreview, shouldRender = renderer.shouldRender, snapshot = renderer.newSnapshot;

                if (!shouldRender) {
                  _context4.next = 17;
                  break;
                }

                _context4.prev = 4;
                this.renderer = renderer;
                this.prepareToRenderSnapshot(renderer);
                this.delegate.viewWillRenderSnapshot(snapshot, isPreview);
                _context4.next = 10;
                return this.renderSnapshot(renderer);

              case 10:
                this.delegate.viewRenderedSnapshot(snapshot, isPreview);
                this.finishRenderingSnapshot(renderer);

              case 12:
                _context4.prev = 12;
                delete this.renderer;
                return _context4.finish(12);

              case 15:
                _context4.next = 18;
                break;

              case 17:
                this.invalidate();

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[4,, 12, 15]]);
      }));

      function render(_x2) {
        return _render.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "invalidate",
    value: function invalidate() {
      this.delegate.viewInvalidated();
    }
  }, {
    key: "prepareToRenderSnapshot",
    value: function prepareToRenderSnapshot(renderer) {
      this.markAsPreview(renderer.isPreview);
      renderer.prepareToRender();
    }
  }, {
    key: "markAsPreview",
    value: function markAsPreview(isPreview) {
      if (isPreview) {
        this.element.setAttribute("data-turbo-preview", "");
      } else {
        this.element.removeAttribute("data-turbo-preview");
      }
    }
  }, {
    key: "renderSnapshot",
    value: function () {
      var _renderSnapshot = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(renderer) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return renderer.render();

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function renderSnapshot(_x3) {
        return _renderSnapshot.apply(this, arguments);
      }

      return renderSnapshot;
    }()
  }, {
    key: "finishRenderingSnapshot",
    value: function finishRenderingSnapshot(renderer) {
      renderer.finishRendering();
    }
  }]);

  return View;
}();

var FrameView = /*#__PURE__*/function (_View) {
  _inherits(FrameView, _View);

  var _super2 = _createSuper(FrameView);

  function FrameView() {
    _classCallCheck(this, FrameView);

    return _super2.apply(this, arguments);
  }

  _createClass(FrameView, [{
    key: "invalidate",
    value: function invalidate() {
      this.element.innerHTML = "";
    }
  }, {
    key: "snapshot",
    get: function get() {
      return new Snapshot(this.element);
    }
  }]);

  return FrameView;
}(View);

var LinkInterceptor = /*#__PURE__*/function () {
  function LinkInterceptor(delegate, element) {
    var _this4 = this;

    _classCallCheck(this, LinkInterceptor);

    this.clickBubbled = function (event) {
      if (_this4.respondsToEventTarget(event.target)) {
        _this4.clickEvent = event;
      } else {
        delete _this4.clickEvent;
      }
    };

    this.linkClicked = function (event) {
      if (_this4.clickEvent && _this4.respondsToEventTarget(event.target) && event.target instanceof Element) {
        if (_this4.delegate.shouldInterceptLinkClick(event.target, event.detail.url)) {
          _this4.clickEvent.preventDefault();

          event.preventDefault();

          _this4.delegate.linkClickIntercepted(event.target, event.detail.url);
        }
      }

      delete _this4.clickEvent;
    };

    this.willVisit = function () {
      delete _this4.clickEvent;
    };

    this.delegate = delegate;
    this.element = element;
  }

  _createClass(LinkInterceptor, [{
    key: "start",
    value: function start() {
      this.element.addEventListener("click", this.clickBubbled);
      document.addEventListener("turbo:click", this.linkClicked);
      document.addEventListener("turbo:before-visit", this.willVisit);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.element.removeEventListener("click", this.clickBubbled);
      document.removeEventListener("turbo:click", this.linkClicked);
      document.removeEventListener("turbo:before-visit", this.willVisit);
    }
  }, {
    key: "respondsToEventTarget",
    value: function respondsToEventTarget(target) {
      var element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
      return element && element.closest("turbo-frame, html") == this.element;
    }
  }]);

  return LinkInterceptor;
}();

var Renderer = /*#__PURE__*/function () {
  function Renderer(currentSnapshot, newSnapshot, isPreview) {
    var _this5 = this;

    _classCallCheck(this, Renderer);

    this.currentSnapshot = currentSnapshot;
    this.newSnapshot = newSnapshot;
    this.isPreview = isPreview;
    this.promise = new Promise(function (resolve, reject) {
      return _this5.resolvingFunctions = {
        resolve: resolve,
        reject: reject
      };
    });
  }

  _createClass(Renderer, [{
    key: "shouldRender",
    get: function get() {
      return true;
    }
  }, {
    key: "prepareToRender",
    value: function prepareToRender() {
      return;
    }
  }, {
    key: "finishRendering",
    value: function finishRendering() {
      if (this.resolvingFunctions) {
        this.resolvingFunctions.resolve();
        delete this.resolvingFunctions;
      }
    }
  }, {
    key: "createScriptElement",
    value: function createScriptElement(element) {
      if (element.getAttribute("data-turbo-eval") == "false") {
        return element;
      } else {
        var createdScriptElement = document.createElement("script");
        createdScriptElement.textContent = element.textContent;
        createdScriptElement.async = false;
        copyElementAttributes(createdScriptElement, element);
        return createdScriptElement;
      }
    }
  }, {
    key: "preservingPermanentElements",
    value: function preservingPermanentElements(callback) {
      var placeholders = relocatePermanentElements(this.currentSnapshot, this.newSnapshot);
      callback();
      replacePlaceholderElementsWithClonedPermanentElements(placeholders);
    }
  }, {
    key: "focusFirstAutofocusableElement",
    value: function focusFirstAutofocusableElement() {
      var element = this.newSnapshot.firstAutofocusableElement;

      if (elementIsFocusable(element)) {
        element.focus();
      }
    }
  }, {
    key: "currentElement",
    get: function get() {
      return this.currentSnapshot.element;
    }
  }, {
    key: "newElement",
    get: function get() {
      return this.newSnapshot.element;
    }
  }]);

  return Renderer;
}();

function replaceElementWithElement(fromElement, toElement) {
  var parentElement = fromElement.parentElement;

  if (parentElement) {
    return parentElement.replaceChild(toElement, fromElement);
  }
}

function copyElementAttributes(destinationElement, sourceElement) {
  for (var _i2 = 0, _arr2 = _toConsumableArray(sourceElement.attributes); _i2 < _arr2.length; _i2++) {
    var _ref10 = _arr2[_i2];
    var name = _ref10.name;
    var value = _ref10.value;
    destinationElement.setAttribute(name, value);
  }
}

function createPlaceholderForPermanentElement(permanentElement) {
  var element = document.createElement("meta");
  element.setAttribute("name", "turbo-permanent-placeholder");
  element.setAttribute("content", permanentElement.id);
  return {
    element: element,
    permanentElement: permanentElement
  };
}

function replacePlaceholderElementsWithClonedPermanentElements(placeholders) {
  var _iterator3 = _createForOfIteratorHelper(placeholders),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _ref12 = _step3.value;
      var element = _ref12.element;
      var permanentElement = _ref12.permanentElement;
      var clonedElement = permanentElement.cloneNode(true);
      replaceElementWithElement(element, clonedElement);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

function relocatePermanentElements(currentSnapshot, newSnapshot) {
  return currentSnapshot.getPermanentElementsPresentInSnapshot(newSnapshot).reduce(function (placeholders, permanentElement) {
    var newElement = newSnapshot.getPermanentElementById(permanentElement.id);

    if (newElement) {
      var placeholder = createPlaceholderForPermanentElement(permanentElement);
      replaceElementWithElement(permanentElement, placeholder.element);
      replaceElementWithElement(newElement, permanentElement);
      return [].concat(_toConsumableArray(placeholders), [placeholder]);
    } else {
      return placeholders;
    }
  }, []);
}

function elementIsFocusable(element) {
  return element && typeof element.focus == "function";
}

var FrameRenderer = /*#__PURE__*/function (_Renderer) {
  _inherits(FrameRenderer, _Renderer);

  var _super3 = _createSuper(FrameRenderer);

  function FrameRenderer() {
    _classCallCheck(this, FrameRenderer);

    return _super3.apply(this, arguments);
  }

  _createClass(FrameRenderer, [{
    key: "shouldRender",
    get: function get() {
      return true;
    }
  }, {
    key: "render",
    value: function () {
      var _render2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _this6 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return nextAnimationFrame();

              case 2:
                this.preservingPermanentElements(function () {
                  _this6.loadFrameElement();
                });
                this.scrollFrameIntoView();
                _context6.next = 6;
                return nextAnimationFrame();

              case 6:
                this.focusFirstAutofocusableElement();

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function render() {
        return _render2.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "loadFrameElement",
    value: function loadFrameElement() {
      var _a;

      var destinationRange = document.createRange();
      destinationRange.selectNodeContents(this.currentElement);
      destinationRange.deleteContents();
      var frameElement = this.newElement;
      var sourceRange = (_a = frameElement.ownerDocument) === null || _a === void 0 ? void 0 : _a.createRange();

      if (sourceRange) {
        sourceRange.selectNodeContents(frameElement);
        this.currentElement.appendChild(sourceRange.extractContents());
      }
    }
  }, {
    key: "scrollFrameIntoView",
    value: function scrollFrameIntoView() {
      if (this.currentElement.autoscroll || this.newElement.autoscroll) {
        var element = this.currentElement.firstElementChild;
        var block = readScrollLogicalPosition(this.currentElement.getAttribute("data-autoscroll-block"), "end");

        if (element) {
          element.scrollIntoView({
            block: block
          });
          return true;
        }
      }

      return false;
    }
  }]);

  return FrameRenderer;
}(Renderer);

function readScrollLogicalPosition(value, defaultValue) {
  if (value == "end" || value == "start" || value == "center" || value == "nearest") {
    return value;
  } else {
    return defaultValue;
  }
}

var FrameController = /*#__PURE__*/function () {
  function FrameController(element) {
    _classCallCheck(this, FrameController);

    this.resolveVisitPromise = function () {};

    this.element = element;
    this.view = new FrameView(this, this.element);
    this.appearanceObserver = new AppearanceObserver(this, this.element);
    this.linkInterceptor = new LinkInterceptor(this, this.element);
    this.formInterceptor = new FormInterceptor(this, this.element);
  }

  _createClass(FrameController, [{
    key: "connect",
    value: function connect() {
      if (this.loadingStyle == FrameLoadingStyle.lazy) {
        this.appearanceObserver.start();
      }

      this.linkInterceptor.start();
      this.formInterceptor.start();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.appearanceObserver.stop();
      this.linkInterceptor.stop();
      this.formInterceptor.stop();
    }
  }, {
    key: "sourceURLChanged",
    value: function sourceURLChanged() {
      if (this.loadingStyle == FrameLoadingStyle.eager) {
        this.loadSourceURL();
      }
    }
  }, {
    key: "loadingStyleChanged",
    value: function loadingStyleChanged() {
      if (this.loadingStyle == FrameLoadingStyle.lazy) {
        this.appearanceObserver.start();
      } else {
        this.appearanceObserver.stop();
        this.loadSourceURL();
      }
    }
  }, {
    key: "loadSourceURL",
    value: function () {
      var _loadSourceURL = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!(this.isActive && this.sourceURL && this.sourceURL != this.loadingURL)) {
                  _context7.next = 10;
                  break;
                }

                _context7.prev = 1;
                this.loadingURL = this.sourceURL;
                this.element.loaded = this.visit(this.sourceURL);
                this.appearanceObserver.stop();
                _context7.next = 7;
                return this.element.loaded;

              case 7:
                _context7.prev = 7;
                delete this.loadingURL;
                return _context7.finish(7);

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1,, 7, 10]]);
      }));

      function loadSourceURL() {
        return _loadSourceURL.apply(this, arguments);
      }

      return loadSourceURL;
    }()
  }, {
    key: "loadResponse",
    value: function () {
      var _loadResponse = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(response) {
        var html, _parseHTMLDocument, body, snapshot, renderer;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return response.responseHTML;

              case 3:
                html = _context8.sent;

                if (!html) {
                  _context8.next = 14;
                  break;
                }

                _parseHTMLDocument = parseHTMLDocument(html), body = _parseHTMLDocument.body;
                _context8.t0 = Snapshot;
                _context8.next = 9;
                return this.extractForeignFrameElement(body);

              case 9:
                _context8.t1 = _context8.sent;
                snapshot = new _context8.t0(_context8.t1);
                renderer = new FrameRenderer(this.view.snapshot, snapshot, false);
                _context8.next = 14;
                return this.view.render(renderer);

              case 14:
                _context8.next = 20;
                break;

              case 16:
                _context8.prev = 16;
                _context8.t2 = _context8["catch"](0);
                console.error(_context8.t2);
                this.view.invalidate();

              case 20:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 16]]);
      }));

      function loadResponse(_x4) {
        return _loadResponse.apply(this, arguments);
      }

      return loadResponse;
    }()
  }, {
    key: "elementAppearedInViewport",
    value: function elementAppearedInViewport(element) {
      this.loadSourceURL();
    }
  }, {
    key: "shouldInterceptLinkClick",
    value: function shouldInterceptLinkClick(element, url) {
      return this.shouldInterceptNavigation(element);
    }
  }, {
    key: "linkClickIntercepted",
    value: function linkClickIntercepted(element, url) {
      this.navigateFrame(element, url);
    }
  }, {
    key: "shouldInterceptFormSubmission",
    value: function shouldInterceptFormSubmission(element) {
      return this.shouldInterceptNavigation(element);
    }
  }, {
    key: "formSubmissionIntercepted",
    value: function formSubmissionIntercepted(element, submitter) {
      if (this.formSubmission) {
        this.formSubmission.stop();
      }

      this.formSubmission = new FormSubmission(this, element, submitter);

      if (this.formSubmission.fetchRequest.isIdempotent) {
        this.navigateFrame(element, this.formSubmission.fetchRequest.url.href);
      } else {
        this.formSubmission.start();
      }
    }
  }, {
    key: "prepareHeadersForRequest",
    value: function prepareHeadersForRequest(headers, request) {
      headers["Turbo-Frame"] = this.id;
    }
  }, {
    key: "requestStarted",
    value: function requestStarted(request) {
      this.element.setAttribute("busy", "");
    }
  }, {
    key: "requestPreventedHandlingResponse",
    value: function requestPreventedHandlingResponse(request, response) {
      this.resolveVisitPromise();
    }
  }, {
    key: "requestSucceededWithResponse",
    value: function () {
      var _requestSucceededWithResponse = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(request, response) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.loadResponse(response);

              case 2:
                this.resolveVisitPromise();

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function requestSucceededWithResponse(_x5, _x6) {
        return _requestSucceededWithResponse.apply(this, arguments);
      }

      return requestSucceededWithResponse;
    }()
  }, {
    key: "requestFailedWithResponse",
    value: function requestFailedWithResponse(request, response) {
      console.error(response);
      this.resolveVisitPromise();
    }
  }, {
    key: "requestErrored",
    value: function requestErrored(request, error) {
      console.error(error);
      this.resolveVisitPromise();
    }
  }, {
    key: "requestFinished",
    value: function requestFinished(request) {
      this.element.removeAttribute("busy");
    }
  }, {
    key: "formSubmissionStarted",
    value: function formSubmissionStarted(formSubmission) {}
  }, {
    key: "formSubmissionSucceededWithResponse",
    value: function formSubmissionSucceededWithResponse(formSubmission, response) {
      var frame = this.findFrameElement(formSubmission.formElement);
      frame.delegate.loadResponse(response);
    }
  }, {
    key: "formSubmissionFailedWithResponse",
    value: function formSubmissionFailedWithResponse(formSubmission, fetchResponse) {
      this.element.delegate.loadResponse(fetchResponse);
    }
  }, {
    key: "formSubmissionErrored",
    value: function formSubmissionErrored(formSubmission, error) {}
  }, {
    key: "formSubmissionFinished",
    value: function formSubmissionFinished(formSubmission) {}
  }, {
    key: "viewWillRenderSnapshot",
    value: function viewWillRenderSnapshot(snapshot, isPreview) {}
  }, {
    key: "viewRenderedSnapshot",
    value: function viewRenderedSnapshot(snapshot, isPreview) {}
  }, {
    key: "viewInvalidated",
    value: function viewInvalidated() {}
  }, {
    key: "visit",
    value: function () {
      var _visit = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(url) {
        var _this7 = this;

        var request;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                request = new FetchRequest(this, FetchMethod.get, expandURL(url));
                return _context10.abrupt("return", new Promise(function (resolve) {
                  _this7.resolveVisitPromise = function () {
                    _this7.resolveVisitPromise = function () {};

                    resolve();
                  };

                  request.perform();
                }));

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function visit(_x7) {
        return _visit.apply(this, arguments);
      }

      return visit;
    }()
  }, {
    key: "navigateFrame",
    value: function navigateFrame(element, url) {
      var frame = this.findFrameElement(element);
      frame.src = url;
    }
  }, {
    key: "findFrameElement",
    value: function findFrameElement(element) {
      var _a;

      var id = element.getAttribute("data-turbo-frame") || this.element.getAttribute("target");
      return (_a = getFrameElementById(id)) !== null && _a !== void 0 ? _a : this.element;
    }
  }, {
    key: "extractForeignFrameElement",
    value: function () {
      var _extractForeignFrameElement = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(container) {
        var element, id;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                id = CSS.escape(this.id);

                if (!(element = activateElement(container.querySelector("turbo-frame#".concat(id))))) {
                  _context11.next = 3;
                  break;
                }

                return _context11.abrupt("return", element);

              case 3:
                if (!(element = activateElement(container.querySelector("turbo-frame[src][recurse~=".concat(id, "]"))))) {
                  _context11.next = 9;
                  break;
                }

                _context11.next = 6;
                return element.loaded;

              case 6:
                _context11.next = 8;
                return this.extractForeignFrameElement(element);

              case 8:
                return _context11.abrupt("return", _context11.sent);

              case 9:
                console.error("Response has no matching <turbo-frame id=\"".concat(id, "\"> element"));
                return _context11.abrupt("return", new FrameElement());

              case 11:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function extractForeignFrameElement(_x8) {
        return _extractForeignFrameElement.apply(this, arguments);
      }

      return extractForeignFrameElement;
    }()
  }, {
    key: "shouldInterceptNavigation",
    value: function shouldInterceptNavigation(element) {
      var id = element.getAttribute("data-turbo-frame") || this.element.getAttribute("target");

      if (!this.enabled || id == "_top") {
        return false;
      }

      if (id) {
        var frameElement = getFrameElementById(id);

        if (frameElement) {
          return !frameElement.disabled;
        }
      }

      return true;
    }
  }, {
    key: "id",
    get: function get() {
      return this.element.id;
    }
  }, {
    key: "enabled",
    get: function get() {
      return !this.element.disabled;
    }
  }, {
    key: "sourceURL",
    get: function get() {
      return this.element.src;
    }
  }, {
    key: "loadingStyle",
    get: function get() {
      return this.element.loading;
    }
  }, {
    key: "isLoading",
    get: function get() {
      return this.formSubmission !== undefined || this.loadingURL !== undefined;
    }
  }, {
    key: "isActive",
    get: function get() {
      return this.element.isActive;
    }
  }]);

  return FrameController;
}();

function getFrameElementById(id) {
  if (id != null) {
    var element = document.getElementById(id);

    if (element instanceof FrameElement) {
      return element;
    }
  }
}

function activateElement(element) {
  if (element && element.ownerDocument !== document) {
    element = document.importNode(element, true);
  }

  if (element instanceof FrameElement) {
    return element;
  }
}

var StreamActions = {
  append: function append() {
    var _a;

    (_a = this.targetElement) === null || _a === void 0 ? void 0 : _a.append(this.templateContent);
  },
  prepend: function prepend() {
    var _a;

    (_a = this.targetElement) === null || _a === void 0 ? void 0 : _a.prepend(this.templateContent);
  },
  remove: function remove() {
    var _a;

    (_a = this.targetElement) === null || _a === void 0 ? void 0 : _a.remove();
  },
  replace: function replace() {
    var _a;

    (_a = this.targetElement) === null || _a === void 0 ? void 0 : _a.replaceWith(this.templateContent);
  },
  update: function update() {
    if (this.targetElement) {
      this.targetElement.innerHTML = "";
      this.targetElement.append(this.templateContent);
    }
  }
};

var StreamElement = /*#__PURE__*/function (_HTMLElement2) {
  _inherits(StreamElement, _HTMLElement2);

  var _super4 = _createSuper(StreamElement);

  function StreamElement() {
    _classCallCheck(this, StreamElement);

    return _super4.apply(this, arguments);
  }

  _createClass(StreamElement, [{
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                _context12.next = 3;
                return this.render();

              case 3:
                _context12.next = 8;
                break;

              case 5:
                _context12.prev = 5;
                _context12.t0 = _context12["catch"](0);
                console.error(_context12.t0);

              case 8:
                _context12.prev = 8;
                this.disconnect();
                return _context12.finish(8);

              case 11:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[0, 5, 8, 11]]);
      }));

      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }

      return connectedCallback;
    }()
  }, {
    key: "render",
    value: function () {
      var _render3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14() {
        var _this8 = this;

        var _a;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                return _context14.abrupt("return", (_a = this.renderPromise) !== null && _a !== void 0 ? _a : this.renderPromise = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
                    while (1) {
                      switch (_context13.prev = _context13.next) {
                        case 0:
                          if (!_this8.dispatchEvent(_this8.beforeRenderEvent)) {
                            _context13.next = 4;
                            break;
                          }

                          _context13.next = 3;
                          return nextAnimationFrame();

                        case 3:
                          _this8.performAction();

                        case 4:
                        case "end":
                          return _context13.stop();
                      }
                    }
                  }, _callee13);
                }))());

              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function render() {
        return _render3.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "disconnect",
    value: function disconnect() {
      try {
        this.remove();
      } catch (_a) {}
    }
  }, {
    key: "performAction",
    get: function get() {
      if (this.action) {
        var actionFunction = StreamActions[this.action];

        if (actionFunction) {
          return actionFunction;
        }

        this.raise("unknown action");
      }

      this.raise("action attribute is missing");
    }
  }, {
    key: "targetElement",
    get: function get() {
      var _a;

      if (this.target) {
        return (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.getElementById(this.target);
      }

      this.raise("target attribute is missing");
    }
  }, {
    key: "templateContent",
    get: function get() {
      return this.templateElement.content;
    }
  }, {
    key: "templateElement",
    get: function get() {
      if (this.firstElementChild instanceof HTMLTemplateElement) {
        return this.firstElementChild;
      }

      this.raise("first child element must be a <template> element");
    }
  }, {
    key: "action",
    get: function get() {
      return this.getAttribute("action");
    }
  }, {
    key: "target",
    get: function get() {
      return this.getAttribute("target");
    }
  }, {
    key: "raise",
    value: function raise(message) {
      throw new Error("".concat(this.description, ": ").concat(message));
    }
  }, {
    key: "description",
    get: function get() {
      var _a, _b;

      return (_b = ((_a = this.outerHTML.match(/<[^>]+>/)) !== null && _a !== void 0 ? _a : [])[0]) !== null && _b !== void 0 ? _b : "<turbo-stream>";
    }
  }, {
    key: "beforeRenderEvent",
    get: function get() {
      return new CustomEvent("turbo:before-stream-render", {
        bubbles: true,
        cancelable: true
      });
    }
  }]);

  return StreamElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

FrameElement.delegateConstructor = FrameController;
customElements.define("turbo-frame", FrameElement);
customElements.define("turbo-stream", StreamElement);

(function () {
  var element = document.currentScript;
  if (!element) return;
  if (element.hasAttribute("data-turbo-suppress-warning")) return;

  while (element = element.parentElement) {
    if (element == document.body) {
      return console.warn(unindent(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        You are loading Turbo from a <script> element inside the <body> element. This is probably not what you meant to do!\n\n        Load your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\n        For more information, see: https://turbo.hotwire.dev/handbook/building#working-with-script-elements\n\n        \u2014\u2014\n        Suppress this warning by adding a \"data-turbo-suppress-warning\" attribute to: %s\n      "]))), element.outerHTML);
    }
  }
})();

var ProgressBar = /*#__PURE__*/function () {
  function ProgressBar() {
    var _this9 = this;

    _classCallCheck(this, ProgressBar);

    this.hiding = false;
    this.value = 0;
    this.visible = false;

    this.trickle = function () {
      _this9.setValue(_this9.value + Math.random() / 100);
    };

    this.stylesheetElement = this.createStylesheetElement();
    this.progressElement = this.createProgressElement();
    this.installStylesheetElement();
    this.setValue(0);
  }

  _createClass(ProgressBar, [{
    key: "show",
    value: function show() {
      if (!this.visible) {
        this.visible = true;
        this.installProgressElement();
        this.startTrickling();
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this10 = this;

      if (this.visible && !this.hiding) {
        this.hiding = true;
        this.fadeProgressElement(function () {
          _this10.uninstallProgressElement();

          _this10.stopTrickling();

          _this10.visible = false;
          _this10.hiding = false;
        });
      }
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.value = value;
      this.refresh();
    }
  }, {
    key: "installStylesheetElement",
    value: function installStylesheetElement() {
      document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
    }
  }, {
    key: "installProgressElement",
    value: function installProgressElement() {
      this.progressElement.style.width = "0";
      this.progressElement.style.opacity = "1";
      document.documentElement.insertBefore(this.progressElement, document.body);
      this.refresh();
    }
  }, {
    key: "fadeProgressElement",
    value: function fadeProgressElement(callback) {
      this.progressElement.style.opacity = "0";
      setTimeout(callback, ProgressBar.animationDuration * 1.5);
    }
  }, {
    key: "uninstallProgressElement",
    value: function uninstallProgressElement() {
      if (this.progressElement.parentNode) {
        document.documentElement.removeChild(this.progressElement);
      }
    }
  }, {
    key: "startTrickling",
    value: function startTrickling() {
      if (!this.trickleInterval) {
        this.trickleInterval = window.setInterval(this.trickle, ProgressBar.animationDuration);
      }
    }
  }, {
    key: "stopTrickling",
    value: function stopTrickling() {
      window.clearInterval(this.trickleInterval);
      delete this.trickleInterval;
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var _this11 = this;

      requestAnimationFrame(function () {
        _this11.progressElement.style.width = "".concat(10 + _this11.value * 90, "%");
      });
    }
  }, {
    key: "createStylesheetElement",
    value: function createStylesheetElement() {
      var element = document.createElement("style");
      element.type = "text/css";
      element.textContent = ProgressBar.defaultCSS;
      return element;
    }
  }, {
    key: "createProgressElement",
    value: function createProgressElement() {
      var element = document.createElement("div");
      element.className = "turbo-progress-bar";
      return element;
    }
  }], [{
    key: "defaultCSS",
    get: function get() {
      return unindent(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      .turbo-progress-bar {\n        position: fixed;\n        display: block;\n        top: 0;\n        left: 0;\n        height: 3px;\n        background: #0076ff;\n        z-index: 9999;\n        transition:\n          width ", "ms ease-out,\n          opacity ", "ms ", "ms ease-in;\n        transform: translate3d(0, 0, 0);\n      }\n    "])), ProgressBar.animationDuration, ProgressBar.animationDuration / 2, ProgressBar.animationDuration / 2);
    }
  }]);

  return ProgressBar;
}();

ProgressBar.animationDuration = 300;

var HeadSnapshot = /*#__PURE__*/function (_Snapshot) {
  _inherits(HeadSnapshot, _Snapshot);

  var _super5 = _createSuper(HeadSnapshot);

  function HeadSnapshot() {
    var _this12;

    _classCallCheck(this, HeadSnapshot);

    _this12 = _super5.apply(this, arguments);
    _this12.detailsByOuterHTML = _this12.children.reduce(function (result, element) {
      var outerHTML = element.outerHTML;
      var details = outerHTML in result ? result[outerHTML] : {
        type: elementType(element),
        tracked: elementIsTracked(element),
        elements: []
      };
      return Object.assign(Object.assign({}, result), _defineProperty({}, outerHTML, Object.assign(Object.assign({}, details), {
        elements: [].concat(_toConsumableArray(details.elements), [element])
      })));
    }, {});
    return _this12;
  }

  _createClass(HeadSnapshot, [{
    key: "trackedElementSignature",
    get: function get() {
      var _this13 = this;

      return Object.keys(this.detailsByOuterHTML).filter(function (outerHTML) {
        return _this13.detailsByOuterHTML[outerHTML].tracked;
      }).join("");
    }
  }, {
    key: "getScriptElementsNotInSnapshot",
    value: function getScriptElementsNotInSnapshot(snapshot) {
      return this.getElementsMatchingTypeNotInSnapshot("script", snapshot);
    }
  }, {
    key: "getStylesheetElementsNotInSnapshot",
    value: function getStylesheetElementsNotInSnapshot(snapshot) {
      return this.getElementsMatchingTypeNotInSnapshot("stylesheet", snapshot);
    }
  }, {
    key: "getElementsMatchingTypeNotInSnapshot",
    value: function getElementsMatchingTypeNotInSnapshot(matchedType, snapshot) {
      var _this14 = this;

      return Object.keys(this.detailsByOuterHTML).filter(function (outerHTML) {
        return !(outerHTML in snapshot.detailsByOuterHTML);
      }).map(function (outerHTML) {
        return _this14.detailsByOuterHTML[outerHTML];
      }).filter(function (_ref14) {
        var type = _ref14.type;
        return type == matchedType;
      }).map(function (_ref15) {
        var _ref15$elements = _slicedToArray(_ref15.elements, 1),
            element = _ref15$elements[0];

        return element;
      });
    }
  }, {
    key: "provisionalElements",
    get: function get() {
      var _this15 = this;

      return Object.keys(this.detailsByOuterHTML).reduce(function (result, outerHTML) {
        var _this15$detailsByOute = _this15.detailsByOuterHTML[outerHTML],
            type = _this15$detailsByOute.type,
            tracked = _this15$detailsByOute.tracked,
            elements = _this15$detailsByOute.elements;

        if (type == null && !tracked) {
          return [].concat(_toConsumableArray(result), _toConsumableArray(elements));
        } else if (elements.length > 1) {
          return [].concat(_toConsumableArray(result), _toConsumableArray(elements.slice(1)));
        } else {
          return result;
        }
      }, []);
    }
  }, {
    key: "getMetaValue",
    value: function getMetaValue(name) {
      var element = this.findMetaElementByName(name);
      return element ? element.getAttribute("content") : null;
    }
  }, {
    key: "findMetaElementByName",
    value: function findMetaElementByName(name) {
      var _this16 = this;

      return Object.keys(this.detailsByOuterHTML).reduce(function (result, outerHTML) {
        var _this16$detailsByOute = _slicedToArray(_this16.detailsByOuterHTML[outerHTML].elements, 1),
            element = _this16$detailsByOute[0];

        return elementIsMetaElementWithName(element, name) ? element : result;
      }, undefined);
    }
  }]);

  return HeadSnapshot;
}(Snapshot);

function elementType(element) {
  if (elementIsScript(element)) {
    return "script";
  } else if (elementIsStylesheet(element)) {
    return "stylesheet";
  }
}

function elementIsTracked(element) {
  return element.getAttribute("data-turbo-track") == "reload";
}

function elementIsScript(element) {
  var tagName = element.tagName.toLowerCase();
  return tagName == "script";
}

function elementIsStylesheet(element) {
  var tagName = element.tagName.toLowerCase();
  return tagName == "style" || tagName == "link" && element.getAttribute("rel") == "stylesheet";
}

function elementIsMetaElementWithName(element, name) {
  var tagName = element.tagName.toLowerCase();
  return tagName == "meta" && element.getAttribute("name") == name;
}

var PageSnapshot = /*#__PURE__*/function (_Snapshot2) {
  _inherits(PageSnapshot, _Snapshot2);

  var _super6 = _createSuper(PageSnapshot);

  function PageSnapshot(element, headSnapshot) {
    var _this17;

    _classCallCheck(this, PageSnapshot);

    _this17 = _super6.call(this, element);
    _this17.headSnapshot = headSnapshot;
    return _this17;
  }

  _createClass(PageSnapshot, [{
    key: "clone",
    value: function clone() {
      return new PageSnapshot(this.element.cloneNode(true), this.headSnapshot);
    }
  }, {
    key: "headElement",
    get: function get() {
      return this.headSnapshot.element;
    }
  }, {
    key: "rootLocation",
    get: function get() {
      var _a;

      var root = (_a = this.getSetting("root")) !== null && _a !== void 0 ? _a : "/";
      return expandURL(root);
    }
  }, {
    key: "cacheControlValue",
    get: function get() {
      return this.getSetting("cache-control");
    }
  }, {
    key: "isPreviewable",
    get: function get() {
      return this.cacheControlValue != "no-preview";
    }
  }, {
    key: "isCacheable",
    get: function get() {
      return this.cacheControlValue != "no-cache";
    }
  }, {
    key: "isVisitable",
    get: function get() {
      return this.getSetting("visit-control") != "reload";
    }
  }, {
    key: "getSetting",
    value: function getSetting(name) {
      return this.headSnapshot.getMetaValue("turbo-".concat(name));
    }
  }], [{
    key: "fromHTMLString",
    value: function fromHTMLString() {
      var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      return this.fromDocument(parseHTMLDocument(html));
    }
  }, {
    key: "fromElement",
    value: function fromElement(element) {
      return this.fromDocument(element.ownerDocument);
    }
  }, {
    key: "fromDocument",
    value: function fromDocument(_ref16) {
      var head = _ref16.head,
          body = _ref16.body;
      return new this(body, new HeadSnapshot(head));
    }
  }]);

  return PageSnapshot;
}(Snapshot);

var TimingMetric;

(function (TimingMetric) {
  TimingMetric["visitStart"] = "visitStart";
  TimingMetric["requestStart"] = "requestStart";
  TimingMetric["requestEnd"] = "requestEnd";
  TimingMetric["visitEnd"] = "visitEnd";
})(TimingMetric || (TimingMetric = {}));

var VisitState;

(function (VisitState) {
  VisitState["initialized"] = "initialized";
  VisitState["started"] = "started";
  VisitState["canceled"] = "canceled";
  VisitState["failed"] = "failed";
  VisitState["completed"] = "completed";
})(VisitState || (VisitState = {}));

var defaultOptions = {
  action: "advance",
  historyChanged: false
};
var SystemStatusCode;

(function (SystemStatusCode) {
  SystemStatusCode[SystemStatusCode["networkFailure"] = 0] = "networkFailure";
  SystemStatusCode[SystemStatusCode["timeoutFailure"] = -1] = "timeoutFailure";
  SystemStatusCode[SystemStatusCode["contentTypeMismatch"] = -2] = "contentTypeMismatch";
})(SystemStatusCode || (SystemStatusCode = {}));

var Visit = /*#__PURE__*/function () {
  function Visit(delegate, location, restorationIdentifier) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Visit);

    this.identifier = uuid();
    this.timingMetrics = {};
    this.followedRedirect = false;
    this.historyChanged = false;
    this.scrolled = false;
    this.snapshotCached = false;
    this.state = VisitState.initialized;
    this.delegate = delegate;
    this.location = location;
    this.restorationIdentifier = restorationIdentifier || uuid();

    var _Object$assign2 = Object.assign(Object.assign({}, defaultOptions), options),
        action = _Object$assign2.action,
        historyChanged = _Object$assign2.historyChanged,
        referrer = _Object$assign2.referrer,
        snapshotHTML = _Object$assign2.snapshotHTML,
        response = _Object$assign2.response;

    this.action = action;
    this.historyChanged = historyChanged;
    this.referrer = referrer;
    this.snapshotHTML = snapshotHTML;
    this.response = response;
  }

  _createClass(Visit, [{
    key: "adapter",
    get: function get() {
      return this.delegate.adapter;
    }
  }, {
    key: "view",
    get: function get() {
      return this.delegate.view;
    }
  }, {
    key: "history",
    get: function get() {
      return this.delegate.history;
    }
  }, {
    key: "restorationData",
    get: function get() {
      return this.history.getRestorationDataForIdentifier(this.restorationIdentifier);
    }
  }, {
    key: "start",
    value: function start() {
      if (this.state == VisitState.initialized) {
        this.recordTimingMetric(TimingMetric.visitStart);
        this.state = VisitState.started;
        this.adapter.visitStarted(this);
        this.delegate.visitStarted(this);
      }
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (this.state == VisitState.started) {
        if (this.request) {
          this.request.cancel();
        }

        this.cancelRender();
        this.state = VisitState.canceled;
      }
    }
  }, {
    key: "complete",
    value: function complete() {
      if (this.state == VisitState.started) {
        this.recordTimingMetric(TimingMetric.visitEnd);
        this.state = VisitState.completed;
        this.adapter.visitCompleted(this);
        this.delegate.visitCompleted(this);
      }
    }
  }, {
    key: "fail",
    value: function fail() {
      if (this.state == VisitState.started) {
        this.state = VisitState.failed;
        this.adapter.visitFailed(this);
      }
    }
  }, {
    key: "changeHistory",
    value: function changeHistory() {
      var _a;

      if (!this.historyChanged) {
        var actionForHistory = this.location.href === ((_a = this.referrer) === null || _a === void 0 ? void 0 : _a.href) ? "replace" : this.action;
        var method = this.getHistoryMethodForAction(actionForHistory);
        this.history.update(method, this.location, this.restorationIdentifier);
        this.historyChanged = true;
      }
    }
  }, {
    key: "issueRequest",
    value: function issueRequest() {
      if (this.hasPreloadedResponse()) {
        this.simulateRequest();
      } else if (this.shouldIssueRequest() && !this.request) {
        this.request = new FetchRequest(this, FetchMethod.get, this.location);
        this.request.perform();
      }
    }
  }, {
    key: "simulateRequest",
    value: function simulateRequest() {
      if (this.response) {
        this.startRequest();
        this.recordResponse();
        this.finishRequest();
      }
    }
  }, {
    key: "startRequest",
    value: function startRequest() {
      this.recordTimingMetric(TimingMetric.requestStart);
      this.adapter.visitRequestStarted(this);
    }
  }, {
    key: "recordResponse",
    value: function recordResponse() {
      var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.response;
      this.response = response;

      if (response) {
        var statusCode = response.statusCode;

        if (isSuccessful(statusCode)) {
          this.adapter.visitRequestCompleted(this);
        } else {
          this.adapter.visitRequestFailedWithStatusCode(this, statusCode);
        }
      }
    }
  }, {
    key: "finishRequest",
    value: function finishRequest() {
      this.recordTimingMetric(TimingMetric.requestEnd);
      this.adapter.visitRequestFinished(this);
    }
  }, {
    key: "loadResponse",
    value: function loadResponse() {
      var _this18 = this;

      if (this.response) {
        var _this$response = this.response,
            statusCode = _this$response.statusCode,
            responseHTML = _this$response.responseHTML;
        this.render( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  _this18.cacheSnapshot();

                  if (!(isSuccessful(statusCode) && responseHTML != null)) {
                    _context15.next = 8;
                    break;
                  }

                  _context15.next = 4;
                  return _this18.view.renderPage(PageSnapshot.fromHTMLString(responseHTML));

                case 4:
                  _this18.adapter.visitRendered(_this18);

                  _this18.complete();

                  _context15.next = 12;
                  break;

                case 8:
                  _context15.next = 10;
                  return _this18.view.renderError(PageSnapshot.fromHTMLString(responseHTML));

                case 10:
                  _this18.adapter.visitRendered(_this18);

                  _this18.fail();

                case 12:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15);
        })));
      }
    }
  }, {
    key: "getCachedSnapshot",
    value: function getCachedSnapshot() {
      var snapshot = this.view.getCachedSnapshotForLocation(this.location) || this.getPreloadedSnapshot();

      if (snapshot && (!getAnchor(this.location) || snapshot.hasAnchor(getAnchor(this.location)))) {
        if (this.action == "restore" || snapshot.isPreviewable) {
          return snapshot;
        }
      }
    }
  }, {
    key: "getPreloadedSnapshot",
    value: function getPreloadedSnapshot() {
      if (this.snapshotHTML) {
        return PageSnapshot.fromHTMLString(this.snapshotHTML);
      }
    }
  }, {
    key: "hasCachedSnapshot",
    value: function hasCachedSnapshot() {
      return this.getCachedSnapshot() != null;
    }
  }, {
    key: "loadCachedSnapshot",
    value: function loadCachedSnapshot() {
      var _this19 = this;

      var snapshot = this.getCachedSnapshot();

      if (snapshot) {
        var isPreview = this.shouldIssueRequest();
        this.render( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  _this19.cacheSnapshot();

                  _context16.next = 3;
                  return _this19.view.renderPage(snapshot);

                case 3:
                  _this19.adapter.visitRendered(_this19);

                  if (!isPreview) {
                    _this19.complete();
                  }

                case 5:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16);
        })));
      }
    }
  }, {
    key: "followRedirect",
    value: function followRedirect() {
      if (this.redirectedToLocation && !this.followedRedirect) {
        this.location = this.redirectedToLocation;
        this.history.replace(this.redirectedToLocation, this.restorationIdentifier);
        this.followedRedirect = true;
      }
    }
  }, {
    key: "requestStarted",
    value: function requestStarted() {
      this.startRequest();
    }
  }, {
    key: "requestPreventedHandlingResponse",
    value: function requestPreventedHandlingResponse(request, response) {}
  }, {
    key: "requestSucceededWithResponse",
    value: function () {
      var _requestSucceededWithResponse2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17(request, response) {
        var responseHTML;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return response.responseHTML;

              case 2:
                responseHTML = _context17.sent;

                if (responseHTML == undefined) {
                  this.recordResponse({
                    statusCode: SystemStatusCode.contentTypeMismatch
                  });
                } else {
                  this.redirectedToLocation = response.redirected ? response.location : undefined;
                  this.recordResponse({
                    statusCode: response.statusCode,
                    responseHTML: responseHTML
                  });
                }

              case 4:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function requestSucceededWithResponse(_x9, _x10) {
        return _requestSucceededWithResponse2.apply(this, arguments);
      }

      return requestSucceededWithResponse;
    }()
  }, {
    key: "requestFailedWithResponse",
    value: function () {
      var _requestFailedWithResponse = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18(request, response) {
        var responseHTML;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return response.responseHTML;

              case 2:
                responseHTML = _context18.sent;

                if (responseHTML == undefined) {
                  this.recordResponse({
                    statusCode: SystemStatusCode.contentTypeMismatch
                  });
                } else {
                  this.recordResponse({
                    statusCode: response.statusCode,
                    responseHTML: responseHTML
                  });
                }

              case 4:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function requestFailedWithResponse(_x11, _x12) {
        return _requestFailedWithResponse.apply(this, arguments);
      }

      return requestFailedWithResponse;
    }()
  }, {
    key: "requestErrored",
    value: function requestErrored(request, error) {
      this.recordResponse({
        statusCode: SystemStatusCode.networkFailure
      });
    }
  }, {
    key: "requestFinished",
    value: function requestFinished() {
      this.finishRequest();
    }
  }, {
    key: "performScroll",
    value: function performScroll() {
      if (!this.scrolled) {
        if (this.action == "restore") {
          this.scrollToRestoredPosition() || this.scrollToTop();
        } else {
          this.scrollToAnchor() || this.scrollToTop();
        }

        this.scrolled = true;
      }
    }
  }, {
    key: "scrollToRestoredPosition",
    value: function scrollToRestoredPosition() {
      var scrollPosition = this.restorationData.scrollPosition;

      if (scrollPosition) {
        this.view.scrollToPosition(scrollPosition);
        return true;
      }
    }
  }, {
    key: "scrollToAnchor",
    value: function scrollToAnchor() {
      if (getAnchor(this.location) != null) {
        this.view.scrollToAnchor(getAnchor(this.location));
        return true;
      }
    }
  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      this.view.scrollToPosition({
        x: 0,
        y: 0
      });
    }
  }, {
    key: "recordTimingMetric",
    value: function recordTimingMetric(metric) {
      this.timingMetrics[metric] = new Date().getTime();
    }
  }, {
    key: "getTimingMetrics",
    value: function getTimingMetrics() {
      return Object.assign({}, this.timingMetrics);
    }
  }, {
    key: "getHistoryMethodForAction",
    value: function getHistoryMethodForAction(action) {
      switch (action) {
        case "replace":
          return history.replaceState;

        case "advance":
        case "restore":
          return history.pushState;
      }
    }
  }, {
    key: "hasPreloadedResponse",
    value: function hasPreloadedResponse() {
      return _typeof(this.response) == "object";
    }
  }, {
    key: "shouldIssueRequest",
    value: function shouldIssueRequest() {
      return this.action == "restore" ? !this.hasCachedSnapshot() : true;
    }
  }, {
    key: "cacheSnapshot",
    value: function cacheSnapshot() {
      if (!this.snapshotCached) {
        this.view.cacheSnapshot();
        this.snapshotCached = true;
      }
    }
  }, {
    key: "render",
    value: function () {
      var _render4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee19(callback) {
        var _this20 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                this.cancelRender();
                _context19.next = 3;
                return new Promise(function (resolve) {
                  _this20.frame = requestAnimationFrame(function () {
                    return resolve();
                  });
                });

              case 3:
                callback();
                delete this.frame;
                this.performScroll();

              case 6:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function render(_x13) {
        return _render4.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "cancelRender",
    value: function cancelRender() {
      if (this.frame) {
        cancelAnimationFrame(this.frame);
        delete this.frame;
      }
    }
  }]);

  return Visit;
}();

function isSuccessful(statusCode) {
  return statusCode >= 200 && statusCode < 300;
}

var BrowserAdapter = /*#__PURE__*/function () {
  function BrowserAdapter(session) {
    var _this21 = this;

    _classCallCheck(this, BrowserAdapter);

    this.progressBar = new ProgressBar();

    this.showProgressBar = function () {
      _this21.progressBar.show();
    };

    this.session = session;
  }

  _createClass(BrowserAdapter, [{
    key: "visitProposedToLocation",
    value: function visitProposedToLocation(location, options) {
      this.navigator.startVisit(location, uuid(), options);
    }
  }, {
    key: "visitStarted",
    value: function visitStarted(visit) {
      visit.issueRequest();
      visit.changeHistory();
      visit.loadCachedSnapshot();
    }
  }, {
    key: "visitRequestStarted",
    value: function visitRequestStarted(visit) {
      this.progressBar.setValue(0);

      if (visit.hasCachedSnapshot() || visit.action != "restore") {
        this.showProgressBarAfterDelay();
      } else {
        this.showProgressBar();
      }
    }
  }, {
    key: "visitRequestCompleted",
    value: function visitRequestCompleted(visit) {
      visit.loadResponse();
    }
  }, {
    key: "visitRequestFailedWithStatusCode",
    value: function visitRequestFailedWithStatusCode(visit, statusCode) {
      switch (statusCode) {
        case SystemStatusCode.networkFailure:
        case SystemStatusCode.timeoutFailure:
        case SystemStatusCode.contentTypeMismatch:
          return this.reload();

        default:
          return visit.loadResponse();
      }
    }
  }, {
    key: "visitRequestFinished",
    value: function visitRequestFinished(visit) {
      this.progressBar.setValue(1);
      this.hideProgressBar();
    }
  }, {
    key: "visitCompleted",
    value: function visitCompleted(visit) {
      visit.followRedirect();
    }
  }, {
    key: "pageInvalidated",
    value: function pageInvalidated() {
      this.reload();
    }
  }, {
    key: "visitFailed",
    value: function visitFailed(visit) {}
  }, {
    key: "visitRendered",
    value: function visitRendered(visit) {}
  }, {
    key: "showProgressBarAfterDelay",
    value: function showProgressBarAfterDelay() {
      this.progressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay);
    }
  }, {
    key: "hideProgressBar",
    value: function hideProgressBar() {
      this.progressBar.hide();

      if (this.progressBarTimeout != null) {
        window.clearTimeout(this.progressBarTimeout);
        delete this.progressBarTimeout;
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
  }, {
    key: "navigator",
    get: function get() {
      return this.session.navigator;
    }
  }]);

  return BrowserAdapter;
}();

var FormSubmitObserver = /*#__PURE__*/function () {
  function FormSubmitObserver(delegate) {
    var _this22 = this;

    _classCallCheck(this, FormSubmitObserver);

    this.started = false;

    this.submitCaptured = function () {
      removeEventListener("submit", _this22.submitBubbled, false);
      addEventListener("submit", _this22.submitBubbled, false);
    };

    this.submitBubbled = function (event) {
      if (!event.defaultPrevented) {
        var form = event.target instanceof HTMLFormElement ? event.target : undefined;
        var submitter = event.submitter || undefined;

        if (form) {
          var method = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formmethod")) || form.method;

          if (method != "dialog" && _this22.delegate.willSubmitForm(form, submitter)) {
            event.preventDefault();

            _this22.delegate.formSubmitted(form, submitter);
          }
        }
      }
    };

    this.delegate = delegate;
  }

  _createClass(FormSubmitObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        addEventListener("submit", this.submitCaptured, true);
        this.started = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        removeEventListener("submit", this.submitCaptured, true);
        this.started = false;
      }
    }
  }]);

  return FormSubmitObserver;
}();

var FrameRedirector = /*#__PURE__*/function () {
  function FrameRedirector(element) {
    _classCallCheck(this, FrameRedirector);

    this.element = element;
    this.linkInterceptor = new LinkInterceptor(this, element);
    this.formInterceptor = new FormInterceptor(this, element);
  }

  _createClass(FrameRedirector, [{
    key: "start",
    value: function start() {
      this.linkInterceptor.start();
      this.formInterceptor.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.linkInterceptor.stop();
      this.formInterceptor.stop();
    }
  }, {
    key: "shouldInterceptLinkClick",
    value: function shouldInterceptLinkClick(element, url) {
      return this.shouldRedirect(element);
    }
  }, {
    key: "linkClickIntercepted",
    value: function linkClickIntercepted(element, url) {
      var frame = this.findFrameElement(element);

      if (frame) {
        frame.src = url;
      }
    }
  }, {
    key: "shouldInterceptFormSubmission",
    value: function shouldInterceptFormSubmission(element, submitter) {
      return this.shouldRedirect(element, submitter);
    }
  }, {
    key: "formSubmissionIntercepted",
    value: function formSubmissionIntercepted(element, submitter) {
      var frame = this.findFrameElement(element);

      if (frame) {
        frame.delegate.formSubmissionIntercepted(element, submitter);
      }
    }
  }, {
    key: "shouldRedirect",
    value: function shouldRedirect(element, submitter) {
      var frame = this.findFrameElement(element);
      return frame ? frame != element.closest("turbo-frame") : false;
    }
  }, {
    key: "findFrameElement",
    value: function findFrameElement(element) {
      var id = element.getAttribute("data-turbo-frame");

      if (id && id != "_top") {
        var frame = this.element.querySelector("#".concat(id, ":not([disabled])"));

        if (frame instanceof FrameElement) {
          return frame;
        }
      }
    }
  }]);

  return FrameRedirector;
}();

var History = /*#__PURE__*/function () {
  function History(delegate) {
    var _this23 = this;

    _classCallCheck(this, History);

    this.restorationIdentifier = uuid();
    this.restorationData = {};
    this.started = false;
    this.pageLoaded = false;

    this.onPopState = function (event) {
      if (_this23.shouldHandlePopState()) {
        var _ref19 = event.state || {},
            turbo = _ref19.turbo;

        if (turbo) {
          _this23.location = new URL(window.location.href);
          var restorationIdentifier = turbo.restorationIdentifier;
          _this23.restorationIdentifier = restorationIdentifier;

          _this23.delegate.historyPoppedToLocationWithRestorationIdentifier(_this23.location, restorationIdentifier);
        }
      }
    };

    this.onPageLoad = /*#__PURE__*/function () {
      var _ref20 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee20(event) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.next = 2;
                return nextMicrotask();

              case 2:
                _this23.pageLoaded = true;

              case 3:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20);
      }));

      return function (_x14) {
        return _ref20.apply(this, arguments);
      };
    }();

    this.delegate = delegate;
  }

  _createClass(History, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        addEventListener("popstate", this.onPopState, false);
        addEventListener("load", this.onPageLoad, false);
        this.started = true;
        this.replace(new URL(window.location.href));
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        removeEventListener("popstate", this.onPopState, false);
        removeEventListener("load", this.onPageLoad, false);
        this.started = false;
      }
    }
  }, {
    key: "push",
    value: function push(location, restorationIdentifier) {
      this.update(history.pushState, location, restorationIdentifier);
    }
  }, {
    key: "replace",
    value: function replace(location, restorationIdentifier) {
      this.update(history.replaceState, location, restorationIdentifier);
    }
  }, {
    key: "update",
    value: function update(method, location) {
      var restorationIdentifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : uuid();
      var state = {
        turbo: {
          restorationIdentifier: restorationIdentifier
        }
      };
      method.call(history, state, "", location.href);
      this.location = location;
      this.restorationIdentifier = restorationIdentifier;
    }
  }, {
    key: "getRestorationDataForIdentifier",
    value: function getRestorationDataForIdentifier(restorationIdentifier) {
      return this.restorationData[restorationIdentifier] || {};
    }
  }, {
    key: "updateRestorationData",
    value: function updateRestorationData(additionalData) {
      var restorationIdentifier = this.restorationIdentifier;
      var restorationData = this.restorationData[restorationIdentifier];
      this.restorationData[restorationIdentifier] = Object.assign(Object.assign({}, restorationData), additionalData);
    }
  }, {
    key: "assumeControlOfScrollRestoration",
    value: function assumeControlOfScrollRestoration() {
      var _a;

      if (!this.previousScrollRestoration) {
        this.previousScrollRestoration = (_a = history.scrollRestoration) !== null && _a !== void 0 ? _a : "auto";
        history.scrollRestoration = "manual";
      }
    }
  }, {
    key: "relinquishControlOfScrollRestoration",
    value: function relinquishControlOfScrollRestoration() {
      if (this.previousScrollRestoration) {
        history.scrollRestoration = this.previousScrollRestoration;
        delete this.previousScrollRestoration;
      }
    }
  }, {
    key: "shouldHandlePopState",
    value: function shouldHandlePopState() {
      return this.pageIsLoaded();
    }
  }, {
    key: "pageIsLoaded",
    value: function pageIsLoaded() {
      return this.pageLoaded || document.readyState == "complete";
    }
  }]);

  return History;
}();

var LinkClickObserver = /*#__PURE__*/function () {
  function LinkClickObserver(delegate) {
    var _this24 = this;

    _classCallCheck(this, LinkClickObserver);

    this.started = false;

    this.clickCaptured = function () {
      removeEventListener("click", _this24.clickBubbled, false);
      addEventListener("click", _this24.clickBubbled, false);
    };

    this.clickBubbled = function (event) {
      if (_this24.clickEventIsSignificant(event)) {
        var link = _this24.findLinkFromClickTarget(event.target);

        if (link) {
          var _location = _this24.getLocationForLink(link);

          if (_this24.delegate.willFollowLinkToLocation(link, _location)) {
            event.preventDefault();

            _this24.delegate.followedLinkToLocation(link, _location);
          }
        }
      }
    };

    this.delegate = delegate;
  }

  _createClass(LinkClickObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        addEventListener("click", this.clickCaptured, true);
        this.started = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        removeEventListener("click", this.clickCaptured, true);
        this.started = false;
      }
    }
  }, {
    key: "clickEventIsSignificant",
    value: function clickEventIsSignificant(event) {
      return !(event.target && event.target.isContentEditable || event.defaultPrevented || event.which > 1 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey);
    }
  }, {
    key: "findLinkFromClickTarget",
    value: function findLinkFromClickTarget(target) {
      if (target instanceof Element) {
        return target.closest("a[href]:not([target^=_]):not([download])");
      }
    }
  }, {
    key: "getLocationForLink",
    value: function getLocationForLink(link) {
      return expandURL(link.getAttribute("href") || "");
    }
  }]);

  return LinkClickObserver;
}();

var Navigator = /*#__PURE__*/function () {
  function Navigator(delegate) {
    _classCallCheck(this, Navigator);

    this.delegate = delegate;
  }

  _createClass(Navigator, [{
    key: "proposeVisit",
    value: function proposeVisit(location) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.delegate.allowsVisitingLocation(location)) {
        this.delegate.visitProposedToLocation(location, options);
      }
    }
  }, {
    key: "startVisit",
    value: function startVisit(locatable, restorationIdentifier) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.stop();
      this.currentVisit = new Visit(this, expandURL(locatable), restorationIdentifier, Object.assign({
        referrer: this.location
      }, options));
      this.currentVisit.start();
    }
  }, {
    key: "submitForm",
    value: function submitForm(form, submitter) {
      this.stop();
      this.formSubmission = new FormSubmission(this, form, submitter, true);

      if (this.formSubmission.fetchRequest.isIdempotent) {
        this.proposeVisit(this.formSubmission.fetchRequest.url);
      } else {
        this.formSubmission.start();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.formSubmission) {
        this.formSubmission.stop();
        delete this.formSubmission;
      }

      if (this.currentVisit) {
        this.currentVisit.cancel();
        delete this.currentVisit;
      }
    }
  }, {
    key: "adapter",
    get: function get() {
      return this.delegate.adapter;
    }
  }, {
    key: "view",
    get: function get() {
      return this.delegate.view;
    }
  }, {
    key: "history",
    get: function get() {
      return this.delegate.history;
    }
  }, {
    key: "formSubmissionStarted",
    value: function formSubmissionStarted(formSubmission) {}
  }, {
    key: "formSubmissionSucceededWithResponse",
    value: function () {
      var _formSubmissionSucceededWithResponse = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee21(formSubmission, fetchResponse) {
        var responseHTML, statusCode, visitOptions;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                if (!(formSubmission == this.formSubmission)) {
                  _context21.next = 5;
                  break;
                }

                _context21.next = 3;
                return fetchResponse.responseHTML;

              case 3:
                responseHTML = _context21.sent;

                if (responseHTML) {
                  if (formSubmission.method != FetchMethod.get) {
                    this.view.clearSnapshotCache();
                  }

                  statusCode = fetchResponse.statusCode;
                  visitOptions = {
                    response: {
                      statusCode: statusCode,
                      responseHTML: responseHTML
                    }
                  };
                  this.proposeVisit(fetchResponse.location, visitOptions);
                }

              case 5:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function formSubmissionSucceededWithResponse(_x15, _x16) {
        return _formSubmissionSucceededWithResponse.apply(this, arguments);
      }

      return formSubmissionSucceededWithResponse;
    }()
  }, {
    key: "formSubmissionFailedWithResponse",
    value: function () {
      var _formSubmissionFailedWithResponse = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee22(formSubmission, fetchResponse) {
        var responseHTML, snapshot;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.next = 2;
                return fetchResponse.responseHTML;

              case 2:
                responseHTML = _context22.sent;

                if (!responseHTML) {
                  _context22.next = 8;
                  break;
                }

                snapshot = PageSnapshot.fromHTMLString(responseHTML);
                _context22.next = 7;
                return this.view.renderPage(snapshot);

              case 7:
                this.view.clearSnapshotCache();

              case 8:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function formSubmissionFailedWithResponse(_x17, _x18) {
        return _formSubmissionFailedWithResponse.apply(this, arguments);
      }

      return formSubmissionFailedWithResponse;
    }()
  }, {
    key: "formSubmissionErrored",
    value: function formSubmissionErrored(formSubmission, error) {}
  }, {
    key: "formSubmissionFinished",
    value: function formSubmissionFinished(formSubmission) {}
  }, {
    key: "visitStarted",
    value: function visitStarted(visit) {
      this.delegate.visitStarted(visit);
    }
  }, {
    key: "visitCompleted",
    value: function visitCompleted(visit) {
      this.delegate.visitCompleted(visit);
    }
  }, {
    key: "location",
    get: function get() {
      return this.history.location;
    }
  }, {
    key: "restorationIdentifier",
    get: function get() {
      return this.history.restorationIdentifier;
    }
  }]);

  return Navigator;
}();

var PageStage;

(function (PageStage) {
  PageStage[PageStage["initial"] = 0] = "initial";
  PageStage[PageStage["loading"] = 1] = "loading";
  PageStage[PageStage["interactive"] = 2] = "interactive";
  PageStage[PageStage["complete"] = 3] = "complete";
})(PageStage || (PageStage = {}));

var PageObserver = /*#__PURE__*/function () {
  function PageObserver(delegate) {
    var _this25 = this;

    _classCallCheck(this, PageObserver);

    this.stage = PageStage.initial;
    this.started = false;

    this.interpretReadyState = function () {
      var readyState = _this25.readyState;

      if (readyState == "interactive") {
        _this25.pageIsInteractive();
      } else if (readyState == "complete") {
        _this25.pageIsComplete();
      }
    };

    this.pageWillUnload = function () {
      _this25.delegate.pageWillUnload();
    };

    this.delegate = delegate;
  }

  _createClass(PageObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        if (this.stage == PageStage.initial) {
          this.stage = PageStage.loading;
        }

        document.addEventListener("readystatechange", this.interpretReadyState, false);
        addEventListener("pagehide", this.pageWillUnload, false);
        this.started = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        document.removeEventListener("readystatechange", this.interpretReadyState, false);
        removeEventListener("pagehide", this.pageWillUnload, false);
        this.started = false;
      }
    }
  }, {
    key: "pageIsInteractive",
    value: function pageIsInteractive() {
      if (this.stage == PageStage.loading) {
        this.stage = PageStage.interactive;
        this.delegate.pageBecameInteractive();
      }
    }
  }, {
    key: "pageIsComplete",
    value: function pageIsComplete() {
      this.pageIsInteractive();

      if (this.stage == PageStage.interactive) {
        this.stage = PageStage.complete;
        this.delegate.pageLoaded();
      }
    }
  }, {
    key: "readyState",
    get: function get() {
      return document.readyState;
    }
  }]);

  return PageObserver;
}();

var ScrollObserver = /*#__PURE__*/function () {
  function ScrollObserver(delegate) {
    var _this26 = this;

    _classCallCheck(this, ScrollObserver);

    this.started = false;

    this.onScroll = function () {
      _this26.updatePosition({
        x: window.pageXOffset,
        y: window.pageYOffset
      });
    };

    this.delegate = delegate;
  }

  _createClass(ScrollObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        addEventListener("scroll", this.onScroll, false);
        this.onScroll();
        this.started = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        removeEventListener("scroll", this.onScroll, false);
        this.started = false;
      }
    }
  }, {
    key: "updatePosition",
    value: function updatePosition(position) {
      this.delegate.scrollPositionChanged(position);
    }
  }]);

  return ScrollObserver;
}();

var StreamObserver = /*#__PURE__*/function () {
  function StreamObserver(delegate) {
    var _this27 = this;

    _classCallCheck(this, StreamObserver);

    this.sources = new Set();
    this.started = false;

    this.inspectFetchResponse = function (event) {
      var response = fetchResponseFromEvent(event);

      if (response && fetchResponseIsStream(response)) {
        event.preventDefault();

        _this27.receiveMessageResponse(response);
      }
    };

    this.receiveMessageEvent = function (event) {
      if (_this27.started && typeof event.data == "string") {
        _this27.receiveMessageHTML(event.data);
      }
    };

    this.delegate = delegate;
  }

  _createClass(StreamObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        addEventListener("turbo:before-fetch-response", this.inspectFetchResponse, false);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.started = false;
        removeEventListener("turbo:before-fetch-response", this.inspectFetchResponse, false);
      }
    }
  }, {
    key: "connectStreamSource",
    value: function connectStreamSource(source) {
      if (!this.streamSourceIsConnected(source)) {
        this.sources.add(source);
        source.addEventListener("message", this.receiveMessageEvent, false);
      }
    }
  }, {
    key: "disconnectStreamSource",
    value: function disconnectStreamSource(source) {
      if (this.streamSourceIsConnected(source)) {
        this.sources.delete(source);
        source.removeEventListener("message", this.receiveMessageEvent, false);
      }
    }
  }, {
    key: "streamSourceIsConnected",
    value: function streamSourceIsConnected(source) {
      return this.sources.has(source);
    }
  }, {
    key: "receiveMessageResponse",
    value: function () {
      var _receiveMessageResponse = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee23(response) {
        var html;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _context23.next = 2;
                return response.responseHTML;

              case 2:
                html = _context23.sent;

                if (html) {
                  this.receiveMessageHTML(html);
                }

              case 4:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function receiveMessageResponse(_x19) {
        return _receiveMessageResponse.apply(this, arguments);
      }

      return receiveMessageResponse;
    }()
  }, {
    key: "receiveMessageHTML",
    value: function receiveMessageHTML(html) {
      this.delegate.receivedMessageFromStream(new StreamMessage(html));
    }
  }]);

  return StreamObserver;
}();

function fetchResponseFromEvent(event) {
  var _a;

  var fetchResponse = (_a = event.detail) === null || _a === void 0 ? void 0 : _a.fetchResponse;

  if (fetchResponse instanceof FetchResponse) {
    return fetchResponse;
  }
}

function fetchResponseIsStream(response) {
  var _a;

  var contentType = (_a = response.contentType) !== null && _a !== void 0 ? _a : "";
  return contentType.startsWith(StreamMessage.contentType);
}

function isAction(action) {
  return action == "advance" || action == "replace" || action == "restore";
}

var ErrorRenderer = /*#__PURE__*/function (_Renderer2) {
  _inherits(ErrorRenderer, _Renderer2);

  var _super7 = _createSuper(ErrorRenderer);

  function ErrorRenderer() {
    _classCallCheck(this, ErrorRenderer);

    return _super7.apply(this, arguments);
  }

  _createClass(ErrorRenderer, [{
    key: "render",
    value: function () {
      var _render5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee24() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                this.replaceHeadAndBody();
                this.activateScriptElements();

              case 2:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function render() {
        return _render5.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "replaceHeadAndBody",
    value: function replaceHeadAndBody() {
      var _document = document,
          documentElement = _document.documentElement,
          head = _document.head,
          body = _document.body;
      documentElement.replaceChild(this.newHead, head);
      documentElement.replaceChild(this.newElement, body);
    }
  }, {
    key: "activateScriptElements",
    value: function activateScriptElements() {
      var _iterator4 = _createForOfIteratorHelper(this.scriptElements),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var replaceableElement = _step4.value;
          var parentNode = replaceableElement.parentNode;

          if (parentNode) {
            var element = this.createScriptElement(replaceableElement);
            parentNode.replaceChild(element, replaceableElement);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "newHead",
    get: function get() {
      return this.newSnapshot.headSnapshot.element;
    }
  }, {
    key: "scriptElements",
    get: function get() {
      return _toConsumableArray(document.documentElement.querySelectorAll("script"));
    }
  }]);

  return ErrorRenderer;
}(Renderer);

var PageRenderer = /*#__PURE__*/function (_Renderer3) {
  _inherits(PageRenderer, _Renderer3);

  var _super8 = _createSuper(PageRenderer);

  function PageRenderer() {
    _classCallCheck(this, PageRenderer);

    return _super8.apply(this, arguments);
  }

  _createClass(PageRenderer, [{
    key: "shouldRender",
    get: function get() {
      return this.newSnapshot.isVisitable && this.trackedElementsAreIdentical;
    }
  }, {
    key: "prepareToRender",
    value: function prepareToRender() {
      this.mergeHead();
    }
  }, {
    key: "render",
    value: function () {
      var _render6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee25() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                this.replaceBody();

              case 1:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function render() {
        return _render6.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "finishRendering",
    value: function finishRendering() {
      _get(_getPrototypeOf(PageRenderer.prototype), "finishRendering", this).call(this);

      if (this.isPreview) {
        this.focusFirstAutofocusableElement();
      }
    }
  }, {
    key: "currentHeadSnapshot",
    get: function get() {
      return this.currentSnapshot.headSnapshot;
    }
  }, {
    key: "newHeadSnapshot",
    get: function get() {
      return this.newSnapshot.headSnapshot;
    }
  }, {
    key: "newElement",
    get: function get() {
      return this.newSnapshot.element;
    }
  }, {
    key: "mergeHead",
    value: function mergeHead() {
      this.copyNewHeadStylesheetElements();
      this.copyNewHeadScriptElements();
      this.removeCurrentHeadProvisionalElements();
      this.copyNewHeadProvisionalElements();
    }
  }, {
    key: "replaceBody",
    value: function replaceBody() {
      var _this28 = this;

      this.preservingPermanentElements(function () {
        _this28.activateNewBody();

        _this28.assignNewBody();
      });
    }
  }, {
    key: "trackedElementsAreIdentical",
    get: function get() {
      return this.currentHeadSnapshot.trackedElementSignature == this.newHeadSnapshot.trackedElementSignature;
    }
  }, {
    key: "copyNewHeadStylesheetElements",
    value: function copyNewHeadStylesheetElements() {
      var _iterator5 = _createForOfIteratorHelper(this.newHeadStylesheetElements),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var element = _step5.value;
          document.head.appendChild(element);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }, {
    key: "copyNewHeadScriptElements",
    value: function copyNewHeadScriptElements() {
      var _iterator6 = _createForOfIteratorHelper(this.newHeadScriptElements),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var element = _step6.value;
          document.head.appendChild(this.createScriptElement(element));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  }, {
    key: "removeCurrentHeadProvisionalElements",
    value: function removeCurrentHeadProvisionalElements() {
      var _iterator7 = _createForOfIteratorHelper(this.currentHeadProvisionalElements),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var element = _step7.value;
          document.head.removeChild(element);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  }, {
    key: "copyNewHeadProvisionalElements",
    value: function copyNewHeadProvisionalElements() {
      var _iterator8 = _createForOfIteratorHelper(this.newHeadProvisionalElements),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var element = _step8.value;
          document.head.appendChild(element);
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }
  }, {
    key: "activateNewBody",
    value: function activateNewBody() {
      document.adoptNode(this.newElement);
      this.activateNewBodyScriptElements();
    }
  }, {
    key: "activateNewBodyScriptElements",
    value: function activateNewBodyScriptElements() {
      var _iterator9 = _createForOfIteratorHelper(this.newBodyScriptElements),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var inertScriptElement = _step9.value;
          var activatedScriptElement = this.createScriptElement(inertScriptElement);
          replaceElementWithElement(inertScriptElement, activatedScriptElement);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
  }, {
    key: "assignNewBody",
    value: function assignNewBody() {
      if (document.body && this.newElement instanceof HTMLBodyElement) {
        replaceElementWithElement(document.body, this.newElement);
      } else {
        document.documentElement.appendChild(this.newElement);
      }
    }
  }, {
    key: "newHeadStylesheetElements",
    get: function get() {
      return this.newHeadSnapshot.getStylesheetElementsNotInSnapshot(this.currentHeadSnapshot);
    }
  }, {
    key: "newHeadScriptElements",
    get: function get() {
      return this.newHeadSnapshot.getScriptElementsNotInSnapshot(this.currentHeadSnapshot);
    }
  }, {
    key: "currentHeadProvisionalElements",
    get: function get() {
      return this.currentHeadSnapshot.provisionalElements;
    }
  }, {
    key: "newHeadProvisionalElements",
    get: function get() {
      return this.newHeadSnapshot.provisionalElements;
    }
  }, {
    key: "newBodyScriptElements",
    get: function get() {
      return _toConsumableArray(this.newElement.querySelectorAll("script"));
    }
  }]);

  return PageRenderer;
}(Renderer);

var SnapshotCache = /*#__PURE__*/function () {
  function SnapshotCache(size) {
    _classCallCheck(this, SnapshotCache);

    this.keys = [];
    this.snapshots = {};
    this.size = size;
  }

  _createClass(SnapshotCache, [{
    key: "has",
    value: function has(location) {
      return toCacheKey(location) in this.snapshots;
    }
  }, {
    key: "get",
    value: function get(location) {
      if (this.has(location)) {
        var snapshot = this.read(location);
        this.touch(location);
        return snapshot;
      }
    }
  }, {
    key: "put",
    value: function put(location, snapshot) {
      this.write(location, snapshot);
      this.touch(location);
      return snapshot;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.snapshots = {};
    }
  }, {
    key: "read",
    value: function read(location) {
      return this.snapshots[toCacheKey(location)];
    }
  }, {
    key: "write",
    value: function write(location, snapshot) {
      this.snapshots[toCacheKey(location)] = snapshot;
    }
  }, {
    key: "touch",
    value: function touch(location) {
      var key = toCacheKey(location);
      var index = this.keys.indexOf(key);
      if (index > -1) this.keys.splice(index, 1);
      this.keys.unshift(key);
      this.trim();
    }
  }, {
    key: "trim",
    value: function trim() {
      var _iterator10 = _createForOfIteratorHelper(this.keys.splice(this.size)),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var key = _step10.value;
          delete this.snapshots[key];
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
    }
  }]);

  return SnapshotCache;
}();

var PageView = /*#__PURE__*/function (_View2) {
  _inherits(PageView, _View2);

  var _super9 = _createSuper(PageView);

  function PageView() {
    var _this29;

    _classCallCheck(this, PageView);

    _this29 = _super9.apply(this, arguments);
    _this29.snapshotCache = new SnapshotCache(10);
    _this29.lastRenderedLocation = new URL(location.href);
    return _this29;
  }

  _createClass(PageView, [{
    key: "renderPage",
    value: function renderPage(snapshot) {
      var isPreview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var renderer = new PageRenderer(this.snapshot, snapshot, isPreview);
      return this.render(renderer);
    }
  }, {
    key: "renderError",
    value: function renderError(snapshot) {
      var renderer = new ErrorRenderer(this.snapshot, snapshot, false);
      this.render(renderer);
    }
  }, {
    key: "clearSnapshotCache",
    value: function clearSnapshotCache() {
      this.snapshotCache.clear();
    }
  }, {
    key: "cacheSnapshot",
    value: function () {
      var _cacheSnapshot = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee26() {
        var snapshot, _location2;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                if (!this.shouldCacheSnapshot) {
                  _context26.next = 6;
                  break;
                }

                this.delegate.viewWillCacheSnapshot();
                snapshot = this.snapshot, _location2 = this.lastRenderedLocation;
                _context26.next = 5;
                return nextEventLoopTick();

              case 5:
                this.snapshotCache.put(_location2, snapshot.clone());

              case 6:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function cacheSnapshot() {
        return _cacheSnapshot.apply(this, arguments);
      }

      return cacheSnapshot;
    }()
  }, {
    key: "getCachedSnapshotForLocation",
    value: function getCachedSnapshotForLocation(location) {
      return this.snapshotCache.get(location);
    }
  }, {
    key: "snapshot",
    get: function get() {
      return PageSnapshot.fromElement(this.element);
    }
  }, {
    key: "shouldCacheSnapshot",
    get: function get() {
      return this.snapshot.isCacheable;
    }
  }]);

  return PageView;
}(View);

var Session = /*#__PURE__*/function () {
  function Session() {
    _classCallCheck(this, Session);

    this.navigator = new Navigator(this);
    this.history = new History(this);
    this.view = new PageView(this, document.documentElement);
    this.adapter = new BrowserAdapter(this);
    this.pageObserver = new PageObserver(this);
    this.linkClickObserver = new LinkClickObserver(this);
    this.formSubmitObserver = new FormSubmitObserver(this);
    this.scrollObserver = new ScrollObserver(this);
    this.streamObserver = new StreamObserver(this);
    this.frameRedirector = new FrameRedirector(document.documentElement);
    this.enabled = true;
    this.progressBarDelay = 500;
    this.started = false;
  }

  _createClass(Session, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.pageObserver.start();
        this.linkClickObserver.start();
        this.formSubmitObserver.start();
        this.scrollObserver.start();
        this.streamObserver.start();
        this.frameRedirector.start();
        this.history.start();
        this.started = true;
        this.enabled = true;
      }
    }
  }, {
    key: "disable",
    value: function disable() {
      this.enabled = false;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.pageObserver.stop();
        this.linkClickObserver.stop();
        this.formSubmitObserver.stop();
        this.scrollObserver.stop();
        this.streamObserver.stop();
        this.frameRedirector.stop();
        this.history.stop();
        this.started = false;
      }
    }
  }, {
    key: "registerAdapter",
    value: function registerAdapter(adapter) {
      this.adapter = adapter;
    }
  }, {
    key: "visit",
    value: function visit(location) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.navigator.proposeVisit(expandURL(location), options);
    }
  }, {
    key: "connectStreamSource",
    value: function connectStreamSource(source) {
      this.streamObserver.connectStreamSource(source);
    }
  }, {
    key: "disconnectStreamSource",
    value: function disconnectStreamSource(source) {
      this.streamObserver.disconnectStreamSource(source);
    }
  }, {
    key: "renderStreamMessage",
    value: function renderStreamMessage(message) {
      document.documentElement.appendChild(StreamMessage.wrap(message).fragment);
    }
  }, {
    key: "clearCache",
    value: function clearCache() {
      this.view.clearSnapshotCache();
    }
  }, {
    key: "setProgressBarDelay",
    value: function setProgressBarDelay(delay) {
      this.progressBarDelay = delay;
    }
  }, {
    key: "location",
    get: function get() {
      return this.history.location;
    }
  }, {
    key: "restorationIdentifier",
    get: function get() {
      return this.history.restorationIdentifier;
    }
  }, {
    key: "historyPoppedToLocationWithRestorationIdentifier",
    value: function historyPoppedToLocationWithRestorationIdentifier(location) {
      if (this.enabled) {
        this.navigator.proposeVisit(location, {
          action: "restore",
          historyChanged: true
        });
      } else {
        this.adapter.pageInvalidated();
      }
    }
  }, {
    key: "scrollPositionChanged",
    value: function scrollPositionChanged(position) {
      this.history.updateRestorationData({
        scrollPosition: position
      });
    }
  }, {
    key: "willFollowLinkToLocation",
    value: function willFollowLinkToLocation(link, location) {
      return this.elementIsNavigable(link) && this.locationIsVisitable(location) && this.applicationAllowsFollowingLinkToLocation(link, location);
    }
  }, {
    key: "followedLinkToLocation",
    value: function followedLinkToLocation(link, location) {
      var action = this.getActionForLink(link);
      this.visit(location.href, {
        action: action
      });
    }
  }, {
    key: "allowsVisitingLocation",
    value: function allowsVisitingLocation(location) {
      return this.applicationAllowsVisitingLocation(location);
    }
  }, {
    key: "visitProposedToLocation",
    value: function visitProposedToLocation(location, options) {
      extendURLWithDeprecatedProperties(location);
      this.adapter.visitProposedToLocation(location, options);
    }
  }, {
    key: "visitStarted",
    value: function visitStarted(visit) {
      extendURLWithDeprecatedProperties(visit.location);
      this.notifyApplicationAfterVisitingLocation(visit.location);
    }
  }, {
    key: "visitCompleted",
    value: function visitCompleted(visit) {
      this.notifyApplicationAfterPageLoad(visit.getTimingMetrics());
    }
  }, {
    key: "willSubmitForm",
    value: function willSubmitForm(form, submitter) {
      return this.elementIsNavigable(form) && this.elementIsNavigable(submitter);
    }
  }, {
    key: "formSubmitted",
    value: function formSubmitted(form, submitter) {
      this.navigator.submitForm(form, submitter);
    }
  }, {
    key: "pageBecameInteractive",
    value: function pageBecameInteractive() {
      this.view.lastRenderedLocation = this.location;
      this.notifyApplicationAfterPageLoad();
    }
  }, {
    key: "pageLoaded",
    value: function pageLoaded() {
      this.history.assumeControlOfScrollRestoration();
    }
  }, {
    key: "pageWillUnload",
    value: function pageWillUnload() {
      this.history.relinquishControlOfScrollRestoration();
    }
  }, {
    key: "receivedMessageFromStream",
    value: function receivedMessageFromStream(message) {
      this.renderStreamMessage(message);
    }
  }, {
    key: "viewWillCacheSnapshot",
    value: function viewWillCacheSnapshot() {
      this.notifyApplicationBeforeCachingSnapshot();
    }
  }, {
    key: "viewWillRenderSnapshot",
    value: function viewWillRenderSnapshot(_ref21, isPreview) {
      var element = _ref21.element;
      this.notifyApplicationBeforeRender(element);
    }
  }, {
    key: "viewRenderedSnapshot",
    value: function viewRenderedSnapshot(snapshot, isPreview) {
      this.view.lastRenderedLocation = this.history.location;
      this.notifyApplicationAfterRender();
    }
  }, {
    key: "viewInvalidated",
    value: function viewInvalidated() {
      this.adapter.pageInvalidated();
    }
  }, {
    key: "applicationAllowsFollowingLinkToLocation",
    value: function applicationAllowsFollowingLinkToLocation(link, location) {
      var event = this.notifyApplicationAfterClickingLinkToLocation(link, location);
      return !event.defaultPrevented;
    }
  }, {
    key: "applicationAllowsVisitingLocation",
    value: function applicationAllowsVisitingLocation(location) {
      var event = this.notifyApplicationBeforeVisitingLocation(location);
      return !event.defaultPrevented;
    }
  }, {
    key: "notifyApplicationAfterClickingLinkToLocation",
    value: function notifyApplicationAfterClickingLinkToLocation(link, location) {
      return dispatch("turbo:click", {
        target: link,
        detail: {
          url: location.href
        },
        cancelable: true
      });
    }
  }, {
    key: "notifyApplicationBeforeVisitingLocation",
    value: function notifyApplicationBeforeVisitingLocation(location) {
      return dispatch("turbo:before-visit", {
        detail: {
          url: location.href
        },
        cancelable: true
      });
    }
  }, {
    key: "notifyApplicationAfterVisitingLocation",
    value: function notifyApplicationAfterVisitingLocation(location) {
      return dispatch("turbo:visit", {
        detail: {
          url: location.href
        }
      });
    }
  }, {
    key: "notifyApplicationBeforeCachingSnapshot",
    value: function notifyApplicationBeforeCachingSnapshot() {
      return dispatch("turbo:before-cache");
    }
  }, {
    key: "notifyApplicationBeforeRender",
    value: function notifyApplicationBeforeRender(newBody) {
      return dispatch("turbo:before-render", {
        detail: {
          newBody: newBody
        }
      });
    }
  }, {
    key: "notifyApplicationAfterRender",
    value: function notifyApplicationAfterRender() {
      return dispatch("turbo:render");
    }
  }, {
    key: "notifyApplicationAfterPageLoad",
    value: function notifyApplicationAfterPageLoad() {
      var timing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return dispatch("turbo:load", {
        detail: {
          url: this.location.href,
          timing: timing
        }
      });
    }
  }, {
    key: "getActionForLink",
    value: function getActionForLink(link) {
      var action = link.getAttribute("data-turbo-action");
      return isAction(action) ? action : "advance";
    }
  }, {
    key: "elementIsNavigable",
    value: function elementIsNavigable(element) {
      var container = element === null || element === void 0 ? void 0 : element.closest("[data-turbo]");

      if (container) {
        return container.getAttribute("data-turbo") != "false";
      } else {
        return true;
      }
    }
  }, {
    key: "locationIsVisitable",
    value: function locationIsVisitable(location) {
      return isPrefixedBy(location, this.snapshot.rootLocation) && isHTML(location);
    }
  }, {
    key: "snapshot",
    get: function get() {
      return this.view.snapshot;
    }
  }]);

  return Session;
}();

function extendURLWithDeprecatedProperties(url) {
  Object.defineProperties(url, deprecatedLocationPropertyDescriptors);
}

var deprecatedLocationPropertyDescriptors = {
  absoluteURL: {
    get: function get() {
      return this.toString();
    }
  }
};
var session = new Session();
var navigator = session.navigator;

function start() {
  session.start();
}

function registerAdapter(adapter) {
  session.registerAdapter(adapter);
}

function visit(location, options) {
  session.visit(location, options);
}

function connectStreamSource(source) {
  session.connectStreamSource(source);
}

function disconnectStreamSource(source) {
  session.disconnectStreamSource(source);
}

function renderStreamMessage(message) {
  session.renderStreamMessage(message);
}

function clearCache() {
  session.clearCache();
}

function setProgressBarDelay(delay) {
  session.setProgressBarDelay(delay);
}

start();


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

}]);
//# sourceMappingURL=1-9ae59d59b3c01d1919ca.chunk.js.map