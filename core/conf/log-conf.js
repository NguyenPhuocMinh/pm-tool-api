'use strict';

const symbols = {
  info: '\x1B[32mINFO\x1B[39m',
  warn: '\x1B[33mWARN\x1B[39m',
  debug: '\x1B[34mDEBUG\x1B[39m',
  error: '\x1B[31mERROR\x1B[39m',
  http: '\x1B[32mHTTP\x1B[39m',
  verbose: '\x1B[36mVERBOSE\x1B[39m',
  silly: '\x1B[35mSILLY\x1B[39m',
  data: '\x1B[90mDATA\x1B[39m'
};

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6,
  data: 7
};

const colors = {
  error: '#FF0000',
  warn: '#FFCC00',
  info: '#00CC00',
  http: '#FF6633',
  verbose: '#00CCFF',
  debug: '#3300FF',
  silly: '#6600FF',
  data: '#FF33CC',
  default: '#3399FF'
};

const logConf = {
  symbols,
  levels,
  colors
};

export default logConf;
