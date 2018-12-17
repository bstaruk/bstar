"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var getElementOffset = exports.getElementOffset = function getElementOffset(el) {
  var rect = el.getBoundingClientRect();
  return rect.top + window.pageYOffset;
};

var getScrollOffset = exports.getScrollOffset = function getScrollOffset() {
  return window.pageYOffset || document.documentElement.scrollTop;
};
