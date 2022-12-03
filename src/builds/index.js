'use strict';

import { newErrorTemplate, newSuccessTemplate } from './template-build';
import { errorResponse, successResponse } from './response-build';
import { modelLookup } from './lookup-build';

export default {
  newErrorTemplate,
  newSuccessTemplate,
  errorResponse,
  successResponse,
  modelLookup
};
