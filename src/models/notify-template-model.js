'use strict';

export default {
  name: 'NotifyTemplateModel',
  attributes: {
    title: { type: String },
    description: { type: String },
    level: { type: String },
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
    collection: 'notify-templates'
  }
};
