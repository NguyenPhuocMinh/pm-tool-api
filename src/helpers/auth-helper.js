'use strict';

import { isEmpty } from 'lodash';

// core
import { buildNewError } from '@core/common';

export const validateSigIn = ({ email, password }) => {
  if (isEmpty(email)) {
    throw buildNewError('AuthEmailIsRequired');
  }

  if (isEmpty(password)) {
    throw buildNewError('AuthPasswordIsRequired');
  }
};
