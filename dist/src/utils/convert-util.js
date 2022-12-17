'use strict';

/**
 * @description Convert secret key by json
 * @param {*} secretKey
 * @param {*} mode
 * @returns {string}
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertSecretKey = void 0;
require("source-map-support/register");
var convertSecretKey = function convertSecretKey(secretKey, mode) {
  var secret = secretKey;
  if (mode === 'private') {
    secret = '-----BEGIN RSA PRIVATE KEY-----\n';
    for (var i = 0; i < secretKey.length; i = i + 64) {
      secret += secretKey.substring(i, i + 64);
      secret += '\n';
    }
    secret += '-----END RSA PRIVATE KEY-----';
    return secret;
  } else if (mode === 'public') {
    secret = '-----BEGIN PUBLIC KEY-----\n';
    for (var _i = 0; _i < secretKey.length; _i = _i + 64) {
      secret += secretKey.substring(_i, _i + 64);
      secret += '\n';
    }
    secret += '-----END PUBLIC KEY-----';
    return secret;
  } else {
    return secret;
  }
};
exports.convertSecretKey = convertSecretKey;