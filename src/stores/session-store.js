'use strict';

import constants from '@constants';

const ATTRIBUTE_TOKEN_KEY = constants.ATTRIBUTE_TOKEN_KEY;

export const sessionStore = (request, token) => {
  request.session[ATTRIBUTE_TOKEN_KEY] = token;
};

export const sessionUnStore = (request) => {
  delete request.session[ATTRIBUTE_TOKEN_KEY];
};
