'use strict';

export default {
  name: 'NotifyTemplateModel',
  attributes: {
    topic: { type: String },
    description: { type: String },
    content: { type: String },
    type: {
      type: String,
      enum: [
        'a49ed2ae-b9ac-4dc3-9f1d-0d5d9387495a', // SYSTEM
        '32f8fb40-b3a7-4fc9-beca-1fddde1ee80c', // EVENT
        'a153c32a-9413-4071-acb0-a0d5b4dc7e45', // WARNING
        'c1026695-d5ff-4503-ac7a-ce45567fa772', // IMPORTANT
        '5ed78c94-5723-4231-a004-e6ba6a5f5b25', // REMIND
        '10e62b29-a4d3-4f77-8f5d-1effa2e18484' // REMIND CHANGE PASS TEMPORARY
      ]
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
    collection: 'notify-templates'
  }
};
