'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signOutSchema = exports.signInSchema = exports.refreshTokenSchema = void 0;
require("source-map-support/register");
var signInSchema = {
  type: 'object',
  properties: {
    email: {
      type: 'string'
    },
    password: {
      type: 'string'
    }
  },
  required: ['email', 'password']
};
exports.signInSchema = signInSchema;
var signOutSchema = {
  type: 'object',
  properties: {
    email: {
      type: 'string'
    }
  },
  required: ['email']
};
exports.signOutSchema = signOutSchema;
var refreshTokenSchema = {
  type: 'object',
  properties: {
    email: {
      type: 'string'
    }
  },
  required: ['email']
};
exports.refreshTokenSchema = refreshTokenSchema;