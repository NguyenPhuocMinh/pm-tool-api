'use strict';

import chalk from 'chalk';
import logConf from '../conf/log-conf';

const symbolInfo = logConf.symbols.info;
const symbolWarn = logConf.symbols.warn;
const symbolDebug = logConf.symbols.debug;
const symbolError = logConf.symbols.error;
const symbolHttp = logConf.symbols.http;
const symbolVerbose = logConf.symbols.verbose;
const symbolSilly = logConf.symbols.silly;
const symbolData = logConf.symbols.data;

const colorInfo = logConf.colors.info;
const colorWarn = logConf.colors.warn;
const colorDebug = logConf.colors.debug;
const colorError = logConf.colors.error;
const colorHttp = logConf.colors.http;
const colorVerbose = logConf.colors.verbose;
const colorSilly = logConf.colors.silly;
const colorData = logConf.colors.data;
const colorDefault = logConf.colors.default;

const convertLogMessage = (level, label, message, timestamp) => {
  switch (level) {
    case symbolInfo:
      return {
        levelLog: chalk.hex(colorInfo).bold('INFO'),
        labelLog: chalk.hex(colorInfo).bold(label),
        messageLog: chalk.hex(colorInfo).bold(message),
        timestampLog: chalk.hex(colorInfo).bold(timestamp)
      };
    case symbolWarn:
      return {
        levelLog: chalk.hex(colorWarn).bold('WARN'),
        labelLog: chalk.hex(colorWarn).bold(label),
        messageLog: chalk.hex(colorWarn).bold(message),
        timestampLog: chalk.hex(colorWarn).bold(timestamp)
      };
    case symbolDebug:
      return {
        levelLog: chalk.hex(colorDebug).bold('DEBUG'),
        labelLog: chalk.hex(colorDebug).bold(label),
        messageLog: chalk.hex(colorDebug).bold(message),
        timestampLog: chalk.hex(colorDebug).bold(timestamp)
      };
    case symbolError:
      return {
        levelLog: chalk.hex(colorError).bold('ERROR'),
        labelLog: chalk.hex(colorError).bold(label),
        messageLog: chalk.hex(colorError).bold(message),
        timestampLog: chalk.hex(colorError).bold(timestamp)
      };
    case symbolHttp:
      return {
        levelLog: chalk.hex(colorHttp).bold('HTTP'),
        labelLog: chalk.hex(colorHttp).bold(label),
        messageLog: chalk.hex(colorHttp).bold(message),
        timestampLog: chalk.hex(colorHttp).bold(timestamp)
      };
    case symbolVerbose:
      return {
        levelLog: chalk.hex(colorVerbose).bold('VERBOSE'),
        labelLog: chalk.hex(colorVerbose).bold(label),
        messageLog: chalk.hex(colorVerbose).bold(message),
        timestampLog: chalk.hex(colorVerbose).bold(timestamp)
      };
    case symbolSilly:
      return {
        levelLog: chalk.hex(colorSilly).bold('SILLY'),
        labelLog: chalk.hex(colorSilly).bold(label),
        messageLog: chalk.hex(colorSilly).bold(message),
        timestampLog: chalk.hex(colorSilly).bold(timestamp)
      };
    case symbolData:
      return {
        levelLog: chalk.hex(colorData).bold('DATA'),
        labelLog: chalk.hex(colorData).bold(label),
        messageLog: chalk.hex(colorData).bold(message),
        timestampLog: chalk.hex(colorData).bold(timestamp)
      };
    default:
      return {
        levelLog: chalk.hex(colorDefault).bold('NO LEVEL'),
        labelLog: chalk.hex(colorDefault).bold(label),
        messageLog: chalk.hex(colorDefault).bold(message),
        timestampLog: chalk.hex(colorDefault).bold(timestamp)
      };
  }
};

const convertLogArgs = (level, args) => {
  let argsLog = '';

  if (typeof args === 'undefined') {
    return {
      argsLog
    };
  }

  argsLog = JSON.stringify(args);

  switch (level) {
    case symbolInfo:
      return {
        argsLog: chalk.hex(colorInfo).bold(argsLog)
      };
    case symbolWarn:
      return {
        argsLog: chalk.hex(colorWarn).bold(argsLog)
      };
    case symbolDebug:
      return {
        argsLog: chalk.hex(colorDebug).bold(argsLog)
      };
    case symbolError:
      return {
        argsLog: chalk.hex(colorError).bold(argsLog)
      };
    case symbolHttp:
      return {
        argsLog: chalk.hex(colorHttp).bold(argsLog)
      };
    case symbolVerbose:
      return {
        argsLog: chalk.hex(colorVerbose).bold(argsLog)
      };
    case symbolSilly:
      return {
        argsLog: chalk.hex(colorSilly).bold(argsLog)
      };
    case symbolData:
      return {
        argsLog: chalk.hex(colorData).bold(argsLog)
      };
    default:
      return {
        argsLog: chalk.hex(colorDefault).bold(argsLog)
      };
  }
};

const convertUtils = {
  convertLogMessage,
  convertLogArgs
};

export default convertUtils;
