'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _mongoose = require("mongoose");
var _default = {
  name: 'OrderModel',
  attributes: {
    name: {
      type: String
    },
    description: {
      type: String
    },
    status: {
      type: String
    },
    deliveryTime: {
      type: String
    },
    deliveryFee: {
      type: Number
    },
    products: [{
      name: {
        type: _mongoose.Schema.Types.ObjectId,
        ref: 'ProductModel'
      },
      quantity: {
        type: Number
      }
    }],
    customer: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'CustomerModel'
    },
    total: {
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
    collection: 'orders'
  }
};
exports["default"] = _default;