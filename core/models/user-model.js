'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default {
  name: 'UserModel',
  attributes: {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    passwordConfirm: { type: String },
    permissions: [String],
    roles: { type: Schema.Types.ObjectId, ref: 'RoleModel' },
    photoURL: { type: String },
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
