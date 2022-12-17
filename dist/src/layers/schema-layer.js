'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _mongoose = _interopRequireDefault(require("mongoose"));
var _models = _interopRequireDefault(require("../models"));
var _lodash = require("lodash");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var schemaLayers = !(0, _lodash.isEmpty)(_models["default"]) ? (0, _lodash.map)(_models["default"], function (doc) {
  return _mongoose["default"].model(doc.name, doc.attributes, doc.options.collection);
}) : [];
var _default = schemaLayers;
exports["default"] = _default;