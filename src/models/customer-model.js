'use strict';

import { Schema } from 'mongoose';

export default {
  name: 'CustomerModel',
  attributes: {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    phoneNumber: {
      value: { type: String },
      countryCode: { type: String }
    },
    photoUrl: { type: String },
    address: { type: String },
    orders: [{ type: Schema.Types.ObjectId, ref: 'OrderModel' }],
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
    collection: 'customers'
  }
};
