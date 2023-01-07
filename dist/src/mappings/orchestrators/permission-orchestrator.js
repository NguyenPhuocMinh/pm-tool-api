'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _bluebird = _interopRequireDefault(require("bluebird"));
var _lodash = require("lodash");
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
var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_ORCHESTRATORS.PERMISSION_ORCHESTRATOR);

/**
 * @description Get All Permission Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var getAllPermission = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(toolBox) {
    var req, _helpers$paginationHe, skip, limit, query, sort, permissions, total, response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = toolBox.req;
            _context.prev = 1;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function getAllPermission Orchestrator has been start'
            });
            _helpers$paginationHe = _helpers["default"].paginationHelper(req.query), skip = _helpers$paginationHe.skip, limit = _helpers$paginationHe.limit;
            query = _helpers["default"].queryHelper(req.query, null, [{
              deleted: false
            }]);
            sort = _helpers["default"].sortHelper(req.query);
            _context.next = 8;
            return _repository["default"].findAll({
              type: 'PermissionModel',
              filter: query,
              projection: {
                __v: 0,
                createdBy: 0,
                updatedBy: 0
              },
              options: {
                skip: skip,
                limit: limit,
                sort: sort
              }
            });
          case 8:
            permissions = _context.sent;
            _context.next = 11;
            return _repository["default"].count({
              type: 'PermissionModel',
              filter: query
            });
          case 11:
            total = _context.sent;
            _context.next = 14;
            return _commons["default"].dataResponsesMapper(permissions);
          case 14:
            response = _context.sent;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function getAllPermission Orchestrator has been end'
            });
            return _context.abrupt("return", {
              result: {
                data: response,
                total: total
              },
              msg: 'perS001'
            });
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](1);
            logger.log({
              level: _constants["default"].LOG_LEVELS.ERROR,
              message: 'Function getAllPermission Orchestrator has been error',
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
  return function getAllPermission(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * @description Create Permission Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var createPermission = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(toolBox) {
    var req, error, name, slug, isDuplicate, permission, data, result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            req = toolBox.req;
            _context2.prev = 1;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function createPermission Orchestrator has been start'
            });

            // validate inputs
            error = _validators["default"].validatorPermission(req.body);
            if (!error) {
              _context2.next = 6;
              break;
            }
            throw _commons["default"].newError('perE001');
          case 6:
            name = req.body.name;
            slug = _helpers["default"].slugHelper(name); // check duplicate slug
            _context2.next = 10;
            return _helpers["default"].duplicateHelper('PermissionModel', {
              slug: slug
            });
          case 10:
            isDuplicate = _context2.sent;
            if (!isDuplicate) {
              _context2.next = 13;
              break;
            }
            throw _commons["default"].newError('perE002');
          case 13:
            permission = (0, _lodash.assign)(req.body, {
              slug: slug
            });
            permission = _helpers["default"].attributeHelper(req, permission, 'create');
            _context2.next = 17;
            return _repository["default"].createOne({
              type: 'PermissionModel',
              doc: permission
            });
          case 17:
            data = _context2.sent;
            _context2.next = 20;
            return _transfers["default"].permissionTransfer(data);
          case 20:
            result = _context2.sent;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function createPermission Orchestrator has been end'
            });
            return _context2.abrupt("return", {
              result: {
                data: result
              },
              msg: 'perS002'
            });
          case 25:
            _context2.prev = 25;
            _context2.t0 = _context2["catch"](1);
            logger.log({
              level: _constants["default"].LOG_LEVELS.ERROR,
              message: 'Function createPermission Orchestrator has been error',
              args: _utils["default"].parseError(_context2.t0)
            });
            return _context2.abrupt("return", _bluebird["default"].reject(_context2.t0));
          case 29:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 25]]);
  }));
  return function createPermission(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * @description Get Permission By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var getPermission = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(toolBox) {
    var req, id, permission, result;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            req = toolBox.req;
            _context3.prev = 1;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function getPermission Orchestrator has been start'
            });
            id = req.params.id;
            if (!(0, _lodash.isEmpty)(id)) {
              _context3.next = 6;
              break;
            }
            throw _commons["default"].newError('perE003');
          case 6:
            _context3.next = 8;
            return _repository["default"].getOne({
              type: 'PermissionModel',
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
            permission = _context3.sent;
            _context3.next = 11;
            return _transfers["default"].permissionTransfer(permission);
          case 11:
            result = _context3.sent;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function getPermission Orchestrator has been end'
            });
            return _context3.abrupt("return", {
              result: {
                data: result
              },
              msg: 'perS003'
            });
          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](1);
            logger.log({
              level: _constants["default"].LOG_LEVELS.ERROR,
              message: 'Function getPermission Orchestrator has been error',
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
  return function getPermission(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * @description Update Permission By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var updatePermission = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(toolBox) {
    var req, id, error, _req$body, name, activated, slug, isDuplicate, permission, data, result;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            req = toolBox.req;
            _context4.prev = 1;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function updatePermission Orchestrator has been start'
            });
            id = req.params.id;
            if (!(0, _lodash.isEmpty)(id)) {
              _context4.next = 6;
              break;
            }
            throw _commons["default"].newError('perE003');
          case 6:
            error = _validators["default"].validatorPermission(req.body);
            if (!error) {
              _context4.next = 9;
              break;
            }
            throw _commons["default"].newError('perE001');
          case 9:
            _req$body = req.body, name = _req$body.name, activated = _req$body.activated;
            slug = _utils["default"].formatSlug(name); // check duplicate slug
            _context4.next = 13;
            return _helpers["default"].duplicateHelper('PermissionModel', {
              slug: slug,
              _id: {
                $ne: id
              }
            });
          case 13:
            isDuplicate = _context4.sent;
            if (!isDuplicate) {
              _context4.next = 16;
              break;
            }
            throw _commons["default"].newError('perE002');
          case 16:
            permission = (0, _lodash.assign)(req.body, {
              slug: slug
            });
            permission = _helpers["default"].attributeHelper(req, permission);
            _context4.next = 20;
            return _repository["default"].updateOne({
              type: 'PermissionModel',
              id: id,
              doc: permission,
              options: {
                populate: [{
                  path: 'roles',
                  select: '_id name'
                }]
              }
            });
          case 20:
            data = _context4.sent;
            if (activated) {
              _context4.next = 28;
              break;
            }
            if ((0, _lodash.isEmpty)(data.roles)) {
              _context4.next = 28;
              break;
            }
            _context4.next = 25;
            return _repository["default"].updateOne({
              type: 'PermissionModel',
              id: id,
              doc: {
                roles: []
              }
            });
          case 25:
            data = _context4.sent;
            _context4.next = 28;
            return removePermissionsInRoles(id, permission.updatedAt, permission.updatedBy);
          case 28:
            _context4.next = 30;
            return _transfers["default"].permissionTransfer(data);
          case 30:
            result = _context4.sent;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function updatePermission Orchestrator has been end'
            });
            return _context4.abrupt("return", {
              result: {
                data: result
              },
              msg: 'perS004'
            });
          case 35:
            _context4.prev = 35;
            _context4.t0 = _context4["catch"](1);
            logger.log({
              level: _constants["default"].LOG_LEVELS.ERROR,
              message: 'Function updatePermission Orchestrator has been error',
              args: _utils["default"].parseError(_context4.t0)
            });
            return _context4.abrupt("return", _bluebird["default"].reject(_context4.t0));
          case 39:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 35]]);
  }));
  return function updatePermission(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * @description Delete Permission By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var deletePermission = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(toolBox) {
    var req, id, _req$body2, updatedAt, updatedBy, result;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            req = toolBox.req;
            _context5.prev = 1;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function deletePermission Orchestrator has been start'
            });
            id = req.params.id;
            req.body = _helpers["default"].attributeHelper(req, req.body);
            _req$body2 = req.body, updatedAt = _req$body2.updatedAt, updatedBy = _req$body2.updatedBy;
            if (!(0, _lodash.isEmpty)(id)) {
              _context5.next = 8;
              break;
            }
            throw _commons["default"].newError('perE003');
          case 8:
            _context5.next = 10;
            return _repository["default"].deleteOne({
              type: 'PermissionModel',
              id: id
            });
          case 10:
            result = _context5.sent;
            _context5.next = 13;
            return removePermissionsInRoles(id, updatedAt, updatedBy);
          case 13:
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function deletePermission Orchestrator has been end'
            });
            return _context5.abrupt("return", {
              result: {
                data: result
              },
              msg: 'perS005'
            });
          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](1);
            logger.log({
              level: _constants["default"].LOG_LEVELS.ERROR,
              message: 'Function deletePermission Orchestrator has been error',
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
  return function deletePermission(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * @description Add Roles To Permission By ID Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var addRolesToPermission = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(toolBox) {
    var req, id, _req$body3, availableRoles, assignedRoles, updatedAt, updatedBy, idsAssignedRoles, idsUnAssignedRoles, permission, result;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            req = toolBox.req;
            _context6.prev = 1;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function addRolesToPermission Orchestrator has been start'
            });
            id = req.params.id;
            req.body = _helpers["default"].attributeHelper(req, req.body);
            _req$body3 = req.body, availableRoles = _req$body3.availableRoles, assignedRoles = _req$body3.assignedRoles, updatedAt = _req$body3.updatedAt, updatedBy = _req$body3.updatedBy;
            idsAssignedRoles = assignedRoles.map(function (e) {
              return e.id;
            });
            idsUnAssignedRoles = availableRoles.map(function (e) {
              return e.id;
            }); // add role to permission
            _context6.next = 10;
            return _repository["default"].updateOne({
              type: 'PermissionModel',
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
          case 10:
            permission = _context6.sent;
            _context6.next = 13;
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
                      permissions: id
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
                      permissions: id
                    },
                    updatedAt: updatedAt,
                    updatedBy: updatedBy
                  }
                }
              }]
            });
          case 13:
            _context6.next = 15;
            return _transfers["default"].permissionTransfer(permission);
          case 15:
            result = _context6.sent;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function addRolesToPermission Orchestrator has been end'
            });
            return _context6.abrupt("return", {
              result: {
                data: result
              },
              msg: 'perS006'
            });
          case 20:
            _context6.prev = 20;
            _context6.t0 = _context6["catch"](1);
            logger.log({
              level: _constants["default"].LOG_LEVELS.ERROR,
              message: 'Function addRolesToPermission has been error',
              args: _utils["default"].parseError(_context6.t0)
            });
            return _context6.abrupt("return", _bluebird["default"].reject(_context6.t0));
          case 24:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 20]]);
  }));
  return function addRolesToPermission(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

/**
 * @description Helper
 * @param {*} id
 * @param {*} updatedAt
 * @param {*} updatedBy
 */
var removePermissionsInRoles = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(id, updatedAt, updatedBy) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function removePermissionsInRoles Orchestrator has been start'
            });
            _context7.next = 3;
            return _repository["default"].updateMany({
              type: 'RoleModel',
              filter: {
                permissions: {
                  $elemMatch: {
                    $eq: id
                  }
                }
              },
              doc: {
                $pull: {
                  permissions: id
                },
                updatedAt: updatedAt,
                updatedBy: updatedBy
              }
            });
          case 3:
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function removePermissionsInRoles has been end'
            });
          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return function removePermissionsInRoles(_x7, _x8, _x9) {
    return _ref7.apply(this, arguments);
  };
}();
var permissionOrchestrator = {
  getAllPermission: getAllPermission,
  createPermission: createPermission,
  getPermission: getPermission,
  updatePermission: updatePermission,
  deletePermission: deletePermission,
  addRolesToPermission: addRolesToPermission
};
var _default = permissionOrchestrator;
exports["default"] = _default;