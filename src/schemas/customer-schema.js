'use strict';

export const customerRegisterSchema = {
  type: 'object',
  properties: {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    phoneNumber: { type: 'string' }
  },
  required: ['firstName', 'lastName', 'phoneNumber']
};
