'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productSchema = void 0;
require("source-map-support/register");
var productSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    image: {
      type: 'string'
    },
    price: {
      type: 'number'
    },
    discount: {
      type: 'number'
    },
    category: {
      type: 'string'
    }
  },
  required: ['name', 'image', 'price', 'discount', 'category']
};
exports.productSchema = productSchema;