# HasNull

Takes an object, loops through it, and returns `true` if any value in it is `null`. Useful for checking collections of required elements & attributes.

## Example Usage

```js
import HasNull from './HasNull';

const ui = {
  closeButtons: document.getElementsByClassName('button--close'),
  openButtons: document.getElementsByClassName('button--open')
};

if (!HasNull(ui)) {
  // ui has no null values
}
```
