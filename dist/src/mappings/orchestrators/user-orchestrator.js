'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _bluebird = _interopRequireDefault(require("bluebird"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _lodash = require("lodash");
var _conf = require("../../conf");
var _constants = _interopRequireDefault(require("../../constants"));
var _commons = _interopRequireDefault(require("../../commons"));
var _helpers = _interopRequireDefault(require("../../helpers"));
var _utils = _interopRequireDefault(require("../../utils"));
var _logger = _interopRequireDefault(require("../../core/logger"));
var _repository = _interopRequireDefault(require("../../layers/repository"));
var _transfers = _interopRequireDefault(require("../../transfers"));
var _validators = _interopRequireDefault(require("../../validators"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_ORCHESTRATORS.USER_ORCHESTRATOR);

/**
 * @description Get All User Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var getAllUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(toolBox) {
    var req, _helpers$paginationHe, skip, limit, query, sort, users, total, response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = toolBox.req;
            _context.prev = 1;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function getAllUser Orchestrator has been start'
            });
            _helpers$paginationHe = _helpers["default"].paginationHelper(req.query), skip = _helpers$paginationHe.skip, limit = _helpers$paginationHe.limit;
            query = _helpers["default"].queryHelper(req.query, ['email'], [{
              deleted: false,
              isAdmin: false
            }]);
            sort = _helpers["default"].sortHelper(req.query);
            _context.next = 8;
            return _repository["default"].findAll({
              type: 'UserModel',
              filter: query,
              projection: {
                firstName: 1,
                lastName: 1,
                email: 1,
                isAdmin: 1,
                createdAt: 1,
                updatedAt: 1
              },
              options: {
                skip: skip,
                limit: limit,
                sort: sort
              }
            });
          case 8:
            users = _context.sent;
            _context.next = 11;
            return _repository["default"].count({
              type: 'UserModel',
              filter: query
            });
          case 11:
            total = _context.sent;
            _context.next = 14;
            return _commons["default"].dataResponsesMapper(users);
          case 14:
            response = _context.sent;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function getAllUser Orchestrator has been end'
            });
            return _context.abrupt("return", {
              result: {
                data: response,
                total: total
              },
              msg: 'userS001'
            });
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](1);
            logger.log({
              level: _constants["default"].LOG_LEVELS.ERROR,
              message: 'Function getAllUser Orchestrator has been error',
              args: _utils["default"].parseError(_context.t0)
            });
            return _context.abrupt("return", _bluebird["default"].reject(_context.t0));
          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 19]]);
  }));
  return function getAllUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * @description Create User Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var createUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(toolBox) {
    var req, error, _req$body, firstName, lastName, email, fullName, slug, isDuplicate, user, hashDefaultPassword, data, result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            req = toolBox.req;
            _context2.prev = 1;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function createUser Orchestrator has been start'
            });
            // validate inputs
            error = _validators["default"].validatorUser(req.body);
            if (!error) {
              _context2.next = 6;
              break;
            }
            throw _commons["default"].newError('userE001');
          case 6:
            _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, email = _req$body.email;
            fullName = _utils["default"].formatFullName(firstName, lastName);
            slug = _helpers["default"].slugHelper(fullName); // check duplicate slug
            _context2.next = 11;
            return _helpers["default"].duplicateHelper('UserModel', {
              $or: [{
                email: email
              }, {
                slug: slug
              }]
            });
          case 11:
            isDuplicate = _context2.sent;
            if (!isDuplicate) {
              _context2.next = 14;
              break;
            }
            throw _commons["default"].newError('userE002');
          case 14:
            user = (0, _lodash.assign)(req.body, {
              slug: slug
            });
            user = _helpers["default"].attributeHelper(req, user, 'create');

            // default password
            hashDefaultPassword = _bcrypt["default"].hashSync(_constants["default"].DEFAULT_PASSWORD, _conf.options.bcryptOptions.salt);
            user.password = hashDefaultPassword;
            user.passwordConfirm = hashDefaultPassword;
            _context2.next = 21;
            return _repository["default"].createOne({
              type: 'UserModel',
              doc: user
            });
          case 21:
            data = _context2.sent;
            _context2.next = 24;
            return _transfers["default"].userTransfer(data);
          case 24:
            result = _context2.sent;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function createUser Orchestrator has been end'
            });
            return _context2.abrupt("return", {
              result: {
                data: result
              },
              msg: 'userS002'
            });
          case 29:
            _context2.prev = 29;
            _context2.t0 = _context2["catch"](1);
            logger.log({
              level: _constants["default"].LOG_LEVELS.ERROR,
              message: 'Function createUser Orchestrator has been error',
              args: _utils["default"].parseError(_context2.t0)
            });
            return _context2.abrupt("return", _bluebird["default"].reject(_context2.t0));
          case 33:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 29]]);
  }));
  return function createUser(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * @description Get User By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var getUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(toolBox) {
    var req, id, user, result;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            req = toolBox.req;
            _context3.prev = 1;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function getUser Orchestrator has been start'
            });
            id = req.params.id;
            if (!(0, _lodash.isEmpty)(id)) {
              _context3.next = 6;
              break;
            }
            throw _commons["default"].newError('userE003');
          case 6:
            _context3.next = 8;
            return _repository["default"].getOne({
              type: 'UserModel',
              id: id,
              projection: {
                __v: 0
              },
              options: {
                populate: [{
                  path: 'roles',
                  select: 'id name'
                }]
              }
            });
          case 8:
            user = _context3.sent;
            _context3.next = 11;
            return _transfers["default"].userTransfer(user);
          case 11:
            result = _context3.sent;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function getUser Orchestrator has been end'
            });
            return _context3.abrupt("return", {
              result: {
                data: result
              },
              msg: 'userS003'
            });
          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](1);
            logger.log({
              level: _constants["default"].LOG_LEVELS.ERROR,
              message: 'Function getUser Orchestrator has been error',
              args: _utils["default"].parseError(_context3.t0)
            });
            return _context3.abrupt("return", _bluebird["default"].reject(_context3.t0));
          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 16]]);
  }));
  return function getUser(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * @description Update User By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var updateUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(toolBox) {
    var req, id, error, _req$body2, firstName, lastName, email, fullName, slug, isDuplicate, user, data, result;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            req = toolBox.req;
            _context4.prev = 1;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function updateUser Orchestrator has been start'
            });
            id = req.params.id;
            if (!(0, _lodash.isEmpty)(id)) {
              _context4.next = 6;
              break;
            }
            throw _commons["default"].newError('userE003');
          case 6:
            // validate inputs
            error = _validators["default"].validatorUser(req.body);
            if (!error) {
              _context4.next = 9;
              break;
            }
            throw _commons["default"].newError('userE001');
          case 9:
            _req$body2 = req.body, firstName = _req$body2.firstName, lastName = _req$body2.lastName, email = _req$body2.email;
            fullName = _utils["default"].formatFullName(firstName, lastName);
            slug = _helpers["default"].slugHelper(fullName); // check duplicate slug
            _context4.next = 14;
            return _helpers["default"].duplicateHelper('UserModel', {
              $or: [{
                email: email
              }, {
                slug: slug
              }],
              _id: {
                $ne: id
              }
            });
          case 14:
            isDuplicate = _context4.sent;
            if (!isDuplicate) {
              _context4.next = 17;
              break;
            }
            throw _commons["default"].newError('userE002');
          case 17:
            user = (0, _lodash.assign)(req.body, {
              slug: slug
            });
            user = _helpers["default"].attributeHelper(req, user);
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function updateUser Orchestrator has been end'
            });
            _context4.next = 22;
            return _repository["default"].updateOne({
              type: 'UserModel',
              id: id,
              doc: user
            });
          case 22:
            data = _context4.sent;
            _context4.next = 25;
            return _transfers["default"].userTransfer(data);
          case 25:
            result = _context4.sent;
            return _context4.abrupt("return", {
              result: {
                data: result
              },
              msg: 'userS004'
            });
          case 29:
            _context4.prev = 29;
            _context4.t0 = _context4["catch"](1);
            logger.log({
              level: _constants["default"].LOG_LEVELS.ERROR,
              message: 'Function updateUser Orchestrator has been error',
              args: _utils["default"].parseError(_context4.t0)
            });
            return _context4.abrupt("return", _bluebird["default"].reject(_context4.t0));
          case 33:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 29]]);
  }));
  return function updateUser(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * @description Delete User By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var deleteUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(toolBox) {
    var req, id, _req$body3, updatedAt, updatedBy, result;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            req = toolBox.req;
            _context5.prev = 1;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function deleteUser Orchestrator has been start'
            });
            id = req.params.id;
            if (!(0, _lodash.isEmpty)(id)) {
              _context5.next = 6;
              break;
            }
            throw _commons["default"].newError('userE003');
          case 6:
            req.body = _helpers["default"].attributeHelper(req, req.body);
            _req$body3 = req.body, updatedAt = _req$body3.updatedAt, updatedBy = _req$body3.updatedBy;
            _context5.next = 10;
            return _repository["default"].deleteOne({
              type: 'UserModel',
              id: id
            });
          case 10:
            result = _context5.sent;
            _context5.next = 13;
            return removeUserInRoles(id, updatedAt, updatedBy);
          case 13:
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function deleteUser Orchestrator has been end'
            });
            return _context5.abrupt("return", {
              result: {
                data: result
              },
              msg: 'userS005'
            });
          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](1);
            logger.log({
              level: _constants["default"].LOG_LEVELS.ERROR,
              message: 'Function deleteUser Orchestrator has been error',
              args: _utils["default"].parseError(_context5.t0)
            });
            return _context5.abrupt("return", _bluebird["default"].reject(_context5.t0));
          case 21:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 17]]);
  }));
  return function deleteUser(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * @description Change Password User By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var changePassUser = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(toolBox) {
    var req, id, error, _req$body4, currentPassword, newPassword, updatedAt, updatedBy, user, isValidCompare, hashNewPass, result;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            req = toolBox.req;
            _context6.prev = 1;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function changePassUser Orchestrator has been start'
            });
            id = req.params.id;
            if (!(0, _lodash.isEmpty)(id)) {
              _context6.next = 6;
              break;
            }
            throw _commons["default"].newError('userE003');
          case 6:
            // validate inputs
            error = _validators["default"].validatorUserChangePass(req.body);
            if (!error) {
              _context6.next = 9;
              break;
            }
            throw _commons["default"].newError('userE004');
          case 9:
            req.body = _helpers["default"].attributeHelper(req, req.body);
            _req$body4 = req.body, currentPassword = _req$body4.currentPassword, newPassword = _req$body4.newPassword, updatedAt = _req$body4.updatedAt, updatedBy = _req$body4.updatedBy;
            _context6.next = 13;
            return _repository["default"].getOne({
              type: 'UserModel',
              id: id,
              projection: {
                password: 1,
                passwordConfirm: 1
              }
            });
          case 13:
            user = _context6.sent;
            _context6.next = 16;
            return _bcrypt["default"].compare(currentPassword, user.password);
          case 16:
            isValidCompare = _context6.sent;
            if (isValidCompare) {
              _context6.next = 19;
              break;
            }
            throw _commons["default"].newError('userE005');
          case 19:
            _context6.next = 21;
            return _bcrypt["default"].hash(newPassword, _conf.options.bcryptOptions.salt);
          case 21:
            hashNewPass = _context6.sent;
            user.password = hashNewPass;
            user.passwordConfirm = hashNewPass;
            user.updatedAt = updatedAt;
            user.updatedBy = updatedBy;
            _context6.next = 28;
            return user.save();
          case 28:
            _context6.next = 30;
            return _transfers["default"].userTransfer(user);
          case 30:
            result = _context6.sent;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function changePassUser Orchestrator has been end'
            });
            return _context6.abrupt("return", {
              result: {
                data: result
              },
              msg: 'userS006'
            });
          case 35:
            _context6.prev = 35;
            _context6.t0 = _context6["catch"](1);
            logger.log({
              level: _constants["default"].LOG_LEVELS.ERROR,
              message: 'Function changePassUser Orchestrator has been error',
              args: _utils["default"].parseError(_context6.t0)
            });
            return _context6.abrupt("return", _bluebird["default"].reject(_context6.t0));
          case 39:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 35]]);
  }));
  return function changePassUser(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

/**
 * @description Set Password User By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var setPassUser = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(toolBox) {
    var req, id, error, _req$body5, password, isPasswordTemporary, updatedAt, updatedBy, hashPass, user, result;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            req = toolBox.req;
            _context7.prev = 1;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function setPassUser Orchestrator has been start'
            });
            id = req.params.id;
            if (!(0, _lodash.isEmpty)(id)) {
              _context7.next = 6;
              break;
            }
            throw _commons["default"].newError('userE003');
          case 6:
            /// validate inputs
            error = _validators["default"].validatorUserSetPass(req.body);
            if (!error) {
              _context7.next = 9;
              break;
            }
            throw _commons["default"].newError('userE006');
          case 9:
            req.body = _helpers["default"].attributeHelper(req, req.body);
            _req$body5 = req.body, password = _req$body5.password, isPasswordTemporary = _req$body5.isPasswordTemporary, updatedAt = _req$body5.updatedAt, updatedBy = _req$body5.updatedBy; // hash pass
            _context7.next = 13;
            return _bcrypt["default"].hash(password, _conf.options.bcryptOptions.salt);
          case 13:
            hashPass = _context7.sent;
            _context7.next = 16;
            return _repository["default"].updateOne({
              type: 'UserModel',
              id: id,
              doc: {
                password: hashPass,
                passwordConfirm: hashPass,
                isPasswordSet: true,
                isPasswordTemporary: isPasswordTemporary,
                updatedAt: updatedAt,
                updatedBy: updatedBy
              },
              options: {
                populate: [{
                  path: 'roles',
                  select: 'id name'
                }]
              }
            });
          case 16:
            user = _context7.sent;
            _context7.next = 19;
            return _transfers["default"].userTransfer(user);
          case 19:
            result = _context7.sent;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function setPassUser Orchestrator has been end'
            });
            return _context7.abrupt("return", {
              result: {
                data: result
              },
              msg: 'userS007'
            });
          case 24:
            _context7.prev = 24;
            _context7.t0 = _context7["catch"](1);
            logger.log({
              level: _constants["default"].LOG_LEVELS.ERROR,
              message: 'Function setPassUser Orchestrator has been error',
              args: _utils["default"].parseError(_context7.t0)
            });
            return _context7.abrupt("return", _bluebird["default"].reject(_context7.t0));
          case 28:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 24]]);
  }));
  return function setPassUser(_x7) {
    return _ref7.apply(this, arguments);
  };
}();

/**
 * @description Reset Password User By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var resetPassUser = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(toolBox) {
    var req, id, error, _req$body6, password, updatedAt, updatedBy, hashPass;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            req = toolBox.req;
            _context8.prev = 1;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function resetPassUser Orchestrator has been start'
            });
            id = req.params.id;
            if (!(0, _lodash.isEmpty)(id)) {
              _context8.next = 6;
              break;
            }
            throw _commons["default"].newError('userE003');
          case 6:
            // validate inputs
            error = _validators["default"].validatorUserResetPass(req.body);
            if (!error) {
              _context8.next = 9;
              break;
            }
            throw _commons["default"].newError('userE007');
          case 9:
            req.body = _helpers["default"].attributeHelper(req, req.body);
            _req$body6 = req.body, password = _req$body6.password, updatedAt = _req$body6.updatedAt, updatedBy = _req$body6.updatedBy; // hash pass
            _context8.next = 13;
            return _bcrypt["default"].hash(password, _conf.options.bcryptOptions.salt);
          case 13:
            hashPass = _context8.sent;
            _context8.next = 16;
            return _repository["default"].updateOne({
              type: 'UserModel',
              id: id,
              doc: {
                password: hashPass,
                passwordConfirm: hashPass,
                updatedAt: updatedAt,
                updatedBy: updatedBy
              }
            });
          case 16:
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function resetPassUser Orchestrator has been end'
            });
            return _context8.abrupt("return", {
              result: {
                data: null
              },
              msg: 'userS008'
            });
          case 20:
            _context8.prev = 20;
            _context8.t0 = _context8["catch"](1);
            logger.log({
              level: _constants["default"].LOG_LEVELS.ERROR,
              message: 'Function resetPassUser Orchestrator has been error',
              args: _utils["default"].parseError(_context8.t0)
            });
            return _context8.abrupt("return", _bluebird["default"].reject(_context8.t0));
          case 24:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 20]]);
  }));
  return function resetPassUser(_x8) {
    return _ref8.apply(this, arguments);
  };
}();

/**
 * @description Add Roles To User By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var addRolesToUser = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(toolBox) {
    var req, id, _req$body7, availableRoles, assignedRoles, updatedAt, updatedBy, idsAssignedRoles, idsUnAssignedRoles, user, result;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            req = toolBox.req;
            _context9.prev = 1;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function addRolesToUser Orchestrator has been start'
            });
            id = req.params.id;
            if (!(0, _lodash.isEmpty)(id)) {
              _context9.next = 6;
              break;
            }
            throw _commons["default"].newError('userE003');
          case 6:
            req.body = _helpers["default"].attributeHelper(req, req.body);
            _req$body7 = req.body, availableRoles = _req$body7.availableRoles, assignedRoles = _req$body7.assignedRoles, updatedAt = _req$body7.updatedAt, updatedBy = _req$body7.updatedBy;
            idsAssignedRoles = assignedRoles.map(function (e) {
              return e.id;
            });
            idsUnAssignedRoles = availableRoles.map(function (e) {
              return e.id;
            }); // add role to user
            _context9.next = 12;
            return _repository["default"].updateOne({
              type: 'UserModel',
              id: id,
              doc: {
                roles: idsAssignedRoles,
                updatedAt: updatedAt,
                updatedBy: updatedBy
              },
              options: {
                populate: [{
                  path: 'roles',
                  select: 'id name'
                }]
              }
            });
          case 12:
            user = _context9.sent;
            _context9.next = 15;
            return _repository["default"].bulkWrite({
              type: 'RoleModel',
              pipelines: [{
                updateMany: {
                  filter: {
                    _id: {
                      $in: idsAssignedRoles
                    }
                  },
                  update: {
                    $addToSet: {
                      users: id
                    },
                    updatedAt: updatedAt,
                    updatedBy: updatedBy
                  }
                }
              }, {
                updateMany: {
                  filter: {
                    _id: {
                      $in: idsUnAssignedRoles
                    }
                  },
                  update: {
                    $pull: {
                      users: id
                    },
                    updatedAt: updatedAt,
                    updatedBy: updatedBy
                  }
                }
              }]
            });
          case 15:
            _context9.next = 17;
            return _transfers["default"].userTransfer(user);
          case 17:
            result = _context9.sent;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function addRolesToUser Orchestrator has been end'
            });
            return _context9.abrupt("return", {
              result: {
                data: result
              },
              msg: 'userS009'
            });
          case 22:
            _context9.prev = 22;
            _context9.t0 = _context9["catch"](1);
            logger.log({
              level: _constants["default"].LOG_LEVELS.ERROR,
              message: 'Function addRolesToUser Orchestrator has been error',
              args: _utils["default"].parseError(_context9.t0)
            });
            return _context9.abrupt("return", _bluebird["default"].reject(_context9.t0));
          case 26:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 22]]);
  }));
  return function addRolesToUser(_x9) {
    return _ref9.apply(this, arguments);
  };
}();

/**
 * @description Helper
 * @param {*} id
 * @param {*} updatedAt
 * @param {*} updatedBy
 */
var removeUserInRoles = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(id, updatedAt, updatedBy) {
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function removeUserInRoles Orchestrator has been start'
            });
            _context10.next = 3;
            return _repository["default"].updateMany({
              type: 'RoleModel',
              filter: {
                users: {
                  $elemMatch: {
                    $eq: id
                  }
                }
              },
              doc: {
                $pull: {
                  users: id
                },
                updatedAt: updatedAt,
                updatedBy: updatedBy
              }
            });
          case 3:
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function removeUserInRoles Orchestrator has been end'
            });
          case 4:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return function removeUserInRoles(_x10, _x11, _x12) {
    return _ref10.apply(this, arguments);
  };
}();
var userOrchestrator = {
  getAllUser: getAllUser,
  createUser: createUser,
  getUser: getUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
  changePassUser: changePassUser,
  setPassUser: setPassUser,
  resetPassUser: resetPassUser,
  addRolesToUser: addRolesToUser
};
var _default = userOrchestrator;
exports["default"] = _default;