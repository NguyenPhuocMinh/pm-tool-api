'use strict';

export const signInSchema = {
  type: 'object',
  properties: {
    email: { type: 'string' },
    password: { type: 'string' }
  },
  required: ['email', 'password']
};

export const signOutSchema = {
  type: 'object',
  properties: {
    email: { type: 'string' }
  },
  required: ['email']
};

export const refreshTokenSchema = {
  type: 'object',
  properties: {
    email: { type: 'string' }
  },
  required: ['email']
};
