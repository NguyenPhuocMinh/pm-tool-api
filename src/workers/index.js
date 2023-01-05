'use strict';

import {
  handlerSocketWorkerUserLogin,
  handlerSocketWorkerUserLogout,
  handlerWorkerSocketUserDisconnect
} from './socket-worker';
import { handlerWorkerCronChangePasswordTemporary } from './cron-worker';

export default {
  handlerSocketWorkerUserLogin,
  handlerSocketWorkerUserLogout,
  handlerWorkerSocketUserDisconnect,
  handlerWorkerCronChangePasswordTemporary
};
