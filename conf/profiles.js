'use strict';

require('dotenv').config();

const profiles = {
  VERSION: 'v0.1.1',
  APP_PORT: process.env.APP_PORT || 8080,
  APP_HOST: process.env.APP_HOST || '0.0.0.0',
  APP_DOCS_PATH: process.env.APP_DOCS_PATH || '/docs',
  APP_MONGO_URI: process.env.APP_MONGO_URI,
  APP_DOMAIN_PATH: process.env.APP_DOMAIN_PATH
};

export default profiles;
