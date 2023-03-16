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
 * GET SOCKET
 */
{
  enable: false,
  method: 'GET',
  pathName: '/socket.io'
},
/**
 * POST SOCKET
 */
{
  enable: false,
  method: 'POST',
  pathName: '/socket.io'
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
  pathName: '/auth/refreshTokens'
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
  pathName: '/userSessions'
}, {
  enable: true,
  method: 'PATCH',
  pathName: '/userSessions/:id'
},
/**
 * NOTIFY
 */
{
  enable: true,
  method: 'POST',
  pathName: '/notifyUsersChangePasswordTemporary'
},
/**
 * NOTIFY USER
 */
{
  enable: true,
  method: 'GET',
  pathName: '/notifyUsers'
}, {
  enable: true,
  method: 'GET',
  pathName: '/notifyUsers/:id'
}, {
  enable: true,
  method: 'GET',
  pathName: '/notifyUsersData'
}, {
  enable: true,
  method: 'GET',
  pathName: '/notifyUsersUnread'
}, {
  enable: true,
  method: 'PATCH',
  pathName: '/notifyUsersRead'
}, {
  enable: true,
  method: 'PATCH',
  pathName: '/notifyUsersReads'
}, {
  enable: true,
  method: 'PATCH',
  pathName: '/notifyUsersTrash'
}, {
  enable: true,
  method: 'DELETE',
  pathName: '/notifyUsersTrashes'
}, {
  enable: true,
  method: 'GET',
  pathName: '/notifyUsersTrashes'
}, {
  enable: true,
  method: 'PATCH',
  pathName: '/notifyUsersRollback'
}, {
  enable: true,
  method: 'PATCH',
  pathName: '/notifyUsersRollbacks'
},
/**
 * CUSTOMER
 */
{
  enable: false,
  method: 'POST',
  pathName: '/customers/register'
}, {
  enable: false,
  method: 'POST',
  pathName: '/customers/login'
}];
exports["default"] = _default;