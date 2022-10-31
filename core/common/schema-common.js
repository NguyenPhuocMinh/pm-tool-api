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

const schemaCommon = {
  organizationSchema,
  projectSchema
};

export default schemaCommon;
