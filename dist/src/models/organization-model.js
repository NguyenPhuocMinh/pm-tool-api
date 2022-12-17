'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _mongoose = require("mongoose");
var _default = {
  name: 'OrganizationModel',
  attributes: {
    name: {
      type: String
    },
    projects: [{
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'ProjectModel'
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
    collection: 'organizations'
  }
};
exports["default"] = _default;