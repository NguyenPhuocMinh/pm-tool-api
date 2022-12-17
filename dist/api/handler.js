"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;
require("source-map-support/register");
function handler(request, response) {
  console.log('🚀 ~ file: auth.js:2 ~ handler ~ request', request);
  return response.status(200).json({
    message: 'Hello handler'
  });
}