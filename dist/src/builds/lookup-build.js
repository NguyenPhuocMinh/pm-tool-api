'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modelLookup = void 0;
require("source-map-support/register");
var _mongoose = require("mongoose");
var _lodash = require("lodash");
var _constants = _interopRequireDefault(require("../constants"));
var _logger = _interopRequireDefault(require("../core/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// core

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_BUILDS.LOOKUP_BUILD);
var modelLookup = function modelLookup(schemas, type) {
  loggerFactory.info("FindModel has been start");
  var model = null;
  if ((0, _lodash.includes)(schemas, _mongoose.models[type])) {
    model = _mongoose.models[type];
    loggerFactory.info("FindModel has been end with find model", {
      args: {
        model: type
      }
    });
    return model;
  }
  loggerFactory.error("FindModel has been end with not found model");
  throw new Error('InvalidNameModel');
};
exports.modelLookup = modelLookup;