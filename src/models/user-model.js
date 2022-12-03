'use strict';

import { Schema } from 'mongoose';

export default {
  name: 'UserModel',
  attributes: {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    passwordConfirm: { type: String },
    isPasswordSet: { type: Boolean, default: false },
    isPasswordTemporary: { type: Boolean, default: false },
    refreshToken: { type: String },
    roles: [{ type: Schema.Types.ObjectId, ref: 'RoleModel' }],
    locale: { type: String },
    picture: { type: String },
    // filter
    isAdmin: { type: Boolean, default: false },
    slug: { type: String },
    deleted: { type: Boolean, default: false },
    createdAt: { type: Date },
    createdBy: { type: String },
    updatedAt: { type: Date },
    updatedBy: { type: String }
  },
  options: {
    collection: 'users'
  }
};
