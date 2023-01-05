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
var logger = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_ORCHESTRATORS.ORGANIZATION_ORCHESTRATOR);

/**
 * @description Get All Organization Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var getAllOrganization = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(toolBox) {
    var req, _helpers$paginationHe, skip, limit, query, sort, organizations, total, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = toolBox.req;
            _context.prev = 1;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function getAllOrganization has been start'
            });
            _helpers$paginationHe = _helpers["default"].paginationHelper(req.query), skip = _helpers$paginationHe.skip, limit = _helpers$paginationHe.limit;
            query = _helpers["default"].queryHelper(req.query);
            sort = _helpers["default"].sortHelper(req.query);
            _context.next = 8;
            return _repository["default"].findAll({
              type: 'OrganizationModel',
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
            organizations = _context.sent;
            _context.next = 11;
            return _repository["default"].count({
              type: 'OrganizationModel',
              filter: query
            });
          case 11:
            total = _context.sent;
            _context.next = 14;
            return _commons["default"].dataResponsesMapper(organizations);
          case 14:
            result = _context.sent;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function getAllOrganization has been end'
            });
            return _context.abrupt("return", {
              result: {
                data: result,
                total: total
              },
              msg: 'organizationS001'
            });
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](1);
            logger.log({
              level: _constants["default"].LOG_LEVELS.ERROR,
              message: 'Function getAllOrganization has been error',
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
  return function getAllOrganization(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * @description Create Organization Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var createOrganization = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(toolBox) {
    var req, error, name, slug, isDuplicate, organization, data, result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            req = toolBox.req;
            _context2.prev = 1;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function createOrganization has been start'
            });

            // validate inputs
            error = _validators["default"].validatorOrganization(req.body);
            if (!error) {
              _context2.next = 6;
              break;
            }
            throw _commons["default"].newError('organizationE001');
          case 6:
            name = req.body.name;
            slug = _helpers["default"].slugHelper(name); // check duplicate slug
            _context2.next = 10;
            return _helpers["default"].duplicateHelper('OrganizationModel', {
              slug: slug
            });
          case 10:
            isDuplicate = _context2.sent;
            if (!isDuplicate) {
              _context2.next = 13;
              break;
            }
            throw _commons["default"].newError('organizationE002');
          case 13:
            organization = (0, _lodash.assign)(req.body, {
              slug: slug
            });
            organization = _helpers["default"].attributeHelper(req, organization, 'create');
            _context2.next = 17;
            return _repository["default"].createOne({
              type: 'OrganizationModel',
              doc: organization
            });
          case 17:
            data = _context2.sent;
            result = _transfers["default"].organizationTransfer(data);
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function createOrganization has been end'
            });
            return _context2.abrupt("return", {
              result: {
                data: result
              },
              msg: 'organizationS002'
            });
          case 23:
            _context2.prev = 23;
            _context2.t0 = _context2["catch"](1);
            logger.log({
              level: _constants["default"].LOG_LEVELS.ERROR,
              message: 'Function createOrganization has been error',
              args: _utils["default"].parseError(_context2.t0)
            });
            return _context2.abrupt("return", _bluebird["default"].reject(_context2.t0));
          case 27:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 23]]);
  }));
  return function createOrganization(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * @description Create Organization Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var getOrganization = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(toolBox) {
    var req, id, organization, result;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            req = toolBox.req;
            _context3.prev = 1;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function getOrganization has been start'
            });
            id = req.params.id;
            if (!(0, _lodash.isEmpty)(id)) {
              _context3.next = 6;
              break;
            }
            throw _commons["default"].newError('organizationE003');
          case 6:
            _context3.next = 8;
            return _repository["default"].getOne({
              type: 'OrganizationModel',
              id: id,
              projection: {
                __v: 0
              }
            });
          case 8:
            organization = _context3.sent;
            result = _transfers["default"].organizationTransfer(organization);
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function getOrganization has been end'
            });
            return _context3.abrupt("return", {
              result: {
                data: result
              },
              msg: 'organizationS003'
            });
          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](1);
            logger.log({
              level: _constants["default"].LOG_LEVELS.ERROR,
              message: 'Function getOrganization has been error',
              args: _utils["default"].parseError(_context3.t0)
            });
            return _context3.abrupt("return", _bluebird["default"].reject(_context3.t0));
          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 14]]);
  }));
  return function getOrganization(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * @description Update Organization Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var updateOrganization = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(toolBox) {
    var req, id, error, name, slug, isDuplicate, organization, data, result;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            req = toolBox.req;
            _context4.prev = 1;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function updateOrganization has been start'
            });
            id = req.params.id;
            if (!(0, _lodash.isEmpty)(id)) {
              _context4.next = 6;
              break;
            }
            throw _commons["default"].newError('organizationE003');
          case 6:
            // validate inputs
            error = _validators["default"].validatorOrganization(req.body);
            if (!error) {
              _context4.next = 9;
              break;
            }
            throw _commons["default"].newError('organizationE001');
          case 9:
            name = req.body.name;
            slug = _helpers["default"].slugHelper(name); // check duplicate slug
            _context4.next = 13;
            return _helpers["default"].duplicateHelper('OrganizationModel', {
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
            throw _commons["default"].newError('organizationE002');
          case 16:
            organization = (0, _lodash.assign)(req.body, {
              slug: slug
            });
            organization = _helpers["default"].attributeHelper(req, organization);
            _context4.next = 20;
            return _repository["default"].updateOne({
              type: 'OrganizationModel',
              id: id,
              organization: organization
            });
          case 20:
            data = _context4.sent;
            result = _transfers["default"].organizationTransfer(data);
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function updateOrganization has been end'
            });
            return _context4.abrupt("return", {
              result: {
                data: result
              },
              msg: 'organizationS004'
            });
          case 26:
            _context4.prev = 26;
            _context4.t0 = _context4["catch"](1);
            logger.log({
              level: _constants["default"].LOG_LEVELS.ERROR,
              message: 'Function updateOrganization has been error',
              args: _utils["default"].parseError(_context4.t0)
            });
            return _context4.abrupt("return", _bluebird["default"].reject(_context4.t0));
          case 30:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 26]]);
  }));
  return function updateOrganization(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * @description Delete Organization Orchestrator
 * @param {*} toolBox { req, res, next }
 */
