const rateLimit = require(`express-rate-limit`);
const mung = require(`express-mung`);
const { attachRequestToResponse } = require(`./helpers`);
const cloneDeep = require(`lodash.clonedeep`);

// Not found
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.method} ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Error handling
const errorHandler = (error, _req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    success: false,
    message: error.message,
    error: process.env.NODE_ENV === `production` ? `🥞` : error.stack,
  });
  next();
};

const cloneRequestObject = (req, res, next) => {
  if (attachRequestToResponse(req)) {
    res.locals.requestClone = {
      body: cloneDeep(req.body),
      // params: cloneDeep(req.params),
      // query: cloneDeep(req.query),
      headers: cloneDeep(req.headers),
    };
  }
  next();
};
// eslint-disable-next-line no-unused-vars
const modifyResponseBody = (body, req, res) => {
  // Modify response here
  // Attach the request to response, if requested
  if (attachRequestToResponse(req && res.locals && res.locals.requestClone)) {
    body.request = res.locals.requestClone;
  }
  return body;
};

// TODO: Switch to a redis store in production!
// maxReq in windowMinutes will block the user!
const rateLimiter = (windowMinutes, maxReq, resHeaders) => {
  const windowMs =
    Number(windowMinutes || process.env.LIMIT_WINDOW || `15`) * 60 * 1000;
  const max = Number(maxReq || process.env.LIMIT_REQ || `100`);
  return rateLimit({
    windowMs,
    max,
    headers: resHeaders || false,
    statusCode: 400,
    handler(_req, res, next) {
      const error = new Error(`Too many requests!`);
      res.status(418);
      next(error);
    },
  });
};
module.exports = {
  notFound,
  errorHandler,
  modifyResponseBody: mung.json(modifyResponseBody, { mungError: true }),
  cloneRequestObject,
  rateLimiter,
};
