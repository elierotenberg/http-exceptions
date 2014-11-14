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

module.exports = {
  HTTPError,

  BadRequest,
  Unauthorized,
  Forbidden,
  NotFound,
  TooManyRequests,

  InternalServerError,
  ServiceUnavailable,
};
