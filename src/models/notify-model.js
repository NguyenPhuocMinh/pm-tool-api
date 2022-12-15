'use strict';

import { Schema } from 'mongoose';

export default {
  name: 'NotifyModel',
  attributes: {
    user: { type: Schema.Types.ObjectId, ref: 'UserModel' }, // receiver
    sender: { type: Schema.Types.ObjectId, ref: 'UserModel' },
    template: { type: Schema.Types.ObjectId, ref: 'NotifyTemplateModel' },
    details: {
      isNew: { type: Boolean, default: false },
      isRead: { type: Boolean, default: false },
      readAt: { type: Date }
    },
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
    collection: 'notifies'
  }
};
