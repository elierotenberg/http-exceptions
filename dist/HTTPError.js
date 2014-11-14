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
    this.statusCode = code || this.statusCode;
    this.statusText = desc || this.statusText;
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
      return code.should.be.a.Number && desc.should.be.a.String;
    });
    var SpecificHTTPError = (function (HTTPError) {
      var SpecificHTTPError = function SpecificHTTPError() {
        HTTPError.apply(this, arguments);
      };

      _extends(SpecificHTTPError, HTTPError);

      return SpecificHTTPError;
    })(HTTPError);

    _.extend(SpecificHTTPError.prototype, { statusCode: statusCode, statusText: statusText, name: name });
  } });

module.exports = HTTPError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImY6L1VzZXJzL0VsaWUvZ2l0L3JlYWN0L2h0dHAtZXhjZXB0aW9ucy9zcmMvSFRUUEVycm9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDekIsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2xDLElBQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQzs7SUFFM0IsU0FBUyxjQUFTLEtBQUs7TUFBdkIsU0FBUyxHQUNGLFNBRFAsU0FBUyxDQUNELE9BQU8sRUFBRSxJQUFJLEVBQU87UUFBWCxJQUFJLGdCQUFKLElBQUksR0FBRyxFQUFFO1FBQ3RCLFVBQVUsR0FBaUIsSUFBSSxDQUEvQixVQUFVO1FBQUUsVUFBVSxHQUFLLElBQUksQ0FBbkIsVUFBVTtBQUM1QixRQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQzFDLFFBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDMUMsUUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7R0FDeEI7O1dBTkcsU0FBUyxFQUFTLEtBQUs7O2NBQXZCLFNBQVM7QUFRYixpQkFBYTs7YUFBQSxZQUFHO0FBQ2QsZUFBTyxJQUFJLENBQUMsVUFBVSxDQUFDO09BQ3hCOztBQUVELGlCQUFhOzthQUFBLFlBQUc7QUFDZCxlQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7T0FDeEI7O0FBRUQsYUFBUzs7YUFBQSxZQUFHO0FBQ1YsZUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDO09BQ3JCOzs7O1NBbEJHLFNBQVM7R0FBUyxLQUFLOztBQXFCN0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO0FBQzVCLFlBQVUsRUFBRSxJQUFJO0FBQ2hCLFlBQVUsRUFBRSxJQUFJO0FBQ2hCLE1BQUksRUFBRSxXQUFXLEVBQ2xCLENBQUMsQ0FBQzs7QUFFSCxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtBQUNsQixRQUFNLEVBQUEsVUFBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtBQUNuQyxLQUFDLENBQUMsR0FBRyxDQUFDO2FBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTTtLQUFBLENBQUMsQ0FBQztRQUMxRCxpQkFBaUIsY0FBUyxTQUFTO1VBQW5DLGlCQUFpQixZQUFqQixpQkFBaUI7QUFBUyxpQkFBUzs7O2VBQW5DLGlCQUFpQixFQUFTLFNBQVM7O2FBQW5DLGlCQUFpQjtPQUFTLFNBQVM7O0FBQ3pDLEtBQUMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLEVBQUUsVUFBVSxFQUFWLFVBQVUsRUFBRSxVQUFVLEVBQVYsVUFBVSxFQUFFLElBQUksRUFBSixJQUFJLEVBQUUsQ0FBQyxDQUFDO0dBQ3pFLEVBQ0YsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDIiwiZmlsZSI6IkhUVFBFcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJzZ0bzUvcG9seWZpbGwnKTtcbnZhciBQcm9taXNlID0gcmVxdWlyZSgnYmx1ZWJpcmQnKTtcbmNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gtbmV4dCcpO1xuXG5jbGFzcyBIVFRQRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIG9wdHMgPSB7fSkge1xuICAgIGxldCB7IHN0YXR1c0NvZGUsIHN0YXR1c1RleHQgfSA9IG9wdHM7XG4gICAgdGhpcy5zdGF0dXNDb2RlID0gY29kZSB8fCB0aGlzLnN0YXR1c0NvZGU7XG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gZGVzYyB8fCB0aGlzLnN0YXR1c1RleHQ7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgfVxuXG4gIGdldFN0YXR1c0NvZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzQ29kZTtcbiAgfVxuXG4gIGdldFN0YXR1c1RleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzVGV4dDtcbiAgfVxuXG4gIGdldFJlYXNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICB9XG59XG5cbl8uZXh0ZW5kKEhUVFBFcnJvci5wcm90b3R5cGUsIHtcbiAgc3RhdHVzQ29kZTogbnVsbCxcbiAgc3RhdHVzVGV4dDogbnVsbCxcbiAgbmFtZTogJ0hUVFBFcnJvcicsXG59KTtcblxuXy5leHRlbmQoSFRUUEVycm9yLCB7XG4gIGV4dGVuZChzdGF0dXNDb2RlLCBzdGF0dXNUZXh0LCBuYW1lKSB7XG4gICAgXy5kZXYoKCkgPT4gY29kZS5zaG91bGQuYmUuYS5OdW1iZXIgJiYgZGVzYy5zaG91bGQuYmUuYS5TdHJpbmcpO1xuICAgIGNsYXNzIFNwZWNpZmljSFRUUEVycm9yIGV4dGVuZHMgSFRUUEVycm9yIHt9XG4gICAgXy5leHRlbmQoU3BlY2lmaWNIVFRQRXJyb3IucHJvdG90eXBlLCB7IHN0YXR1c0NvZGUsIHN0YXR1c1RleHQsIG5hbWUgfSk7XG4gIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBIVFRQRXJyb3I7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=