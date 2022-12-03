'use strict';

import winston from 'winston';

// conf
import { options } from '@conf';

import constants from '@constants';
import utils from '@utils';

const logManager = (appName = '-', structName = '-') => {
  const logger = winston.createLogger({
    levels: options.loggerOptions.levels,
    format: winston.format.combine(
      winston.format((info) => ({
        ...info,
        level: info.level.toUpperCase()
      }))(),
      winston.format.colorize(),
      winston.format.simple(),
      winston.format.timestamp({ format: constants.DATE_TIMESTAMP_FORMAT }),
      winston.format.label({
        label: utils.formatLabelLog(appName, structName)
      }),
      winston.format.printf((info) => utils.formatInfoLog(info))
    ),
    transports: [new winston.transports.Console({ level: 'data' })]
  });
  return logger;
};

export default logManager;

export const logError = (appName, structName, message, meta) => {
  const logger = logManager(appName, structName);
  return logger.error(message, meta);
};

export const logWarn = (appName, structName, message, meta) => {
  const logger = logManager(appName, structName);
  return logger.warn(message, meta);
};

export const logInfo = (appName, structName, message, meta) => {
  const logger = logManager(appName, structName);
  return logger.info(message, meta);
};

export const logDebug = (appName, structName, message, meta) => {
  const logger = logManager(appName, structName);
  return logger.debug(message, meta);
};

export const logHttp = (appName, structName, message, meta) => {
  const logger = logManager(appName, structName);
  return logger.http(message, meta);
};

export const logVerbose = (appName, structName, message, meta) => {
  const logger = logManager(appName, structName);
  return logger.verbose(message, meta);
};

export const logSilly = (appName, structName, message, meta) => {
  const logger = logManager(appName, structName);
  return logger.silly(message, meta);
};

export const logData = (appName, structName, message, meta) => {
  const logger = logManager(appName, structName);
  return logger.data(message, meta);
};
