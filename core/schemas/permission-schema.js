'use strict';

export const permissionSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' }
  },
  required: ['name']
};
