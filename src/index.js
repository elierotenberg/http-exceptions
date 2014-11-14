const HTTPError = require('./HTTPError');

// 4XX Client Errors
const BadRequest = HTTPError.extend(400, 'Bad Request', 'BadRequest');
const Unauthorized = HTTPError.extend(401, 'Unauthorized', 'Unauthorized');
const Forbidden = HTTPError.extend(403, 'Forbidden', 'Forbidden');
const NotFound = HTTPError.extend(404, 'Not Found', 'NotFound');
const TooManyRequests = HTTPError.extend(429, 'Too Many Requests', 'TooManyRequests');

// 5XX Server Errors
const InternalServerError = HTTPError.extend(500, 'Internal Server Error', 'InternalServerError');
const ServiceUnavailable = HTTPError.extend(503, 'Service Unavailable', 'ServiceUnavailable');

function forward(res, err) {
  _.dev(() => res.should.be.an.Object &&
    res.status.should.be.a.Function &&
    res.json.should.be.a.Function &&
    err.should.be.an.instanceOf(HTTPError)
  );
  res.status(err.getStatusCode()).json({ code: err.getStatusCode(), err: err.getStatusText(), reason: err.getReason() });
}

module.exports = {
  HTTPError,

  BadRequest,
  Unauthorized,
  Forbidden,
  NotFound,
  TooManyRequests,

  InternalServerError,
  ServiceUnavailable,

  forward,
};
