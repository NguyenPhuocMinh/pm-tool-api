'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _mongoose = require("mongoose");
var _default = {
  name: 'RoleModel',
  attributes: {
    name: {
      type: String
    },
    description: {
      type: String
    },
    users: [{
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'UserModel'
    }],
    permissions: [{
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'PermissionModel'
    }],
    // filter
    slug: {
      type: String
    },
    activated: {
      type: Boolean,
      "default": true
    },
    deleted: {
      type: Boolean,
      "default": false
    },
    createdAt: {
      type: Date
    },
    createdBy: {
      type: String
    },
    updatedAt: {
      type: Date
    },
    updatedBy: {
      type: String
    }
  },
  options: {
    collection: 'roles'
  }
};
exports["default"] = _default;