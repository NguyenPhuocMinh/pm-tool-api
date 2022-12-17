'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _templateBuild = require("./template-build");
var _responseBuild = require("./response-build");
var _lookupBuild = require("./lookup-build");
var _default = {
  newErrorTemplate: _templateBuild.newErrorTemplate,
  newSuccessTemplate: _templateBuild.newSuccessTemplate,
  errorResponse: _responseBuild.errorResponse,
  successResponse: _responseBuild.successResponse,
  modelLookup: _lookupBuild.modelLookup
};
exports["default"] = _default;