'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userSetPassSchema = exports.userResetPassSchema = exports.userEditSchema = exports.userCreateSchema = exports.userChangePassSchema = void 0;
require("source-map-support/register");
var userCreateSchema = {
  type: 'object',
  properties: {
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    email: {
      type: 'string',
      format: 'email'
    }
  },
  required: ['firstName', 'lastName', 'email'],
  additionalProperties: false
};
exports.userCreateSchema = userCreateSchema;
var userEditSchema = {
  type: 'object',
  properties: {
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    email: {
      type: 'string',
      format: 'email'
    }
  },
  required: ['firstName', 'lastName', 'email'],
  additionalProperties: false
};
exports.userEditSchema = userEditSchema;
var userSetPassSchema = {
  type: 'object',
  properties: {
    password: {
      type: 'string',
      minLength: 6
    },
    passwordConfirm: {
      type: 'string',
      minLength: 6
    }
  },
  required: ['password', 'passwordConfirm']
};
exports.userSetPassSchema = userSetPassSchema;
var userChangePassSchema = {
  type: 'object',
  properties: {
    currentPassword: {
      type: 'string'
    },
    newPassword: {
      type: 'string',
      minLength: 6
    },
    newPasswordConfirm: {
      type: 'string',
      minLength: 6
    }
  },
  required: ['currentPassword', 'newPassword', 'newPasswordConfirm'],
  additionalProperties: false
};
exports.userChangePassSchema = userChangePassSchema;
var userResetPassSchema = {
  type: 'object',
  properties: {
    password: {
      type: 'string',
      minLength: 6
    },
    passwordConfirm: {
      type: 'string',
      minLength: 6
    }
  },
  required: ['password', 'passwordConfirm']
};
exports.userResetPassSchema = userResetPassSchema;