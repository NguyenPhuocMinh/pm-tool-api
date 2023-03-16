'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _mongoose = require("mongoose");
var _default = {
  name: 'ProductModel',
  attributes: {
    name: {
      type: String
    },
    description: {
      type: String
    },
    image: {
      type: String
    },
    price: {
      type: Number
    },
    discount: {
      type: Number
    },
    category: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'CategoryModel'
    },
    rating: {
      type: Number
    },
    reviews: [{
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'ReviewerModel'
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
    collection: 'products'
  }
};
exports["default"] = _default;