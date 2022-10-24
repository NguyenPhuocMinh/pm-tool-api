'use strict';

import constants from '../../core/constants';

import HomeOrchestrator from './home-orchestrator';

/**
 * HOME
 */
const orchestratorHome = [
  {
    type: constants.types.MsgTypeHome,
    action: constants.actions.MsgActionHomePage,
    orchestrator: HomeOrchestrator.HomePage
  },
  {
    type: constants.types.MsgTypeTest,
    action: constants.actions.MsgActionTest,
    orchestrator: HomeOrchestrator.Test
  }
];

/**
 * BASE
 */
const orchestrators = [...orchestratorHome];

export default orchestrators;
