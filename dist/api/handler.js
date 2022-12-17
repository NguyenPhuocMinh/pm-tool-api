"use strict";

require("source-map-support/register");
module.exports = function (req, res) {
  console.info('req', req);
  res.status(200).json({
    message: 'Handler Alo'
  });
};