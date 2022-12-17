'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roleSchema = void 0;
require("source-map-support/register");
var roleSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    }
  },
  required: ['name']
};
exports.roleSchema = roleSchema;