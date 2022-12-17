'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _mongoose = require("mongoose");
var _default = {
  name: 'PermissionModel',
  attributes: {
    name: {
      type: String
    },
    description: {
      type: String
    },
    activated: {
      type: Boolean,
      "default": true
    },
    roles: [{
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'RoleModel'
    }],
    // filter
    slug: {
      type: String
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
    collection: 'permissions'
  }
};
exports["default"] = _default;