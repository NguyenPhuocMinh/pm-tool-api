'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.organizationSchema = void 0;
require("source-map-support/register");
var organizationSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    }
  },
  required: ['name']
};
exports.organizationSchema = organizationSchema;