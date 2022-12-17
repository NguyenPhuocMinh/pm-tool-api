'use strict';

require("source-map-support/register");
var _mocha = require("mocha");
var _chai = require("chai");
var _sum = _interopRequireDefault(require("../services/sum"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
(0, _mocha.describe)('It will test the sum service', function () {
  (0, _mocha.it)('should test the sum of 2 numbers', function (done) {
    var num1 = 10;
    var num2 = 20;
    var data = (0, _sum["default"])(num1, num2);
    (0, _chai.expect)(data).to.eq(num1 + num2);
    done();
  });
});