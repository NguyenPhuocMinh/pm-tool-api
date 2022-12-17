'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.projectSchema = void 0;
require("source-map-support/register");
var projectSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    }
  },
  required: ['name']
};
exports.projectSchema = projectSchema;