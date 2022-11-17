'use strict';

import slugify from 'slugify';
import { logUtils } from '@core/utils';

const formatLabelLog = (appName, structName) => {
  return `${appName}:${structName}`;
};

const formatInfoLog = (info) => {
  const { label, level, message, timestamp, args } = info;

  const { levelLog, labelLog, messageLog, timestampLog } =
    logUtils.convertLogMessage(level, label, message, timestamp);

  const { argsLog } = logUtils.convertLogArgs(level, args);

  return `${labelLog} [${timestampLog}] [${levelLog}]: ${messageLog} ${argsLog}`;
};

const formatErrorMessage = (error) => {
  return {
    name: error?.name || 'Error',
    message: error?.message || 'Internal Server Error'
  };
};

const formatSlug = (input, locale = 'en') => {
  return slugify(input, { locale, lower: true });
};

const formatFullName = (firstName = '-', lastName = '-') => {
  return `${lastName} ${firstName}`;
};

const formatUtils = {
  formatLabelLog,
  formatInfoLog,
  formatErrorMessage,
  formatSlug,
  formatFullName
};

export default formatUtils;
