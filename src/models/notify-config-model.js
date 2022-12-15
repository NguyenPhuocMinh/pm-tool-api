'use strict';

import { Schema } from 'mongoose';

export default {
  name: 'NotifyConfigModel',
  attributes: {
    notifyTemplate: {
      type: Schema.Types.ObjectId,
      ref: 'NotifyTemplateModel'
    },
    sender: { type: Schema.Types.ObjectId, ref: 'UserModel' },
    receiver: [{ type: Schema.Types.ObjectId, ref: 'UserModel' }],
    isAuto: { type: Boolean, default: false },
    isSendNow: { type: Boolean, default: false },
    // filter
    slug: { type: String },
    deleted: { type: Boolean, default: false },
    activated: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
    createdBy: { type: String },
    updatedAt: { type: Date, default: Date.now() },
    updatedBy: { type: String }
  },
  options: {
    collection: 'notify-configs'
  }
};
