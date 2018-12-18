"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScrollOffset = exports.getElementOffset = void 0;

var getElementOffset = function getElementOffset(el) {
  var rect = el.getBoundingClientRect();
  return rect.top + window.pageYOffset;
};

exports.getElementOffset = getElementOffset;

var getScrollOffset = function getScrollOffset() {
  return window.pageYOffset || document.documentElement.scrollTop;
};

exports.getScrollOffset = getScrollOffset;
