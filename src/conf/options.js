'use strict';

import { v4 as uuidV4 } from 'uuid';
import { nanoid } from 'nanoid';
import session from 'express-session';
import profiles from './profiles';

const allowList = [
  'https://pm-tool-ui.netlify.app',
  'https://pm-tool-ui.netlify.app/*',
  'http://localhost:3500',
  'http://localhost:3500/*'
];

const corsOptions = (req, callback) => {
  let corsOptions;

  const isDomainAllowed = allowList.indexOf(req.header('Origin')) !== -1;

  if (isDomainAllowed) {
    // Enable CORS for this request
    corsOptions = { origin: true };
  } else {
    // Disable CORS for this request
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

const cookieOptions = {
  maxAge: 1000 * 60 * 15,
  httpOnly: true,
  sameSite: 'strict',
  secure: profiles.APP_ENV === 'production'
};

const memoryStore = new session.MemoryStore();

const sessionOptions = {
  secret: profiles.APP_SECRET_KEY,
  maxAge: 1000 * 60 * 15,
  resave: false,
  saveUninitialized: true,
  store: memoryStore
};

const loggerOptions = {
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
    default: '#3399FF'
  }
};

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 5 // Maintain up to 5 socket connections
};

const retryOptions = {
  retries: 5,
  factor: 3,
  minTimeout: 1000,
  maxTimeout: 5000,
  randomize: true
};

const bcryptOptions = {
  salt: 10
};

const jwtOptions = {
  header: {
    typ: 'JWT'
  },
  algorithm: 'RS256',
  audience: profiles.APP_AUDIENCE,
  issuer: profiles.APP_ISSUER,
  keyid: nanoid(30),
  jwtid: uuidV4()
};

const rateLimitOptions = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false // Disable the `X-RateLimit-*` headers
};

const cronJobOptions = {
  scheduled: true
};

const options = {
  allowList,
  corsOptions,
  cookieOptions,
  sessionOptions,
  loggerOptions,
  mongooseOptions,
  retryOptions,
  bcryptOptions,
  jwtOptions,
  rateLimitOptions,
  cronJobOptions
};

export default options;
