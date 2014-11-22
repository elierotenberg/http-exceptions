"use strict";

require("6to5/polyfill");
var Promise = require("bluebird");
var _ = require("lodash-next");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImY6L1VzZXJzL0VsaWUvZ2l0L3JlYWN0L2h0dHAtZXhjZXB0aW9ucy9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDekIsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2xDLElBQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNqQyxJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7OztBQUd6QyxJQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDdEUsSUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQzNFLElBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNsRSxJQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDaEUsSUFBTSxlQUFlLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLENBQUMsQ0FBQzs7O0FBR3RGLElBQU0sbUJBQW1CLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsdUJBQXVCLEVBQUUscUJBQXFCLENBQUMsQ0FBQztBQUNsRyxJQUFNLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixDQUFDLENBQUM7O0FBRTlGLFNBQVMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDekIsR0FBQyxDQUFDLEdBQUcsQ0FBQztXQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQ2pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFDN0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7R0FBQSxDQUN2QyxDQUFDO0FBQ0Y7Ozs7QUFJQSxhQUFBLFNBQVM7O0FBRVQsY0FBQSxVQUFVO0FBQ1YsZ0JBQUEsWUFBWTtBQUNaLGFBQUEsU0FBUztBQUNULFlBQUEsUUFBUTtBQUNSLG1CQUFBLGVBQWU7O0FBRWYsdUJBQUEsbUJBQW1CO0FBQ25CLHNCQUFBLGtCQUFrQjs7QUFFbEIsV0FBQSxPQUFPLEVBQ1IsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJzZ0bzUvcG9seWZpbGwnKTtcbnZhciBQcm9taXNlID0gcmVxdWlyZSgnYmx1ZWJpcmQnKTtcbmNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gtbmV4dCcpO1xyXG5jb25zdCBIVFRQRXJyb3IgPSByZXF1aXJlKCcuL0hUVFBFcnJvcicpO1xyXG5cclxuLy8gNFhYIENsaWVudCBFcnJvcnNcclxuY29uc3QgQmFkUmVxdWVzdCA9IEhUVFBFcnJvci5leHRlbmQoNDAwLCAnQmFkIFJlcXVlc3QnLCAnQmFkUmVxdWVzdCcpO1xyXG5jb25zdCBVbmF1dGhvcml6ZWQgPSBIVFRQRXJyb3IuZXh0ZW5kKDQwMSwgJ1VuYXV0aG9yaXplZCcsICdVbmF1dGhvcml6ZWQnKTtcclxuY29uc3QgRm9yYmlkZGVuID0gSFRUUEVycm9yLmV4dGVuZCg0MDMsICdGb3JiaWRkZW4nLCAnRm9yYmlkZGVuJyk7XHJcbmNvbnN0IE5vdEZvdW5kID0gSFRUUEVycm9yLmV4dGVuZCg0MDQsICdOb3QgRm91bmQnLCAnTm90Rm91bmQnKTtcclxuY29uc3QgVG9vTWFueVJlcXVlc3RzID0gSFRUUEVycm9yLmV4dGVuZCg0MjksICdUb28gTWFueSBSZXF1ZXN0cycsICdUb29NYW55UmVxdWVzdHMnKTtcclxuXHJcbi8vIDVYWCBTZXJ2ZXIgRXJyb3JzXHJcbmNvbnN0IEludGVybmFsU2VydmVyRXJyb3IgPSBIVFRQRXJyb3IuZXh0ZW5kKDUwMCwgJ0ludGVybmFsIFNlcnZlciBFcnJvcicsICdJbnRlcm5hbFNlcnZlckVycm9yJyk7XHJcbmNvbnN0IFNlcnZpY2VVbmF2YWlsYWJsZSA9IEhUVFBFcnJvci5leHRlbmQoNTAzLCAnU2VydmljZSBVbmF2YWlsYWJsZScsICdTZXJ2aWNlVW5hdmFpbGFibGUnKTtcclxuXHJcbmZ1bmN0aW9uIGZvcndhcmQocmVzLCBlcnIpIHtcclxuICBfLmRldigoKSA9PiByZXMuc2hvdWxkLmJlLmFuLk9iamVjdCAmJlxyXG4gICAgcmVzLnN0YXR1cy5zaG91bGQuYmUuYS5GdW5jdGlvbiAmJlxyXG4gICAgcmVzLmpzb24uc2hvdWxkLmJlLmEuRnVuY3Rpb24gJiZcclxuICAgIGVyci5zaG91bGQuYmUuYW4uaW5zdGFuY2VPZihIVFRQRXJyb3IpXHJcbiAgKTtcclxuICByZXMuc3RhdHVzKGVyci5nZXRTdGF0dXNDb2RlKCkpLmpzb24oeyBjb2RlOiBlcnIuZ2V0U3RhdHVzQ29kZSgpLCBlcnI6IGVyci5nZXRTdGF0dXNUZXh0KCksIHJlYXNvbjogZXJyLmdldFJlYXNvbigpIH0pO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBIVFRQRXJyb3IsXHJcblxyXG4gIEJhZFJlcXVlc3QsXHJcbiAgVW5hdXRob3JpemVkLFxyXG4gIEZvcmJpZGRlbixcclxuICBOb3RGb3VuZCxcclxuICBUb29NYW55UmVxdWVzdHMsXHJcblxyXG4gIEludGVybmFsU2VydmVyRXJyb3IsXHJcbiAgU2VydmljZVVuYXZhaWxhYmxlLFxyXG5cclxuICBmb3J3YXJkLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=