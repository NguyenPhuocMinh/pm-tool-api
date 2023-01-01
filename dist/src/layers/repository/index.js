'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _schemaLayer = _interopRequireDefault(require("../schema-layer"));
var _constants = _interopRequireDefault(require("../../constants"));
var _builds = _interopRequireDefault(require("../../builds"));
var _utils = _interopRequireDefault(require("../../utils"));
var _logger = _interopRequireDefault(require("../../core/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_LAYERS.REPOSITORY_LAYER);

/**
 * @description Find All
 * @example
 * const data = await database.findAll({
 *    type: 'UserModel',
 *    filter : { deleted: false },
 *    projection: { __v: 0 },
 *    options: {
 *      sort: sort,
 *      skip: 0,
 *      limit: 1000,
 *      populate: [
 *        {
 *          path: 'roles',
 *          select: 'name'
 *        }
 *      ]
 *    },
 * })
 * @see https://mongoosejs.com/docs/api/model.html#model_Model-find
 * @returns
 */
var findAll = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var type, _ref$filter, filter, _ref$projection, projection, options, model, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            type = _ref.type, _ref$filter = _ref.filter, filter = _ref$filter === void 0 ? {} : _ref$filter, _ref$projection = _ref.projection, projection = _ref$projection === void 0 ? {} : _ref$projection, options = _ref.options;
            _context.prev = 1;
            loggerFactory.data('Function findAll has been start');
            model = _builds["default"].modelLookup(_schemaLayer["default"], type);
            _context.next = 6;
            return model.find(filter, projection, options).exec();
          case 6:
            data = _context.sent;
            loggerFactory.data('Function findAll has been end');
            return _context.abrupt("return", data);
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            loggerFactory.error('Function findAll has been error', {
              args: _utils["default"].formatErrorMsg(_context.t0)
            });
            throw _context.t0;
          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11]]);
  }));
  return function findAll(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * @description Find One
 * @example
 * const data = await database.findOne({
 *    type: 'UserModel',
 *    filter : { deleted: false },
 *    projection: { __v: 0 },
 *    options: {
 *      populates: [
 *      {
 *        path: 'roles',
 *        select: 'name'
 *     }
 *    }
 * })
 * @see https://mongoosejs.com/docs/api/model.html#model_Model-findOne
 * @returns {Object} data
 */
var findOne = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref3) {
    var type, _ref3$filter, filter, _ref3$projection, projection, options, model, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            type = _ref3.type, _ref3$filter = _ref3.filter, filter = _ref3$filter === void 0 ? {} : _ref3$filter, _ref3$projection = _ref3.projection, projection = _ref3$projection === void 0 ? {} : _ref3$projection, options = _ref3.options;
            _context2.prev = 1;
            loggerFactory.data('Function findOne has been start');
            model = _builds["default"].modelLookup(_schemaLayer["default"], type);
            _context2.next = 6;
            return model.findOne(filter, projection, options).exec();
          case 6:
            data = _context2.sent;
            loggerFactory.data('Function findOne has been end');
            return _context2.abrupt("return", data);
          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](1);
            loggerFactory.error('Function findOne has been error', {
              args: _utils["default"].formatErrorMsg(_context2.t0)
            });
            throw _context2.t0;
          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 11]]);
  }));
  return function findOne(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * @description Get
 * @example
 * const data = await database.getOne({
 *    type: 'UserModel',
 *    id: '123'
 *    projection: { __v: 0 },
 *    options: {
 *        populates: [
 *         {
 *           path: 'roles',
 *           select: 'name'
 *        }
 *      ]
 *    }
 * })
 * @see https://mongoosejs.com/docs/api/model.html#model_Model-findById
 * @returns
 */
var getOne = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref5) {
    var type, id, projection, options, model, data;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            type = _ref5.type, id = _ref5.id, projection = _ref5.projection, options = _ref5.options;
            _context3.prev = 1;
            loggerFactory.data('Function get has been start');
            model = _builds["default"].modelLookup(_schemaLayer["default"], type);
            _context3.next = 6;
            return model.findById(id, projection, options).exec();
          case 6:
            data = _context3.sent;
            loggerFactory.data('Function get has been end');
            return _context3.abrupt("return", data);
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](1);
            loggerFactory.error('Function get has been error', {
              args: _utils["default"].formatErrorMsg(_context3.t0)
            });
            throw _context3.t0;
          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 11]]);
  }));
  return function getOne(_x3) {
    return _ref6.apply(this, arguments);
  };
}();

