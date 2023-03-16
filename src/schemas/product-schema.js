'use strict';

export const productSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    image: { type: 'string' },
    price: { type: 'number' },
    discount: { type: 'number' },
    category: { type: 'string' }
  },
  required: ['name', 'image', 'price', 'discount', 'category']
};
