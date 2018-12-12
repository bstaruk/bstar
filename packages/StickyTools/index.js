// returns the current vertical offset of an element
export const getElementOffset = (el) => {
  const rect = el.getBoundingClientRect();
  return rect.top + window.pageYOffset;
};

// returns the current vertical scroll offset
export const getScrollOffset = () =>
  window.pageYOffset || document.documentElement.scrollTop;
