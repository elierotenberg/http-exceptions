const _ = require('lodash-next');

class HTTPError extends Error {
  constructor(message, opts = {}) {
    let { code, desc } = opts;
    this.httpCode = code || this.httpCode;
    this.httpDesc = desc || this.httpDesc;
    this.message = message;
  }
}

_.extend(HTTPError.prototype, {
  httpCode: null,
  httpDesc: null,
  name: 'HTTPError',
});

_.extend(HTTPError, {
  extend(httpCode, httpDesc, name) {
    _.dev(() => code.should.be.a.Number && desc.should.be.a.String);
    class SpecificHTTPError extends HTTPError {}
    _.extend(SpecificHTTPError.prototype, { httpCode, httpDesc, name });
  },
});

module.exports = HTTPError;
