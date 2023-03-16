'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customerRegisterSchema = void 0;
require("source-map-support/register");
var customerRegisterSchema = {
  type: 'object',
  properties: {
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    phoneNumber: {
      type: 'string'
    }
  },
  required: ['firstName', 'lastName', 'phoneNumber']
};
exports.customerRegisterSchema = customerRegisterSchema;