'use strict';

require('dotenv').config();

const configs = {
  port: process.env.APP_PORT || 8080
};

export default configs;
