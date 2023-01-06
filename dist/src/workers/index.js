'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _socketWorker = require("./socket-worker");
var _cronWorker = require("./cron-worker");
var _default = {
  handlerSocketWorkerUserLogin: _socketWorker.handlerSocketWorkerUserLogin,
  handlerSocketWorkerUserLogout: _socketWorker.handlerSocketWorkerUserLogout,
  handlerWorkerSocketUserDisconnect: _socketWorker.handlerWorkerSocketUserDisconnect,
  handlerWorkerCronChangePasswordTemporary: _cronWorker.handlerWorkerCronChangePasswordTemporary,
  handlerWorkerCronAutoDeleteNotifyInTrash: _cronWorker.handlerWorkerCronAutoDeleteNotifyInTrash
};
exports["default"] = _default;