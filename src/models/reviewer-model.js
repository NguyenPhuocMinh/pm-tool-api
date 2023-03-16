'use strict';

import { Schema } from 'mongoose';

export default {
  name: 'ReviewerModel',
  attributes: {
    customer: { type: Schema.Types.ObjectId, ref: 'CustomerModel' },
    comment: { type: String },
    images: [{ type: String }],
    rating: { type: Number },
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
    collection: 'reviewers'
  }
};
