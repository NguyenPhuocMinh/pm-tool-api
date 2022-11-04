'use strict';

const organizationSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' }
  },
  required: ['name']
};

const projectSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' }
  },
  required: ['name']
};

const roleSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' }
  },
  required: ['name']
};

const permissionSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' }
  },
  required: ['name']
};

const schemaCommon = {
  organizationSchema,
  projectSchema,
  roleSchema,
  permissionSchema
};

export default schemaCommon;
