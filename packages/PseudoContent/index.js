'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var PseudoContent = function PseudoContent(el, pseudo, content) {
  if (['before', 'after'].indexOf(pseudo) === -1) return false;
  var pseudoContent = window.getComputedStyle(el, ':' + pseudo).content;
  return pseudoContent && pseudoContent.indexOf(content) !== -1;
};

exports.default = PseudoContent;
