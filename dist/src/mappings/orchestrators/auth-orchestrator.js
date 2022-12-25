'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _bluebird = _interopRequireDefault(require("bluebird"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _lodash = require("lodash");
var _conf = require("../../conf");
var _constants = _interopRequireDefault(require("../../constants"));
var _commons = _interopRequireDefault(require("../../commons"));
var _helpers = _interopRequireDefault(require("../../helpers"));
var _utils = _interopRequireDefault(require("../../utils"));
var _logger = _interopRequireDefault(require("../../core/logger"));
var _repository = _interopRequireDefault(require("../../layers/repository"));
var _redis = _interopRequireDefault(require("../../adapters/redis"));
var _stores = require("../../stores");
var _transfers = _interopRequireDefault(require("../../transfers"));
var _validators = _interopRequireDefault(require("../../validators"));
var _userSessionOrchestrator = _interopRequireDefault(require("./user-session-orchestrator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_ORCHESTRATORS.AUTH_ORCHESTRATOR);
var DEFAULT_EXPIRES_TOKEN = _constants["default"].DEFAULT_EXPIRES_TOKEN;
var DEFAULT_EXPIRES_REFRESH_TOKEN = _constants["default"].DEFAULT_EXPIRES_REFRESH_TOKEN;
var APP_AUDIENCE = _conf.profiles.APP_AUDIENCE;
var APP_ISSUER = _conf.profiles.APP_ISSUER;

/**
 * @description Sign In Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var signIn = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(toolBox) {
    var req, error, _req$body, email, password, user, data, _helpers$getSecretJso, privateSecret, payloadToken, token, payloadRefreshToken, _refreshToken, wlKey;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = toolBox.req;
            _context.prev = 1;
            loggerFactory.info("Function signIn has been start");

            // validator
            error = _validators["default"].validatorLogin(req.body);
            if (!error) {
              _context.next = 6;
              break;
            }
            throw _commons["default"].newError('authE002');
          case 6:
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context.next = 9;
            return getUser(email);
          case 9:
            user = _context.sent;
            if (_bcrypt["default"].compareSync(password, user.password)) {
              _context.next = 12;
              break;
            }
            throw _commons["default"].newError('authE004');
          case 12:
            _context.next = 14;
            return _transfers["default"].authTransfer(user);
          case 14:
            data = _context.sent;
            _helpers$getSecretJso = _helpers["default"].getSecretJsonHelper(), privateSecret = _helpers$getSecretJso.privateSecret; // generator token
            payloadToken = {
              typ: 'Bearer',
              id: data.id,
              email: data.email,
              isAdmin: data.isAdmin
            };
            token = _jsonwebtoken["default"].sign(payloadToken, privateSecret, _objectSpread({
              expiresIn: DEFAULT_EXPIRES_TOKEN
            }, _conf.options.jwtOptions)); // generator refresh token
            payloadRefreshToken = {
              typ: 'Refresh',
              id: data.id,
              email: data.email,
              isAdmin: data.isAdmin
            };
            _refreshToken = _jsonwebtoken["default"].sign(payloadRefreshToken, privateSecret, _objectSpread({
              expiresIn: DEFAULT_EXPIRES_REFRESH_TOKEN
            }, _conf.options.jwtOptions)); // save refresh token into db
            user.refreshToken = _refreshToken;
            user.isOnline = true;
            _context.next = 24;
            return user.save();
          case 24:
            // save token in session
            (0, _stores.sessionStore)(req, token);

            // save whitelist token in redis
            wlKey = "whitelist_".concat(data.id);
            _context.next = 28;
            return _redis["default"].setExValue(wlKey, token, DEFAULT_EXPIRES_TOKEN);
          case 28:
            loggerFactory.info("Function signIn has been end");
            return _context.abrupt("return", {
              result: {
                token: token
              },
              msg: 'authS001'
            });
          case 32:
            _context.prev = 32;
            _context.t0 = _context["catch"](1);
            loggerFactory.error("Function signIn has error", {
              args: _utils["default"].formatErrorMsg(_context.t0)
            });
            return _context.abrupt("return", _bluebird["default"].reject(_context.t0));
          case 36:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 32]]);
  }));
  return function signIn(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * @description Sign Out Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var signOut = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(toolBox) {
    var req, tokenExp, _req$body2, email, token, sessionID, user, blKey;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            req = toolBox.req;
            tokenExp = req.tokenExp;
            _context2.prev = 2;
            loggerFactory.info("Function signOut has been start");
            _req$body2 = req.body, email = _req$body2.email, token = _req$body2.token, sessionID = _req$body2.sessionID;
            _context2.next = 7;
            return getUser(email);
          case 7:
            user = _context2.sent;
            _context2.next = 10;
            return unStoreData(req, user);
          case 10:
            _context2.next = 12;
            return _userSessionOrchestrator["default"].updateUserSession(toolBox, {
              id: sessionID,
              reason: 'USER_LOGOUT'
            });
          case 12:
            // store token into blacklist in redis
            blKey = "blacklist_".concat(user._id);
            _context2.next = 15;
            return _redis["default"].setExValue(blKey, token, tokenExp);
          case 15:
            user.isOnline = false;
            _context2.next = 18;
            return user.save();
          case 18:
            loggerFactory.info("Function signOut has been end");
            return _context2.abrupt("return", {
              result: {
                data: null
              },
              msg: 'authS002'
            });
          case 22:
            _context2.prev = 22;
            _context2.t0 = _context2["catch"](2);
            loggerFactory.error("Function signOut has error", {
              args: _utils["default"].formatErrorMsg(_context2.t0)
            });
            return _context2.abrupt("return", _bluebird["default"].reject(_context2.t0));
          case 26:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 22]]);
  }));
  return function signOut(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * @description Who Am I Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var whoami = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(toolBox) {
    var req, email, user, result;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            req = toolBox.req;
            _context3.prev = 1;
            loggerFactory.info("Function whoami has been start");
            email = req.body.email;
            _context3.next = 6;
            return getUser(email);
          case 6:
            user = _context3.sent;
            _context3.next = 9;
            return _transfers["default"].authTransfer(user);
          case 9:
            result = _context3.sent;
            loggerFactory.info("Function whoami has been end");
            return _context3.abrupt("return", {
              result: {
                data: result
              },
              msg: 'authS003'
            });
          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](1);
            loggerFactory.error("Function whoami has error", {
              args: _utils["default"].formatErrorMsg(_context3.t0)
            });
            return _context3.abrupt("return", _bluebird["default"].reject(_context3.t0));
          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 14]]);
  }));
  return function whoami(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * @description Refresh Token Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var refreshToken = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(toolBox) {
    var req, _req$body3, email, sessionID, user, wlKey, _helpers$getSecretJso2, privateSecret, publicSecret, payload, newToken;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            req = toolBox.req;
            _context5.prev = 1;
            loggerFactory.info("Function refreshToken has been start");
            _req$body3 = req.body, email = _req$body3.email, sessionID = _req$body3.sessionID;
            if (!(0, _lodash.isEmpty)(email)) {
              _context5.next = 6;
              break;
            }
            throw _commons["default"].newError('authE001');
          case 6:
            _context5.next = 8;
            return getUser(email);
          case 8:
            user = _context5.sent;
            wlKey = "whitelist_".concat(user._id);
            _helpers$getSecretJso2 = _helpers["default"].getSecretJsonHelper(), privateSecret = _helpers$getSecretJso2.privateSecret, publicSecret = _helpers$getSecretJso2.publicSecret; // verify refreshToken
            _context5.next = 13;
            return _jsonwebtoken["default"].verify(user.refreshToken, publicSecret, {
              audience: APP_AUDIENCE,
              issuer: APP_ISSUER
            }, /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(err, decoded) {
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        if (!err) {
                          _context4.next = 11;
                          break;
                        }
                        loggerFactory.error("Function refreshToken verify token has been error", {
                          args: _utils["default"].formatErrorMsg(err)
                        });
                        _context4.next = 4;
                        return unStoreData(req, user);
                      case 4:
                        _context4.next = 6;
                        return _userSessionOrchestrator["default"].updateUserSession(toolBox, {
                          id: sessionID,
                          reason: 'USER_TOKEN_EXPIRED'
                        });
                      case 6:
                        _context4.next = 8;
                        return _redis["default"].deleteValue(wlKey);
                      case 8:
                        throw _commons["default"].newError('authE006');
                      case 11:
                        delete decoded.aud;
                        delete decoded.iss;
                        delete decoded.jti;
                        delete decoded.exp;
                        delete decoded.iat;
                        return _context4.abrupt("return", decoded);
                      case 17:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));
              return function (_x5, _x6) {
                return _ref5.apply(this, arguments);
              };
            }());
          case 13:
            payload = _context5.sent;
            newToken = _jsonwebtoken["default"].sign(payload, privateSecret, _objectSpread({
              expiresIn: DEFAULT_EXPIRES_TOKEN
            }, _conf.options.jwtOptions)); // save in session
            (0, _stores.sessionStore)(req, newToken);

            // save whitelist token in redis
            _context5.next = 18;
            return _redis["default"].setExValue(wlKey, newToken, DEFAULT_EXPIRES_TOKEN);
          case 18:
            loggerFactory.info("Function refreshToken has been end");
            return _context5.abrupt("return", {
              result: {
                token: newToken
              },
              msg: 'authS004'
            });
          case 22:
            _context5.prev = 22;
            _context5.t0 = _context5["catch"](1);
            loggerFactory.error("Function refreshToken has error", {
              args: _utils["default"].formatErrorMsg(_context5.t0)
            });
            return _context5.abrupt("return", _bluebird["default"].reject(_context5.t0));
          case 26:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 22]]);
  }));
  return function refreshToken(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * @description Revoke Token Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var revokeToken = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(toolBox) {
    var req, tokenExp, _req$body4, id, sessionID, user, wlKey, blKey, whitelistToken;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            req = toolBox.req;
            tokenExp = req.tokenExp;
            _context6.prev = 2;
            loggerFactory.info("Function revokeToken has been start");
            _req$body4 = req.body, id = _req$body4.id, sessionID = _req$body4.sessionID;
            _context6.next = 7;
            return _repository["default"].getOne({
              type: 'UserModel',
              id: id
            });
          case 7:
            user = _context6.sent;
            _context6.next = 10;
            return _userSessionOrchestrator["default"].updateUserSession(toolBox, {
              id: sessionID,
              reason: 'USER_TOKEN_REVOKED'
            });
          case 10:
            wlKey = "whitelist_".concat(user._id);
            blKey = "blacklist_".concat(user._id); // find token from whitelist in redis
            _context6.next = 14;
            return _redis["default"].getValue(wlKey);
          case 14:
            whitelistToken = _context6.sent;
            _context6.next = 17;
            return _redis["default"].setExValue(blKey, whitelistToken, tokenExp);
          case 17:
            _context6.next = 19;
            return _redis["default"].deleteValue(wlKey);
          case 19:
            // set isOnline is false
            user.isOnline = false;
            _context6.next = 22;
            return user.save();
          case 22:
            loggerFactory.info("Function revokeToken has been end");
            return _context6.abrupt("return", {
              result: {
                data: null
              },
              msg: 'authS005'
            });
          case 26:
            _context6.prev = 26;
            _context6.t0 = _context6["catch"](2);
            loggerFactory.error("Function revokeToken has error", {
              args: _utils["default"].formatErrorMsg(_context6.t0)
            });
            return _context6.abrupt("return", _bluebird["default"].reject(_context6.t0));
          case 30:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 26]]);
  }));
  return function revokeToken(_x7) {
    return _ref6.apply(this, arguments);
  };
}();

/**
 * @description Get user helper
 * @param {String} email
 */
var getUser = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(email) {
    var user;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _repository["default"].findOne({
              type: 'UserModel',
              filter: {
                email: email
              },
              projection: {
                __v: 0,
                createdAt: 0,
                createdBy: 0,
                updatedAt: 0,
                updatedBy: 0
              },
              options: {
                populate: [{
                  path: 'roles',
                  select: 'id name'
                }]
              }
            });
          case 3:
            user = _context7.sent;
            if (!(0, _lodash.isEmpty)(user)) {
              _context7.next = 6;
              break;
            }
            throw _commons["default"].newError('authE003');
          case 6:
            return _context7.abrupt("return", user);
          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](0);
            loggerFactory.error("Function getUser has error", {
              args: _utils["default"].formatErrorMsg(_context7.t0)
            });
            throw _context7.t0;
          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 9]]);
  }));
  return function getUser(_x8) {
    return _ref7.apply(this, arguments);
  };
}();
var unStoreData = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, user) {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            // save refresh token null into db
            user.refreshToken = null;
            _context8.next = 4;
            return user.save();
          case 4:
            // un store token in session
            (0, _stores.sessionUnStore)(req);
            _context8.next = 11;
            break;
          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8["catch"](0);
            loggerFactory.error("Function unStoreData has error", {
              args: _utils["default"].formatErrorMsg(_context8.t0)
            });
            throw _context8.t0;
          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 7]]);
  }));
  return function unStoreData(_x9, _x10) {
    return _ref8.apply(this, arguments);
  };
}();
var authOrchestrator = {
  signIn: signIn,
  signOut: signOut,
  whoami: whoami,
  refreshToken: refreshToken,
  revokeToken: revokeToken
};
var _default = authOrchestrator;
exports["default"] = _default;