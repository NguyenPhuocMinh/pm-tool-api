'use strict';

export const roleSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' }
  },
  required: ['name'],
  additionalProperties: false
};
