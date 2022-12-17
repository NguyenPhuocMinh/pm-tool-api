'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSecretJsonHelper = exports.getDataJsonHelper = exports.getDataConfigJsonHelper = void 0;
require("source-map-support/register");
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _utils = _interopRequireDefault(require("../utils"));
var _lodash = require("lodash");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var getDataJsonHelper = function getDataJsonHelper() {
  var configurePath = _path["default"].join(process.cwd(), './src/data/secret.json');
  var json = _fs["default"].readFileSync(configurePath);
  var configure = JSON.parse(json.toString());
  return configure;
};
exports.getDataJsonHelper = getDataJsonHelper;
var getSecretJsonHelper = function getSecretJsonHelper() {
  var secret = getDataJsonHelper();
  var privateKey = (0, _lodash.get)(secret, 'privateKey');
  var publicKey = (0, _lodash.get)(secret, 'publicKey');
  var privateSecret = _utils["default"].convertSecretKey(privateKey, 'private');
  var publicSecret = _utils["default"].convertSecretKey(publicKey, 'public');
  return {
    privateSecret: privateSecret,
    publicSecret: publicSecret
  };
};
exports.getSecretJsonHelper = getSecretJsonHelper;
var getDataConfigJsonHelper = function getDataConfigJsonHelper() {
  var configurePath = _path["default"].join(process.cwd(), './src/data/data.json');
  var json = _fs["default"].readFileSync(configurePath);
  var jsonConfigs = JSON.parse(json.toString());
  return jsonConfigs;
};
exports.getDataConfigJsonHelper = getDataConfigJsonHelper;