'use strict';

import { Schema } from 'mongoose';

export default {
  name: 'TeamModel',
  attributes: {
    name: { type: String },
    project: { type: Schema.Types.ObjectId, ref: 'ProjectModel' },
    members: [{ type: Schema.Types.ObjectId, ref: 'UserModel' }],
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
    collection: 'teams'
  }
};
