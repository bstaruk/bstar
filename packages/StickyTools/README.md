# StickyTools
A collection of utility functions used to create sticky elements.

#### getElementOffset
Returns the current vertical offset of an element, measured in pixels from the top of the document.

#### getScrollOffset
Returns the current vertical scroll offset, measured in pixels from the top of the document.

## Example Usage
```js
import _ from 'lodash';
import { getElementOffset, getScrollOffset } from './StickyTools';

const stickyElement = document.getElementById('sticky-element');
let stickyElementOffset = getElementOffset(stickyElement);
let windowWidth = window.innerWidth;

const handleScroll = _.debounce(() => {
  const scrollOffset = getScrollOffset();
  if (scrollOffset >= stickyElementOffset) {
    stickyElement.classList.add('sticky');
  } else {
    stickyElement.classList.remove('sticky');
  }
}, 12);

const handleResize = _.debounce(() => {
  // only act on horizontal resize
  if (windowWidth !== window.innerWidth) {
    windowWidth = window.innerWidth;
    stickyElementOffset = getElementOffset(stickyElement);
  }
}, 12);

window.addEventListener('scroll', handleScroll, false);
window.addEventListener('resize', handleResize, false);
```
