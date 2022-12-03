'use strict';

import { Schema } from 'mongoose';

export default {
  name: 'OrganizationModel',
  attributes: {
    name: { type: String },
    projects: [{ type: Schema.Types.ObjectId, ref: 'ProjectModel' }],
    // filter
    slug: { type: String },
    deleted: { type: Boolean, default: false },
    activated: { type: Boolean, default: true },
    createdAt: { type: Date },
    createdBy: { type: String },
    updatedAt: { type: Date },
    updatedBy: { type: String }
  },
  options: {
    collection: 'organizations'
  }
};
