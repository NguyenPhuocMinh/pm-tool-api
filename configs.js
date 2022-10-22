'use strict';

require('dotenv').config();

const configs = {
  version: 'v1.0.1',
  port: process.env.APP_PORT || 8080,
  host: process.env.APP_HOST || '0.0.0.0'
};

export default configs;
