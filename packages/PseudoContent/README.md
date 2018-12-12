# PseudoContent

Checks if an element has a pseudo element (`:before` or `:after`) with a specific content value. Useful for creating JS that has different functionalities at different CSS breakpoints, without having to hard-code them.

## Example Usage

```js
import PseudoContent from 'bstar.pseudocontent';

const ui = document.getElementById('example-element');

if (PseudoContent(ui, 'before', 'sticky')) {
  // #example-element has :before with content 'sticky'
}
```
