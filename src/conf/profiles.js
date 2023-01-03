'use strict';

require('dotenv').config();

const profiles = {
  VERSION: 'v0.2.1',
  APP_ENV: process.env.NODE_ENV || 'dev',
  APP_PORT: process.env.APP_PORT || 8080,
  APP_HOST: process.env.APP_HOST || '0.0.0.0',
  APP_DOCS_PATH: process.env.APP_DOCS_PATH || '/docs',
  APP_MONGO_URI: process.env.APP_MONGO_URI,
  APP_REDIS_URI: process.env.APP_REDIS_URI,
  APP_RABBIT_URI: process.env.APP_RABBIT_URI,
  APP_DOMAIN_PATH: process.env.APP_DOMAIN_PATH,
  APP_SECRET_KEY: process.env.APP_SECRET_KEY,
  APP_SECRET_REFRESH_KEY: process.env.APP_SECRET_REFRESH_KEY,
  APP_AUDIENCE: process.env.APP_AUDIENCE,
  APP_ISSUER: process.env.APP_ISSUER
};

export default profiles;
