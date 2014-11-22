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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhUVFBFcnJvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3pCLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNsQyxJQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7O0lBRTNCLFNBQVMsY0FBUyxLQUFLO01BQXZCLFNBQVMsR0FDRixTQURQLFNBQVMsQ0FDRCxPQUFPLEVBQUUsSUFBSSxFQUFPO1FBQVgsSUFBSSxnQkFBSixJQUFJLEdBQUcsRUFBRTtRQUN0QixVQUFVLEdBQWlCLElBQUksQ0FBL0IsVUFBVTtRQUFFLFVBQVUsR0FBSyxJQUFJLENBQW5CLFVBQVU7QUFDNUIsUUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUNoRCxRQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQ2hELFFBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0dBQ3hCOztXQU5HLFNBQVMsRUFBUyxLQUFLOztjQUF2QixTQUFTO0FBUWIsaUJBQWE7O2FBQUEsWUFBRztBQUNkLGVBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztPQUN4Qjs7QUFFRCxpQkFBYTs7YUFBQSxZQUFHO0FBQ2QsZUFBTyxJQUFJLENBQUMsVUFBVSxDQUFDO09BQ3hCOztBQUVELGFBQVM7O2FBQUEsWUFBRztBQUNWLGVBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztPQUNyQjs7OztTQWxCRyxTQUFTO0dBQVMsS0FBSzs7QUFxQjdCLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtBQUM1QixZQUFVLEVBQUUsSUFBSTtBQUNoQixZQUFVLEVBQUUsSUFBSTtBQUNoQixNQUFJLEVBQUUsV0FBVyxFQUNsQixDQUFDLENBQUM7O0FBRUgsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7QUFDbEIsUUFBTSxFQUFBLFVBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7QUFDbkMsS0FBQyxDQUFDLEdBQUcsQ0FBQzthQUFNLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU07S0FBQSxDQUFDLENBQUM7UUFDdEUsaUJBQWlCLGNBQVMsU0FBUztVQUFuQyxpQkFBaUIsWUFBakIsaUJBQWlCO0FBQVMsaUJBQVM7OztlQUFuQyxpQkFBaUIsRUFBUyxTQUFTOzthQUFuQyxpQkFBaUI7T0FBUyxTQUFTOztBQUN6QyxLQUFDLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxFQUFFLFVBQVUsRUFBVixVQUFVLEVBQUUsVUFBVSxFQUFWLFVBQVUsRUFBRSxJQUFJLEVBQUosSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4RSxXQUFPLGlCQUFpQixDQUFDO0dBQzFCLEVBQ0YsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDIiwiZmlsZSI6IkhUVFBFcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gtbmV4dCcpO1xuXG5jbGFzcyBIVFRQRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIG9wdHMgPSB7fSkge1xuICAgIGxldCB7IHN0YXR1c0NvZGUsIHN0YXR1c1RleHQgfSA9IG9wdHM7XG4gICAgdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZSB8fCB0aGlzLnN0YXR1c0NvZGU7XG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dCB8fCB0aGlzLnN0YXR1c1RleHQ7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgfVxuXG4gIGdldFN0YXR1c0NvZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzQ29kZTtcbiAgfVxuXG4gIGdldFN0YXR1c1RleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzVGV4dDtcbiAgfVxuXG4gIGdldFJlYXNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICB9XG59XG5cbl8uZXh0ZW5kKEhUVFBFcnJvci5wcm90b3R5cGUsIHtcbiAgc3RhdHVzQ29kZTogbnVsbCxcbiAgc3RhdHVzVGV4dDogbnVsbCxcbiAgbmFtZTogJ0hUVFBFcnJvcicsXG59KTtcblxuXy5leHRlbmQoSFRUUEVycm9yLCB7XG4gIGV4dGVuZChzdGF0dXNDb2RlLCBzdGF0dXNUZXh0LCBuYW1lKSB7XG4gICAgXy5kZXYoKCkgPT4gc3RhdHVzQ29kZS5zaG91bGQuYmUuYS5OdW1iZXIgJiYgc3RhdHVzVGV4dC5zaG91bGQuYmUuYS5TdHJpbmcpO1xuICAgIGNsYXNzIFNwZWNpZmljSFRUUEVycm9yIGV4dGVuZHMgSFRUUEVycm9yIHt9XG4gICAgXy5leHRlbmQoU3BlY2lmaWNIVFRQRXJyb3IucHJvdG90eXBlLCB7IHN0YXR1c0NvZGUsIHN0YXR1c1RleHQsIG5hbWUgfSk7XG4gICAgcmV0dXJuIFNwZWNpZmljSFRUUEVycm9yO1xuICB9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSFRUUEVycm9yO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9