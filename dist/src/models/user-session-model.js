'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _mongoose = require("mongoose");
var _default = {
  name: 'UserSessionModel',
  attributes: {
    user: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'UserModel'
    },
    userAgent: {
      type: String
    },
    ipAddress: {
      type: String
    },
    startAccess: {
      type: Date
    },
    lastAccess: {
      type: Date
    },
    reason: {
      type: String
    },
    // filter
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
    collection: 'user-sessions'
  }
};
exports["default"] = _default;