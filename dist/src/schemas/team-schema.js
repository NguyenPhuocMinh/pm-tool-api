'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.teamSchema = void 0;
require("source-map-support/register");
var teamSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    }
  },
  required: ['name']
};
exports.teamSchema = teamSchema;