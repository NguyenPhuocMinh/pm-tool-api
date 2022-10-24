'use strict';

import baseController from './base-controller';

import constants from '../../core/constants';
import logUtils from '../../core/utils/log-util';

const loggerFactory = logUtils.createLogger(
  constants.APP_NAME,
  constants.STRUCT_CONTROLLERS.HOME_CONTROLLER
);

/**
 * @description Home Page Controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const HomePage = (req, res, next) => {
  loggerFactory.info(`Function HomePage Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeHome,
    constants.actions.MsgActionHomePage
  );
  loggerFactory.info(`Function HomePage Controller has been end`);
};

const Test = (req, res, next) => {
  loggerFactory.info(`Function Test Controller has been start`);
  const toolBox = { req, res, next };
  baseController(
    toolBox,
    constants.types.MsgTypeTest,
    constants.actions.MsgActionTest
  );
  loggerFactory.info(`Function Test Controller has been end`);
};

const HomeController = {
  HomePage,
  Test
};

export default HomeController;
