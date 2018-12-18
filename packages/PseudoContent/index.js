"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var PseudoContent = function PseudoContent(el, pseudo, content) {
  if (['before', 'after'].indexOf(pseudo) === -1) return false;
  var pseudoContent = window.getComputedStyle(el, ":".concat(pseudo)).content;
  return pseudoContent && pseudoContent.indexOf(content) !== -1;
};

var _default = PseudoContent;
exports.default = _default;
