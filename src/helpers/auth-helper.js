'use strict';

import { isEmpty } from 'lodash';

import { errorCommon } from '@core/common';

export const validateSigIn = ({ email, password }) => {
  if (isEmpty(email)) {
    throw errorCommon.BuildNewError('AuthEmailIsRequired');
  }

  if (isEmpty(password)) {
    throw errorCommon.BuildNewError('AuthPasswordIsRequired');
  }
};
