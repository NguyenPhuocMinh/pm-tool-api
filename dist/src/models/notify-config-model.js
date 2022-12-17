'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _mongoose = require("mongoose");
var _default = {
  name: 'NotifyConfigModel',
  attributes: {
    notifyTemplate: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'NotifyTemplateModel'
    },
    sender: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'UserModel'
    },
    receiver: [{
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'UserModel'
    }],
    isAuto: {
      type: Boolean,
      "default": false
    },
    isSendNow: {
      type: Boolean,
      "default": false
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
      type: Date,
      "default": Date.now()
    },
    createdBy: {
      type: String
    },
    updatedAt: {
      type: Date,
      "default": Date.now()
    },
    updatedBy: {
      type: String
    }
  },
  options: {
    collection: 'notify-configs'
  }
};
exports["default"] = _default;