'use strict';

import {
  handlerSocketWorkerUserLogin,
  handlerSocketWorkerUserLogout,
  handlerWorkerSocketUserDisconnect
} from './socket-worker';
import {
  handlerWorkerCronChangePasswordTemporary,
  handlerWorkerCronAutoDeleteNotifyInTrash
} from './cron-worker';

export default {
  handlerSocketWorkerUserLogin,
  handlerSocketWorkerUserLogout,
  handlerWorkerSocketUserDisconnect,
  handlerWorkerCronChangePasswordTemporary,
  handlerWorkerCronAutoDeleteNotifyInTrash
};
