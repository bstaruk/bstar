"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var HasNull = function HasNull(obj) {
  var objKeys = Object.keys(obj);
  for (var i = 0; i < objKeys.length; i++) {
    if (obj[objKeys[i]] == null) {
      return true;
    }
  }

  return false;
};

exports.default = HasNull;