/**
 * @description Create
 * @example
 * const data = await database.createOne({
 *    type: 'UserModel',
 *    doc : { name: 'John Doe },
 * @see https://mongoosejs.com/docs/api/model.html#model_Model-create
 * @returns {Object} data
 */
var createOne = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_ref7) {
    var type, doc, model, data;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            type = _ref7.type, doc = _ref7.doc;
            _context4.prev = 1;
            loggerFactory.data('Function createOne has been start');
            model = _builds["default"].modelLookup(_schemaLayer["default"], type);
            _context4.next = 6;
            return model.create(doc);
          case 6:
            data = _context4.sent;
            loggerFactory.data('Function createOne has been end');
            return _context4.abrupt("return", data);
          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](1);
            loggerFactory.error('Function createOne has been error', {
              args: _utils["default"].formatErrorMsg(_context4.t0)
            });
            throw _context4.t0;
          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 11]]);
  }));
  return function createOne(_x4) {
    return _ref8.apply(this, arguments);
  };
}();

/**
 * @description Update by id
 * @example
 * const data = await database.updateOne({
 *    type: 'UserModel',
 *    id: 123,
 *    docs: { name: 'John Doe },
 * })
 * @see https://mongoosejs.com/docs/api/model.html#model_Model-findByIdAndUpdate
 * @returns
 */
var updateOne = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(_ref9) {
    var type, id, doc, options, model, data;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            type = _ref9.type, id = _ref9.id, doc = _ref9.doc, options = _ref9.options;
            _context5.prev = 1;
            loggerFactory.data('Function updateOne has been start');
            model = _builds["default"].modelLookup(_schemaLayer["default"], type);
            _context5.next = 6;
            return model.findByIdAndUpdate(id, doc, _objectSpread({
              "new": true
            }, options)).exec();
          case 6:
            data = _context5.sent;
            loggerFactory.data('Function updateOne has been end');
            return _context5.abrupt("return", data);
          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](1);
            loggerFactory.error('Function updateOne has been error', {
              args: _utils["default"].formatErrorMsg(_context5.t0)
            });
            throw _context5.t0;
          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 11]]);
  }));
  return function updateOne(_x5) {
    return _ref10.apply(this, arguments);
  };
}();

/**
 * @description Delete by id
 * @example
 * const data = await database.deleteOne({
 *    type: 'UserModel',
 *    id: 123,
 * })
 * @see https://mongoosejs.com/docs/api/model.html#model_Model-findByIdAndRemove
 * @returns
 */
var deleteOne = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(_ref11) {
    var type, id, options, model, data;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            type = _ref11.type, id = _ref11.id, options = _ref11.options;
            _context6.prev = 1;
            loggerFactory.data('Function deleteID has been start');
            model = _builds["default"].modelLookup(_schemaLayer["default"], type);
            _context6.next = 6;
            return model.findByIdAndRemove(id, options).exec();
          case 6:
            data = _context6.sent;
            loggerFactory.data('Function deleteID has been end');
            return _context6.abrupt("return", data);
          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](1);
            loggerFactory.error('Function deleteID has been error', {
              args: _utils["default"].formatErrorMsg(_context6.t0)
            });
            throw _context6.t0;
          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 11]]);
  }));
  return function deleteOne(_x6) {
    return _ref12.apply(this, arguments);
  };
}();

/**
 * @description Delete by id
 * @example
 * const data = await database.deleteMany({
 *    type: 'UserModel',
 *    filter: {
 *      id: 123
 *    },
 * })
 * @see https://mongoosejs.com/docs/api/model.html#model_Model-deleteMany
 * @returns
 */
var deleteMany = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(_ref13) {
    var type, filter, options, model, data;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            type = _ref13.type, filter = _ref13.filter, options = _ref13.options;
            _context7.prev = 1;
            loggerFactory.data('Function deleteMany has been start');
            model = _builds["default"].modelLookup(_schemaLayer["default"], type);
            _context7.next = 6;
            return model.deleteMany(filter, options).exec();
          case 6:
            data = _context7.sent;
            loggerFactory.data('Function deleteMany has been end');
            return _context7.abrupt("return", data);
          case 11:
            _context7.prev = 11;
            _context7.t0 = _context7["catch"](1);
            loggerFactory.error('Function deleteMany has been error', {
              args: _utils["default"].formatErrorMsg(_context7.t0)
            });
            throw _context7.t0;
          case 15:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 11]]);
  }));
  return function deleteMany(_x7) {
    return _ref14.apply(this, arguments);
  };
}();

