'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _mongoose = require("mongoose");
var _default = {
  name: 'NotifyModel',
  attributes: {
    user: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'UserModel'
    },
    // receiver
    sender: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'UserModel'
    },
    template: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'NotifyTemplateModel'
    },
    details: {
      isNew: {
        type: Boolean,
        "default": false
      },
      isRead: {
        type: Boolean,
        "default": false
      },
      readAt: {
        type: Date
      }
    },
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
    collection: 'notifies'
  }
};
exports["default"] = _default;