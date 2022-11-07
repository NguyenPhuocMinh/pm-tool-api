'use strict';

export default {
  TokenNotFound: {
    message: 'token.notifications.errors.tokenNotFound',
    returnCode: 3000,
    statusCode: 401
  },
  TokenExpiredError: {
    message: 'token.notifications.errors.tokenExpiredError',
    returnCode: 3001,
    statusCode: 401
  },
  TokenFormatError: {
    message: 'token.notifications.errors.tokenFormatError',
    returnCode: 3002,
    statusCode: 401
  }
};
