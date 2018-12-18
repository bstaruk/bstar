# HasNull

Takes an object, loops through it, and returns `true` if any value in it is `null`. Useful for checking collections of required elements & attributes.

## Example Usage

```js
import HasNull from 'bstar.hasnull';

const ui = {
  closeButtons: document.querySelector('.button--close'),
  openButtons: someElement.getAttribute('data-endpoint') || null
};

if (!HasNull(ui)) {
  // ui has no null values
}
```
