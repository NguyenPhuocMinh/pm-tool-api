'use strict';

import { Schema } from 'mongoose';

export default {
  name: 'ProjectModel',
  attributes: {
    name: { type: String },
    startDay: { type: Date },
    endDay: { type: Date },
    organization: { type: Schema.Types.ObjectId, ref: 'OrganizationModel' },
    users: [{ type: Schema.Types.ObjectId, ref: 'UserModel' }],
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
    collection: 'projects'
  }
};