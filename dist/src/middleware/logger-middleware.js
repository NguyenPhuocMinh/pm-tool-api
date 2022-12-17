'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var uuid = _interopRequireWildcard(require("uuid"));
var _constants = _interopRequireDefault(require("../constants"));
var _logger = _interopRequireDefault(require("../core/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// core

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_MIDDLEWARE.LOG_MIDDLEWARE);
var loggerMiddleware = function loggerMiddleware(tokens, req, res) {
  var remoteAddr = tokens['remote-addr'](req);
  var remoteUser = tokens['remote-user'](req) || '-';
  var dateClf = tokens.date(req, res, 'clf');
  var method = tokens.method(req, res);
  var url = tokens.url(req, res);
  var protocol = req.protocol;
  var httpVersion = tokens['http-version'](req);
  var status = tokens.status(req, res) || '-';
  var contentLength = tokens.res(req, res, 'content-length') || '-';
  var resTime = tokens['response-time'](req, res) || '-';
  var referrer = tokens.referrer(req) || '-';
  var userAgent = tokens['user-agent'](req) || '-';
  var requestID = req.requestID || uuid.v4();
  var messageLog = "[".concat(requestID, "] - ").concat(remoteAddr, " - ").concat(remoteUser, " [").concat(dateClf, "] \"").concat(method, " ").concat(url, " ").concat(protocol, "/").concat(httpVersion, "\" ").concat(status, " ").concat(contentLength, " \"").concat(referrer, "\" \"").concat(userAgent, "\" - ").concat(resTime, " ms");
  switch (status) {
    case _constants["default"].HTTP_STATUS.BAD_REQUEST:
    case _constants["default"].HTTP_STATUS.UN_AUTHORIZATION:
    case _constants["default"].HTTP_STATUS.FORBIDDEN:
    case _constants["default"].HTTP_STATUS.NOT_FOUND:
      loggerFactory.warn(messageLog);
      break;
    case _constants["default"].HTTP_STATUS.INTERNAL_SERVER_ERROR:
      loggerFactory.error(messageLog);
      break;
    case _constants["default"].HTTP_STATUS.SUCCESS:
    case _constants["default"].HTTP_STATUS.CREATED:
    case _constants["default"].HTTP_STATUS.ACCEPTED:
      loggerFactory.info(messageLog);
      break;
    case _constants["default"].HTTP_STATUS.METHOD_NOT_ALLOW:
      loggerFactory.verbose(messageLog);
      break;
    case _constants["default"].HTTP_STATUS.DUPLICATE:
      loggerFactory.debug(messageLog);
      break;
    default:
      loggerFactory.silly(messageLog);
      break;
  }
};
var _default = loggerMiddleware;
exports["default"] = _default;