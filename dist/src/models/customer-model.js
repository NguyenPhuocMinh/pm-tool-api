'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _mongoose = require("mongoose");
var _default = {
  name: 'CustomerModel',
  attributes: {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    phoneNumber: {
      value: {
        type: String
      },
      countryCode: {
        type: String
      }
    },
    photoUrl: {
      type: String
    },
    address: {
      type: String
    },
    orders: [{
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'OrderModel'
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
    collection: 'customers'
  }
};
exports["default"] = _default;