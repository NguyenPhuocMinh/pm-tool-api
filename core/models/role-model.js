'use strict';

import { Schema } from 'mongoose';

export default {
  name: 'RoleModel',
  attributes: {
    name: { type: String },
    description: { type: String },
    permissions: [{ type: Schema.Types.ObjectId, ref: 'PermissionModel' }],
    // filter
    slug: { type: String },
    activated: { type: Boolean, default: true },
    deleted: { type: Boolean, default: false },
    createdAt: { type: Date },
    createdBy: { type: String },
    updatedAt: { type: Date },
    updatedBy: { type: String }
  },
  options: {
    collection: 'roles'
  }
};
