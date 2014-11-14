const _ = require('lodash-next');

class HTTPError extends Error {
  constructor(message, opts = {}) {
    let { statusCode, statusText } = opts;
    this.statusCode = code || this.statusCode;
    this.statusText = desc || this.statusText;
    this.message = message;
  }

  getStatusCode() {
    return this.statusCode;
  }

  getStatusText() {
    return this.statusText;
  }

  getReason() {
    return this.message;
  }
}

_.extend(HTTPError.prototype, {
  statusCode: null,
  statusText: null,
  name: 'HTTPError',
});

_.extend(HTTPError, {
  extend(statusCode, statusText, name) {
    _.dev(() => code.should.be.a.Number && desc.should.be.a.String);
    class SpecificHTTPError extends HTTPError {}
    _.extend(SpecificHTTPError.prototype, { statusCode, statusText, name });
  },
});

module.exports = HTTPError;
