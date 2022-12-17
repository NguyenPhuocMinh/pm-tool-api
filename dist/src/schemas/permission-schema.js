'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.permissionSchema = void 0;
require("source-map-support/register");
var permissionSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    }
  },
  required: ['name']
};
exports.permissionSchema = permissionSchema;