'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _mongoose = require("mongoose");
var _default = {
  name: 'ProjectModel',
  attributes: {
    name: {
      type: String
    },
    startDay: {
      type: Date
    },
    endDay: {
      type: Date
    },
    organization: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'OrganizationModel'
    },
    users: [{
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
    collection: 'projects'
  }
};
exports["default"] = _default;