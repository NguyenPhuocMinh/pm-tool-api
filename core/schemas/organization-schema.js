'use strict';

export const organizationSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' }
  },
  required: ['name']
};
