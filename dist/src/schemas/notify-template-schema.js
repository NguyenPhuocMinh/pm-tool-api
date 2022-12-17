'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notifyTemplateSchema = void 0;
require("source-map-support/register");
var notifyTemplateSchema = {
  type: 'object',
  properties: {
    topic: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    content: {
      type: 'string'
    },
    type: {
      type: 'string'
    }
  },
  required: ['topic', 'description', 'content', 'type']
};
exports.notifyTemplateSchema = notifyTemplateSchema;