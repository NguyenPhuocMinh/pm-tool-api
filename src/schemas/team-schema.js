'use strict';

export const teamSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' }
  },
  required: ['name']
};
