'use strict';

/**
 * @description Convert secret key by json
 * @param {*} secretKey
 * @param {*} mode
 * @returns {string}
 */
export const convertSecretKey = (secretKey, mode) => {
  let secret = secretKey;

  if (mode === 'private') {
    secret = '-----BEGIN RSA PRIVATE KEY-----\n';
    for (let i = 0; i < secretKey.length; i = i + 64) {
      secret += secretKey.substring(i, i + 64);
      secret += '\n';
    }
    secret += '-----END RSA PRIVATE KEY-----';
    return secret;
  } else if (mode === 'public') {
    secret = '-----BEGIN PUBLIC KEY-----\n';
    for (let i = 0; i < secretKey.length; i = i + 64) {
      secret += secretKey.substring(i, i + 64);
      secret += '\n';
    }
    secret += '-----END PUBLIC KEY-----';
    return secret;
  } else {
    return secret;
  }
};
