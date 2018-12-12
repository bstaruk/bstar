// check if pseudo element has specified content (responsive js via css)
const PseudoContent = (el, pseudo, content) => {
  if (['before', 'after'].indexOf(pseudo) === -1) return false;
  const pseudoContent = window.getComputedStyle(el, `:${pseudo}`).content;
  return pseudoContent && pseudoContent.indexOf(content) !== -1;
};

export default PseudoContent;
