'use strict';

import { Schema } from 'mongoose';

export default {
  name: 'UserHistoryModel',
  attributes: {
    name: { type: String },
    description: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'UserModel' },
    devices: { type: String },
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
    collection: 'user-histories'
  }
};
