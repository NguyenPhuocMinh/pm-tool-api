'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseError = void 0;
require("source-map-support/register");
var parseError = function parseError(error) {
  return {
    errName: (error === null || error === void 0 ? void 0 : error.name) || 'Error',
    errMessage: (error === null || error === void 0 ? void 0 : error.message) || 'Internal Server Error'
  };
};
exports.parseError = parseError;