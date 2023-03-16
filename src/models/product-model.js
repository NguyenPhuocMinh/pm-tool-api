'use strict';

import { Schema } from 'mongoose';

export default {
  name: 'ProductModel',
  attributes: {
    name: { type: String },
    description: { type: String },
    image: { type: String },
    price: { type: Number },
    discount: { type: Number },
    category: { type: Schema.Types.ObjectId, ref: 'CategoryModel' },
    rating: { type: Number },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'ReviewerModel' }],
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
    collection: 'products'
  }
};