var deleteOrganization = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(toolBox) {
    var req, id, result;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            req = toolBox.req;
            _context5.prev = 1;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function deleteOrganization has been start'
            });
            id = req.params.id;
            if (!(0, _lodash.isEmpty)(id)) {
              _context5.next = 6;
              break;
            }
            throw _commons["default"].newError('organizationE003');
          case 6:
            _context5.next = 8;
            return _repository["default"].deleteOne({
              type: 'OrganizationModel',
              id: id
            });
          case 8:
            result = _context5.sent;
            logger.log({
              level: _constants["default"].LOG_LEVELS.INFO,
              message: 'Function deleteOrganization has been end'
            });
            return _context5.abrupt("return", {
              result: {
                data: result
              },
              msg: 'organizationS005'
            });
          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](1);
            logger.log({
              level: _constants["default"].LOG_LEVELS.ERROR,
              message: 'Function deleteOrganization has been error',
              args: _utils["default"].parseError(_context5.t0)
            });
            return _context5.abrupt("return", _bluebird["default"].reject(_context5.t0));
          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 13]]);
  }));
  return function deleteOrganization(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
var organizationOrchestrator = {
  getAllOrganization: getAllOrganization,
  createOrganization: createOrganization,
  getOrganization: getOrganization,
  updateOrganization: updateOrganization,
  deleteOrganization: deleteOrganization
};
var _default = organizationOrchestrator;
exports["default"] = _default;