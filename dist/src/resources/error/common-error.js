'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _default = {
  e001: {
    message: 'common.notifications.errors.e001',
    description: 'Internal Server Error',
    returnCode: 0,
    statusCode: 500
  },
  e002: {
    message: 'common.notifications.errors.e002',
    description: 'Router Not Found Error',
    returnCode: 0,
    statusCode: 404
  },
  e003: {
    message: 'common.notifications.errors.e003',
    description: 'Orchestrator Handler Not Found',
    returnCode: 0,
    statusCode: 404
  },
  e004: {
    message: 'common.notifications.errors.e004',
    description: 'Schema Not Found',
    returnCode: 0,
    statusCode: 404
  }
};
exports["default"] = _default;