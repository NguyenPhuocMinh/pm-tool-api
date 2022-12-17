'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _errorCommon = require("./error-common");
var _mapperCommon = require("./mapper-common");
var _default = {
  newError: _errorCommon.newError,
  dataResponsesMapper: _mapperCommon.dataResponsesMapper,
  dataResponseMapper: _mapperCommon.dataResponseMapper
};
exports["default"] = _default;