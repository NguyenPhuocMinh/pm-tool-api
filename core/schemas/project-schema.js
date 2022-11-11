'use strict';

export const projectSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' }
  },
  required: ['name']
};
