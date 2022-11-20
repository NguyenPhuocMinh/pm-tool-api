'use strict';

import constants from '@constants';
import { options } from '@conf';

const ATTRIBUTE_TOKEN_KEY = constants.ATTRIBUTE_TOKEN_KEY;

export const cookieStore = (response, token) => {
  response.cookie(ATTRIBUTE_TOKEN_KEY, token, options.cookieOptions);
};

export const cookieUnStore = (response) => {
  response.clearCookie(ATTRIBUTE_TOKEN_KEY);
};
