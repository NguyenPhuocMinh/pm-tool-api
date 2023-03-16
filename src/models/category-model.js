'use strict';

export default {
  name: 'CategoryModel',
  attributes: {
    name: { type: String },
    image: { type: String },
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
    collection: 'categories'
  }
};
