'use strict';

import mongoose from 'mongoose';
import models from '@models';
import { isEmpty, map } from 'lodash';

const schemaLayers = !isEmpty(models)
  ? map(models, (doc) => {
    return mongoose.model(doc.name, doc.attributes, doc.options.collection);
  })
  : [];

export default schemaLayers;
