'use strict';

import { validatorLogin } from './auth-validator';
import { validatorUserSetPass, validatorUserResetPass } from './user-validator';

export default {
  validatorLogin,
  validatorUserSetPass,
  validatorUserResetPass
};
