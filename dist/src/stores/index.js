"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
require("source-map-support/register");
var _sessionStore = require("./session-store");
Object.keys(_sessionStore).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sessionStore[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sessionStore[key];
    }
  });
});
var _cookieStore = require("./cookie-store");
Object.keys(_cookieStore).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _cookieStore[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _cookieStore[key];
    }
  });
});