/**
 * @description Count docs
 * @example
 * const data = await database.count({
 *    type: 'UserModel',
 *    filter : { deleted: false },
 * })
 *
 * @see https://mongoosejs.com/docs/api.html#model_Model-countDocuments
 * @returns
 */
var count = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(_ref15) {
    var type, _ref15$filter, filter, model, _count;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            type = _ref15.type, _ref15$filter = _ref15.filter, filter = _ref15$filter === void 0 ? {} : _ref15$filter;
            _context8.prev = 1;
            loggerFactory.data('Function count has been start');
            model = _builds["default"].modelLookup(_schemaLayer["default"], type);
            _context8.next = 6;
            return model.countDocuments(filter).exec();
          case 6:
            _count = _context8.sent;
            loggerFactory.data('Function count has been end');
            return _context8.abrupt("return", _count);
          case 11:
            _context8.prev = 11;
            _context8.t0 = _context8["catch"](1);
            loggerFactory.error('Function count has been error', {
              args: _utils["default"].formatErrorMsg(_context8.t0)
            });
            throw _context8.t0;
          case 15:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 11]]);
  }));
  return function count(_x8) {
    return _ref16.apply(this, arguments);
  };
}();

/**
 * @description Update Many
 * @example
 * const data = await database.UpdateMany({
 *    type: 'UserModel',
 *    filter: {
 *      id: 123
 *    },
 *    doc: { name: "John doe" }
 * })
 * @see https://mongoosejs.com/docs/api/model.html#model_Model-updateMany
 * @returns
 */
var updateMany = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(_ref17) {
    var type, filter, doc, options, model, data;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            type = _ref17.type, filter = _ref17.filter, doc = _ref17.doc, options = _ref17.options;
            _context9.prev = 1;
            loggerFactory.data('Function updateMany has been start');
            model = _builds["default"].modelLookup(_schemaLayer["default"], type);
            _context9.next = 6;
            return model.updateMany(filter, doc, options).exec();
          case 6:
            data = _context9.sent;
            loggerFactory.data('Function updateMany has been end');
            return _context9.abrupt("return", data);
          case 11:
            _context9.prev = 11;
            _context9.t0 = _context9["catch"](1);
            loggerFactory.error('Function updateMany has been error', {
              args: _utils["default"].formatErrorMsg(_context9.t0)
            });
            throw _context9.t0;
          case 15:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 11]]);
  }));
  return function updateMany(_x9) {
    return _ref18.apply(this, arguments);
  };
}();

/**
 * @description bulkWrite
 * @see https://mongoosejs.com/docs/api/model.html#model_Model-bulkWrite
 * @returns
 */
var bulkWrite = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(_ref19) {
    var type, _ref19$pipelines, pipelines, options, model, data;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            type = _ref19.type, _ref19$pipelines = _ref19.pipelines, pipelines = _ref19$pipelines === void 0 ? [] : _ref19$pipelines, options = _ref19.options;
            _context10.prev = 1;
            loggerFactory.data('Function bulkWrite has been start');
            model = _builds["default"].modelLookup(_schemaLayer["default"], type);
            data = model.bulkWrite(pipelines, options);
            loggerFactory.data('Function bulkWrite has been end');
            return _context10.abrupt("return", data);
          case 9:
            _context10.prev = 9;
            _context10.t0 = _context10["catch"](1);
            loggerFactory.error('Function bulkWrite has been error', {
              args: _utils["default"].formatErrorMsg(_context10.t0)
            });
            throw _context10.t0;
          case 13:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[1, 9]]);
  }));
  return function bulkWrite(_x10) {
    return _ref20.apply(this, arguments);
  };
}();
var _default = {
  findAll: findAll,
  findOne: findOne,
  getOne: getOne,
  createOne: createOne,
  updateOne: updateOne,
  deleteOne: deleteOne,
  deleteMany: deleteMany,
  count: count,
  updateMany: updateMany,
  bulkWrite: bulkWrite
};
exports["default"] = _default;