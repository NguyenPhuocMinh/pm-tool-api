'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
require('dotenv').config();
var profiles = {
  VERSION: 'v0.1.9',
  APP_ENV: process.env.NODE_ENV || 'dev',
  APP_PORT: process.env.APP_PORT || 8080,
  APP_HOST: process.env.APP_HOST || '0.0.0.0',
  APP_DOCS_PATH: process.env.APP_DOCS_PATH || '/docs',
  APP_MONGO_URI: process.env.APP_MONGO_URI,
  APP_REDIS_URI: process.env.APP_REDIS_URI,
  APP_DOMAIN_PATH: process.env.APP_DOMAIN_PATH,
  APP_SECRET_KEY: process.env.APP_SECRET_KEY,
  APP_SECRET_REFRESH_KEY: process.env.APP_SECRET_REFRESH_KEY,
  APP_AUDIENCE: process.env.APP_AUDIENCE,
  APP_ISSUER: process.env.APP_ISSUER,
  APP_VERCEL_TOKEN: process.env.APP_VERCEL_TOKEN
};
var _default = profiles;
exports["default"] = _default;