'use strict';

require('dotenv').config();

const configs = {
  version: 'v0.1.1',
  port: process.env.APP_PORT || 8080,
  host: process.env.APP_HOST || '0.0.0.0',
  sentryDsn: process.env.APP_SENTRY_DSN
};

export default configs;
