'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _default = [
/**
 * TEST
 */
{
  enable: false,
  method: 'POST',
  pathName: '/test-amqp'
},
/**
 * LOGIN
 */
{
  enable: false,
  method: 'POST',
  pathName: '/auth/logins'
},
/**
 * LOGOUT
 */
{
  enable: true,
  method: 'POST',
  pathName: '/auth/logouts'
},
/**
 * WHO AM I
 */
{
  enable: true,
  method: 'POST',
  pathName: '/auth/whoami'
},
/**
 * REFRESH TOKEN
 */
{
  enable: false,
  method: 'POST',
  pathName: '/auth/refresh-tokens'
},
/**
 * CONFIG
 */
{
  enable: false,
  method: 'GET',
  pathName: '/configs/:name'
},
/**
 * HOME
 */
{
  enable: true,
  method: 'GET',
  pathName: '/'
},
/**
 * HEALTH
 */
{
  enable: true,
  method: 'GET',
  pathName: '/healths'
},
/**
 * USER SESSION
 */
{
  enable: true,
  method: 'POST',
  pathName: '/users-session'
}, {
  enable: true,
  method: 'PATCH',
  pathName: '/users-session/:id'
},
/**
 * NOTIFY
 */
{
  enable: true,
  method: 'GET',
  pathName: '/notifies/user'
}, {
  enable: true,
  method: 'POST',
  pathName: '/notifies/change-password-temporary'
}, {
  enable: true,
  method: 'PATCH',
  pathName: '/notifies/update-read'
},
/**
 * NOTIFY USER
 */
{
  enable: true,
  method: 'GET',
  pathName: '/notify/users'
}, {
  enable: true,
  method: 'GET',
  pathName: '/notify/users/:id'
}, {
  enable: true,
  method: 'GET',
  pathName: '/notify/users-data'
}, {
  enable: true,
  method: 'GET',
  pathName: '/notify/users-unread'
}, {
  enable: true,
  method: 'PATCH',
  pathName: '/notify/users-read'
}, {
  enable: true,
  method: 'PATCH',
  pathName: '/notify/users-reads'
}, {
  enable: true,
  method: 'PATCH',
  pathName: '/notify/users-trash'
}, {
  enable: true,
  method: 'DELETE',
  pathName: '/notify/users-trashes'
}, {
  enable: true,
  method: 'GET',
  pathName: '/notify/users-trashes'
}, {
  enable: true,
  method: 'PATCH',
  pathName: '/notify/users-rollback'
}, {
  enable: true,
  method: 'PATCH',
  pathName: '/notify/users-rollbacks'
}];
exports["default"] = _default;