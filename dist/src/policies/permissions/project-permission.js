'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var projectPermission = {
  GET_ALL: 'PROJECT_GET_ALL',
  GET_ID: 'PROJECT_GET_ID',
  CREATE: 'PROJECT_CREATE',
  UPDATE: 'PROJECT_UPDATE',
  DELETE: 'PROJECT_DELETE',
  GET_TEAM_IN_PROJECT: 'GET_TEAM_IN_PROJECT',
  GET_TEAM_NOT_PROJECT: 'GET_TEAM_NOT_PROJECT',
  ADD_TEAM_TO_PROJECT: 'ADD_TEAM_TO_PROJECT',
  REMOVE_TEAM_FROM_PROJECT: 'REMOVE_TEAM_FROM_PROJECT'
};
var _default = projectPermission;
exports["default"] = _default;