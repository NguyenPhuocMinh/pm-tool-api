'use strict';

export const notifyTemplateSchema = {
  type: 'object',
  properties: {
    topic: { type: 'string' },
    description: { type: 'string' },
    content: { type: 'string' },
    type: { type: 'string' }
  },
  required: ['topic', 'description', 'content', 'type']
};
