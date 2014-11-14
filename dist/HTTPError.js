"use strict";

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
    var code = opts.code;
    var desc = opts.desc;
    this.httpCode = code || this.httpCode;
    this.httpDesc = desc || this.httpDesc;
    this.message = message;
  };

  _extends(HTTPError, Error);

  return HTTPError;
})(Error);

_.extend(HTTPError.prototype, {
  httpCode: null,
  httpDesc: null,
  name: "HTTPError" });

_.extend(HTTPError, {
  extend: function (httpCode, httpDesc, name) {
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

    _.extend(SpecificHTTPError.prototype, { httpCode: httpCode, httpDesc: httpDesc, name: name });
  } });

module.exports = HTTPError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImY6L1VzZXJzL0VsaWUvZ2l0L3JlYWN0L2h0dHAtZXhjZXB0aW9ucy9zcmMvSFRUUEVycm9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3pCLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNsQyxJQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7O0lBRTNCLFNBQVMsY0FBUyxLQUFLO01BQXZCLFNBQVMsR0FDRixTQURQLFNBQVMsQ0FDRCxPQUFPLEVBQUUsSUFBSSxFQUFPO1FBQVgsSUFBSSxnQkFBSixJQUFJLEdBQUcsRUFBRTtRQUN0QixJQUFJLEdBQVcsSUFBSSxDQUFuQixJQUFJO1FBQUUsSUFBSSxHQUFLLElBQUksQ0FBYixJQUFJO0FBQ2hCLFFBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDdEMsUUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUN0QyxRQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztHQUN4Qjs7V0FORyxTQUFTLEVBQVMsS0FBSzs7U0FBdkIsU0FBUztHQUFTLEtBQUs7O0FBUzdCLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtBQUM1QixVQUFRLEVBQUUsSUFBSTtBQUNkLFVBQVEsRUFBRSxJQUFJO0FBQ2QsTUFBSSxFQUFFLFdBQVcsRUFDbEIsQ0FBQyxDQUFDOztBQUVILENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO0FBQ2xCLFFBQU0sRUFBQSxVQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0FBQy9CLEtBQUMsQ0FBQyxHQUFHLENBQUM7YUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNO0tBQUEsQ0FBQyxDQUFDO1FBQzFELGlCQUFpQixjQUFTLFNBQVM7VUFBbkMsaUJBQWlCLFlBQWpCLGlCQUFpQjtBQUFTLGlCQUFTOzs7ZUFBbkMsaUJBQWlCLEVBQVMsU0FBUzs7YUFBbkMsaUJBQWlCO09BQVMsU0FBUzs7QUFDekMsS0FBQyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsRUFBRSxRQUFRLEVBQVIsUUFBUSxFQUFFLFFBQVEsRUFBUixRQUFRLEVBQUUsSUFBSSxFQUFKLElBQUksRUFBRSxDQUFDLENBQUM7R0FDckUsRUFDRixDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMiLCJmaWxlIjoiSFRUUEVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnNnRvNS9wb2x5ZmlsbCcpO1xudmFyIFByb21pc2UgPSByZXF1aXJlKCdibHVlYmlyZCcpO1xuY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaC1uZXh0Jyk7XG5cbmNsYXNzIEhUVFBFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgb3B0cyA9IHt9KSB7XG4gICAgbGV0IHsgY29kZSwgZGVzYyB9ID0gb3B0cztcbiAgICB0aGlzLmh0dHBDb2RlID0gY29kZSB8fCB0aGlzLmh0dHBDb2RlO1xuICAgIHRoaXMuaHR0cERlc2MgPSBkZXNjIHx8IHRoaXMuaHR0cERlc2M7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgfVxufVxuXG5fLmV4dGVuZChIVFRQRXJyb3IucHJvdG90eXBlLCB7XG4gIGh0dHBDb2RlOiBudWxsLFxuICBodHRwRGVzYzogbnVsbCxcbiAgbmFtZTogJ0hUVFBFcnJvcicsXG59KTtcblxuXy5leHRlbmQoSFRUUEVycm9yLCB7XG4gIGV4dGVuZChodHRwQ29kZSwgaHR0cERlc2MsIG5hbWUpIHtcbiAgICBfLmRldigoKSA9PiBjb2RlLnNob3VsZC5iZS5hLk51bWJlciAmJiBkZXNjLnNob3VsZC5iZS5hLlN0cmluZyk7XG4gICAgY2xhc3MgU3BlY2lmaWNIVFRQRXJyb3IgZXh0ZW5kcyBIVFRQRXJyb3Ige31cbiAgICBfLmV4dGVuZChTcGVjaWZpY0hUVFBFcnJvci5wcm90b3R5cGUsIHsgaHR0cENvZGUsIGh0dHBEZXNjLCBuYW1lIH0pO1xuICB9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSFRUUEVycm9yO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9