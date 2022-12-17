'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _bluebird = _interopRequireDefault(require("bluebird"));
var _lodash = require("lodash");
var _index = _interopRequireDefault(require("./index"));
var _constants = _interopRequireDefault(require("../../constants"));
var _utils = _interopRequireDefault(require("../../utils"));
var _logger = _interopRequireDefault(require("../../core/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// core

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_ORCHESTRATORS.BASE_ORCHESTRATOR);

/**
 *
 * @param {*} msgType
 * @param {*} msgAction
 * @returns {Object}
 */
var LookupOrchestrator = function LookupOrchestrator(msgType, msgAction) {
  try {
    loggerFactory.info("Function LookupOrchestrator has been start");
    var fnCallBack;
    var schema;
    _index["default"].forEach(function (baseOrchestrator) {
      var orchestratorType = (0, _lodash.get)(baseOrchestrator, 'type');
      var orchestratorAction = (0, _lodash.get)(baseOrchestrator, 'action');
      var orchestratorFn = (0, _lodash.get)(baseOrchestrator, 'orchestrator');
      var orchestratorSchema = (0, _lodash.get)(baseOrchestrator, 'schema');
      if (msgType === orchestratorType && orchestratorAction === msgAction) {
        fnCallBack = orchestratorFn;
        schema = orchestratorSchema;
      }
    });
    loggerFactory.info("Function LookupOrchestrator has been end");
    return {
      orchestratorHandler: fnCallBack,
      schema: schema
    };
  } catch (err) {
    loggerFactory.error("Function LookupOrchestrator has error", {
      args: _utils["default"].formatErrorMsg(err)
    });
    return _bluebird["default"].reject(err);
  }
};
var baseOrchestrators = {
  LookupOrchestrator: LookupOrchestrator
};
var _default = baseOrchestrators;
exports["default"] = _default;