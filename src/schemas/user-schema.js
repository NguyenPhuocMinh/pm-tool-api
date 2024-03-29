'use strict';

export const userCreateSchema = {
  type: 'object',
  properties: {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    email: { type: 'string', format: 'email' }
  },
  required: ['firstName', 'lastName', 'email'],
  additionalProperties: false
};

export const userEditSchema = {
  type: 'object',
  properties: {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    email: { type: 'string', format: 'email' }
  },
  required: ['firstName', 'lastName', 'email'],
  additionalProperties: false
};

export const userSetPassSchema = {
  type: 'object',
  properties: {
    password: { type: 'string', minLength: 6 },
    passwordConfirm: { type: 'string', minLength: 6 }
  },
  required: ['password', 'passwordConfirm']
};

export const userChangePassSchema = {
  type: 'object',
  properties: {
    currentPassword: { type: 'string' },
    newPassword: { type: 'string', minLength: 6 },
    newPasswordConfirm: { type: 'string', minLength: 6 }
  },
  required: ['currentPassword', 'newPassword', 'newPasswordConfirm'],
  additionalProperties: false
};

export const userResetPassSchema = {
  type: 'object',
  properties: {
    password: { type: 'string', minLength: 6 },
    passwordConfirm: { type: 'string', minLength: 6 }
  },
  required: ['password', 'passwordConfirm']
};
