'use strict';

import slugify from 'slugify';
import convertUtils from './convert-util';

const formatLabelLog = (appName, structName) => {
  return `${appName}:${structName}`;
};

const formatInfoLog = (info) => {
  const { label, level, message, timestamp, args } = info;

  const { levelLog, labelLog, messageLog, timestampLog } =
    convertUtils.convertLogMessage(level, label, message, timestamp);

  const { argsLog } = convertUtils.convertLogArgs(level, args);

  return `${labelLog} [${timestampLog}] [${levelLog}]: ${messageLog} ${argsLog}`;
};

const formatErrorMessage = (error) => {
  return {
    name: error.name,
    message: error.message
  };
};

const formatSlug = (input, locale = 'en') => {
  return slugify(input, { locale, lower: true });
};

const formatUtils = {
  formatLabelLog,
  formatInfoLog,
  formatErrorMessage,
  formatSlug
};

export default formatUtils;
