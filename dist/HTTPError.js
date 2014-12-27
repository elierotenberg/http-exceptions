"use strict";

var _inherits = function (child, parent) {
  child.prototype = Object.create(parent && parent.prototype, {
    constructor: {
      value: child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (parent) child.__proto__ = parent;
};

require("6to5/polyfill");var Promise = (global || window).Promise = require("lodash-next").Promise;var __DEV__ = process.env.NODE_ENV !== "production";var __PROD__ = !__DEV__;var __BROWSER__ = typeof window === "object";var __NODE__ = !__BROWSER__;var _ = require("lodash-next");

var HTTPError = function HTTPError(message, opts) {
  if (opts === undefined) opts = {};
  var statusCode = opts.statusCode;
  var statusText = opts.statusText;
  this.statusCode = statusCode || this.statusCode;
  this.statusText = statusText || this.statusText;
  this.message = message;
};

_inherits(HTTPError, Error);

HTTPError.prototype.getStatusCode = function () {
  return this.statusCode;
};

HTTPError.prototype.getStatusText = function () {
  return this.statusText;
};

HTTPError.prototype.getReason = function () {
  return this.message;
};

_.extend(HTTPError.prototype, {
  statusCode: null,
  statusText: null,
  name: "HTTPError" });

_.extend(HTTPError, {
  extend: function (statusCode, statusText, name) {
    _.dev(function () {
      return statusCode.should.be.a.Number && statusText.should.be.a.String;
    });
    var SpecificHTTPError = function SpecificHTTPError() {
      if (HTTPError) {
        HTTPError.apply(this, arguments);
      }
    };

    _inherits(SpecificHTTPError, HTTPError);

    _.extend(SpecificHTTPError.prototype, { statusCode: statusCode, statusText: statusText, name: name });
    return SpecificHTTPError;
  } });

module.exports = HTTPError;