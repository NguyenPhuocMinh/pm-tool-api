'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var organizationPermission = {
  GET_ALL: 'ORGANIZATION_GET_ALL',
  GET_ID: 'ORGANIZATION_GET_ID',
  CREATE: 'ORGANIZATION_CREATE',
  UPDATE: 'ORGANIZATION_UPDATE',
  DELETE: 'ORGANIZATION_DELETE',
  GET_PROJECT_IN_ORGANIZATION: 'GET_PROJECT_IN_ORGANIZATION',
  GET_PROJECT_NOT_ORGANIZATION: 'GET_PROJECT_NOT_ORGANIZATION',
  ADD_PROJECT_TO_ORGANIZATION: 'ADD_PROJECT_TO_ORGANIZATION',
  REMOVE_PROJECT_FROM_ORGANIZATION: 'REMOVE_PROJECT_FROM_ORGANIZATION'
};
var _default = organizationPermission;
exports["default"] = _default;