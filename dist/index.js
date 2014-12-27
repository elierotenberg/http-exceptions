"use strict";

require("6to5/polyfill");var Promise = (global || window).Promise = require("lodash-next").Promise;var __DEV__ = process.env.NODE_ENV !== "production";var __PROD__ = !__DEV__;var __BROWSER__ = typeof window === "object";var __NODE__ = !__BROWSER__;var _ = require("lodash-next");
var HTTPError = require("./HTTPError");

// 4XX Client Errors
var BadRequest = HTTPError.extend(400, "Bad Request", "BadRequest");
var Unauthorized = HTTPError.extend(401, "Unauthorized", "Unauthorized");
var Forbidden = HTTPError.extend(403, "Forbidden", "Forbidden");
var NotFound = HTTPError.extend(404, "Not Found", "NotFound");
var TooManyRequests = HTTPError.extend(429, "Too Many Requests", "TooManyRequests");

// 5XX Server Errors
var InternalServerError = HTTPError.extend(500, "Internal Server Error", "InternalServerError");
var ServiceUnavailable = HTTPError.extend(503, "Service Unavailable", "ServiceUnavailable");

function forward(res, err) {
  _.dev(function () {
    return res.should.be.an.Object && res.status.should.be.a.Function && res.json.should.be.a.Function && err.should.be.an.instanceOf(HTTPError);
  });
  res.status(err.getStatusCode()).json({ code: err.getStatusCode(), err: err.getStatusText(), reason: err.getReason() });
}

module.exports = {
  HTTPError: HTTPError,

  BadRequest: BadRequest,
  Unauthorized: Unauthorized,
  Forbidden: Forbidden,
  NotFound: NotFound,
  TooManyRequests: TooManyRequests,

  InternalServerError: InternalServerError,
  ServiceUnavailable: ServiceUnavailable,

  forward: forward };