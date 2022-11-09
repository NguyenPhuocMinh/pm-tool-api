'use strict';

const organizationSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' }
  },
  required: ['name'],
  additionalProperties: false
};

const projectSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' }
  },
  required: ['name'],
  additionalProperties: false
};

const roleSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' }
  },
  required: ['name'],
  additionalProperties: false
};

const permissionSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' }
  },
  required: ['name'],
  additionalProperties: false
};

const userCreateSchema = {
  type: 'object',
  properties: {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    email: { type: 'string', format: 'email' },
    password: { type: 'string', minLength: 6 },
    passwordConfirm: { type: 'string', minLength: 6 }
  },
  required: ['firstName', 'lastName', 'email', 'password', 'passwordConfirm'],
  additionalProperties: false
};

const userEditSchema = {
  type: 'object',
  properties: {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    email: { type: 'string', format: 'email' }
  },
  required: ['firstName', 'lastName', 'email'],
  additionalProperties: false
};

const userChangePassSchema = {
  type: 'object',
  properties: {
    currentPassword: { type: 'string' },
    newPassword: { type: 'string', minLength: 6 },
    newPasswordConfirm: { type: 'string', minLength: 6 }
  },
  required: ['currentPassword', 'newPassword', 'newPasswordConfirm'],
  additionalProperties: false
};

const schemaCommon = {
  organizationSchema,
  projectSchema,
  roleSchema,
  permissionSchema,
  userCreateSchema,
  userEditSchema,
  userChangePassSchema
};

export default schemaCommon;
