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
    isAdmin: { type: Boolean, default: false },
    roles: [{ type: Schema.Types.ObjectId, ref: 'RoleModel' }],
    avatarURL: { type: String },
    backgroundURL: { type: String },
    refreshToken: { type: String },
    locale: { type: String },
    // filter
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
