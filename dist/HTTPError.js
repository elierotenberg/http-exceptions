"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var _extends = function (child, parent) {
  child.prototype = Object.create(parent.prototype, {
    constructor: {
      value: child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  child.__proto__ = parent;
};

var __NODE__ = !__BROWSER__;var __BROWSER__ = (typeof window === "object");var __PROD__ = !__DEV__;var __DEV__ = (process.env.NODE_ENV !== "production");var Promise = require("lodash-next").Promise;require("6to5/polyfill");var _ = require("lodash-next");

var HTTPError = (function (Error) {
  var HTTPError = function HTTPError(message, opts) {
    if (opts === undefined) opts = {};
    var statusCode = opts.statusCode;
    var statusText = opts.statusText;
    this.statusCode = statusCode || this.statusCode;
    this.statusText = statusText || this.statusText;
    this.message = message;
  };

  _extends(HTTPError, Error);

  _classProps(HTTPError, null, {
    getStatusCode: {
      writable: true,
      value: function () {
        return this.statusCode;
      }
    },
    getStatusText: {
      writable: true,
      value: function () {
        return this.statusText;
      }
    },
    getReason: {
      writable: true,
      value: function () {
        return this.message;
      }
    }
  });

  return HTTPError;
})(Error);

_.extend(HTTPError.prototype, {
  statusCode: null,
  statusText: null,
  name: "HTTPError" });

_.extend(HTTPError, {
  extend: function (statusCode, statusText, name) {
    _.dev(function () {
      return statusCode.should.be.a.Number && statusText.should.be.a.String;
    });
    var _SpecificHTTPError = (function (HTTPError) {
      var _SpecificHTTPError = function _SpecificHTTPError() {
        HTTPError.apply(this, arguments);
      };

      _extends(_SpecificHTTPError, HTTPError);

      return _SpecificHTTPError;
    })(HTTPError);

    _.extend(_SpecificHTTPError.prototype, { statusCode: statusCode, statusText: statusText, name: name });
    return _SpecificHTTPError;
  } });

module.exports = HTTPError;