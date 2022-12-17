"use strict";

require("source-map-support/register");
module.exports = function (req, res) {
  console.info('req', req);
  res.status(404).json({
    message: 'Not Found',
    path: req.path
  });
};