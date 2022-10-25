'use strict';

export default {
  name: 'RoleModel',
  attributes: {
    name: { type: String },
    // filter
    slug: { type: String },
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
