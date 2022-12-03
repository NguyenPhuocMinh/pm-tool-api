'use strict';

import { Schema } from 'mongoose';

export default {
  name: 'UserSessionModel',
  attributes: {
    user: { type: Schema.Types.ObjectId, ref: 'UserModel' },
    userAgent: { type: String },
    ipAddress: { type: String },
    startAccess: { type: Date },
    lastAccess: { type: Date },
    reason: { type: String },
    // filter
    deleted: { type: Boolean, default: false },
    createdAt: { type: Date },
    createdBy: { type: String },
    updatedAt: { type: Date },
    updatedBy: { type: String }
  },
  options: {
    collection: 'user-sessions'
  }
};
