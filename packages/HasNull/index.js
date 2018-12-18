"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// checks if any value in an object is null
var HasNull = function HasNull(obj) {
  var objKeys = Object.keys(obj);
  var i;

  for (i = 0; i < objKeys.length; i += 1) {
    if (obj[objKeys[i]] == null) {
      return true;
    }
  }

  return false;
};

var _default = HasNull;
exports.default = _default;
