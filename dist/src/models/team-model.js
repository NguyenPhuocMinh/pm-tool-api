'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _mongoose = require("mongoose");
var _default = {
  name: 'TeamModel',
  attributes: {
    name: {
      type: String
    },
    project: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'ProjectModel'
    },
    members: [{
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'UserModel'
    }],
    // filter
    slug: {
      type: String
    },
    deleted: {
      type: Boolean,
      "default": false
    },
    activated: {
      type: Boolean,
      "default": true
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
    collection: 'teams'
  }
};
exports["default"] = _default;