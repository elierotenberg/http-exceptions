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

require("6to5/polyfill");
var Promise = require("bluebird");
var _ = require("lodash-next");

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
    var SpecificHTTPError = (function (HTTPError) {
      var SpecificHTTPError = function SpecificHTTPError() {
        HTTPError.apply(this, arguments);
      };

      _extends(SpecificHTTPError, HTTPError);

      return SpecificHTTPError;
    })(HTTPError);

    _.extend(SpecificHTTPError.prototype, { statusCode: statusCode, statusText: statusText, name: name });
    return SpecificHTTPError;
  } });

module.exports = HTTPError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImY6L1VzZXJzL0VsaWUvZ2l0L3JlYWN0L2h0dHAtZXhjZXB0aW9ucy9zcmMvSFRUUEVycm9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDekIsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2xDLElBQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQzs7SUFFM0IsU0FBUyxjQUFTLEtBQUs7TUFBdkIsU0FBUyxHQUNGLFNBRFAsU0FBUyxDQUNELE9BQU8sRUFBRSxJQUFJLEVBQU87UUFBWCxJQUFJLGdCQUFKLElBQUksR0FBRyxFQUFFO1FBQ3RCLFVBQVUsR0FBaUIsSUFBSSxDQUEvQixVQUFVO1FBQUUsVUFBVSxHQUFLLElBQUksQ0FBbkIsVUFBVTtBQUM1QixRQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQ2hELFFBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDaEQsUUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7R0FDeEI7O1dBTkcsU0FBUyxFQUFTLEtBQUs7O2NBQXZCLFNBQVM7QUFRYixpQkFBYTs7YUFBQSxZQUFHO0FBQ2QsZUFBTyxJQUFJLENBQUMsVUFBVSxDQUFDO09BQ3hCOztBQUVELGlCQUFhOzthQUFBLFlBQUc7QUFDZCxlQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7T0FDeEI7O0FBRUQsYUFBUzs7YUFBQSxZQUFHO0FBQ1YsZUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDO09BQ3JCOzs7O1NBbEJHLFNBQVM7R0FBUyxLQUFLOztBQXFCN0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO0FBQzVCLFlBQVUsRUFBRSxJQUFJO0FBQ2hCLFlBQVUsRUFBRSxJQUFJO0FBQ2hCLE1BQUksRUFBRSxXQUFXLEVBQ2xCLENBQUMsQ0FBQzs7QUFFSCxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtBQUNsQixRQUFNLEVBQUEsVUFBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtBQUNuQyxLQUFDLENBQUMsR0FBRyxDQUFDO2FBQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTTtLQUFBLENBQUMsQ0FBQztRQUN0RSxpQkFBaUIsY0FBUyxTQUFTO1VBQW5DLGlCQUFpQixZQUFqQixpQkFBaUI7QUFBUyxpQkFBUzs7O2VBQW5DLGlCQUFpQixFQUFTLFNBQVM7O2FBQW5DLGlCQUFpQjtPQUFTLFNBQVM7O0FBQ3pDLEtBQUMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLEVBQUUsVUFBVSxFQUFWLFVBQVUsRUFBRSxVQUFVLEVBQVYsVUFBVSxFQUFFLElBQUksRUFBSixJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hFLFdBQU8saUJBQWlCLENBQUM7R0FDMUIsRUFDRixDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMiLCJmaWxlIjoiSFRUUEVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnNnRvNS9wb2x5ZmlsbCcpO1xudmFyIFByb21pc2UgPSByZXF1aXJlKCdibHVlYmlyZCcpO1xuY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaC1uZXh0Jyk7XHJcblxyXG5jbGFzcyBIVFRQRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgb3B0cyA9IHt9KSB7XHJcbiAgICBsZXQgeyBzdGF0dXNDb2RlLCBzdGF0dXNUZXh0IH0gPSBvcHRzO1xyXG4gICAgdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZSB8fCB0aGlzLnN0YXR1c0NvZGU7XHJcbiAgICB0aGlzLnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0IHx8IHRoaXMuc3RhdHVzVGV4dDtcclxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgfVxyXG5cclxuICBnZXRTdGF0dXNDb2RlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzQ29kZTtcclxuICB9XHJcblxyXG4gIGdldFN0YXR1c1RleHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0dXNUZXh0O1xyXG4gIH1cclxuXHJcbiAgZ2V0UmVhc29uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZTtcclxuICB9XHJcbn1cclxuXHJcbl8uZXh0ZW5kKEhUVFBFcnJvci5wcm90b3R5cGUsIHtcclxuICBzdGF0dXNDb2RlOiBudWxsLFxyXG4gIHN0YXR1c1RleHQ6IG51bGwsXHJcbiAgbmFtZTogJ0hUVFBFcnJvcicsXHJcbn0pO1xyXG5cclxuXy5leHRlbmQoSFRUUEVycm9yLCB7XHJcbiAgZXh0ZW5kKHN0YXR1c0NvZGUsIHN0YXR1c1RleHQsIG5hbWUpIHtcclxuICAgIF8uZGV2KCgpID0+IHN0YXR1c0NvZGUuc2hvdWxkLmJlLmEuTnVtYmVyICYmIHN0YXR1c1RleHQuc2hvdWxkLmJlLmEuU3RyaW5nKTtcclxuICAgIGNsYXNzIFNwZWNpZmljSFRUUEVycm9yIGV4dGVuZHMgSFRUUEVycm9yIHt9XHJcbiAgICBfLmV4dGVuZChTcGVjaWZpY0hUVFBFcnJvci5wcm90b3R5cGUsIHsgc3RhdHVzQ29kZSwgc3RhdHVzVGV4dCwgbmFtZSB9KTtcclxuICAgIHJldHVybiBTcGVjaWZpY0hUVFBFcnJvcjtcclxuICB9LFxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSFRUUEVycm9yO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=