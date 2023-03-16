'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _mongoose = require("mongoose");
var _default = {
  name: 'ReviewerModel',
  attributes: {
    customer: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'CustomerModel'
    },
    comment: {
      type: String
    },
    images: [{
      type: String
    }],
    rating: {
      type: Number
    },
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
    collection: 'reviewers'
  }
};
exports["default"] = _default;