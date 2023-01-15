'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var teamPermission = {
  GET_ALL: 'TEAM_GET_ALL',
  GET_ID: 'TEAM_GET_ID',
  CREATE: 'TEAM_CREATE',
  UPDATE: 'TEAM_UPDATE',
  DELETE: 'TEAM_DELETE',
  GET_MEMBER_IN_TEAM: 'GET_MEMBER_IN_TEAM',
  GET_MEMBER_NOT_TEAM: 'GET_MEMBER_NOT_TEAM',
  ADD_MEMBER_TO_TEAM: 'ADD_MEMBER_TO_TEAM',
  REMOVE_MEMBER_FROM_TEAM: 'REMOVE_MEMBER_FROM_TEAM'
};
var _default = teamPermission;
exports["default"] = _default;