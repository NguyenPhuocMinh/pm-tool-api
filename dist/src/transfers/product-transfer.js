'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _lodash = require("lodash");
var _constants = _interopRequireDefault(require("../constants"));
var _logger = _interopRequireDefault(require("../core/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// core

var loggerFactory = (0, _logger["default"])(_constants["default"].APP_NAME, _constants["default"].STRUCT_TRANSFERS.CATEGORY_TRANSFER);
var productTransfer = function productTransfer(data) {
  loggerFactory.data('Func productTransfer has been start');
  var response = {};
  if (!(0, _lodash.isEmpty)(data)) {
    data = data.toJSON();
    var _data = data,
      _id = _data._id,
      name = _data.name,
      image = _data.image,
      description = _data.description,
      price = _data.price,
      discount = _data.discount,
      category = _data.category,
      activated = _data.activated,
      createdAt = _data.createdAt,
      updatedAt = _data.updatedAt;
    response.id = _id;
    response.name = name;
    response.image = image;
    response.description = description;
    response.price = price;
    response.category = category;
    response.discount = discount;
    response.activated = activated;
    response.createdAt = createdAt;
    response.updatedAt = updatedAt;
    loggerFactory.data('Func productTransfer has data');
    return response;
  }
  loggerFactory.data('Func productTransfer without data');
  return response;
};
var _default = productTransfer;
exports["default"] = _default;