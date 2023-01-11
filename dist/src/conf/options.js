'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("source-map-support/register");
var _uuid = require("uuid");
var _nanoid = require("nanoid");
var _profiles = _interopRequireDefault(require("./profiles"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import session from 'express-session';

var allowList = ['https://pm-tool-ui.netlify.app', 'https://pm-tool-ui.netlify.app/', 'https://pm-tool-ui.netlify.app/*', 'http://localhost:3500', 'http://localhost:3500/*'];
var corsOptions = {
  origin: allowList,
  credentials: true
};
var cookieOptions = {
  maxAge: 1000 * 60 * 15,
  httpOnly: true,
  sameSite: 'strict',
  secure: _profiles["default"].APP_ENV === 'production'
};

// const memoryStore = new session.MemoryStore();

var sessionOptions = {
  secret: _profiles["default"].APP_SECRET_KEY,
  maxAge: 1000 * 60 * 15,
  resave: false,
  saveUninitialized: true
  // store: memoryStore
};

var loggerOptions = {
  symbols: {
    info: '\x1B[32mINFO\x1B[39m',
    warn: '\x1B[33mWARN\x1B[39m',
    debug: '\x1B[34mDEBUG\x1B[39m',
    error: '\x1B[31mERROR\x1B[39m',
    http: '\x1B[32mHTTP\x1B[39m',
    verbose: '\x1B[36mVERBOSE\x1B[39m',
    silly: '\x1B[35mSILLY\x1B[39m',
    data: '\x1B[90mDATA\x1B[39m'
  },
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6,
    data: 7
  },
  colors: {
    error: '#FF0000',
    warn: '#FFCC00',
    info: '#00CC00',
    http: '#FF6633',
    verbose: '#00CCFF',
    debug: '#3300FF',
    silly: '#6600FF',
    data: '#FF33CC',
    "default": '#3399FF'
  }
};
var mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 5 // Maintain up to 5 socket connections
};

var retryOptions = {
  retries: 5,
  factor: 3,
  minTimeout: 1000,
  maxTimeout: 5000,
  randomize: true
};
var bcryptOptions = {
  salt: 10
};
var jwtOptions = {
  header: {
    typ: 'JWT'
  },
  algorithm: 'RS256',
  audience: _profiles["default"].APP_AUDIENCE,
  issuer: _profiles["default"].APP_ISSUER,
  keyid: (0, _nanoid.nanoid)(30),
  jwtid: (0, _uuid.v4)()
};
var rateLimitOptions = {
  windowMs: 15 * 60 * 1000,
  // 15 minutes
  max: 1000,
  // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true,
  // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false // Disable the `X-RateLimit-*` headers
};

var cronJobOptions = {
  scheduled: true
};
var options = {
  allowList: allowList,
  corsOptions: corsOptions,
  cookieOptions: cookieOptions,
  sessionOptions: sessionOptions,
  loggerOptions: loggerOptions,
  mongooseOptions: mongooseOptions,
  retryOptions: retryOptions,
  bcryptOptions: bcryptOptions,
  jwtOptions: jwtOptions,
  rateLimitOptions: rateLimitOptions,
  cronJobOptions: cronJobOptions
};
var _default = options;
exports["default"] = _default;