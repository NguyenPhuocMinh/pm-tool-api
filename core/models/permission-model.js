'use strict';

import { Schema } from 'mongoose';

export default {
  name: 'PermissionModel',
  attributes: {
    name: { type: String },
    description: { type: String },
    activated: { type: Boolean, default: true },
    roles: [{ type: Schema.Types.ObjectId, ref: 'RoleModel' }],
    // filter
    slug: { type: String },
    deleted: { type: Boolean, default: false },
    createdAt: { type: Date },
    createdBy: { type: String },
    updatedAt: { type: Date },
    updatedBy: { type: String }
  },
  options: {
    collection: 'permissions'
  }
};
