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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhUVFBFcnJvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3pCLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNsQyxJQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7O0lBRTNCLFNBQVMsY0FBUyxLQUFLO01BQXZCLFNBQVMsR0FDRixTQURQLFNBQVMsQ0FDRCxPQUFPLEVBQUUsSUFBSSxFQUFPO1FBQVgsSUFBSSxnQkFBSixJQUFJLEdBQUcsRUFBRTtRQUN0QixVQUFVLEdBQWlCLElBQUksQ0FBL0IsVUFBVTtRQUFFLFVBQVUsR0FBSyxJQUFJLENBQW5CLFVBQVU7QUFDNUIsUUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUNoRCxRQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQ2hELFFBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0dBQ3hCOztXQU5HLFNBQVMsRUFBUyxLQUFLOztjQUF2QixTQUFTO0FBUWIsaUJBQWE7O2FBQUEsWUFBRztBQUNkLGVBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztPQUN4Qjs7QUFFRCxpQkFBYTs7YUFBQSxZQUFHO0FBQ2QsZUFBTyxJQUFJLENBQUMsVUFBVSxDQUFDO09BQ3hCOztBQUVELGFBQVM7O2FBQUEsWUFBRztBQUNWLGVBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztPQUNyQjs7OztTQWxCRyxTQUFTO0dBQVMsS0FBSzs7QUFxQjdCLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtBQUM1QixZQUFVLEVBQUUsSUFBSTtBQUNoQixZQUFVLEVBQUUsSUFBSTtBQUNoQixNQUFJLEVBQUUsV0FBVyxFQUNsQixDQUFDLENBQUM7O0FBRUgsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7QUFDbEIsUUFBTSxFQUFBLFVBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7QUFDbkMsS0FBQyxDQUFDLEdBQUcsQ0FBQzthQUFNLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU07S0FBQSxDQUFDLENBQUM7UUFDdEUsa0JBQWlCLGNBQVMsU0FBUztVQUFuQyxrQkFBaUIsWUFBakIsa0JBQWlCO0FBQVMsaUJBQVM7OztlQUFuQyxrQkFBaUIsRUFBUyxTQUFTOzthQUFuQyxrQkFBaUI7T0FBUyxTQUFTOztBQUN6QyxLQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFpQixDQUFDLFNBQVMsRUFBRSxFQUFFLFVBQVUsRUFBVixVQUFVLEVBQUUsVUFBVSxFQUFWLFVBQVUsRUFBRSxJQUFJLEVBQUosSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4RSxXQUFPLGtCQUFpQixDQUFDO0dBQzFCLEVBQ0YsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDIiwiZmlsZSI6IkhUVFBFcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gtbmV4dCcpO1xyXG5cclxuY2xhc3MgSFRUUEVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIG9wdHMgPSB7fSkge1xyXG4gICAgbGV0IHsgc3RhdHVzQ29kZSwgc3RhdHVzVGV4dCB9ID0gb3B0cztcclxuICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGUgfHwgdGhpcy5zdGF0dXNDb2RlO1xyXG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dCB8fCB0aGlzLnN0YXR1c1RleHQ7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3RhdHVzQ29kZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXR1c0NvZGU7XHJcbiAgfVxyXG5cclxuICBnZXRTdGF0dXNUZXh0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzVGV4dDtcclxuICB9XHJcblxyXG4gIGdldFJlYXNvbigpIHtcclxuICAgIHJldHVybiB0aGlzLm1lc3NhZ2U7XHJcbiAgfVxyXG59XHJcblxyXG5fLmV4dGVuZChIVFRQRXJyb3IucHJvdG90eXBlLCB7XHJcbiAgc3RhdHVzQ29kZTogbnVsbCxcclxuICBzdGF0dXNUZXh0OiBudWxsLFxyXG4gIG5hbWU6ICdIVFRQRXJyb3InLFxyXG59KTtcclxuXHJcbl8uZXh0ZW5kKEhUVFBFcnJvciwge1xyXG4gIGV4dGVuZChzdGF0dXNDb2RlLCBzdGF0dXNUZXh0LCBuYW1lKSB7XHJcbiAgICBfLmRldigoKSA9PiBzdGF0dXNDb2RlLnNob3VsZC5iZS5hLk51bWJlciAmJiBzdGF0dXNUZXh0LnNob3VsZC5iZS5hLlN0cmluZyk7XHJcbiAgICBjbGFzcyBTcGVjaWZpY0hUVFBFcnJvciBleHRlbmRzIEhUVFBFcnJvciB7fVxyXG4gICAgXy5leHRlbmQoU3BlY2lmaWNIVFRQRXJyb3IucHJvdG90eXBlLCB7IHN0YXR1c0NvZGUsIHN0YXR1c1RleHQsIG5hbWUgfSk7XHJcbiAgICByZXR1cm4gU3BlY2lmaWNIVFRQRXJyb3I7XHJcbiAgfSxcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEhUVFBFcnJvcjtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9